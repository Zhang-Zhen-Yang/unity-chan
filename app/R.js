import { StyleSheet} from 'react-native'
const color={
    colorPrimary:'#03a9f4',
    colorPrimaryDark:'#039be5',
    backgroundColor:'#efefef' ,
    indicatorColor:'#039be5'
}
export default {
    color:color,
    dimen:{
        toolbarIcon:25,
        drawerLayoutIcon:20,
        containerPadding:12
    },
    style:StyleSheet.create({
        toolBar:{
            backgroundColor:color.colorPrimary,
            height:55,
            top:0
        },
        container:{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            backgroundColor: color.backgroundColor,
            top:0
        }
    })
   
}