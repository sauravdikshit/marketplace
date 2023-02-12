import React, { useState,useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import ReactNativeReactQuery from "./components/Hooks/react-query-native";
import {firebase} from '../market-place/config'
import AllOffers from "./screens/AllOffers";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import BottomNav from "./screens/BottomNav";
import Search from "./screens/Search";
import Electronics from "./screens/Electronics";
import Jewelery from "./screens/Jewelery";
import MenClothing from "./screens/BoyClothing";
import WomenClothing from "./screens/GirlClothing";
import ProductDetails from "./screens/ProductDetails";
import Account from "./screens/Account";
import AccountNav from "./screens/AccountNav";
import Profile from "./screens/Profile";
import Orders from "./screens/Orders";
import WishList from "./screens/WishList";
import BuyAgain from "./screens/BuyAgain";
import Bag from "./screens/Bag";
import HomeNav from "./screens/HomeNav";
import Notifications from "./screens/Notifications";
import { PreferencesContext } from "./context/ThemeContext";
import store from '../market-place/redux/store/Store'


import { CombinedDefaultTheme, CombinedDarkTheme } from "./theme";
import { Provider as PaperProvider} from "react-native-paper";







const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
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
       <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider theme={theme} >
        <ReactNativeReactQuery />
        <QueryClientProvider client={queryClient}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
      </NavigationContainer>
      </QueryClientProvider>
      </PaperProvider>
      </GestureHandlerRootView>
      </PreferencesContext.Provider>
    )
    
  }

  return(
     <Provider store={store}>
    <PreferencesContext.Provider value={preferences}>
     <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider theme={theme}  >
        <ReactNativeReactQuery />
        <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
      </PaperProvider>
      </GestureHandlerRootView>
      </PreferencesContext.Provider>
      </Provider>
   

  )
};

export default App;
