import React, { useState,useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {firebase} from '../config'


import AllOffers from "./AllOffers";
import Login from "./Login";
import Signup from "./Signup";
import BottomNav from "./BottomNav";
import Search from "./Search";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import MenClothing from "./BoyClothing";
import WomenClothing from "./GirlClothing";
import ProductDetails from "./ProductDetails";
import Account from "./Account";
import AccountNav from "./AccountNav";
import Profile from "./Profile";
import Orders from "./Orders";
import WishList from "./WishList";
import BuyAgain from "./BuyAgain";
import Bag from "./Bag";
import HomeNav from "./HomeNav";
import Notifications from "./Notifications";
import { PreferencesContext } from "../context/ThemeContext";

import { CombinedDarkTheme,CombinedDefaultTheme } from '../theme';
import { Provider as PaperProvider } from "react-native-paper";





const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [initializing , setInitialzing] = useState(true)
  const [user,setUser] = useState();
  const [isThemeDark, setIsThemeDark] = React.useState(false);


  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;


  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  
  // handle user state changes
  function onAuthStateChanged(user){
    setUser(user)
    if(initializing){
      setInitialzing(false)

    } 
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    console.log('====================================');
    console.log(subscriber,"HSKJHKHKSHKHSKHSKHKS");
    console.log('====================================');
  
    return subscriber;
  
   
  }, [])

  if(initializing) return null
  console.log('====================================');
  console.log(user);
  console.log('====================================');

  if (!user){
    return(
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme} >
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
      </PreferencesContext.Provider>
    )
    
  }

  return(
    <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme} >
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="AllOffers" component={AllOffers} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Electronics" component={Electronics} />
      <Stack.Screen name="Jewelery" component={Jewelery} />
      <Stack.Screen name="MenClothing" component={MenClothing} />
      <Stack.Screen name="WomenClothing" component={WomenClothing} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Account" component={Account} />
      {/* <Stack.Screen name="AccountNav" component={AccountNav} /> */}
      <Stack.Screen  name="Profile" component={Profile}/>
       <Stack.Screen name="Orders" component={Orders} />
       <Stack.Screen name="WishList" component={WishList} />
       <Stack.Screen name="BuyAgain" component={BuyAgain} />
       <Stack.Screen name="Bag" component={Bag} />
       <Stack.Screen name="HomeNav" component={HomeNav} />
       <Stack.Screen name="Notifications" component={Notifications}/>
      </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
      </PreferencesContext.Provider>

  )
};

export default AppNavigator;
