import React from "react";
import { View,  TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card ,Text,useTheme} from "react-native-paper";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/AntDesign";

export default function ProductCard({ item,  onAddWishList }) {
  const navigation = useNavigation();
  const theme=useTheme()
  return (
    <View
      className="my-0.5 mt-1 mb-1"
      style={{
        height: responsiveHeight(45),
        width: responsiveWidth(50),
      }}
    >
      <Card
        className=" rounded-t-[5px] rounded-b-[1px]    items-center p-2 mx-1"
        elevation={2}
        style={{
          height: responsiveHeight(45), // 50% of window height
          width: responsiveWidth(48), // 50% of window width
          backgroundColor: theme.colors.cardcolor
        }}
    
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductDetails", { item } )}
        >
          <Card.Cover
            className=" rounded-t-[10px] "
            theme={{ roundness: 1 }}
            source={{
              uri: item.image,
            }}
            style={{
              height: responsiveHeight(23), // 50% of window height
              width: responsiveWidth(45), // 50% of window width
            }}
          />
        </TouchableOpacity>

        <Text className="mt-2" style={{fontFamily:'Poppins_600SemiBold',fontSize:14}}  numberOfLines={2}>
          {item.title}
        </Text>
        <Text className="text-gray-400 text-base"> {item.category}</Text>

        <View className="flex-row  space-x-2">
          <Text className=" text-base font-bold">₹ {item.price}</Text>
          <Text className="text-base text-[#006e00]">60% off</Text>
        </View>
        <Text className="text-md">Free delivery</Text>

        <Card.Actions>
          <View className="flex-row space-x-16 ">
            <View className="flex-row ">
              <Icon name="star" size={18} color={"#006e00"} />
              <Icon name="star" size={18} color={"#006e00"} />
              <Icon name="staro" size={18} color={"#006e00"} />
              <Icon name="staro" size={18} color={"#006e00"} />
              <Icon name="staro" size={18} color={"#006e00"} />
            </View>
            <TouchableOpacity onPress={()=>{onAddWishList(item)}}>
            <Icon  name="hearto" size={20} />

            </TouchableOpacity>

           
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
}
