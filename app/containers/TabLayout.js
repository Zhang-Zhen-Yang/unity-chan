/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-03 23:45:05
 */
import { TabNavigator } from "react-navigation";
import React,{Component} from 'react'
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './Home'
import R from '../R'
/*class RecentChatsScreen extends Component {
    static navigationOptions = {
        title :'首页',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="home-outline" color={tintColor} size={25}></Icon>)
        }
    }
  render() {
    //return <Text>List of recent chats</Text>
    return <Home />
  }
}*/

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
class Search extends Component {
    static navigationOptions = {
        title :'音乐',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="music-circle" color={tintColor} size={25}></Icon>)
        }
    }
  render() {
    return <Text>search of all contacts</Text>
  }
}

class Music extends Component {
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
  Search:{ screen:Search},
  Music:{ screen:Music}
},{
    tabBarPosition:'bottom',
    tabBarOptions:{
        backgroundColor:'#ffffff',
        style: {
            backgroundColor: '#FFFFFF',
            borderColor:'#AAAAAA',
            //borderTopWidth:1,
        },
        labelStyle:{
            fontSize:10,
            height:16,
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
        showIcon :true
    }
});
export default TabLayout