/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-31 21:20:07 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-31 23:05:55
 */

import React, { Component } from 'react';
import {
    StyleSheet,
 
}from 'react-native'
import MangaDetails from '../components/MangaDetails'
class MangaDetailsContainer extends Component {
    
    constructor(props){
        super(props)
          
    }
    render() {
        
        return (           
            <MangaDetails imgUrl="http://unity-chan.com/contents/wp-content/uploads/2014/06/enono_u4k_031.jpg" />
        );
    }
    
}

export default MangaDetailsContainer;