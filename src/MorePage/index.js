import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppBar from '../component/appBar' 
class More extends Component {
    static navigationOptions = {
        title :'更多',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="more" color={tintColor} size={25}></Icon>)
        }
    }
    constructor( props ){
        super( props )
    }
    render() {
        return (
            <View>
                <AppBar title="MORE"></AppBar>
                <Text>More Page</Text>
            </View>
        );
    }
}

export default More;