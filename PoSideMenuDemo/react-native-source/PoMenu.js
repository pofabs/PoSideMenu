/**
 * Created by pofabs on 16/12/9.
 * @providesModule PoMenu
 */

import React,{Component} from 'react';
import {
	Text,
	View,
	Image,
	TouchableHighlight,
	StyleSheet,
	Dimensions,
	TouchableWithoutFeedback
} from 'react-native';

import PoLogin from 'PoLogin';
const { width,height } = Dimensions.get('window');

export default class PoMenu extends Component{

	constructor(props){
		super(props);
		this._jumpToMain = this._jumpToMain.bind(this);
		this._jumpToCollect = this._jumpToCollect.bind(this);
		this._jumpToFeedback = this._jumpToFeedback.bind(this);
		this._jumpToLogin = this._jumpToLogin.bind(this);
	}

	_jumpToMain(){

	}

	_jumpToCollect(){

	}

	_jumpToFeedback(){

	}

	_jumpToLogin(){
		let props = this.props;
		this.props.navigator&&this.props.navigator.push({
			component:PoLogin,
			params:{
				title:'登录',
			},
		});
	}

	render(){

		return(
			<View style = {styles.container}>
				<Image style = {styles.backImage} source = {require('./images/bg_login.png')} resizeMode="contain"/>
				<View style = {styles.menuView}>
					<TouchableWithoutFeedback onPress={this._jumpToMain}>
						<View style = {[styles.button,{marginTop:100}]}>
							<Image style = {styles.itemImage}
								   source = {require('./images/btn_main_n.png')}
								   resizeMode="contain"/>
							<Text style = {styles.text}>
								首页
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={this._jumpToCollect}>
						<View style = {[styles.button,styles.buttonMarginTop]}>
							<Image style = {styles.itemImage}
								   source = {require('./images/btn_user_collect_n.png')}
								   resizeMode="contain"/>
							<Text style = {styles.text}>
								收藏夹
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={this._jumpToFeedback}>
						<View style = {[styles.button,styles.buttonMarginTop]}>
							<Image style = {styles.itemImage}
								   source = {require('./images/btn_user_feedback_n.png')}
								   resizeMode="contain"/>
							<Text style = {styles.text}>
								我要吐槽
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.personalCenter}>
					<TouchableWithoutFeedback onPress={this._jumpToLogin}>
						<Image style={styles.noLoginImage} resizeMode="contain" source={require('./images/person_no_login.png')}/>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);

	}
}


let styles = StyleSheet.create({

	backImage:{
		position: 'absolute',
		top: 0,
		left: 0,
		width:width,
		height:height,
		backgroundColor:'transparent',
	},
	container:{
		height:height,
		width:width,
		backgroundColor:'transparent',
		justifyContent:'center',
	},
	menuView:{
		alignItems:'flex-start',
		justifyContent:'center',
		height:height*3/4,
		width:width,
		backgroundColor:'transparent',
	},
	personalCenter:{
		width:width,
		height:height*1/4,
		backgroundColor:'transparent',
		justifyContent:'center',
		alignItems:'flex-start',
	},
	text:{
		marginLeft:20,
		color:'white',
	},
	button:{
		alignItems:'center',
		justifyContent:'flex-start',
		flexDirection:'row',
		height:60,
		width:150,
		backgroundColor:'transparent',
		marginLeft:70,
	},
	buttonMarginTop:{
		marginTop:50,
	},
	itemImage:{
		width:60,
		height:60,
	},
	noLoginImage:{
		width:width*3/4,
		height:120,
		backgroundColor:'transparent',
	}

});