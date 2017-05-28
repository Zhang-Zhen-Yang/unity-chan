/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-28 15:55:55
 */
import { TabNavigator } from "react-navigation";
import React,{Component} from 'react'
import {Text} from 'react-native'

class RecentChatsScreen extends Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
export default MainScreenNavigator