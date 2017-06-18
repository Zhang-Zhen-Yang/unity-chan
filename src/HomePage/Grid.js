import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Button } from 'react-native';
import { connect } from 'react-redux'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeCard from '../component/HomeCard'
let unity = require('../img/pack.png');
class Grid extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.contentWrap}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'stretch'}}>
                    
                    <Image source={{uri:'http://unity-chan.com/images/bgHeaderCogencityJournal.jpg'}} style={{flex:1,height:50,justifyContent:'center',alignItems:'center',borderRadius:3}} >
                    </Image>
                    <View style={{width:10}}>
                        
                    </View>
                    <Image source={require('../img/bgAboutUnityChan.png')} resizeMode="contain" style={{backgroundColor:R.color.colorPrimary,flex:1,height:50,justifyContent:'center',alignItems:'center',borderRadius:3}}>
                        
                    </Image>                              

                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:5,paddingBottom:5}}>
                    <Icon name="hackernews" color={R.color.colorPrimary} size={25}></Icon><Text>news</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'stretch',paddingTop:5,paddingBottom:5}}>
                    <HomeCard uri="http://unity-chan.com/contents/wp-content/uploads/2017/03/DSC_0654-1.jpg" title="ユニティちゃん痛車！" date="Wed, 29 Mar 2017"></HomeCard>
                    <View style={{width:10}}>

                    </View>
                    <HomeCard uri="http://unity-chan.com/contents/wp-content/uploads/2016/12/newyear.jpg" title="A Happy New Year!" date="Sun, 1 Jan 2017"></HomeCard>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'stretch',paddingTop:5,paddingBottom:5}}>
                    <HomeCard uri="http://unity-chan.com/contents/wp-content/uploads/2016/09/unitychantoonshader.png" title="ユニティちゃんトゥーンシェーダーを開発したよ〜！…" date="Tue, 6 Sep 2016"></HomeCard>
                    <View style={{width:10}}>

                    </View>
                    <HomeCard uri="http://unity-chan.com/contents/wp-content/uploads/2016/08/cd_jacket.png" title="C90 Present Day, Present Time. 収録不備楽曲につきまし…" date="Sat, 27 Aug 2016"></HomeCard>

                </View>

                <Text>{this.props.windowSize.height}</Text>

                <TouchableWithoutFeedback onPress={this.props.sub}>
                    <Image source = {unity} ></Image>
                </TouchableWithoutFeedback>                
                <Button
                    onPress={() => navigate('Details', { user: 'Lucy' })}
                    title="Chat with Lucy" />
                <Text onPress={this.props.add}>ddddddddddd{this.props.counter.num}</Text>
                <Image source={{uri:'http://unity-chan.com/contents/wp-content/uploads/2014/08/enono_u4k_31.jpg'}} style={{width:this.props.windowSize.width-22,height:1200}}></Image>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    contentWrap:{
        padding:12
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
const GridConnect = connect(mapStateToProps,mapDispatchToProps)(Grid);
export default GridConnect;
