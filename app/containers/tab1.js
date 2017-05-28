/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-28 15:51:46
 */
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

class App extends Component{
    
    render() {
        return (
            <View>
               <Text>
                    tab 1
               </Text> 
            </View>
           
           
        );
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch'
    }
})

export default tab;