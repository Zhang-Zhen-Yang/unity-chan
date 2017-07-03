import React, { Component } from 'react';
import { View, Text, ToolbarAndroid } from 'react-native';
import R from '../R'
class Appbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const toolBarActions = [            
            {title: 'down', show: 'always',icon:require('../img/ic_get_app_white_24dp.png')},
            {title: 'search', show: 'always',icon:require('../img/ic_search_white_24dp.png')},
        ];
        return (
            <ToolbarAndroid title={this.props.title}
                titleColor="#FFFFFF" 
                navIcon={require('../img/ic_menu_white_24dp.png')}  
                contentInsetStart={5} 
                style={R.style.toolBar} 
                actions={this.props.toolBarActions||[]}
                onIconClicked ={()=>{}}
                onActionSelected ={(index)=>{this.props.onActionSelected(index)}}>
            </ToolbarAndroid>
        );
    }
}

export default Appbar;