/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 02:56:25 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-31 00:18:13
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
}from 'react-native'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class Setting extends Component {
    static navigationOptions =({navigation})=>({
        drawerLabel: 'settings',
        drawerIcon:()=>(<Icon name="settings" size={R.dimen.drawerLayoutIcon}></Icon>)
    })
    constructor(props){
        super(props)        
    }
    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
           <View style={styles.container}>                
                <Text>
                    Setting
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
export default Setting;