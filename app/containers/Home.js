/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 02:56:32 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-01 01:03:26
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
import Ionicons from 'react-native-vector-icons/Ionicons'
import ViewPager from 'react-native-viewpager'
import R from '../R'
let unity = require('../img/pack.png');

class Home extends Component {
    static navigationOptions =({ navigation })=> ({
        drawerLabel: 'ホーム',
        drawerIcon:({ tintColor })=>(<Icon name="home" size={R.dimen.drawerLayoutIcon} color={tintColor}></Icon>),
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
        let BANNER_IMGS = [
            {uri:'http://unity-chan.com/images/imgPickupDownload.png'},
            {uri:'http://unity-chan.com/images/imgComicH2nochoice.jpg'},
            {uri:'http://unity-chan.com/images/imgComicH2uniyon.jpg'}]
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
            {title: 'down', show: 'always',icon:require('../img/ic_get_app_white_24dp.png')},
            //{title: 'music', show: 'always',icon:require('../img/ic_music_note_white_24dp.png')},
            {title: 'search', show: 'always',icon:require('../img/ic_search_white_24dp.png')},
        ];
          
        return (
            <View style={styles.container}>
                <StatusBar
                        backgroundColor={R.color.colorPrimaryDark}
                        barStyle="light-content" />
                <ToolbarAndroid title="" titleColor="#FFFFFF" contentInsetStart={5} style={styles.toolBar} actions={toolBarActions}>
                    <Icon name="menu" size={R.dimen.toolbarIcon} color="#FFFFFF" style={{position:'absolute',right:0}} onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}></Icon>
                    <Text style={{fontSize:20,color:'#FFFFFF'}}>Home</Text>
                </ToolbarAndroid>
                <ViewPagerAndroid style={styles.container} initialPage={0}>
                         
                        <View style={styles.container}>
                            <ScrollView onScroll={this._containerScroll}>
                                <ViewPager  style={styles.wrapper} dataSource={this.state.dataSource}  renderPage={this._renderPage} isLoop={true} autoPlay={true}></ViewPager>
                                <TouchableWithoutFeedback onPress={this.props.sub}>
                                    <Image source = {unity} ></Image>
                                </TouchableWithoutFeedback>                
                                <Button
                                    onPress={() => navigate('Details', { user: 'Lucy' })}
                                    title="Chat with Lucy" />
                                <Text onPress={this.props.add}>ddddddddddd{this.props.counter.num}</Text>
                                <Image source={{uri:'http://unity-chan.com/contents/wp-content/uploads/2014/08/enono_u4k_31.jpg'}} style={{width:360,height:1200}}></Image>
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
        var _this = this;
        return (<TouchableWithoutFeedback onPress={()=>{ToastAndroid.show(JSON.stringify(_this.props),0);}}><Image source={{uri:data.uri}}  style={{flex:1,height:150}}></Image></TouchableWithoutFeedback>)
    }
    _swiperClick(){
        ToastAndroid.show('ddd',0);
    }
    _containerScroll(data){
        console.log(data);
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
        backgroundColor: R.color.backgroundColor,
        top:0
    },
    pageStyle:{
        alignItems: 'center',
        padding: 20,
    },
    toolBar:{
        backgroundColor:R.color.colorPrimary,
        height:50,
        /*transform:[{rotate:'10deg'}]*/
        top:0
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