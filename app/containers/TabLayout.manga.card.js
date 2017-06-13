/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-10 22:17:39 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-14 01:51:01
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import R from '../R'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableNativeFeedback,
    ToastAndroid,
    Button
} from 'react-native'

class TabManga extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.MangaCard}>
                <TouchableNativeFeedback onPress={()=>{this._navigateToDetails(this.props.type)}}>
                    <Image source={{uri:this.props.imgUrl}} style={{height:110}}></Image> 
                </TouchableNativeFeedback>
            
                    <View style={[R.style.rowWrap,{padding:10}]}>
                        <View style={{flex:1}}>
                            <Text style={{color:'#333',fontWeight:'bold'}}>{this.props.category.title}</Text>
                            <Text>{this.props.category.time}</Text>
                        </View>
                        <View>
                            <View style={R.style.btnWhite}>
                                <Text>{this.props.category.right}</Text>
                            </View>
                            
                        </View>
                    </View>                 
            
               
            </View>
           
           
        );
    }
    _navigateToDetails(type){
        this.props.navigate('Details',{type:type});
        //ToastAndroid.show('dddd',0);
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