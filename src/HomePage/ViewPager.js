import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback,Image, ToastAndroid } from 'react-native';
import ReactNativeViewPager from 'react-native-viewpager'
class ViewPager extends Component {
    constructor(props){
        super(props);
        let BANNER_IMGS = [
            {uri:'http://unity-chan.com/images/imgPickupDownload.png'},
            {uri:'http://unity-chan.com/images/imgComicH2nochoice.jpg'},
            {uri:'http://unity-chan.com/images/imgComicH2uniyon.jpg'}]
        let dataSource = new ReactNativeViewPager.DataSource({  
            pageHasChanged: (p1, p2) => p1 !== p2,  
        }); 
        this.state = {
           dataSource:dataSource.cloneWithPages(BANNER_IMGS),
           isRefreshing:false
        }
    }
    render() {
        return (
            <ReactNativeViewPager  style={styles.wrapper} dataSource={this.state.dataSource}  renderPage={this._renderPage} isLoop={true} autoPlay={true}>

            </ReactNativeViewPager>
        );
    }
    _renderPage(data){
        var _this = this;
        return (<TouchableWithoutFeedback onPress={()=>{ToastAndroid.show(JSON.stringify(data),0);}}>
            <Image source={{uri:data.uri}}  style={{flex:1,height:150}}></Image>
        </TouchableWithoutFeedback>)
    }
}

const styles = StyleSheet.create({
    wrapper:{
        height:150,
        width:100,
        flex:1,
        flexDirection:'row',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'stretch'
    },
})
export default ViewPager;