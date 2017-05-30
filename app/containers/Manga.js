/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 02:56:25 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-31 00:59:20
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    ToolbarAndroid,
    ListView
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import R from '../R'
import ListViewData from './Download.data'
class Manga extends Component {
    static navigationOptions =({navigation})=>({
        drawerLabel: 'よんこまマンガ',
        drawerIcon:()=>(<Icon name="book-open-variant" size={R.dimen.drawerLayoutIcon}></Icon>)
    })
    constructor(props){
        super(props)
              
    }
    render() {
        
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
           <View style={styles.container}>
               <StatusBar
                        backgroundColor={R.color.colorPrimaryDark}
                        barStyle="light-content" />
                <ToolbarAndroid title="" titleColor="#FFFFFF" contentInsetStart={5} style={styles.toolBar}>
                    <Icon name="arrow-left" size={R.dimen.toolbarIcon} color="#FFFFFF" style={{position:'absolute',right:0}} onPress={()=>{console.log(this.props.navigation);this.props.navigation.goBack();}}></Icon>
                    <Text style={{fontSize:20,color:'#FFFFFF'}}>Back</Text>
                </ToolbarAndroid>
                <Image source={{uri:'http://unity-chan.com/images/bgHeaderWebcomic.jpg'}} style={{height:50}}></Image>
                <View style={styles.mangaWrap}>
                   <Image source={{uri:'http://unity-chan.com/images/imgComicH2uniyon.jpg'}} style={styles.mangaManga}></Image>
                   <View style={styles.mangaTextWrap}>
                       <Text>最新5話を読む</Text>
                       <View style={styles.rowLayout}>

                            {
                               [
                                   'ゆによん！ Mastered Up!',
                                   'ゆによん！ Vol.30',
                                   'ゆによん！ Vol.29',
                                   'ゆによん！ Vol.28'
                               ].map((item,index)=>{
                                   return (<Text key={item} style={[index==0?styles.linkColor:{},styles.underLine,styles.mangaText]}>{item}</Text>)
                               })
                            }

                       </View>
                       <Text style={[styles.underLine,styles.linkColor,{fontSize:12}]}>はじめから読む</Text>
                       

                   </View>
                </View>
                
                

                    
                
               
           </View> 
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: R.color.backgroundColor,
    },
    toolBar:{
        backgroundColor:R.color.colorPrimary,
        height:50
    },
    underLine:{
        textDecorationLine:'underline'
    },
    linkColor:{
        color:'#db8413'
    },
    rowLayout:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingTop:0,
        paddingBottom:5
    },
    mangaManga:{
        height:120,
        borderTopLeftRadius:3,
        borderTopRightRadius:3
    },
    mangaWrap:{
        margin:10,
        backgroundColor:'#FFFFFF',
        borderRadius:3
    },
    mangaTextWrap:{
        padding:5
    },
    mangaText:{
        fontSize:10,
        marginRight:10,
        lineHeight:15
    }
    
})
export default Manga;
