/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-13 23:29:58 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-13 23:49:38
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ToolbarAndroid
}from 'react-native'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationActions } from 'react-navigation'


class Details extends Component {
    constructor(props){
        super(props)        
    }
    render() {
        const { params } = this.props.navigation.state;
        const backAction = NavigationActions.back({
        })
        const { navigate ,dispatch} = this.props.navigation;
        return (
           <View style={R.style.container}>
               <ToolbarAndroid title="MANGA" 
                    titleColor="#FFFFFF" 
                    navIcon={require('../img/ic_arrow_back_white_24dp.png')}  
                    contentInsetStart={5} 
                    style={R.style.toolBar} 
                    onIconClicked ={()=>{dispatch(backAction)}}>
                </ToolbarAndroid>          
                <Text>{params.type}</Text>
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
export default Details;