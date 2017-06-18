/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-10 22:17:39 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-18 23:33:06
 */

import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import R from '../R'

import { NavigationActions } from 'react-navigation'
import MangaDetails from '../component/MangaDetails'
import {
    StyleSheet,
    ToolbarAndroid,
    StatusBar,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native'


import {category} from '../data/manga'
class MangaReading extends Component{
    
    render() {
        const { navigate, dispatch,state } = this.props.navigation;
        const toolBarActions = [ ];
        const backAction = NavigationActions.back({})
        return (
            <View style={R.style.container}>
                
                <ToolbarAndroid title={state.params.data.title} 
                    titleColor="#FFFFFF" 
                    navIcon={require('../img/ic_arrow_back_white_24dp.png')}  
                    contentInsetStart={5} 
                    style={R.style.toolBar} 
                    actions={toolBarActions}
                    onIconClicked ={()=>{dispatch(backAction);}}>
                </ToolbarAndroid>
                <ScrollView contentContainerStyle={{paddingLeft:R.dimen.containerPadding,paddingRight:R.dimen.containerPadding,paddingBottom:10}}>
                    
                    <View style={[R.style.rowWrap,{justifyContent:'flex-end',marginTop:10,marginBottom:10}]}>
                        <MaterialIcons name="access-time" size={20}></MaterialIcons><Text>{state.params.data.updateTime}</Text>
                    </View>
                    
                   
                    {
                        state.params.data.content.map((item,index)=>{
                            return item.text?(<Text key={index}>{item.text}</Text>):<MangaDetails key={index} imgUrl={item.img}></MangaDetails>//(<Image key={index} source={{uri:item.img}} style={{width:300,height:1000}}></Image>)
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