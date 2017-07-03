import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, RefreshControl, Dimensions, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppBar from '../component/appBar'
import ViewPager from './ViewPager'
import Crid from './Grid'
import R from '../R'
import { connect } from 'react-redux'

class Home extends Component {
    static navigationOptions = {
        title :'首页',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="home-outline" color={tintColor} size={25}></Icon>)
        }
    }
    constructor( props ){
        super( props )
        this.state = {
            isRefreshing:false,
            toolBarActions : [            
                {title: 'down', show: 'always',icon:require('../img/ic_get_app_white_24dp.png')},
                {title: 'search', show: 'always',icon:require('../img/ic_search_white_24dp.png')},
            ]
        }
    }
    render() {
        return (
            <View style={R.style.container}>
                <AppBar title="HOME" toolBarActions={this.state.toolBarActions} onActionSelected={(index)=>{this._appBarActionSelected(index)}}></AppBar>
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
                        <ViewPager></ViewPager>

                        <Crid></Crid>
                    </ScrollView>
                </View>
            </View>
        );
    }
    _onRefresh(){
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 5000);
    }
    _containerScroll(){

    }
    _contentSizeChange(){
        this.setState({windowWidth:Dimensions.get('window').width});
        this.props.sizeChange(Dimensions.get('window'));
    }
    //toolbar optionsMenu
    _appBarActionSelected(index){
        switch(index){
            case 0:
                console.log(this.props);
                this.props.navigation.navigate('Donwload',{index:index});
                break;
            case 1:
                break;
        }
    }
}
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
