/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 02:56:25 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-01 01:04:14
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
}from 'react-native'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class Setting extends Component {
    static navigationOptions =({navigation})=>({
        drawerLabel: 'settings',
        drawerIcon:({ tintColor })=>(<Icon name="settings" size={R.dimen.drawerLayoutIcon} color={ tintColor }></Icon>)
    })
    constructor(props){
        super(props)        
    }
    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>                
                <ScrollView>
                    <Image source={{uri:'http://unity-chan.com/contents/wp-content/uploads/2014/08/enono_u4k_30.jpg'}} style={{width:300,height:1000}}></Image>

                </ScrollView> 

            </View> 
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'hotpink',
    }
})
export default Setting;