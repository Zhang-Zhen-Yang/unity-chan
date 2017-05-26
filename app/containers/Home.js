import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    ViewPagerAndroid
}from 'react-native'
let unity = require('../img/pack.png');

class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
        headerRight:<Text style={{color:'#ffffff',marginRight:10}}>edit</Text>,
        headerStyle:{
            backgroundColor:'deeppink',
            height:40,                  
        },
        headerTintColor:'#ffffff'
    };
    constructor(props){
        super(props)
        
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
           <ViewPagerAndroid style={styles.container} initialPage={0}>
               <StatusBar
                    backgroundColor="#ff2f9f"
                    barStyle="light-content"
                /> 
                <View style={styles.pageStyle}>
                    <Image source = {unity}></Image>
                    <Button
                        onPress={() => navigate('Details', { user: 'Lucy' })}
                        title="Chat with Lucy"
                        />
                </View>

                <View style={styles.pageStyle}>
                    <Text>Second page</Text>
                </View>
            
                
           </ViewPagerAndroid> 
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#efefef',
    },
    pageStyle:{
        alignItems: 'center',
        padding: 20,
    }
})
export default Home;