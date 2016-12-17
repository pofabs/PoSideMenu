# PoSideMenu
A react-native side menu /侧滑显示菜单栏的抽屉组件，具有缩小效果，不支持手势

you can use the PoSideMenu like this: copy the PoSideMenu.js to your project, and then import it. If you really don't known how to use it, you can download the PoSideMenuDemo to get it!

Here is the example:

import SideMenu from 'PoSideMenu';
import PoMenu from 'PoMenu';
import MainNaviBar from 'PoMainNavBar';


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
