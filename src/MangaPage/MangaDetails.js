/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-13 23:29:58 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-07-04 02:05:31
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
    TouchableNativeFeedback,
    ScrollView
}from 'react-native'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import { NavigationActions } from 'react-navigation'

import { first, second, third, category} from '../data/manga'
class Details extends Component {
    constructor(props){
        super(props)
        this.state = {activeIndex:-1}       
    }
    render() {        
        const { params } = this.props.navigation.state;
        const backAction = NavigationActions.back({
        })
        const { navigate ,dispatch} = this.props.navigation;
        const manga = { first, second, third };
       
        return (
           <View style={[R.style.container,{backgroundColor:'white',alignItems:'stretch'}]}>
               <ToolbarAndroid title="Manga Details" 
                    titleColor="#FFFFFF" 
                    navIcon={require('../img/ic_arrow_back_white_24dp.png')}  
                    contentInsetStart={5} 
                    style={R.style.toolBar} 
                    onIconClicked ={()=>{dispatch(backAction)}}>
                </ToolbarAndroid>
                <ScrollView contentContainerStyle={[R.style.rowWrap,{paddingLeft:12,paddingRight:10,paddingTop:12}]}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={{uri:category[params.type].cover,resizeMode:'cover'}} style={{borderRadius:5,width:100,height:130}}></Image> 
                            <View style={{paddingLeft:8,flex:1}}>
                                <Text style={styles.mangaTitle}>{category[params.type].title}</Text>
                                <Text>AUTHOR:{category[params.type].author}</Text>
                                <View style={{flexDirection:'row'}}>
                                    {
                                        [
                                           <MaterialIcons key={0} name="star-border" color={"orange"} size={15}></MaterialIcons>,
                                           <MaterialIcons key={1} name="star-border" color={"orange"} size={15}></MaterialIcons>, 
                                           <MaterialIcons key={2} name="star-border" color={"orange"} size={15}></MaterialIcons>,
                                           <MaterialIcons key={3} name="star-border" color={"orange"} size={15}></MaterialIcons>,
                                           <MaterialIcons key={4} name="star-border" color={"orange"} size={15}></MaterialIcons>,
                                        ]
                                      
                                    }
                                    
                                </View>
                                <View style={{flex:1,alignItems:'flex-end',flexDirection:'row',justifyContent:'flex-start'}}>
                                    <View style={[styles.favoriteBtn,{flexDirection:'row'}]}>
                                        <MaterialIcons name="star-border" color={"orange"} size={15}></MaterialIcons><Text style={{color:'orange',fontWeight:'bold'}}>Favorite</Text> 
                                    </View>
                                    <TouchableNativeFeedback onPress={()=>{this._read()}}>
                                        <View style={[styles.readBtn,{backgroundColor:R.color.colorPrimary}]} >
                                            <Text style={{color:'white',fontWeight:'bold'}}>Read 第{this.props.readingMangaIndex.index>-1?this.props.readingMangaIndex.index+1  :1}话 </Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    

                                </View>
                                                              
                            </View>
                        </View>
                        


                        <View style={[R.style.rowWrap,{paddingLeft:0,paddingRight:0,marginTop:10}]}>
                            { { first, second, third}[params.type].map((item,index)=>{
                                return (
                                    <TouchableNativeFeedback onPress={()=>{this._selectedVol(item, index)}} key={item.title}>
                                        <View style={[
                                            styles.volButton,
                                            {width:(this.props.windowSize.width-64)/5,marginLeft:index%5==0?0:10},
                                            index== this.props.readingMangaIndex.index?styles.activeButton:{}
                                        ]} >
                                            <Text style={[{textAlign:'center'},index== this.props.readingMangaIndex.index?{color:'white'}:{}]} >{'vol.'+('0'+(index+1)).slice(-2)}</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                                    
                                )
                            })}
                        </View>
                        <View style={{height:20}}>

                        </View>
                        {
                            /*<Text>{JSON.stringify(this.props)} </Text>
                            <Text>{params.type}</Text>
                            <Text>{this.props.readingMangaIndex.index}</Text>
                            <Text>{JSON.stringify(this.props.windowSize)}</Text>*/
                        }
                    </View>
                </ScrollView>
                
                <View style={styles.bottom}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <TouchableNativeFeedback onPress={()=>{this._share()}}>
                            <Icon name="share-variant" size={26}></Icon>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <TouchableNativeFeedback onPress={()=>{this._bookMark()}}>
                            <Foundation name="book-bookmark" size={28}></Foundation>
                        </TouchableNativeFeedback>
                    </View>
                    
                    <View style={{flex:1,alignItems:'center'}}>
                        <TouchableNativeFeedback onPress={()=>{this._report()}}>
                            <MaterialIcons name="report" size={30}></MaterialIcons>
                        </TouchableNativeFeedback>
                    </View>
                    
                    
                </View>

                
           </View> 
        );
    }
    //选择漫画卷数
    _selectedVol(item, index){
        //ToastAndroid.show(this.props.windowSize.width,0);
        this.props.setReadingMangaIndex(index);
        this.props.navigation.navigate('MangaReading',{data:item});
    }
    _read(){
        let index = this.props.readingMangaIndex.index>-1?this.props.readingMangaIndex.index :0;
            item = { first, second, third}[this.props.navigation.state.params.type][index];
        this.props.setReadingMangaIndex(index);
        this.props.navigation.navigate('MangaReading',{data:item});
    }
    _share(){
        ToastAndroid.show('you click the share button',0);
    }
    _bookMark(){
         ToastAndroid.show('you click the _bookMark button',0);
    }
    _report(){
         ToastAndroid.show('you click the _report button',0);
    }
    componentDidMount(){
        this.props.setReadingMangaIndex(-1);
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
    },
    activeButton:{
        backgroundColor:R.color.colorPrimary,
        borderColor:R.color.colorPrimary
    },
    favoriteBtn:{
        borderWidth:1,
        borderColor:'orange',
        borderRadius:2,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:5,
        paddingRight:8,
        justifyContent:'center',
        alignItems:'center'
    },
    mangaTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#333333'
    },
    readBtn:{
        borderWidth:1,
        borderColor:R.color.colorPrimary,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:8,
        paddingRight:8,
        borderRadius:2,
        marginLeft:5
    },
    bottom:{        
        //position:'absolute',
        backgroundColor:'white',
        bottom:0,
        borderColor:'#efefef',
        borderWidth:1,
        height:45,
        flexDirection:'row',
        alignItems:'center'
    }

})
const mapStateToProps = (state,ownProps) => {
    return {
        counter:state.counter,
        windowSize:state.windowSize,
        readingMangaIndex:state.readingMangaIndex
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        sizeChange:({width,height})=>{
            dispatch({type:'CHANGE_WINDOW_SIZE',width:width,height:height});
        },
        setReadingMangaIndex:(index)=>{
            dispatch({type:'setMangaReadingIndex',index:index})
        }
    }
}
const DetailsConnect = connect(mapStateToProps,mapDispatchToProps)(Details);
export default DetailsConnect;