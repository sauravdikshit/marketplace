import { View,  } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Text, useTheme, Appbar, Button, Card } from "react-native-paper";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from "@react-navigation/native";
import WishListCard from '../components/ProductCard/WishListCard'
import { FlatList } from 'react-native-gesture-handler';
import { removeFromWishlist } from '../redux/actions/Actions';

export default function WishList() {
    const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [isWishListData,setIsWishListData] = useState(null)
      
      const wishListData = useSelector((state) =>state.Reducers2)
  // console.log("WISHLIST______original___",wishListData.Reducers2.length)

  useEffect(()=>{
    setIsWishListData(wishListData)
  },[isWishListData])
  return (
      <SafeAreaView
      className="w-full h-full flex"
      style={{ backgroundColor: theme.colors.background }}>
       <Appbar style={{ height: 50, backgroundColor: theme.colors.background }}>
        <Appbar.BackAction
          onPress={() => {
           
              navigation.goBack();
         
          }}
        />
        <Appbar.Content title="Wishlist" titleStyle={{ fontSize: 18 }} />
      </Appbar>
      {isWishListData == false ? 
      (
        <View className="mt-48 items-center">
          <Lottie
            className="w-52 h-52  "
            source={require("../assets/empty.json")}
            autoPlay
            loop
          />
          <Text>WishList is Empty !</Text>
          <Button
            className="mt-2"
            mode="contained"
            onPress={() => {
              navigation.navigate("AllOffers");
            }}
          >
           Create collection
          </Button>
        </View>


      ):(

        <View className="flex-1">
      <FlatList 
        data={wishListData}
        renderItem={({item,index}) => {
          return <WishListCard item={item}
          onRemoveFromWishList={()=>{
            dispatch(removeFromWishlist(index))
            setIsWishListData(null)
          }}
           />
        }}
      />
    </View>
      ) }
       

      </SafeAreaView>
   
  )
}