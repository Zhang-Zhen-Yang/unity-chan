import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import R from '../R'
import AppBar from '../component/appBar'
import ListViewData from './Download.data'
class Download extends Component {
    static navigationOptions = {
        title :'下载',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="book-open-variant" color={tintColor} size={25}></Icon>)
        }
    }
    constructor( props ){
        super( props )
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
        this.state={
            dataSource: ds.cloneWithRows(ListViewData),
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <AppBar title={'download'}></AppBar>
                <ListView style={{paddingLeft:R.dimen.containerPadding,paddingRight:R.dimen.containerPadding,paddingBottom:R.dimen.containerPadding}} dataSource={this.state.dataSource} renderRow={(data)=>{return this.renderRow(data)}}>
                </ListView>
            </View>
        );
    }
    renderRow(rowData){
        return (<View style={styles.listViewGrid}>
            <Image source={{uri:rowData.uri}} style={styles.listImage}/>
            <View style={styles.rowTextWrap}>
                <Text style={styles.rowTitle}>{rowData.title}</Text>
                <Text style={styles.rowMessage} numberOfLines={2}>{rowData.message}</Text> 
            </View>            
        </View>)
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
        flex:1,
        flexDirection:'row',
        alignItems:'stretch',
        backgroundColor:'#FFFFFF',
        marginTop:R.dimen.containerPadding,
        borderRadius:3,
        overflow:'hidden',
    },
    listImage:{
        height:110,
        width:150,
        borderTopLeftRadius:3,
        borderBottomLeftRadius:3,
    },
    rowTextWrap:{
        padding:5,
        flex:1
    },
    rowTitle:{
        flex:1,
        color:'#004dac',
        fontSize:15
    },
    rowMessage:{
        fontSize:12
    }
})



export default Download;