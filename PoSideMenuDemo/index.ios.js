/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    Navigator,
} from 'react-native';
import PoMain from 'PoMain';

export default class PoSideMenuDemo extends Component {
    render() {

        return (
            <Navigator
                initialRoute={{ name: 'Travel Cat', component: PoMain }}
                configureScene={(route) => {
                return Navigator.SceneConfigs.FloatFromBottom;
            }}
                renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
            }}
            />
        );
    }
}


AppRegistry.registerComponent('PoSideMenuDemo', () => PoSideMenuDemo);
