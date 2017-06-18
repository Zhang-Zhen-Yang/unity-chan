import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import R from '../R'
import {category} from '../data/manga'
import AppBar from '../component/appBar'
import MangaCard from './MangaCard'
class Manga extends Component {
    static navigationOptions = {
        title :'漫画',
        tabBarIcon :({focused, tintColor})=>{
            return (<Icon name="book-open-variant" color={tintColor} size={25}></Icon>)
        }
    }
    constructor( props ){
        super( props )
    }
    render() {
        return (
            <View>
                <AppBar title="MANGA"></AppBar>
                <ScrollView contentContainerStyle={{paddingLeft:R.dimen.containerPadding,paddingRight:R.dimen.containerPadding,paddingBottom:10}}>
                    <MangaCard imgUrl="http://unity-chan.com/images/imgComicH2unity-4.jpg" navigate={this.props.navigation.navigate} type="first" category={category.first}></MangaCard>
                    <MangaCard imgUrl="http://unity-chan.com/images/imgComicH2nochoice.jpg" navigate={this.props.navigation.navigate} type="second" category={category.second}></MangaCard> 
                    <MangaCard imgUrl="http://unity-chan.com/images/imgComicH2uniyon.jpg" navigate={this.props.navigation.navigate} type="third" category={category.third}></MangaCard> 
                </ScrollView>
            </View>
        );
    }
}



export default Manga;