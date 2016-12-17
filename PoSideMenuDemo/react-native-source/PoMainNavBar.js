/**
 * Created by chencaiwang on 16/12/13.
 * @providesModule PoMainNavBar
 */
import React,{Component,PropTypes} from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native';

const isiOS = (Platform.OS == 'ios');
const {width,height} = Dimensions.get('window');
const statusHeight = isiOS ? 20 : 0;
const navBarHeight = isiOS ? 44 : 56;
const leftBtnWidth = 40;
const specialBtnWidth = 100;
const customBtnWidth = 100;


export default class PoMainNavBar extends Component{

    constructor(props,context){
        super(props,context);
        this._specialFunction = this._specialFunction.bind(this);
        this._customFunction = this._customFunction.bind(this);
        this.state={
           showSpecial:true,
           showCustom:false,
        };
    }

    _specialFunction(){
        //如果是在函数里调用
        this.props.specialFunction();
        this.setState({
            showSpecial:true,
            showCustom:false,
        });
    }

    _customFunction(){

        this.props.customMadeFunction();
        this.setState({
            showSpecial:false,
            showCustom:true,
        });
    }

    render(){
        return(
            <View style={styles.container}>
               <View style = {styles.backView}>
                   <View style = {styles.leftView}>
                       <TouchableWithoutFeedback style={styles.leftBtn} onPress={this.props.leftMenuFunction}>
                           <Image style = {styles.leftImage} source={require('./images/left_Menu.png')}>

                           </Image>
                       </TouchableWithoutFeedback>
                   </View>
                   <View style={styles.rightView}>
                       <View style = {styles.specialView}>
                           <TouchableWithoutFeedback style={styles.specialBtn} onPress={this._specialFunction}>
                               {this.state.showSpecial?<Image style = {styles.specialImage} source={require('./images/choose_bottom.png')}>
                                    <Text style = {styles.selectStyle}>
                                        特色
                                    </Text>
                               </Image>:<Image style = {styles.specialImage}>
                                   <Text style={styles.textStyle}>
                                       特色
                                   </Text>
                               </Image>}
                           </TouchableWithoutFeedback>
                       </View>
                       <View style={styles.customeView}>
                           <TouchableWithoutFeedback style={styles.customBtn} onPress={this._customFunction}>
                               {this.state.showCustom?<Image style = {styles.specialImage} source={require('./images/choose_bottom.png')}>
                                    <Text style={styles.selectStyle}>
                                        定制
                                    </Text>
                               </Image>:
                               <Image style = {styles.specialImage}>
                                   <Text style={styles.textStyle}>
                                       定制
                                   </Text>
                               </Image>}
                           </TouchableWithoutFeedback>
                       </View>
                   </View>

               </View>
            </View>
        );
    }
}

PoMainNavBar.propTypes = {
    leftMenuFunction:PropTypes.func,
    specialFunction:PropTypes.func,
    customMadeFunction:PropTypes.func,
}

PoMainNavBar.defaultProp = {
    leftMenuFunction:()=>{},
    specialFunction:()=>{},
    customMadeFunction:()=>{},
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        top:0,
        width:width,
        justifyContent:'flex-end',
        backgroundColor:'black',
        height:statusHeight+navBarHeight,

    },
    backView:{
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row',
        width:width,
        height:navBarHeight,
    },
    leftView:{
        width:width/4,
        height:navBarHeight,
        justifyContent:'center'
    },
    leftBtn:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:statusHeight,
        width:leftBtnWidth,
        height:navBarHeight,
    },
    rightView:{
        flexDirection:'row',
        height:navBarHeight,
        width:width*3/4,flex:1
    },
    specialView:{
        height:navBarHeight,
        width:width/4,
    },
    specialBtn:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
        height:navBarHeight,
        width:specialBtnWidth,
        marginTop:statusHeight,
    },
    customeView:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        height:navBarHeight,
        width:width/4,
        marginRight:width/4,
    },
    customBtn:{

        height:navBarHeight,
        width:width/4,
        marginTop:statusHeight,
    },
    leftImage:{
        width:30,
        height:30,
        marginLeft:10,
    },
    specialImage:{
        width:100,
        height:44,
        alignItems:'center',
        justifyContent:'center',
    },
    textStyle:{
        fontSize:18,
        color:'white',
    },
    selectStyle:{
        fontSize:18,
        color:'yellow',
    },
})

