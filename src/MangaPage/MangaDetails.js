/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-13 23:29:58 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-18 23:02:41
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
import { NavigationActions } from 'react-navigation'

import { first, second, third} from '../data/manga'
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
           <View style={[R.style.container,{backgroundColor:'white'}]}>
               <ToolbarAndroid title="Manga details" 
                    titleColor="#FFFFFF" 
                    navIcon={require('../img/ic_arrow_back_white_24dp.png')}  
                    contentInsetStart={5} 
                    style={R.style.toolBar} 
                    onIconClicked ={()=>{dispatch(backAction)}}>
                </ToolbarAndroid>
                <ScrollView contentContainerStyle={[R.style.rowWrap,{paddingLeft:12,paddingRight:12,paddingTop:12}]}>
                    <View>
                        <Image source={{uri:'http://unity-chan.com/contents/wp-content/uploads/2014/06/zunda_top1.jpg'}} style={{width:100,height:120}}></Image> 
                        <View style={[R.style.rowWrap,styles.favoriteBtn]}>
                            <MaterialIcons name="star-border" color={"orange"} size={15}></MaterialIcons><Text style={{color:'orange',fontWeight:'bold'}}>Favorite</Text>
                        </View>
                        <View style={[R.style.rowWrap,{paddingLeft:0,paddingRight:0}]}>
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
                        <Text>{JSON.stringify(this.props)} </Text>
                        <Text>{params.type}</Text>
                        <Text>{this.props.readingMangaIndex.index}</Text>
                        <Text>{JSON.stringify(this.props.windowSize)}</Text>
                    </View>
                </ScrollView>
                

                
           </View> 
        );
    }
    //选择漫画卷数
    _selectedVol(item, index){
        //ToastAndroid.show(this.props.windowSize.width,0);
        this.props.setReadingMangaIndex(index);
        this.props.navigation.navigate('MangaReading',{data:item});
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
        justifyContent:'center',
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