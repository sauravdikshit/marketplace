import React, { useState, useCallback, useEffect } from "react";
import { View, Image, FlatList } from "react-native";
import { Text, useTheme, Appbar, Button, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import BagProduct from "../components/ProductCard/BagProduct";

import { removeFromCart } from "../redux/actions/Actions";

export default function Bag() {
  //        const {title} = route.params

  //   console.log("====================================");
  //   console.log("screen", route.title);
  //   console.log("====================================");
  const theme = useTheme();
  const navigation = useNavigation();

  const bagData = useSelector((state) => state.Reducers);
  const dispatch = useDispatch();

  const [isbagData, setIsBagData] = useState(null);
  const [screen, setScreen] = useState(null);
  const [grandTotal, setGrandTotal] = useState(null);

  useEffect(() => {
    setIsBagData(bagData);
  }, [isbagData]);

  // const getReducersData = async ()=>{

  // }
  console.log("=============BAGDATAAAAAAAAAAAAAA=======================");
  console.log(bagData);
  console.log("============BAGDATAAAAA END========================");
  
  const getToatal = () => {
    let tempTotal = 0;
    bagData.map((item) => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  return (
    <SafeAreaView
      className="w-full h-full flex"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Appbar style={{ height: 50, backgroundColor: theme.colors.background }}>
        <Appbar.BackAction
          onPress={() => {
            if (screen == null) {
              navigation.replace("BottomNav");
            } else {
              navigation.goBack();
            }
          }}
        />
        <Appbar.Content title="My Bag" titleStyle={{ fontSize: 18 }} />
      </Appbar>
      {isbagData == false ? (
        <View className="mt-48 items-center">
          <Lottie
            className="w-48 h-48  "
            source={require("../assets/shopping-bag.json")}
            autoPlay
            loop
          />
          <Text>Your Bag is Empty !</Text>
          <Button
            className="mt-2"
            mode="contained"
            onPress={() => {
              navigation.navigate("AllOffers");
            }}
          >
            Shop Now
          </Button>
        </View>
      ) : (
        <View className="flex-1">
          <FlatList
            data={bagData}
            renderItem={({ item, index }) => {
              return (
                <BagProduct
                  item={item}
                  onRemoveFromBag={() => {
                    dispatch(removeFromCart(index));
                    setIsBagData(null);
                  }}
                />
              );
            }}
          />
          <View className="flex-row px-4 justify-between mt-2 mb-2">
            <View className="flex-col">
              <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}>
                Grand Total
              </Text>
              <View className="flex-row">
                <Text className="mt-0.5" style={{ fontSize: 13 }}>
                  ₹ {}
                </Text>
                <Text
                  className="text-blue-600"
                  style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}
                >
                  {getToatal()}
                </Text>
              </View>
            </View>
            <Button
              className="rounded-[5px] h-10 mt-2 bg-yellow-600"
              mode="contained"
            >
              Place Order
            </Button>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
