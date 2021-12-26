import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Dimensions } from '../theme'


interface Props{
    name:string,
    value:string|number|undefined
}


const DetailesItem:React.FC<Props>=({name,value})=>{
   return( <View style={styles.container} >
      <Text>{name}</Text>
      <Text>{value}</Text>
    </View>)
}


const styles=StyleSheet.create({
    container:{
     flexDirection:'row',
     justifyContent:'space-between',
     width:Dimensions.DEVICE_WIDTH*.88,
     marginVertical:4

    }
})


export default DetailesItem