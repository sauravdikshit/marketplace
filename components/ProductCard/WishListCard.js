import React, { useState } from "react";
import { View,  TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Card ,Divider,FAB,Text,useTheme} from "react-native-paper";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/AntDesign";

export default function WishListCard({item,onRemoveFromWishList}) {
      const navigation = useNavigation();
     
      const theme=useTheme()
  return (
      <View
      className="my-1 mt-1"
      style={{
        height: responsiveHeight(24),
        width: responsiveWidth(96),
      }}
    >
      <Card
        className=" rounded-t-[5px] rounded-b-[5px]  mx-2"
        elevation={2}
        style={{
          height: responsiveHeight(24), // 50% of window height
          width: responsiveWidth(96), // 50% of window width
          backgroundColor: theme.colors.cardcolor
        }}
    
      > 
      <View className="flex-row p-1">
      <TouchableOpacity
          onPress={() => navigation.navigate("ProductDetails", { item } )}
        
        >
        <Image 
        className="w-20 h-28"  
        source={{
        uri: item.image,
            }}
            resizeMode="contain" />
          {/* <Card.Cover
            className=" rounded-t-[10px] "
            theme={{ roundness: 1 }}
            source={{
              uri: item.image,
            }}
            style={{
              height: responsiveHeight(10), // 50% of window height
              width: responsiveWidth(25), // 50% of window width
            }}
          /> */}
        </TouchableOpacity>
       

        <View className=" flex-col mx-2 px-6 mr-20 w-38 ">
        <Text className="mt-1" style={{fontFamily:'Poppins_600SemiBold',fontSize:14}}  numberOfLines={2}>
          {item.title}
        </Text>
        <View className="flex-row space-x-4">
          <Text className=" text-base font-bold">₹ {item.price}</Text>
          <Text className="text-base text-[#006e00]">60% off</Text>
        </View>
        <Text className="text-md">Free delivery</Text>
          <View className="flex-row mt-2">
            <Icon name="star" size={16} color={"#006e00"} />
            <Icon name="star" size={16} color={"#006e00"} />
            <Icon name="staro" size={16} color={"#006e00"} />
            <Icon name="staro" size={16} color={"#006e00"} />
            <Icon name="staro" size={16} color={"#006e00"} />
          </View>
      
        </View>
      
        
      </View>
     
       <Divider className="mt-1 mb-2"/>
       <View className="flex-row space-x-4  ml-32 left-0 mt-0.5">
       <Button
       className="rounded-[8px]"
       onPress={()=> {onRemoveFromWishList(item)}}
        mode="outlined">Remove</Button>
        <Button
         className="rounded-[8px]"
        mode="contained"
        >Add to bag</Button>
       </View>
      
      


     
      </Card>
    </View>
   
  )
}
