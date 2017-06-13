/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-13 23:29:58 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-14 01:16:40
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ToolbarAndroid
}from 'react-native'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationActions } from 'react-navigation'

import {first} from '../data/manga'
class Details extends Component {

    constructor(props){
        super(props)        
    }
    render() {
        
        const { params } = this.props.navigation.state;
        const backAction = NavigationActions.back({
        })
        const { navigate ,dispatch} = this.props.navigation;
        return (
           <View style={[R.style.container,{}]}>
               <ToolbarAndroid title="Manga details" 
                    titleColor="#FFFFFF" 
                    navIcon={require('../img/ic_arrow_back_white_24dp.png')}  
                    contentInsetStart={5} 
                    style={R.style.toolBar} 
                    onIconClicked ={()=>{dispatch(backAction)}}>
                </ToolbarAndroid>
                <View>
                    <Image source={{uri:'http://unity-chan.com/contents/wp-content/uploads/2014/06/zunda_top1.jpg'}} style={{width:100,height:120}}></Image>    
                </View>
                <View style={[R.style.rowWrap,{paddingLeft:12,paddingRight:12}]}>
                    {first.map((item,index)=>{
                        return (<View key={item.title} style={styles.volButton}><Text>{'vol.'+('0'+(index+1)).slice(-2)}</Text></View>)
                    })}

                </View>
                
                <Text>{params.type}</Text>
           </View> 
        );
    }
}
const styles = StyleSheet.create({
    volButton:{
        backgroundColor:'white',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        marginTop:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#aaa'
    }

})
export default Details;