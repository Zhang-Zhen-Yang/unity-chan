/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-10 22:17:39 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-10 22:50:01
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import R from '../R'
import {
    StyleSheet,
    ToolbarAndroid,
    StatusBar,
    View,
    Text,
    ScrollView
} from 'react-native'

import MangaCard from './TabLayout.manga.card'

class TabManga extends Component{
    static navigationOptions = {
        title :'漫画',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="book-open-variant" color={tintColor} size={25}></Icon>)
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        const toolBarActions = [            
            {title: 'down', show: 'always',icon:require('../img/ic_get_app_white_24dp.png')},
            {title: 'search', show: 'always',icon:require('../img/ic_search_white_24dp.png')},
        ];
        return (
            <View style={R.style.container}>
                <StatusBar
                        backgroundColor={R.color.colorPrimaryDark}
                        barStyle="light-content" />
                <ToolbarAndroid title="MANGA" 
                    titleColor="#FFFFFF" 
                    navIcon={require('../img/ic_menu_white_24dp.png')}  
                    contentInsetStart={5} 
                    style={R.style.toolBar} 
                    actions={toolBarActions}
                    onIconClicked ={()=>{this.props.navigation.navigate('DrawerOpen');}}>
                </ToolbarAndroid>
                <ScrollView contentContainerStyle={{paddingLeft:R.dimen.containerPadding,paddingRight:R.dimen.containerPadding}}>
                    <MangaCard imgUrl="http://unity-chan.com/images/imgComicH2unity-4.jpg"></MangaCard>
                    <MangaCard imgUrl="http://unity-chan.com/images/imgComicH2nochoice.jpg"></MangaCard> 
                    <MangaCard imgUrl="http://unity-chan.com/images/imgComicH2uniyon.jpg"></MangaCard> 
                </ScrollView>
           </View>
           
        );
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch'
    }
})

export default TabManga;