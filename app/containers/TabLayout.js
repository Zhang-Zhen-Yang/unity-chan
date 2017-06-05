/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-05 23:43:36
 */
import { TabNavigator } from "react-navigation";
import React,{Component} from 'react'
import {Text,View,ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import R from '../R'

import Home from './Home'
import Music from './Music'

class AllContactsScreen extends Component {
    static navigationOptions = {
        title :'漫画',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="book-open-variant" color={tintColor} size={25}></Icon>)
        }
    }
  render() {
    return <Text>List of all contacts</Text>
  }
}


class More extends Component {
    static navigationOptions = {
        title :'更多',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="more" color={tintColor} size={25}></Icon>)
        }
    }
  render() {
    return <Text>Music of all contacts</Text>
  }
}

const TabLayout = TabNavigator({
  Home: { screen: Home },
  All: { screen: AllContactsScreen }, 
  Music:{ screen:Music},
  More:{ screen:More},
},{
    tabBarPosition:'bottom',
    swipeEnabled :false,
    tabBarOptions:{
        backgroundColor:'#ffffff',
        style: {
            backgroundColor: '#FFFFFF',
            borderColor:'#dddddd',
            borderTopWidth:1,
        },
        labelStyle:{
            fontSize:10,
            height:12,
            padding:0,
            margin:0
        },
        tabStyle:{
            height:50
        },
        activeTintColor :R.color.colorPrimary,
        inactiveTintColor:'#aaa',
        indicatorStyle :{
            height:0
        },
        showIcon :true,
        
    }
});
export default TabLayout