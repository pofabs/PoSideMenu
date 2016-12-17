/**
 * Created by chencaiwang on 16/12/15.
 * @providesModule PoLogin
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Dimensions,
    ScrollView,
    Alert,
    Image,
} from 'react-native';

import NaviBar from 'EGNavBar';
import dismissKeyboard from "dismissKeyboard";

const {width, height} = Dimensions.get('window');

export default class PoLogin extends Component {

    constructor(props) {
        super(props);
        this._login = this._login.bind(this);
        this._register = this._register.bind(this);
        this.state = {
            phoneNumber:'',
            password:'',
        }
    }

    render() {
        return (
            <View onStartShouldSetResponder = {(e) => {dismissKeyboard()}}
            >
                <Image style={{width:width,height:height}} resizeMode="contain" source = {require('./images/bg_login.png')}>
                    <NaviBar  style = {{color:'white'}} title = {this.props.title}  onBackPressed={()=>{this.props.navigator.pop()}}></NaviBar>
                    <View style = {styles.inputView}>
                        <TextInput style={styles.inputStyle}
                                   maxLength = {30}
                                   placeholder="请输入用户名"
                                   placeholderTextColor ="white"
                                   onChangeText = {(text)=>this._changeUserText(text)}
                        />
                    </View>
                    <View style = {[styles.inputView,{marginTop:40}]}>
                        <TextInput style={styles.inputStyle}
                                   maxLength = {30}
                                   placeholder="请输入密码"
                                   secureTextEntry = {true}
                                   placeholderTextColor ="white"
                                   onChangeText = {(text)=>this._changePWText(text)}
                        />
                    </View>
                    <TouchableHighlight activeOpacity={0.7}
                                        underlayColor='white'
                                        style = {styles.loginBtn}
                                        onPress = {this._login}
                    >
                        <Text>登录</Text>
                    </TouchableHighlight>

                    <TouchableHighlight activeOpacity={0.7}
                                        underlayColor='white'
                                        style = {[styles.loginBtn,{marginTop:20}]}
                                        onPress = {this._register}
                    >
                        <Text>注册</Text>
                    </TouchableHighlight>
                </Image>

            </View>
        );
    }

    _login() {
        console.log('click the login');
    }

    _register(){
        console.log('click the register');
    }

    _changeUserText(text){
        this.setState({
            phoneNumber:text,
        });
    }

    _changePWText(text){
        this.setState({
            password:text,
        });
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    inputStyle:{
        color:'white',
        fontSize:15,
        width:width-70,
        height:40,
        marginHorizontal:10,
    },
    inputView:{
        marginTop:60,
        borderColor:'white',
        borderWidth:1,
        borderRadius:5,
        width:width-50,
        height:40,
        marginHorizontal:25,
        alignItems:'center',
        justifyContent:'center',
    },
    loginBtn:{
        marginTop:100,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'white',
        borderRadius:5,
        height:40,
        width:width-50,
        marginHorizontal:25,
        alignItems:'center',
        justifyContent:'center',
    }

})