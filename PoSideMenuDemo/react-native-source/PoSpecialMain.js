/**
 * Created by pofabs on 16/12/12.
 * @providesModule PoSpecialMain
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class PoSpecialMain extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    特色页
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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