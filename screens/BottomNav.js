import React,{useEffect, useState,useCallback} from "react";
import { BottomNavigation, Text,useTheme,Badge } from "react-native-paper";
import HomeNav from "./HomeNav";
import Category from "./Category";
import AccountNav from "./AccountNav";
import Bag from "./Bag";
import { useFocusEffect } from "@react-navigation/native";

import { useSelector } from "react-redux";
import Reducers from "../redux/reducers/Reducers";
import { set } from "react-native-reanimated";



export default function BottomNav() {
  const theme =useTheme()
  const [index, setIndex] = useState(0);
  const bagData = useSelector((state)=> state.Reducers)
  const [isBagData, setIsBagData] = useState(bagData)


 console.log('====================================');
 console.log("BAGDATA______original___",bagData.length)
 console.log('====================================');
 
  useEffect(()=>{

   setIsBagData(bagData.length)
   
  },[isBagData])

  useFocusEffect(
    useCallback(() => {
     
    
     }, [isBagData])
   );

  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "categories", title: "Categories", focusedIcon: "apps" },
    { key: "account", title: "Account", focusedIcon: "account" },
    
    { key: "bag", title: "Bag", focusedIcon: "shopping" ,badge: isBagData.length },
   
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeNav,
    categories: Category,
    account: AccountNav,
    bag: Bag,
  });

  return (
    <BottomNavigation
    barStyle={{backgroundColor:theme.colors.background,height:65}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="green"
      // getBadge={}
     
     
    />
    
  );
}
