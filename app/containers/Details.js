/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 02:56:25 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-31 00:21:53
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
}from 'react-native'
import R from '../R'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class Details extends Component {
    static navigationOptions =({navigation})=>({
        drawerLabel: 'Details',
        drawerIcon:()=>(<Icon name="details" size={R.dimen.drawerLayoutIcon}></Icon>)
        
    })
    constructor(props){
        super(props)        
    }
    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
           <View style={styles.container}>                
                <Text>
                    Details
                </Text>
                <Icon.Button name="menu" backgroundColor="#3b5998">
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
                </Icon.Button>
                <Text >
                   ffff
                </Text>
           </View> 
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'hotpink',
    }
})
export default Details;