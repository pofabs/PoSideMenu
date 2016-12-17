/**
 * Created by pofabs on 16/12/12.
 * @providesModule PoMain
 */
import SideMenu from 'PoSideMenu';
import React, { Component } from 'react';
import PoMenu from 'PoMenu';
import MainNaviBar from 'PoMainNavBar';
import CustomMadeMain from 'PoCustomMadeMain';
import SpecialMain from 'PoSpecialMain';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class PoMain extends Component {
    constructor(props){
        super(props);
        this._openMenu = this._openMenu.bind(this);
        this._customMade = this._customMade.bind(this);
        this._special = this._special.bind(this);
        this.state = {
            showSpecial:true,
        };
    }

    _openMenu(){
        this.refs.sideMenu.openMenu(true);
    }

    _customMade(){
        this.setState({
            showSpecial:false,
        });
    }

    _special(){
        this.setState({
            showSpecial:true,
        });
    }

    render() {

        const menu = <PoMenu navigator={this.props.navigator}/>;
        let content = this.state.showSpecial?<SpecialMain/>:<CustomMadeMain/>;
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonStyle:{
        alignSelf:'center',
        justifyContent:'center',
        borderColor:'#C71A1F',
        backgroundColor:'#C71A1F',
        borderWidth:1,
        borderRadius:5,
        height:40,
        width:width-2*30,
    }
});