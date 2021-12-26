import React, { FC, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Navigation from './src/navigation'
import { Colors } from "./src/theme";



const App:FC=()=>{
  return(
    <View style={{flex:1}} >
      <Navigation/>
    </View>
  )
}


export default App