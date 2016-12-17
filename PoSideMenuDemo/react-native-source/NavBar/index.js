/**
 * @providesModule EGNavBar
 *
 * 常量：
 * HEIGHT: 状态栏高度，便于外界取用
 *
 * 配置项
 *  style: {
 *    backgroundColor: color, // 背景色
 *    color: color,           // 文本色
 *  }
 *  title: string,
 *  onBackPress: func, // params: event
 *  onClosePress: func, // params: event
 *  onCancelPress: func, // params: event
 *  noBackText: bool, default: false, 只显示返回icon，不显示文本
 *  menuIcons: arrayOf(oneOfType([
 *    Image.source,
 *    shape({
 *      type: oneOf(['more', 'search', 'user']),
 *    })
 *  ])),
 *  menuTexts: arrayOf(string), // 与menuIcons只允许存在一个
 *  onMenuPress: func, // params: index, event
 *
 *  过时的属性
 *  onBackPressed，使用onBackPress代替
 *  onClosePressed，使用onClosePress代替
 *  onMenuSelected，使用onMenuPress代替
 */

const React = require('react');
const {
  Component,
  PropTypes,
} = React;

const Image = require('Image');
const Platform = require('Platform');
const TouchableOpacity = require('TouchableOpacity');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const View = require('View');

const theme = require('Theme');
var SCREEN_WIDTH = require('Dimensions').get('window').width;

const isAndroid = (Platform.OS === 'android');
const statusBarHeight = isAndroid ? 0 : 20;
const titleBarHeight = isAndroid ? 56 : 44;

const standardImage = {
  more: require('./img/menuicon.png'),
  search: require('./img/search.png'),
  share: require('./img/share.png'),
  shop: require('./img/shop.png'),
};

class TextAndIconWrap extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.5}>
        <View style={styles.textAndIconWrap}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}

class EGNavBar extends Component {
  constructor(props) {
    super(props);
    this.onMeasure = this.onMeasure.bind(this);
  }
  onMeasure({nativeEvent: {layout: {x, width}}}) {
    let _x = SCREEN_WIDTH - x - width;
    this.refs.title.setNativeProps({
      style: (x > _x ? {
        paddingLeft: 0,
        paddingRight: x - _x
      } : {
        paddingLeft: _x - x,
        paddingRight: 0
      })
    });
    this.refs.titleText.setNativeProps({
      style: {
        color: this.color,
      }
    });
  }
  render() {
    let onBackPress = this.props.onBackPress || this.props.onBackPressed;
    let onClosePress = this.props.onClosePress || this.props.onClosePressed;
    let onCancelPress = this.props.onCancelPress || this.props.onCancelPressed;
    let onMenuPress = this.props.onMenuPress || this.props.onMenuSelected;
    let {menuIcons, menuTexts, title} = this.props;
    let left, right;
    let {color, backgroundColor} = StyleSheet.flatten(this.props.style || {});
    this.color = color = color || theme.Color.Black;
    backgroundColor = backgroundColor || 'transparent';
    left = (
      <View style={[styles.left, onBackPress && styles.hasBack]}>
        {onBackPress && (
          <TextAndIconWrap onPress={onBackPress}>
            <View style={styles.leftButton}>
              <Image source={require('./img/back.png')}
                     style={[styles.icon, styles.backIcon, {
                       tintColor: color,
                     }]}
              />
              {!this.props.noBackText && (
                <Text style={[styles.buttonText, {color}]}>返回</Text>
              )}
            </View>
          </TextAndIconWrap>
        )}
        {onClosePress && (
          <TextAndIconWrap onPress={onClosePress}>
            <Text style={[styles.buttonText, {color}]}>关闭</Text>
          </TextAndIconWrap>
        )}
        {onCancelPress && (
          <TextAndIconWrap onPress={onCancelPress}>
            <Text style={[styles.buttonText, {color}]}>取消</Text>
          </TextAndIconWrap>
        )}
      </View>
    );
    right = (
      <View style={styles.right}>
        {menuIcons && menuIcons.map((icon, i) => (
          <TextAndIconWrap key={`${i}`}
                            onPress={onMenuPress.bind(this, i)}>
            <Image source={icon.type && standardImage[icon.type] ? standardImage[icon.type] : icon}
                   style={[styles.icon, {tintColor: color}]}
            />
          </TextAndIconWrap>
        ))}
        {menuTexts && menuTexts.map((text, i) => (
          <TextAndIconWrap key={`${i}`}
                            onPress={onMenuPress.bind(this, i)}>
            <Text style={[styles.buttonText, {color}]}>{text}</Text>
          </TextAndIconWrap>
        ))}
      </View>
    );
    return (
      <View style={[styles.wrap, {backgroundColor}]}>
        <View style={styles.content}>
          {left}
          {title && <View style={styles.title}
                ref="title"
                onLayout={this.onMeasure}>
            <Text style={[styles.titleText]}
                  ref="titleText"
                  numberOfLines={1}
            >{title}</Text>
          </View>}
          {right}
        </View>
      </View>
    );
  }
}

EGNavBar.propTypes = {
  title: PropTypes.string,
  onBackPressed: PropTypes.func,
  onClosePressed: PropTypes.func,
  menuIcons: PropTypes.arrayOf(PropTypes.oneOfType([
    Image.propTypes.source,
    PropTypes.shape({
      type: PropTypes.oneOf(['more', 'search', 'user']),
    })
  ])),
  onMenuSelected: PropTypes.func,
};

// Const
EGNavBar.HEIGHT = statusBarHeight + titleBarHeight;

const styles = StyleSheet.create({
  wrap: {

  },
  content: {
    alignSelf: 'stretch',
    marginTop: statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    height: titleBarHeight,
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: theme.Font.H3,
    color: theme.Color.Black,
    fontWeight: '300',
    marginRight: theme.Grid.a,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: theme.Grid.a * 2,
  },
  title: {
    flex: 1,
  },
  textAndIconWrap: {
    height: titleBarHeight,
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: theme.Font.H2,
    color: 'transparent',
    fontWeight: '300',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: theme.Grid.a,
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hasBack: {
    paddingLeft: theme.Grid.a,
  },
  icon: {
    width: theme.Grid.a * 4,
    height: theme.Grid.a * 3,
    resizeMode: 'contain',
    marginRight: theme.Grid.a,
  },
  backIcon: {
    marginRight: 0,
  },
});
module.exports = EGNavBar;
