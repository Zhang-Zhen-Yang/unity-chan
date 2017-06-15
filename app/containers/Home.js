/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 02:56:32 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-15 23:35:45
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
    ScrollView,
    Dimensions,
    RefreshControl
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ViewPager from 'react-native-viewpager'
import R from '../R'
let unity = require('../img/pack.png');
import HomeCard from '../components/HomeCard'
import TabLayout  from './TabLayout'

class Home extends Component {
    /*static navigationOptions =({ navigation })=> ({
        drawerLabel: 'ホーム',
        drawerIcon:({ tintColor })=>(<Icon name="home" size={R.dimen.drawerLayoutIcon} color={tintColor}></Icon>),
        headerTitle: 'Welcome',
       
        navigatorConfig :{
            drawerWidth: 100
        }
    });*/
    static navigationOptions = {
        title :'首页',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="home-outline" color={tintColor} size={25}></Icon>)
        }
    }
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
           dataSource:dataSource.cloneWithPages(BANNER_IMGS),
           isRefreshing:false
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
            <View style={R.style.container}>
                <StatusBar
                        backgroundColor={R.color.colorPrimaryDark}
                        barStyle="light-content" />
                <ToolbarAndroid title="HOME" 
                    titleColor="#FFFFFF" 
                    navIcon={require('../img/ic_menu_white_24dp.png')}  
                    contentInsetStart={5} 
                    style={R.style.toolBar} 
                    actions={toolBarActions}
                    onIconClicked ={()=>{this.props.navigation.navigate('DrawerOpen');}}>
                </ToolbarAndroid>                
                         
                <View style={R.style.container}>
                    <ScrollView 
                        onScroll={this._containerScroll} 
                        onContentSizeChange={()=>{this._contentSizeChange()}}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={()=>{this._onRefresh()}}
                                tintColor={R.color.colorPrimary}
                                title="Loading..."
                                titleColor="#00ff00"
                                colors={[R.color.colorPrimary]}
                                progressBackgroundColor="#ffffff"
                            />
                        }>
                        <ViewPager  style={styles.wrapper} dataSource={this.state.dataSource}  renderPage={this._renderPage} isLoop={true} autoPlay={true}></ViewPager>

                        <View style={styles.contentWrap}>

                            <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'stretch'}}>
                                
                                <Image source={{uri:'http://unity-chan.com/images/bgHeaderCogencityJournal.jpg'}} style={{flex:1,height:50,justifyContent:'center',alignItems:'center',borderRadius:3}} >
                                </Image>
                                <View style={{width:10}}>
                                    
                                </View>
                                <Image source={require('../img/bgAboutUnityChan.png')} resizeMode="contain" style={{backgroundColor:R.color.colorPrimary,flex:1,height:50,justifyContent:'center',alignItems:'center',borderRadius:3}}>
                                    
                                </Image>                              

                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',paddingTop:5,paddingBottom:5}}>
                                <Icon name="hackernews" color={R.color.colorPrimary} size={25}></Icon><Text>news</Text>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'stretch',paddingTop:5,paddingBottom:5}}>
                                <HomeCard uri="http://unity-chan.com/contents/wp-content/uploads/2017/03/DSC_0654-1.jpg" title="ユニティちゃん痛車！" date="Wed, 29 Mar 2017"></HomeCard>
                                <View style={{width:10}}>

                                </View>
                                <HomeCard uri="http://unity-chan.com/contents/wp-content/uploads/2016/12/newyear.jpg" title="A Happy New Year!" date="Sun, 1 Jan 2017"></HomeCard>

                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'stretch',paddingTop:5,paddingBottom:5}}>
                                <HomeCard uri="http://unity-chan.com/contents/wp-content/uploads/2016/09/unitychantoonshader.png" title="ユニティちゃんトゥーンシェーダーを開発したよ〜！…" date="Tue, 6 Sep 2016"></HomeCard>
                                <View style={{width:10}}>

                                </View>
                                <HomeCard uri="http://unity-chan.com/contents/wp-content/uploads/2016/08/cd_jacket.png" title="C90 Present Day, Present Time. 収録不備楽曲につきまし…" date="Sat, 27 Aug 2016"></HomeCard>

                            </View>

                            <Text>{this.props.windowSize.height}</Text>

                            <TouchableWithoutFeedback onPress={this.props.sub}>
                                <Image source = {unity} ></Image>
                            </TouchableWithoutFeedback>                
                            <Button
                                onPress={() => navigate('Details', { user: 'Lucy' })}
                                title="Chat with Lucy" />
                            <Text onPress={this.props.add}>ddddddddddd{this.props.counter.num}</Text>
                            <Image source={{uri:'http://unity-chan.com/contents/wp-content/uploads/2014/08/enono_u4k_31.jpg'}} style={{width:this.props.windowSize.width-22,height:1200}}></Image>



                        </View>
                        
                    </ScrollView>
                </View>
                
            </View>          
            
         
        );
    }
    openDrawableLayout(){
        ToastAndroid.show('ddddd',0);
    }
    _renderPage(data){
        var _this = this;
        return (<TouchableWithoutFeedback onPress={()=>{ToastAndroid.show(JSON.stringify(data),0);}}>
            <Image source={{uri:data.uri}}  style={{flex:1,height:150}}></Image>
        </TouchableWithoutFeedback>)
    }
    _swiperClick(){
        ToastAndroid.show('ddd',0);
    }
    _containerScroll(data){
        //console.log(data);
    }
    //当页面布局改变时
    _contentSizeChange(){
        ToastAndroid.show('contentSizeChange',0);
        this.setState({windowWidth:Dimensions.get('window').width});
        this.props.sizeChange(Dimensions.get('window'));
    }
    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 5000);
    }
    componentDidMount(){
        ToastAndroid.show(JSON.stringify(this.props),0);
    }
}
const styles = StyleSheet.create({
    pageStyle:{
        alignItems: 'center',
        padding: 20,
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
    contentWrap:{
        padding:12
    }
   
})
const mapStateToProps = (state,ownProps) => {
    return {
        counter:state.counter,
        windowSize:state.windowSize
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        add:()=>{
           dispatch({type:'ADD'}) 
        },
        sub:()=>{
            dispatch({type:'SUB'})
        },
        sizeChange:({width,height})=>{
            dispatch({type:'CHANGE_WINDOW_SIZE',width:width,height:height});
        }
    }
}
const HomeConnect = connect(mapStateToProps,mapDispatchToProps)(Home);
export default HomeConnect;
//http://unity-chan.com/event/c89/movie/c89_teaser_image.mp4