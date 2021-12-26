import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, TouchableOpacity,Image,StyleSheet } from "react-native";
import { Colors, Dimensions } from "../theme";


type props={
  id:number,
  title:string,
  poster_path:string,
  vote_average:number,
}

const MovieItem = (Props:props) => {
  const {navigate}=useNavigation()

  return (
    <TouchableOpacity 
      onPress={()=>navigate('MovieDetailes',{id:Props.id})} 
      activeOpacity={.8} style={styles.continer}
      >
      <Image 
       source={{uri:`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${Props.poster_path}`}}
       style={styles.image} />
      <Text style={styles.title} >{Props.title}</Text>
    </TouchableOpacity>
  );
};


const styles=StyleSheet.create({
  continer:{
    width:Dimensions.DEVICE_WIDTH*.3,
    alignSelf:"center",
    marginHorizontal:Dimensions.DEVICE_WIDTH*.02
  },
  image:{
   borderRadius:10,
   width:Dimensions.DEVICE_WIDTH*.3,
   height:200,
   resizeMode:'cover',
   backgroundColor:Colors.grayColorText
  },
  title:{
    fontSize:16,
    color:Colors.white,
    textAlign:'center',
    marginVertical:5,
    minHeight:55
  }
})

export default MovieItem;
