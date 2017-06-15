/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-13 23:29:58 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-15 23:35:26
 */


import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ToolbarAndroid,
    Button,
    ToastAndroid,
    TouchableNativeFeedback
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
           <View style={[R.style.container,{backgroundColor:'white'}]}>
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
                <Text>{JSON.stringify(this.props)} </Text>
                <View style={[R.style.rowWrap,{paddingLeft:12,paddingRight:12}]}>
                    {first.map((item,index)=>{
                        return (
                            <TouchableNativeFeedback onPress={()=>{this._selectedVol(index)}} key={item.title}>
                                <View style={[styles.volButton,{width:(this.props.windowSize.width-64)/5,marginLeft:index%5==0?0:10}]} >
                                    <Text style={{textAlign:'center'}}>{'vol.'+('0'+(index+1)).slice(-2)}</Text>
                                </View>
                            </TouchableNativeFeedback>
                                               
                        )
                    })}

                </View>
                
                <Text>{params.type}</Text>
           </View> 
        );
    }
    //选择漫画卷数
    _selectedVol(index){
        //ToastAndroid.show(this.props.windowSize.width,0);
        this.props.navigation.navigate('MangaReading',{data:first[index]});
    }
}
const styles = StyleSheet.create({
    volButton:{
        backgroundColor:'white',
        marginTop:10,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:2,
        paddingTop:8,
        paddingBottom:8
    }

})
const mapStateToProps = (state,ownProps) => {
    return {
        counter:state.counter,
        windowSize:state.windowSize
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        sizeChange:({width,height})=>{
            dispatch({type:'CHANGE_WINDOW_SIZE',width:width,height:height});
        }
    }
}
const DetailsConnect = connect(mapStateToProps,mapDispatchToProps)(Details);
export default DetailsConnect;