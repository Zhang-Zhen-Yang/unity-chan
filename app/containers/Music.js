/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-05 23:39:11 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-10 22:12:56
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
           
            
            <Image source={require('../img/pack.png')}></Image>
        </View>)
    }
    
     
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