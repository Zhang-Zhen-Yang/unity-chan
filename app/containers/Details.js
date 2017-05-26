import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
}from 'react-native'

class Details extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
           <View style={styles.container}>                
                <Text>
                    Details
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