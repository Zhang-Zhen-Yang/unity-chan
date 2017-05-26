/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-27 01:01:14
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
let unity = require('../img/pack.png');
class App extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
           <View style={styles.container}>                
                <Text>
                    app application
                </Text>
                
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
})

export default App;