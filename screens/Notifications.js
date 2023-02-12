import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View} from 'react-native'
import { Appbar, Text,useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Lottie from "lottie-react-native";


export default function Notifications() {
      const theme = useTheme()
      const navigation = useNavigation()
      const [isNotifications,setIsNotifications] = useState(null)

      useEffect(()=>{
            setIsNotifications(null)
      },[isNotifications])
  return (
   <SafeAreaView className="w-full h-full"
   style={{backgroundColor:theme.colors.background}}>
   <Appbar
    style={{backgroundColor:theme.colors.background,height:50}}>
      <Appbar.BackAction
            onPress={()=>{navigation.goBack()}}
      />
      <Appbar.Content
            title="Notifications"  titleStyle={{ fontSize: 18 }}
      />
   </Appbar>
   {isNotifications == null ?
    (
      <View className="mt-48 items-center">
          <Lottie
            className="w-60 h-60"
            source={require("../assets/notifications.json")}
            autoPlay
            loop
          />
          <Text className="mt-10">No notification yet</Text>
          
        </View>

   ):(
      <Text>Notifications</Text>

   )}
   </SafeAreaView>
  )
}
