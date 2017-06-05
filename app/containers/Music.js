/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-05 23:39:11 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-05 23:52:10
 */


import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Video  from 'react-native-video'
class Music extends Component {
    static navigationOptions = {
            title :'音乐',
            tabBarIcon :({focused, tintColor})=>{
                return (<Icon name="music-circle" color={tintColor} size={25}></Icon>)
            }
        }
    render() {
        return (<View style={Styles.container}>
        <Video 
                ref={(ref) => {
                    this.player = ref
                }}
                source={{uri: "http://unity-chan.com/event/c89/movie/c89_teaser_image.mp4"}}
                style={Styles.backgroundVideo}
               
            ></Video>
        </View>)
    }
    componentDidMount(){    
        this.player.presentFullscreenPlayer()
    
    }
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        top:0
    },
    backgroundVideo:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})



export default Music