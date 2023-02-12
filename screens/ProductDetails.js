import React, { useEffect, useState } from "react";
import { View, Image,  Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import {
  Appbar,
  Button,
  Card,
  Divider,
  FAB,
  useTheme,
  Text,
  Badge,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import IoniconsFontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import { addItemToCart, addItemToWishlist } from "../redux/actions/Actions";

import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useDispatch, useSelector } from "react-redux";


var productImage = " ";


const data = [
  {
    id: 1,
    name: "slide-1",
    url: productImage,
  },
  {
    id: 2,
    name: "slide-2",
    url: productImage,
  },
  {
    id: 3,
    name: "slide-3",
    url: productImage,
  },
  {
    id: 4,
    name: "slide-4",
    url: productImage,
  },
  {
    id: 5,
    name: "slide-5",
    url: productImage,
  },
];

  console.log('====================================');
  console.log("-----------",)
  console.log('====================================');



const renderItem = ({ item }) => {
  return (
    <View>
      <Image
        className=" bg-green-400 "
        source={{ uri: productImage }}
        style={{
          justifyContent: "center",
          height: responsiveHeight(60), // 50% of window height
          width: responsiveWidth(100), // 50% of window width
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default function ProductDetails({ route }) {
  const bagData = useSelector((state) => state.Reducers)
  const wishListData = useSelector((state)=> state.Reducers2)
  const [isBagData,setIsBagData] =  useState(null)
  const [isWishListData,setIsWishListData]=useState(null)
  console.log('===============WISHLIST=====================');
  console.log(wishListData);
  console.log('====================================');

  const dispatch = useDispatch()
  const navigation = useNavigation();
  const theme = useTheme();
  const { item } = route.params;
  console.log(item,"ITEM____________");
  // console.log(onAddToCart,"ADDTO CART>>>>>>>>>>>>>>>>>>");
  productImage = item.image;
  console.log("image", productImage);

  const addToCart = (item) => {
    dispatch(addItemToCart(item))
  }
  const addToWishList = ( item )=>{

    dispatch(addItemToWishlist(item))
    }
 
  useEffect(()=>{
    setIsBagData(bagData)
    setIsWishListData(wishListData)
  },[isBagData,isWishListData])

  return (
    <SafeAreaView
      className="flex-1  w-full h-full "
      style={{ backgroundColor: theme.colors.background }}
    >
      <Appbar  style={{ height: 50, backgroundColor: theme.colors.background}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="" titleStyle={{ fontSize: 18 }} />

        <Appbar.Action
          icon="magnify"
          color="green"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
        {isWishListData == 0 ? (
          <Appbar.Action icon="heart" color="green" onPress={() => {navigation.navigate("WishList")}} />
        ):(
          <View>
          <Appbar.Action icon="heart" color="green" onPress={() => {navigation.navigate("WishList")}} />
          <Badge className="absolute z-0 right-2 mt-2.5" size={15}>
            <Text className="items-center text-white">{wishListData.length}</Text>
          </Badge>
          </View>
        )}

        {isBagData == 0 ? (
          <Appbar.Action icon="shopping" color="green" onPress={() => {navigation.navigate("Bag")}} />

         ): (
          <View>
          <Appbar.Action icon="shopping" color="green" onPress={() => {navigation.navigate("Bag")}} />
          <Badge className="absolute z-0 right-2 mt-2.5" size={15}>
            <Text className="items-center text-white">{bagData.length}</Text>
          </Badge>
          </View>
          )}
        
        
      </Appbar>
      <ScrollView className="w-full">
        <View className="">
        
          <SwiperFlatList
            style={{ width: "100%" }}
            autoplay={false}
            index={0}
            showPagination
            paginationActiveColor="green"
            paginationDefaultColor="white"
            paginationStyleItem={{
              width: 15,
              height: 5,
              margin: 10,
              marginHorizontal: 4,
            }}
            data={data}
            renderItem={renderItem}
          />
           <View className="flex-col absolute z-40 justify-center">
      <View  className=" left-80 m-4">
      <FAB
      className=" rounded-full bg-white w-12 h-12 items-center"
        icon="heart-outline"
        color="black"
        customSize={52}
        onPress={ ()=> {addToWishList(item)} }

      />

      </View>
      
      
        <View  className=" left-80 m-4">
      <FAB
      className=" rounded-full bg-white w-12 h-12 items-center"
        icon="share"
        color="black"
        customSize={52}
        

      />

      </View>


      </View>

        </View>

        <View className="px-4">
          <Text className="font-bold  text-[19px] mt-2">{item.category}</Text>
          <Text className="mt-2 text-gray-400 text-base">{item.title}</Text>
        </View>
        <View className="flex-row px-4 mt-2 space-x-1">
          <Icon name="star" size={18} color={"#006e00"} />
          <Icon name="star" size={18} color={"#006e00"} />
          <Icon name="staro" size={18} color={"#006e00"} />
          <Icon name="staro" size={18} color={"#006e00"} />
          <Icon name="staro" size={18} color={"#006e00"} />

          <Text className="text-[19px] bottom-1 text-gray-400 ">
            {" "}
            {item.rating.rate} |
          </Text>
          <Text className="text-[19px] bottom-1 text-gray-400">
            {" "}
            {item.rating.count}
          </Text>
        </View>
        <View className="px-2">
          <Card
            className="m-1 p-2"
            style={{ elevation: 5 }}
            theme={{ roundness: 0 }}
          >
            <Text className="text-[15px] ml-4 text-green-800 ">
              Special Price
            </Text>
            <View className="flex-row">
              <Text className="text-[20px] ml-4  mt-2 text-green-800">
                50% off
              </Text>
              <Text className="text-[20px] ml-4  mt-2 text-gray-400 line-through">
                2,222
              </Text>
              <Text className="text-[20px] ml-4  mt-2 text-black-800 font-bold">
                ₹ {item.price}
              </Text>
            </View>
            <Text className="text-[15px] ml-4 text-gray-400 ">
              Pay using UPI
            </Text>
          </Card>
        </View>

        <View className="px-4 mt-2">
          <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:16}}>Product Details</Text>
          <Text className="" style={{fontFamily:'Poppins_300Light',fontSize:15}} >{item.description}</Text>
        </View>
        <Divider
          style={{
            borderWidth: 0.2,
            borderColor: "green",
            marginTop: 8,
            marginBottom: 8,
          }}
        />
      </ScrollView>
      <View className="flex-row mb-4 mt-4 px-4 justify-between">
        <Button
         className="justify-center"
          icon="shopping"
          mode="outlined"
          onPress={() =>{ addToCart(item) }}
          
          style={{
            height: responsiveHeight(6),
            width: responsiveWidth(45),
          }}
          theme={{ roundness: 2 }}
        >
        <Text style={{
               
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 15,
                 }}> Add to bag</Text>
         
        </Button>
        <Button
        className="justify-center"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={{
            height: responsiveHeight(6),
            width: responsiveWidth(45),
          }}
          theme={{ roundness: 2 }}
        >
        <Text style={{
                color: theme.colors.buttoncolor,
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 15,
                 }}>Buy now</Text>
          
        </Button>
      </View>
    </SafeAreaView>
  );
}
