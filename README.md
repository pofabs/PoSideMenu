# PoSideMenu

 ![image](https://github.com/pofabs/PoSideMenu/blob/master/open.png)

A react-native side menu/点击按钮侧滑显示菜单栏的抽屉组件，具有缩小效果，不支持手势。PoSideMenuDemo里面由于mac暂时没装安卓开发环境，目前只实现了ios工程的demo。但两边应该都是可以通用的，并没有使用到归属特殊平台的组件。如果下载demo工程后运行不起来，请在xcode中打开appdelegate.m文件，将里面
#define kRNUrlPath @"http://192.168.0.102:8081/index.ios.bundle?platform=ios&dev=true" 这个宏里的ip地址更改为你所用mac的ip地址


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
