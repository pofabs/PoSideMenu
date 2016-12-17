# PoSideMenu
A react-native side menu /一个点击按钮侧滑缩小主界面显示菜单栏的组件
you can use the PoSideMenu like this:
    copy the PoSideMenu.js to your project, and then import it. If you really don't known how to use it, you can download the PoSideMenuDemo to get it!

Here is the example:

/**
 * Created by pofabs on 16/12/12.
 * @providesModule PoMain
 */
import SideMenu from 'PoSideMenu';
import PoMenu from 'PoMenu';
import MainNaviBar from 'PoMainNavBar';
const {width, height} = Dimensions.get('window');

export default class PoMain extends Component {

    render() {

        const menu = <PoMenu navigator={this.props.navigator}/>;
        let content = <SpecialMain/>;
        return (
            <SideMenu sideMenu={menu} ref="sideMenu">
                <View style={styles.container}>
                    <MainNaviBar
                        leftMenuFunction={this._openMenu}
                        customMadeFunction={this._customMade}
                        specialFunction={this._special}
                    />
                    {content}
                </View>
            </SideMenu>
        );
    }
}
