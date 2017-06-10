/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-10 22:17:39 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-10 22:33:07
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import R from '../R'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

class TabManga extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.MangaCard}>
               <Image source={{uri:this.props.imgUrl}} style={{height:110}}></Image> 
               <Text>dddddd</Text>
            </View>
           
           
        );
    }
}
const styles = StyleSheet.create({
    MangaCard:{
        alignItems:'stretch',
        backgroundColor:'white',
        marginTop:10

    }
})

export default TabManga;