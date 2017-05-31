/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 23:30:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-01 01:01:24
 */
import React, { Component } from 'react';

import Home from './Home'
import Details from './Details'
import Download from './Download'
import Setting from './Setting'
import Manga from './Manga'
import MangaDetails from './MangaDetails'
import {
  StackNavigator,
  DrawerNavigator,
  DrawerItems 
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
const DrawerPage = DrawerNavigator({
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
                <Image source={unity} style={styles.headerViewAvator}>                    
                </Image>
                <View style={styles.headerViewEdit}>
                    <MaterialIcons name="edit" color="#FFFFFF"></MaterialIcons>
                </View>
                <View style={[styles.headerViewEdit,{marginLeft:20}]}>
                    <Ionicons name="ios-moon" color="#FFFFFF"></Ionicons>
                </View>               
                <View style={{paddingTop:10}}>
                    <Text style={{color:'#FFFFFF',fontSize:12}}>法蒂希</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
  });

const SimpleApp = StackNavigator({
    Stack:{screen:DrawerPage,navigationOptions:{header :null}},
    MangaDetails:{screen:MangaDetails,navigationOptions:{header :null}}
})

class App extends Component{    
    render() {
        /*var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );*/
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
        padding:20,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    headerViewAvator:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:1,
        borderColor:'#FFFFFF'
    },
    headerViewEdit:{
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:70
    }
})

export default App;