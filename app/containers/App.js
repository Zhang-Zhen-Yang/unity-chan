/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-31 00:14:05
 */
import React, { Component } from 'react';

import Home from './Home'
import Details from './Details'
import Download from './Download'
import Setting from './Setting'
import Manga from './Manga'
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
import R from '../R'
let unity = require('../img/pack.png');
const SimpleApp = DrawerNavigator({
    Home: { screen: Home },
    Details: { screen: Details },
    Download:{screen:Download},
    Setting:{screen:Setting},
    Manga:{screen:Manga}
  /*Tab:{screen:Tab}, */
},{   
    drawerWidth:250,
    contentComponent: props => <ScrollView>
            <View style={styles.headerView}>
                <Image source={unity} style={{width:100,height:100,borderRadius:50}}>
                    
                </Image>
            </View>
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
    },
    headerView:{
        height:150,
        backgroundColor:R.color.colorPrimary,
        padding:30
    }
})

export default App;