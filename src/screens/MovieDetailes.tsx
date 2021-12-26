import React, { useEffect, useState } from 'react'
import { View ,Text,Image,StyleSheet, ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { axiosApi } from '../api'
import DetailesItem from '../components/DetailesItem'
import { Movie } from '../models'
import { Colors, Dimensions } from '../theme'

interface Props{
    route:any
}

const MovieDetailes:React.FC<Props>=({route})=>{
    const {id}=route.params
    const [movieData,setMovieData]=useState<Movie>()


    const getMovieData=(movieId:number)=>{
      axiosApi.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9538bafb994ca8280e9ac8036cab012e`)
      .then(repsonse=>{
       console.log(repsonse.data)
       setMovieData(repsonse.data)
      })
      .catch(err=>console.log(err))
    }


    useEffect(()=>{
     getMovieData(id)
    },[])

    return(
        <View style={{flex:1,backgroundColor:Colors.secondary}} >
           <Image style={styles.image} source={{uri:`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieData?.poster_path}`}} />
        <ScrollView style={styles.dataContainer}>
          <Text style={styles.title} >{movieData?.title}</Text>
           <View style={styles.rate} >
            <Text style={{fontSize:16}} >{movieData?.vote_average}({movieData?.vote_count}){' '}</Text>
            <Ionicons size={17} name='star' color={Colors.primary}  />
           </View>
          <Text style={[styles.title,{marginTop:15, opacity:.9,fontSize:18}]} >Overview</Text> 
          <Text style={styles.overview} >{movieData?.overview}</Text>
          <Text style={[styles.title,{marginTop:15, opacity:.9,fontSize:18}]} >Detailes</Text> 
          <DetailesItem name='stutus' value={movieData?.status} />
          <DetailesItem name='release date' value={movieData?.release_date} />
          <DetailesItem name='revenue' value={movieData?.revenue} />
          <DetailesItem name='original language' value={movieData?.original_language} />
          <DetailesItem name='production countries' value={movieData?.production_countries[0].name} />

        </ScrollView>
        </View>
    )
}


const styles=StyleSheet.create({
    image:{
        width:Dimensions.DEVICE_WIDTH,
        height:Dimensions.DEVICE_HEIGHT*.6,
        resizeMode:'stretch'
    },
  dataContainer:{
    width:Dimensions.DEVICE_WIDTH,
    borderTopEndRadius:13,
    borderTopStartRadius:13,
    backgroundColor:Colors.white,
    position:'absolute',
    bottom:0,
    padding:20,
    
  },
  title:{
      fontWeight:'700',
      fontSize:20
  },
  rate:{
      flexDirection:'row',
      marginStart:2,
      marginVertical:5,
      alignItems:'center'
  },
  overview:{
      fontWeight:'400',
      fontSize:17,
      opacity:.7,
      lineHeight:25,
      marginVertical:10
  }

})


export default MovieDetailes