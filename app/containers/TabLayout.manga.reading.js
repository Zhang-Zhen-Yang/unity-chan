/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-10 22:17:39 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-15 23:51:18
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import R from '../R'
import { NavigationActions } from 'react-navigation'
import {
    StyleSheet,
    ToolbarAndroid,
    StatusBar,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native'

import MangaCard from './TabLayout.manga.card'
import {category} from '../data/manga'
class MangaReading extends Component{
    
    render() {
        const { navigate, dispatch,state } = this.props.navigation;
        const toolBarActions = [ ];
        const backAction = NavigationActions.back({})
        return (
            <View style={R.style.container}>
                <StatusBar
                        backgroundColor={R.color.colorPrimaryDark}
                        barStyle="light-content" />
                <ToolbarAndroid title={state.params.data.title} 
                    titleColor="#FFFFFF" 
                    navIcon={require('../img/ic_arrow_back_white_24dp.png')}  
                    contentInsetStart={5} 
                    style={R.style.toolBar} 
                    actions={toolBarActions}
                    onIconClicked ={()=>{dispatch(backAction)}}>
                </ToolbarAndroid>
                <ScrollView contentContainerStyle={{paddingLeft:R.dimen.containerPadding,paddingRight:R.dimen.containerPadding,paddingBottom:10}}>
                    <Text>
                        {JSON.stringify(state.params.data)}
                    </Text>
                    {
                        state.params.data.content.map((item,index)=>{
                            return item.text?(<Text key={index}>{item.text}</Text>):(<Image key={index} source={{uri:item.img}} style={{width:300,height:1000}}></Image>)
                        })
                    }
                </ScrollView>
           </View>
           
        );
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch'
    }
})

export default MangaReading;