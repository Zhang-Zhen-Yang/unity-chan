/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-05 23:39:11 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-06 03:01:38
 */


import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    ToastAndroid,
    Button,
    Image
} from 'react-native'
import {connect} from 'react-redux'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import Video  from 'react-native-video'
import MediaPlayer from "react-native-media-player";
class MusicContainer extends Component {
    static navigationOptions = {
            title :'音乐',
            tabBarIcon :({focused, tintColor})=>{
                return (<Icon name="music-circle" color={tintColor} size={25}></Icon>)
            }
        }
    constructor(props){
        super(props);
        this.state={
            paused:false,
            url:''
        }
    }
    

    render() {
        
    
        return (<View style={Styles.container}>
            {/*<Video 
                ref={(ref) => {
                    this.player = ref
                }}
                source={{uri: this.state.url,mainVer: Math.round(Math.random()*1000), patchVer: Math.round(Math.random()*1000) }}
                style={[Styles.backgroundVideo]}
                paused={this.state.paused}
                resizeMode="contain"
                         
            ></Video>*/}
            <Button title={this.state.paused?'play':'pause'} onPress={()=>{this._toggleMusic()}}></Button>
            <Button onPress={()=>{this.handlePushVideo()}} title="load video"></Button>
            <Image source={require('../img/pack.png')}></Image>
        </View>)
    }
    _toggleMusic(){
        this.setState({
            paused:!this.state.paused
        })
    }
     async handlePushVideo(){
        try{
            
            let containerId = await MediaPlayer.pushVideo('http://192.168.1.105/html/web/c89_teaser_image.mp4', MediaPlayer.PUSH_WAY.AtLast);
            console.log("Video Container ID:" + containerId);
        
            
        }
        catch(err){
            showErrorMessage(err);
        }
    };
    componentDidMount(){    
        
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
        add:()=>{
           dispatch({type:'ADD'}) 
        },
        sub:()=>{
            dispatch({type:'SUB'})
        },
        sizeChange:({width,height})=>{
            dispatch({type:'CHANGE_WINDOW_SIZE',width:width,height:height});
        }
    }
}
const Music = connect(mapStateToProps,mapDispatchToProps)(MusicContainer) 

export default Music