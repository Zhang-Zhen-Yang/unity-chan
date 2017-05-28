/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-28 22:27:46
 */
import React, { Component } from 'react';

import Home from './Home'
import Details from './Details'
import Tab from './Tab'
import {
  StackNavigator,
  DrawerNavigator,
  DrawerItems 
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    StyleSheet,
    View,
    Text,
    Image,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    ScrollView
} from 'react-native'

const SimpleApp = DrawerNavigator({
    Home: { screen: Home },
    Details: { screen: Details },
  /*Tab:{screen:Tab}, */
},{   
    drawerWidth:250,
    contentComponent: props => <ScrollView>
            <Text>ddddddddddddddddddd</Text>
            <DrawerItems {...props} />
        </ScrollView>
  });

class App extends Component{
    
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );

        return (                          
            <SimpleApp></SimpleApp>
         
        );
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch'
    },
    toolBar:{
        height:40 ,
        backgroundColor:'#ff2f9f',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})

export default App;