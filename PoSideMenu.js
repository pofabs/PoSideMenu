/**
 * Created by pofabs on 16/12/9.
 * @providesModule PoSideMenu
 */

const React = require('react');
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    Animated,
} from 'react-native';
const Screen_Width = Dimensions.get('window').width;
const Screen_Height = Dimensions.get('window').height;

export default class PoSideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.isOpen = props.isOpen;
        const openOffsetMenuPercentage = props.openMenuOffset / Screen_Width;
        const hiddenMenuOffsetPercentage = props.hiddenMenuOffset / Screen_Width;
        this.state = {
            width: Screen_Width,
            height: Screen_Height,
            openOffsetMenuPercentage: openOffsetMenuPercentage,
            openMenuOffset: Screen_Width * openOffsetMenuPercentage,
            hiddenMenuOffsetPercentage: hiddenMenuOffsetPercentage,
            hiddenMenuOffset: Screen_Width * hiddenMenuOffsetPercentage,
            left: new Animated.Value(
                props.isOpen ? props.openMenuOffset  : props.hiddenMenuOffset
            ),
        };
    }

    componentWillReceiveProps(props) {
        if (this.isOpen !== props.isOpen) {
            this.openMenu(props.isOpen);
        }
    }

    /**
     * open or hidden the menu depend on the isOpen
     * @return Void
     */
    openMenu(isOpen) {
        const { hiddenMenuOffset, openMenuOffset, } = this.state;
        let moveOffSet = isOpen ? openMenuOffset : hiddenMenuOffset;
        //改变left的动画变换值s
        Animated.spring(
            this.state.left,
            {
                toValue: moveOffSet,
                friction: 8,
            }
        ).start();
        this.isOpen = isOpen;
        //调用this.forceUpdate 强制调用componentWillUpdate重新熏染组件
        this.forceUpdate();
    }

    /**
     * 获取主页面页面
     * @return {React.Component}
     */
    getContentView() {
        let controlLay = null;
        const { width, height, } = this.state;
        const ref = (sideMenu) => this.sideMenu = sideMenu;
        if (this.isOpen) {
            //用于处理在侧边栏显示后,点击content上的内容就返回
            controlLay = (
                <TouchableWithoutFeedback onPress={() => this.openMenu(false)}>
                    <View style={styles.controLay} />
                </TouchableWithoutFeedback>
            );
        }
        return (
            <Animated.View style={[styles.frontView,{ width, height,},this.props.animationStyle(this.state.left),]}
                           ref={ref}>
                {this.props.children}
                {controlLay}
            </Animated.View>
        );
    }

    /**
     * 加载时改变对应的state值
     */
    onLayout(e) {
        const { width, height, } = e.nativeEvent.layout;
        const openMenuOffset = width * this.state.openOffsetMenuPercentage;
        const hiddenMenuOffset = width * this.state.hiddenMenuOffsetPercentage;
        this.setState({ width, height, openMenuOffset, hiddenMenuOffset });
    }

    /**
     * 熏染整个组件
     * @return {React.Component}
     */
    render() {

        const sideMenu = <View style={styles.sideMenu}>{this.props.sideMenu}</View>;
        return (
            <View style={styles.container} onLayout={this.onLayout.bind(this)}>
                {sideMenu}
                {this.getContentView()}
            </View>
        );
    }
}

PoSideMenu.propTypes = {
    animationFunction: React.PropTypes.func,
    openMenuOffset: React.PropTypes.number,
    hiddenMenuOffset: React.PropTypes.number,
    isOpen: React.PropTypes.bool,
};

PoSideMenu.defaultProps = {
    openMenuOffset: Screen_Width * 3/4,//菜单栏显示的宽度,使用时可赋值
    hiddenMenuOffset: 0,//掩藏的宽度
    // 动画函数,沿x轴移动,同时做Y方向上的伸缩变换
    animationStyle: (value) => {
        return {
            transform: [{
                translateX: value,
            },{
                scaleY:value.interpolate({
                inputRange:  [0,60,10000],
                outputRange: [1,0.9,0.9],})
            }],
        };
    },
    isOpen: false,
};



const absoluteLay = {
    top: 0,
    left: 0,
    position: 'absolute',
    bottom: 0,
    right: 0,
};

let styles = StyleSheet.create({

    container: {
        ...absoluteLay,
        justifyContent: 'center',
    },
    sideMenu: {
        ...absoluteLay,
    },
    frontView: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'transparent',
    },
    controLay: {
        ...absoluteLay,
        backgroundColor: 'transparent',
    },
});

