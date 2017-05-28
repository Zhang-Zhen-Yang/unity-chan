/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 02:56:32 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-28 23:43:11
 */
import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    ViewPagerAndroid,
    TouchableWithoutFeedback,
    ToastAndroid,
    ToolbarAndroid,
    ScrollView
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ViewPager from 'react-native-viewpager'
let unity = require('../img/pack.png');

class Home extends Component {
    static navigationOptions =({ navigation })=> ({
        drawerLabel: 'Home',
        drawerIcon:()=>(<Image source={{uri:'http://unity-chan.com/images/bgHeaderWebcomic.jpg'}} style={{width:600,height:50}}></Image>),
        headerTitle: 'Welcome',
       
        navigatorConfig :{
            drawerWidth: 100
        }
        
        /*,
        headerLeft:<Icon name="menu" size={20} color="white"></Icon>,
        headerRight:<Text style={{color:'#ffffff',marginRight:10}}>edit</Text>,
        headerStyle:{
            backgroundColor:'#ff2f9f',
            height:40,                
        },
        headerTintColor:'#ffffff',*/
      
    });
    constructor(props){
        super(props)
        let BANNER_IMGS = ['http://unity-chan.com/images/imgComicH2unity-4.jpg','http://unity-chan.com/images/imgComicH2nochoice.jpg','http://unity-chan.com/images/imgComicH2uniyon.jpg']
        let dataSource = new ViewPager .DataSource({  
            pageHasChanged: (p1, p2) => p1 !== p2,  
        }); 
        this.state = {
           dataSource:dataSource.cloneWithPages(BANNER_IMGS)  
        }
       
    }
    render() {        
        const { navigate } = this.props.navigation;
        const toolBarActions = [
            {title: 'setting', show: 'always'},
            {title: 'add', show: 'never'}
        ];
          
        return (
            <View style={styles.container}>
                <StatusBar
                        backgroundColor="deeppink"
                        barStyle="light-content" />
                <ToolbarAndroid title="" titleColor="#FFFFFF" contentInsetStart={5} style={styles.toolBar} actions={toolBarActions}>
                    <Icon name="menu" size={30} color="#FFFFFF" style={{position:'absolute',right:0}} onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}></Icon>
                    <Text style={{fontSize:20,color:'#FFFFFF'}}>Home</Text>
                </ToolbarAndroid>
                <ViewPagerAndroid style={styles.container} initialPage={0}>
                         
                        <View style={styles.container}>
                            <ScrollView>
                                <ViewPager  style={styles.wrapper} dataSource={this.state.dataSource}  renderPage={this._renderPage} isLoop={true} autoPlay={true}></ViewPager>
                                <TouchableWithoutFeedback onPress={this.props.sub}>
                                    <Image source = {unity} ></Image>
                                </TouchableWithoutFeedback>                
                                <Button
                                    onPress={() => navigate('Details', { user: 'Lucy' })}
                                    title="Chat with Lucy" />
                                <Text onPress={this.props.add}>ddddddddddd{this.props.counter.num}</Text>
                            </ScrollView>
                        </View>
                    
                    <View style={styles.pageStyle}>
                        
                        <Text>Second page</Text>
                    </View>
                </ViewPagerAndroid> 
            </View>          
            
         
        );
    }
    openDrawableLayout(){
        ToastAndroid.show('ddddd',0);
    }
    _renderPage(data){
        return (<Image source={{uri:data}} style={{flex:1,height:100}}></Image>)
    }
    componentDidMount(){
        ToastAndroid.show(JSON.stringify(this.props),0);
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#efefef',
    },
    pageStyle:{
        alignItems: 'center',
        padding: 20,
    },
    toolBar:{
        backgroundColor:'#ff2f9f',
        height:50
    },
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
const mapStateToProps = (state,ownProps) => {
    return {
        counter:state.counter
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        add:()=>{
           dispatch({type:'ADD'}) 
        },
        sub:()=>{
            dispatch({type:'SUB'})
        }
    }
}
const HomeConnect = connect(mapStateToProps,mapDispatchToProps)(Home);
export default HomeConnect;