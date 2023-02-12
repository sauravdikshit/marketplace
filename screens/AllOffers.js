import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Badge, Text, useTheme } from "react-native-paper";
import Loder from "../components/Loder";
import * as GetDataApi from "../api/productapi";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addItemToWishlist } from "../redux/actions/Actions";

const AllOffers = () => {
  const bagData = useSelector((state) => state.Reducers);
  const wishListData = useSelector((state) => state.Reducers2);
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [productData, setProductData] = useState([]);
  const [screen, setScreen] = useState("Alloffers");
  const [isbagData, setIsBagData] = useState(null);
  const [isWishListData, setIsWishListData] = useState(null);
  console.log("useeffect before");

  useEffect(() => {
    console.log("useeffect called");
    setVisible(true);
  
    getData();
  }, []);
  // const items = useSelector(state =>state)
  // console.log("WISHLIST_________",items)
  const containerStyle = {
    backgroundColor: "white",
    padding: 25,
    margin: 35,
    height: 20,
    width: 20,
    justifycontent: "center",
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    elevation: 5,
  };

  const getData = async (text) => {
    try {
      const response = await GetDataApi.getProductData();
      console.log(response.data);
      setVisible(false);
      setProductData(response.data);
    } catch (error) {
      console.log("Error");
    }
  };
  console.log("data", productData);
  return (
    <SafeAreaView
      className="flex-1  w-full h-full "
      style={{ backgroundColor: theme.colors.background }}
    >
      <Appbar style={{ height: 50, backgroundColor: theme.colors.background }}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("BottomNav");
          }}
        />
        <Appbar.Content title="All Offers" titleStyle={{ fontSize: 18 }} />
        <Appbar.Action
          icon="magnify"
          color="green"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
        {wishListData == 0 ? (
          <Appbar.Action
            icon="heart"
            color="green"
            onPress={() => {
              navigation.navigate("WishList");
            }}
          />
        ) : (
          <View>
            <Appbar.Action
              icon="heart"
              color="green"
              onPress={() => {
                navigation.navigate("WishList");
              }}
            />
            <Badge className="absolute z-0 right-2 mt-2.5" size={15}>
              <Text className="items-center text-white">
                {wishListData.length}
              </Text>
            </Badge>
          </View>
        )}

        {bagData == 0 ? (
          <Appbar.Action
            icon="shopping"
            color="green"
            onPress={() => {
              navigation.dispatch(
                CommonActions.navigate({
                  name: "Bag",
                  params: { title: "Bag" },
                })
              );
            }}
          />
        ) : (
          <View>
            <Appbar.Action
              icon="shopping"
              color="green"
              onPress={() => {
                navigation.dispatch(
                  CommonActions.navigate({
                    name: "Bag",
                    params: { title: "Bag" },
                  })
                );
              }}
            />
            <Badge className="absolute z-0 right-2 mt-2.5" size={15}>
              <Text className="items-center text-white">{bagData.length}</Text>
            </Badge>
          </View>
        )}
      </Appbar>
      <View className="flex-1  ">
        <FlatList
          numColumns={2}
          data={productData}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return (
              <ProductCard
                item={item}
                onAddWishList={(x) => {
                  dispatch(addItemToWishlist(x));
                }}
                // onAddToCart={(x) => {
                //   {
                //     dispatch(addItemToCart(x));
                //   }
                // }}
              />
            );
          }}
        />
      </View>
      <View className=" absolute mt-72 ml-32">
        <Loder visible={visible} contentContainerStyle={containerStyle} />
      </View>
    </SafeAreaView>
  );
};

export default AllOffers;
