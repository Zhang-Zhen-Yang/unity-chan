import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppBar from '../component/appBar' 
class Music extends Component {
    static navigationOptions = {
        title :'首页',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="music-circle" color={tintColor} size={25}></Icon>)
        }
    }
    constructor( props ){
        super( props )
    }
    render() {
        return (
            <View>
                <AppBar title="MUSIC"></AppBar>
                <Text>Music Page</Text>
            </View>
        );
    }
}

export default Music;