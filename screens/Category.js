import React, { useState } from "react";
import { View, Image, Pressable } from "react-native";
import {
  Text,
  Avatar,
  Appbar,
  Divider,
  Badge,

} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ScrollView } from "react-native-gesture-handler";

import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Category() {
  const theme = useTheme();
 const bagData = useSelector((state)=>state.Reducers)
 const wishListData = useSelector((state)=> state.Reducers2)
 console.log('====================================');
 console.log("BAGDATA____" ,bagData.length);
 console.log('====================================');



  

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1"
      style={{ backgroundColor: theme.colors.background }}>
      <Appbar
        className=""
        style={{ height: 50, backgroundColor: theme.colors.background}}
       
  
      >
        <Appbar.Content
          title="All Categories"
          titleStyle={{ fontSize: 18, }}
        />
      

        <Appbar.Action
          icon="magnify"
          color="green"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
        {wishListData == 0 ? (
          <Appbar.Action icon="heart" color="green" onPress={() => {navigation.navigate("WishList")}} />
        ): (
          <View>
       <Appbar.Action icon="heart" color="green" onPress={() => {navigation.navigate("WishList")}} />
       <Badge className="absolute mt-2.5 right-2" size={15}> 
         <Text className="items-center text-white">{wishListData.length}</Text>
         </Badge>
       </View>
        )}

        {bagData == 0 ? (
          <Appbar.Action icon="shopping"  color="green"  onPress={() => {navigation.navigate("Bag")}} />
        ): (
          <View >
        <Appbar.Action icon="shopping"  color="green"  onPress={() => {navigation.navigate("Bag")}} />
         <Badge className="absolute mt-2.5 right-2" size={15}> 
         <Text className="items-center text-white">{bagData.length}</Text>
         </Badge>
        </View>
        )}
      
        
        
      </Appbar>
      <ScrollView>
        <View className="flex-row  mt-0.5 mb-1 justify-center space-x-2">
          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("Electronics");
            }}
          >
            <View className="flex-col  items-center">
              <Avatar.Image
                source={require("../assets/appliance.png")}
                color="green"
                size={66}
                style={{
                  backgroundColor:theme.colors.tertiaryContainer,
                  elevation: 3,
                }}
              />

              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Electronics</Text>
            </View>
          </Pressable>

          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("Jewelery");
            }}
          >
            <View className="flex-col   items-center">
              <Avatar.Image
                className=""
                source={require("../assets/jewelery.png")}
                color="green"
                size={66}
                style={{
                  backgroundColor: theme.colors.tertiaryContainer,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Jewelery</Text>
            </View>
          </Pressable>

          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("MenClothing");
            }}
          >
            <View className="flex-col   items-center ">
              <Avatar.Image
                source={require("../assets/boycloth.png")}
                color="green"
                size={66}
                style={{
                  backgroundColor:theme. colors.tertiaryContainer,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Boy's clothing</Text>
            </View>
          </Pressable>
          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("WomenClothing");
            }}
          >
            <View className="flex-col   items-center  ">
              <Avatar.Image
                source={require("../assets/womencloth.png")}
                color="green"
                size={66}
                style={{
                  backgroundColor:theme. colors.tertiaryContainer,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Girl's clothing</Text>
            </View>
          </Pressable>
        </View>

        <Divider style={{ borderColor: "green", borderWidth: 0.1 }} />
        <View className="flex-row  mt-0.5 mb-1 justify-center space-x-2 ">
          <Pressable
            className=" p-2"
            onPress={() => {
              navigation.navigate("Electronics");
            }}
          >
            <View className="flex-col   items-center ">
              <Avatar.Image
                source={require("../assets/appliancesec.png")}
                color="green"
                size={66}
                style={{
                  backgroundColor:theme. colors.tertiaryContainer,
                  elevation: 3,
                }}
              />

              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Electronics</Text>
            </View>
          </Pressable>

          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("Jewelery");
            }}
          >
            <View className="flex-col   items-center">
              <Avatar.Image
                source={require("../assets/jewelerysec.png")}
                color="green"
                size={66}
                style={{
                  backgroundColor:theme. colors.tertiaryContainer,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Jewelery</Text>
            </View>
          </Pressable>

          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("MenClothing");
            }}
          >
            <View className="flex-col   items-center ">
              <Avatar.Image
                source={require("../assets/menclothsec.png")}
                color="green"
                size={66}
                style={{
                  backgroundColor:theme. colors.tertiaryContainer,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Boy's clothing</Text>
            </View>
          </Pressable>
          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("WomenClothing");
            }}
          >
            <View className="flex-col   items-center  ">
              <Avatar.Image
                source={require("../assets/womenclothsec.png")}
                color="green"
                size={66}
                style={{
                  backgroundColor:theme. colors.tertiaryContainer,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Girl's clothing</Text>
            </View>
          </Pressable>
        </View>

        <Divider style={{ borderColor: "green", borderWidth: 0.1 }} />
        <View className="flex-row  mt-1 mb-2 space-x-2 justify-center ">
          <Pressable
            className=" p-2"
            onPress={() => {
              navigation.navigate("Electronics");
            }}
          >
            <View className="flex-col   items-center ">
              <Avatar.Icon
                icon={{
                  uri: "https://cdn-icons-png.flaticon.com/512/911/911514.png",
                }}
                color={theme.colors.avatarimage}
                size={70}
                style={{
                  backgroundColor:theme.colors.onPrimary,
                  elevation: 3,
                }}
              />

              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Electronics</Text>
            </View>
          </Pressable>

          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("Jewelery");
            }}
          >
            <View className="flex-col   items-center">
              <Avatar.Icon
                icon={{
                  uri: "https://cdn-icons-png.flaticon.com/512/4055/4055978.png",
                }}
                color={theme.colors.avatarimage}
                size={70}
                style={{
                  backgroundColor:theme.colors.onPrimary,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Jewelery</Text>
            </View>
          </Pressable>

          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("MenClothing");
            }}
          >
            <View className="flex-col   items-center ">
              <Avatar.Icon
                icon={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3531/3531744.png",
                }}
                color={theme.colors.avatarimage}
                size={70}
                style={{
                  backgroundColor:theme.colors.onPrimary,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Boy's clothing</Text>
            </View>
          </Pressable>
          <Pressable
            className="p-2"
            onPress={() => {
              navigation.navigate("WomenClothing");
            }}
          >
            <View className="flex-col   items-center  ">
              <Avatar.Icon
                icon={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1198/1198409.png",
                }}
                color={theme.colors.avatarimage}
                size={70}
                style={{
                  backgroundColor:theme.colors.onPrimary,
                  elevation: 3,
                }}
              />
              <Text style={{ fontFamily:'Quicksand_600SemiBold',fontSize:13}}>Girl's clothing</Text>
            </View>
          </Pressable>
        </View>

        <Divider style={{ borderColor: "green", borderWidth: 0.1 }} />
        <View className=" mt-2 mb-2 p-2">
          <View className=" flex-row  space-x-3 ">
            <Image
              className="  rounded-t-[4px]  rounded-b-[4px]"
              style={{
                height: responsiveHeight(20),
                width: responsiveWidth(30),
              }}
              source={{
                uri: "https://previews.123rf.com/images/dreamcreation01/dreamcreation011811/dreamcreation01181100344/113206273-makar-sankranti-greeting-card-with-colorful-kite.jpg",
              }}
            />
            <Image
              className="rounded-t-[4px]  rounded-b-[4px]"
              style={{
                height: responsiveHeight(20),
                width: responsiveWidth(30),
              }}
              source={{
                uri: "https://previews.123rf.com/images/shinystarfish/shinystarfish1712/shinystarfish171201292/93567079-lohri-.jpg",
              }}
            />
            <Image
              className=" rounded-t-[4px]  rounded-b-[4px]"
              style={{
                height: responsiveHeight(20),
                width: responsiveWidth(30),
              }}
              source={{
                uri: "https://previews.123rf.com/images/bombaytattoo/bombaytattoo1809/bombaytattoo180900022/109808767-vector-illustration-of-winter-sale-poster-template-with-lettering-text-and-snowflake-.jpg",
              }}
            />
          </View>
        </View>
        <Divider style={{ borderColor: "green", borderWidth: 0.1 }} />

        <View className=" mt-2 mb-2 p-2">
          <View className=" flex-row  space-x-3 ">
            <Image
              className="  rounded-t-[4px]  rounded-b-[4px]"
              style={{
                height: responsiveHeight(20),
                width: responsiveWidth(30),
              }}
              source={{
                uri: "https://previews.123rf.com/images/captainvector/captainvector2207/captainvector220706434/189051451-black-friday-sale-label.jpg",
              }}
            />
            <Image
              className="rounded-t-[4px]  rounded-b-[4px]"
              style={{
                height: responsiveHeight(20),
                width: responsiveWidth(30),
              }}
              source={{
                uri: "https://previews.123rf.com/images/sofiartmedia/sofiartmedia1706/sofiartmedia170600042/80927189-beautiful-hello-summer-sale-banner-vintage-style-palm-leaves-tropical-frame-polka-dots-pattern-heart.jpg",
              }}
            />
            <Image
              className=" rounded-t-[4px]  rounded-b-[4px]"
              style={{
                height: responsiveHeight(20),
                width: responsiveWidth(30),
              }}
              source={{
                uri: "https://previews.123rf.com/images/snapgalleria/snapgalleria1901/snapgalleria190100055/117399326-happy-republic-day-of-india-tricolor-background-for-26-january.jpg",
              }}
            />
          </View>
        </View>

        <Divider style={{ borderColor: "green", borderWidth: 0.2 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
