/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-31 21:20:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-02 01:08:21
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image 
}from 'react-native'


class HomeCard extends Component {
    
    constructor(props){
        super(props)
           
    }
    render() {
       
        return (           
            <View style={{flex:1,backgroundColor:'white'}}>
                <Image source={{uri:this.props.uri}} style={{height:120}}> 
                </Image>
                <Text style={{paddingLeft:5,paddingTop:2,color:'black'}} numberOfLines ={1}>{this.props.title}</Text>
                <Text style={{paddingLeft:5,paddingBottom:5}}>{this.props.date}</Text>
            </View> 
        );
    }
    
}
const styles = StyleSheet.create({
    
    
})
export default HomeCard;