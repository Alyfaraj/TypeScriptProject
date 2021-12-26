import React, { FC, useEffect, useState } from 'react'
import {  Alert, Text, View ,FlatList, ActivityIndicator} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import HomeTitle from '../components/HomeTitle'
import MovieItem from '../components/MovieItem'
import { Movie } from '../models'
import { getMovies } from '../store/actions/movies'
import { ApplicationState } from '../store/reducers'
import { Colors, Dimensions } from '../theme'


interface Props{
navigation:any,
}

const Home=({navigation}:Props)=>{
const {movies,loading}=useSelector((state:ApplicationState)=>state.movies)
const [page,setPage]=useState<number>(1)
const dispatch=useDispatch()

useEffect(()=>{
dispatch(getMovies(page))
},[])


 return(
    <View style={{flex:1,backgroundColor:Colors.secondary}} >
    <HomeTitle/>
    {loading&&page==1&& <ActivityIndicator size={100} style={{marginTop:Dimensions.DEVICE_HEIGHT*.35}} color={Colors.white} />}
    <FlatList 
     style={{flex:1}}
      data={movies}
      keyExtractor={item=>`${item.id}`}
      renderItem={({item})=><MovieItem {...item} />}
      onEndReachedThreshold={-.1}
      onEndReached={()=>{
         dispatch(getMovies(page+1))
         setPage(page+1)
      }}
      numColumns={3}
      ListFooterComponent={()=>
          loading&&page>1&&<ActivityIndicator style={{marginVertical:10}} size={'large'} />
      }
     />
    </View>
    )
}

export default Home