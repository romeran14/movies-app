import { Slot } from "expo-router";
import "../global.css";
import { View, Text } from "react-native";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { useEffect } from "react";

const RootLayout = () =>{

  
    useEffect(() => {
        nowPlayingAction()
    }, [])
    
    return(
        <View>
            <Text>Root</Text>
        </View>
    )
} 
export default RootLayout;