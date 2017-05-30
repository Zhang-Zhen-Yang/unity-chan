/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 02:56:25 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-31 00:17:27
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    ToolbarAndroid,
    ListView
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import R from '../R'
import ListViewData from './Download.data'
class Download extends Component {
    static navigationOptions =({navigation})=>({
        drawerLabel: 'download',
        drawerIcon:()=>(<Icon name="download" size={R.dimen.drawerLayoutIcon}></Icon>)
    })
    constructor(props){
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
        this.state = {
            dataSource: ds.cloneWithRows(ListViewData),
        };       
    }
    render() {
        let renderRow =(rowData)=> (<View style={styles.listViewGrid}>
            <Image source={{uri:rowData.uri}} style={styles.listImage}/>
            <View style={{padding:5}}>
               <Text style={styles.rowTitle}>{rowData.title}</Text>
                <Text style={styles.rowMessage} numberOfLines={2}>{rowData.message}</Text> 
            </View>
            
        </View>)
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
           <View style={styles.container}>
               <StatusBar
                        backgroundColor={R.color.colorPrimaryDark}
                        barStyle="light-content" />
                <ToolbarAndroid title="" titleColor="#FFFFFF" contentInsetStart={5} style={styles.toolBar}>
                    <Icon name="arrow-left" size={R.dimen.toolbarIcon} color="#FFFFFF" style={{position:'absolute',right:0}} onPress={()=>{console.log(this.props.navigation);this.props.navigation.goBack();}}></Icon>
                    <Text style={{fontSize:20,color:'#FFFFFF'}}>Back</Text>
                </ToolbarAndroid>
                <Image source={{uri:'http://unity-chan.com/images/bgHeaderDownload.jpg'}} style={styles.DownloadBar}></Image>

                <ListView contentContainerStyle={styles.list} dataSource={this.state.dataSource} renderRow={renderRow} >
                </ListView>      
                
               
           </View> 
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: R.color.backgroundColor,
    },
    toolBar:{
        backgroundColor:R.color.colorPrimary,
        height:50
    },
    DownloadBar:{
        height:80
    },
    list:{
        flexDirection:'row',
        justifyContent: 'space-around',        
        flexWrap: 'wrap',
    },
    listViewGrid:{
        width:160,
        alignItems:'stretch',
        backgroundColor:'#FFFFFF',
        marginTop:5,
        borderRadius:3,
        overflow:'hidden'
    },
    listImage:{
        height:100,
        borderTopLeftRadius:3,
        borderTopRightRadius:3
    },
    rowTitle:{
        color:'#004dac',
        fontSize:12
    },
    rowMessage:{
        fontSize:10
    }
})
export default Download;