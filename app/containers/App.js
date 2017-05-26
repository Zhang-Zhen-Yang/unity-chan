/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-27 01:37:36
 */
import React, { Component } from 'react';

import Home from './Home'
import Details from './Details'
import {
  StackNavigator,
} from 'react-navigation';

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
});
/*let unity = require('../img/pack.png');

class App extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
           <View style={styles.container}>                
                <Text>
                    app application ffff
                </Text>
                <Image source={unity}></Image>            
           </View> 
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'hotpink',
    }
})*/

export default SimpleApp;