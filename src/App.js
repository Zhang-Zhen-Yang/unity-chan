/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-18 23:09:49
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { StackNavigator,TabNavigator } from 'react-navigation';
import R from './R'

import HomePage from './HomePage'
import MangaPage from './MangaPage'
import MusicPage from './MusicPage'
import MorePage from './MorePage'

const Tabs = TabNavigator({
    HomePage:{screen:HomePage},
    MangaPage:{screen:MangaPage},
    MusicPage:{screen:MusicPage},
    MorePage:{screen:MorePage}
},{
    tabBarPosition:'bottom',
    swipeEnabled :false,
    lazy:true,
    animationEnabled:false,
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
})


import MangaDetails from './MangaPage/MangaDetails'
import MangaReading from './MangaPage/MangaReading'
const Stacks = StackNavigator({
    Tabs:{screen:Tabs,navigationOptions:{header :null}},
    MangaDetails:{screen:MangaDetails,navigationOptions:{header :null}},
    MangaReading:{screen:MangaReading,navigationOptions:{header :null}}

})
class App extends Component{    
    render() {       
        return (
            <View style={R.style.container}>
                <StatusBar
                backgroundColor={R.color.colorPrimaryDark}
                barStyle="light-content" />
                <Stacks></Stacks> 
            </View>               
             
        );
    }
}
const styles = StyleSheet.create({

})

export default App;