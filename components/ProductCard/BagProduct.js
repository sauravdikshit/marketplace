import React, { useState } from "react";
import { View,  TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Card ,Divider,FAB,Text,useTheme} from "react-native-paper";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/AntDesign";
// import { addItemToCart } from "../../redux/actions/Actions";
// import { useDispatch } from "react-redux";

export default function BagProduct({item,onRemoveFromBag }) {
      // const dispatch = useDispatch()
      const navigation = useNavigation();
      const [count,setCount] = useState(1)
      const theme=useTheme()
      // const addToCart = (item) => {
      //   dispatch(addItemToCart(item))
      // }
      return (
        <View
          className="my-1 mt-1"
          style={{
            height: responsiveHeight(28),
            width: responsiveWidth(96),
          }}
        >
          <Card
            className=" rounded-t-[5px] rounded-b-[5px]  mx-2"
            elevation={2}
            style={{
              height: responsiveHeight(28), // 50% of window height
              width: responsiveWidth(96), // 50% of window width
              backgroundColor: theme.colors.cardcolor
            }}
        
          > 
          <View className="flex-row p-1 px-2">
          <TouchableOpacity
              onPress={() => navigation.navigate("ProductDetails", { item } )}
            
            >
            <Image 
            className="w-20 h-28"  
            source={{
            uri: item.image,
                }}
                resizeMode="contain" />
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
          <View className="px-1">
          <View className="flex-row space-x-2 bg-green-50 h-10 w-24 rounded-full p-2 justify-center">

          {count == 1 ? (
            <View>
          <FAB 
            className=" rounded-full bg-white "
            icon="delete"
            customSize={25}
            onPress={() =>{onRemoveFromBag()}}
            
           />

          </View>
          ):(
            <View>
          <FAB 
            className=" rounded-full bg-white "
            icon="minus"
            customSize={25}
            onPress={() =>{setCount(count-1)}}
            
           />

          </View>
          )}
          
         <View className="w-4 items-center mt-1 ">
         <Text 
         className="text-black"
          style={{fontFamily:'Poppins_600SemiBold',fontSize:12}}>{count}</Text>

         </View>
          
           <View>
           <FAB 
            className=" rounded-full bg-white "
            icon="plus"
            onPress={() =>{setCount(count+1)}}
            customSize={25}
           />
           </View>

           </View>
           </View>
           <Divider className="mt-2 mb-2"/>
           <View className="items-center bottom-2 mt-2">
           <View className="flex-row space-x-6  ml-32 left-0 mt-0.5 ">
           <Button
           className="rounded-[8px] "
            mode="outlined"
            onPress={()=>{onRemoveFromBag()}}
            >Remove</Button>
            <Button
             className="rounded-[8px]"
            mode="contained"
            
            >Checkout</Button>
           </View>

           </View>
          
          
          
    
    
         
          </Card>
        </View>
  )
}