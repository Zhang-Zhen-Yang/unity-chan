/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-31 21:20:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-31 23:04:39
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    ActivityIndicator,
    ToastAndroid
}from 'react-native'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class MangaDetails extends Component {
    static navigationOptions =({navigation})=>({
        drawerLabel: 'settings',
        drawerIcon:()=>(<Icon name="settings" size={R.dimen.drawerLayoutIcon}></Icon>)
    })
    constructor(props){
        super(props)
        this.state={
            indicatorAnimating:true,
            imgHeight:0,
            imgWidth:0,
            imgUrl:this.props.imgUrl
        }   
    }
    render() {
        let indicator = this.state.indicatorAnimating?(<ActivityIndicator
            animating={this.state.indicatorAnimating}
            size="large"
            color={R.color.indicatorColor} style={{padding:8}}>
        </ActivityIndicator>):null;
        return (           
            <View style={styles.container}> 
                <ScrollView>
                    {indicator}
                    <Image source={{uri:this.state.imgUrl}} style={{height:this.state.imgHeight/this.state.imgWidth*Dimensions.get('window').width}} />  
                      
                </ScrollView>
            </View> 
        );
    }
    componentDidMount(){
        
        setTimeout(()=>{
            Image.getSize(this.state.imgUrl,(width,height)=>{
                this.setState({imgHeight:height,imgWidth:width,indicatorAnimating:false});
            },()=>{
                ToastAndroid.show('network error',0);
                this.setState({indicatorAnimating:false});
            });
        },1000)
        

    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: R.color.backgroundColor,
    },
    screen:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
    
})
export default MangaDetails;