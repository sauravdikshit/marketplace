import { View, TouchableOpacity, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import IconAsw from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { Avatar, Card, Text, useTheme } from "react-native-paper";
import * as GetDataApi from "../api/productapi";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import ProductCard from "../components/ProductCard/ProductCard";

var imageProduct = "";
var imageProduct1 = "";
var imageProduct2 = "";
var imageProduct3 = "";
var productCategory = "";
var productCategory1 = "";
var productCategory2 = "";
var productCategory3 = "";
var productPrice = "";
var productPrice1 = "";
var productPrice2 = "";
var productPrice3 = "";

const data = [
  {
    id: 1,
    name: "slide-1",
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  },
  {
    id: 2,
    name: "slide-2",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
  },
  {
    id: 3,
    name: "slide-3",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 4,
    name: "slide-4",
    url: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 5,
    name: "slide-5",
    url: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

const renderItem = ({ item }) => {
  return (
    <View className="mt-2">
      <Image
      
        source={{ uri: item.url }}
        style={{
          justifyContent: "center",
          height: responsiveHeight(20), // 50% of window height
          width: responsiveWidth(100), // 50% of window width
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default function HomeNav() {
  const [productData, setProductData] = useState([]);
  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    console.log("useeffect called");

    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await GetDataApi.getProductData();
      console.log(response.data);
      console.log("ImageResponse", response.data[0].image);
      imageProduct = response.data[0].image;
      imageProduct1 = response.data[1].image;
      imageProduct2 = response.data[2].image;
      imageProduct3 = response.data[4].image;
      productCategory = response.data[0].title;
      productCategory1 = response.data[1].title;
      productCategory2 = response.data[2].title;
      productCategory3 = response.data[4].title;
      productPrice = response.data[0].price;
      productPrice1 = response.data[1].price;
      productPrice2 = response.data[2].price;
      productPrice3 = response.data[4].price;

      setProductData(response.data);
    } catch (error) {
      console.log("Error");
    }
  };
  console.log("data", productData);

  return (
    <SafeAreaView
      className="flex-1 w-full h-full"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex-row items-center space-x-3 px-2">
        <View className="flex-col items-center">
          <IconAsw name="redhat" size={30} color={"green"} />
          <Text
            className="text-green-600 "
            style={{ fontFamily: "Quicksand_300Light", fontSize: 13 }}
          >
            Market Place
          </Text>
        </View>
        <Pressable
          className=" m-2 rounded-[12px] h-12 w-60"
          style={{
            elevation: 5,
            backgroundColor: theme.colors.onPrimary,
          }}
          onPress={() => navigation.navigate("Search")}
        >
          <View className="flex-row items-center m-2 space-x-6 top-0.5">
            <Icon name="search" size={18} color={"green"} />
            <Text
              className="text-gray-400 "
              style={{ fontFamily: "Quicksand_500Medium", fontSize: 16 }}
            >
              Search Market Place
            </Text>
          </View>
        </Pressable>

        <Icon
          onPress={() => navigation.navigate("Notifications")}
          name="bell"
          size={27}
          color="green"
        />
      </View>
      <ScrollView className="">
        <View>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={0}
            showPagination
            paginationActiveColor="green"
            paginationDefaultColor="white"
            paginationStyle={{}}
            paginationStyleItem={{
              width: 8,
              height: 8,
              margin: 8,
            }}
            data={data}
            renderItem={renderItem}
          />
        </View>

        <View className="flex-row  mt-1  space-x-2 justify-center ">
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
                size={60}
                style={{
                  backgroundColor: theme.colors.onPrimary,
                  elevation: 3,
                }}
              />

              <Text
                className=""
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 13 }}
              >
                Electronics
              </Text>
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
                size={60}
                style={{
                  backgroundColor: theme.colors.onPrimary,
                  elevation: 3,
                }}
              />
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 13 }}
              >
                Jewelery
              </Text>
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
                size={60}
                style={{
                  backgroundColor: theme.colors.onPrimary,
                  elevation: 3,
                }}
              />
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 13 }}
              >
                Boy's clothing
              </Text>
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
                size={60}
                style={{
                  backgroundColor: theme.colors.onPrimary,
                  elevation: 3,
                }}
              />
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 13 }}
              >
                Girl's clothing
              </Text>
            </View>
          </Pressable>
        </View>
        <View
          className="px-1 mt-2 "
          style={{ backgroundColor: theme.colors.backgrouncolor }}
        >
          <Card className="rounded-[2px] m-2 h-90">
            <View className="flex-row m-2 justify-between">
              <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 20 }}>
                Discounts for you
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("AllOffers");
                }}
              >
                <Avatar.Icon icon="chevron-right" size={35} />
              </TouchableOpacity>
            </View>

            <View className="   flex-row m-4 space-x-4 ">
              {/* <FlatList
          numColumns={2}
          data={productData}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return <ProductCard item={item} />;
          }}
        /> */}
              <Card
                className=" rounded-t-[5px] rounded-b-[1px] items-center w-40 p-2"
                elevation={2}
                style={{ backgroundColor: theme.colors.cardcolor }}
              >
                <Card.Cover
                  className=" rounded-t-[10px] w-32 mx-2 "
                  theme={{ roundness: 1 }}
                  source={{
                    uri: imageProduct,
                  }}
                />
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold", fontSize: 13 }}
                  numberOfLines={2}
                >
                  {productCategory}
                </Text>
                <View className="flex-row  space-x-2">
                  <Text className=" text-base font-bold">₹ {productPrice}</Text>
                  <Text className="text-[#006e00] text-base font-bold">
                    60% off
                  </Text>
                </View>
                <Text className="text-md">Free delivery</Text>
              </Card>
              <Card
                className=" rounded-t-[5px] rounded-b-[1px]   items-center w-40 p-2"
                elevation={2}
                style={{ backgroundColor: theme.colors.cardcolor }}
              >
                <Card.Cover
                  className=" rounded-t-[10px] w-32 mx-2 "
                  theme={{ roundness: 1 }}
                  source={{
                    uri: imageProduct1,
                  }}
                />
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold", fontSize: 13 }}
                  numberOfLines={2}
                >
                  {productCategory1}
                </Text>
                <View className="flex-row  space-x-2">
                  <Text className="text-base font-bold">₹ {productPrice1}</Text>
                  <Text className="text-[#006e00] text-base font-bold">
                    60% off
                  </Text>
                </View>
                <Text className="text-md">Free delivery</Text>
              </Card>
            </View>
            <View className="   flex-row m-4 space-x-4">
              {/* <FlatList
          numColumns={2}
          data={productData}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return <ProductCard item={item} />;
          }}
        /> */}
              <Card
                className=" rounded-t-[5px] rounded-b-[1px]  items-center w-40 p-2"
                elevation={2}
                style={{ backgroundColor: theme.colors.cardcolor }}
              >
                <Card.Cover
                  className=" rounded-t-[10px] w-32 mx-2 brightness-90"
                  theme={{ roundness: 1 }}
                  source={{
                    uri: imageProduct2,
                  }}
                />
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold", fontSize: 13 }}
                  numberOfLines={2}
                >
                  {productCategory2}
                </Text>
                <View className="flex-row  space-x-2">
                  <Text className=" text-base font-bold">
                    ₹ {productPrice2}
                  </Text>
                  <Text className="text-base text-[#006e00]">60% off</Text>
                </View>
                <Text className="text-md">Free delivery</Text>
              </Card>
              <Card
                className=" rounded-t-[5px] rounded-b-[1px]   items-center w-40 p-2"
                elevation={2}
                style={{ backgroundColor: theme.colors.cardcolor }}
              >
                <Card.Cover
                  className=" rounded-t-[10px] w-32 mx-2 "
                  theme={{ roundness: 1 }}
                  source={{
                    uri: imageProduct3,
                  }}
                />
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold", fontSize: 13 }}
                  numberOfLines={2}
                >
                  {productCategory3}
                </Text>
                <View className="flex-row  space-x-2">
                  <Text className=" text-base font-bold">
                    ₹ {productPrice3}
                  </Text>
                  <Text className="text-base text-[#006e00]">60% off</Text>
                </View>
                <Text className="text-md">Free delivery</Text>
              </Card>
            </View>
          </Card>
        </View>

        <View>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={0}
            showPagination
            paginationActiveColor="green"
            paginationDefaultColor="white"
            paginationStyle={{}}
            paginationStyleItem={{
              width: 10,
              height: 10,
              margin: 8,
            }}
            data={data}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
