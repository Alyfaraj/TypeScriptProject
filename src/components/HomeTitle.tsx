import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import  Icon  from "react-native-vector-icons/Ionicons";
import { Colors, Dimensions } from "../theme";


const HomeTitle=()=>{
    const {navigate}=useNavigation()
    return(
        <View style={styles.continer} >
         <Text style={styles.title} >Popular</Text>
         <Icon onPress={()=>navigate('MovieDetailes')} name="search" size={22} color={Colors.white} />
        </View>
    )
}



const styles=StyleSheet.create({
continer:{
    flexDirection:'row',
    width:Dimensions.DEVICE_WIDTH*.94,
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:40
},
title:{
    fontWeight:'700',
    fontSize:24,
    marginVertical:20,
    color:Colors.white
}
})

export default HomeTitle