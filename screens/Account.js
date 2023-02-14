import React,{useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { View, Pressable } from "react-native";
import {
  Card,
  Text,
  useTheme,
  Appbar,
  Divider,
  Button,
  Switch,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconAsw from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFontisto from "react-native-vector-icons/Fontisto";
import { ScrollView } from "react-native-gesture-handler";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { PreferencesContext } from "../context/ThemeContext";
import {firebase} from '../config'


export default function Account() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);


  return (
     
    <SafeAreaView
      className="flex-1 w-full h-full"
      style={{ backgroundColor: theme.colors.background }}
      
    >
    
      <Appbar className=""  
      style={{ height: 50, backgroundColor: theme.colors.background}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content/>

        {/* <Pressable
          className=" m-2 rounded-[12px] ml-8 h-12 w-60"
          style={{
            elevation: 5,
            backgroundColor: theme.colors.onPrimary,
          }}
          onPress={() => navigation.navigate("Search")}
        >
          <View className="flex-row items-center m-2  space-x-6 top-0.5">
            <Icon name="search" size={18} color={"green"} />
            <Text
              className="text-gray-400 "
              style={{ fontFamily: "Quicksand_500Medium", fontSize: 16 }}
            >
              Search Market Place
            </Text>
          </View>
        </Pressable> */}
        <Appbar.Action  icon="magnify" color="green" onPress={() => {navigation.navigate("Search")}} />

        <Appbar.Action icon="bell" color="green" onPress={()=>navigation.navigate("Notifications")} />
      </Appbar>
      <ScrollView className="px-2">
        <View className="mt-2">
          <Text
            className="px-2"
            style={{ fontFamily:"Poppins_600SemiBold", fontSize: 16 }}
          >
            Orders
          </Text>
          <Card
            className="m-2 mt-2 border-[0.1px]"
            theme={{ roundness: 2 }}
            style={{
              height: responsiveHeight(14),
              backgroundColor: theme.colors.cardcolor
            }}
          >
          
          <View className="flex-row justify-between m-4  mt-4 ">
             

             <Text style={{ fontFamily:"Quicksand_600SemiBold", fontSize: 16 }}>
             Your Orders
             </Text>
             <IconAsw onPress={()=>{navigation.navigate("Orders")}} name="arrow-forward-ios" size={18} color="gray" />
           </View>

         
        
            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
             
              <Text style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}>
              Market Place Store
              </Text>
              <IconAsw name="arrow-forward-ios" size={18} color="gray"/>
            </View>
          </Card>
        </View>
        <View className="mt-2">
          <Text
            className="px-2"
            style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}
          >
            Account & Settings
          </Text>
          <Card
            className="m-2 mt-2 border-[0.1px]"
            theme={{ roundness: 2 }}
            style={{
              height: responsiveHeight(27),
              backgroundColor: theme.colors.cardcolor
            }}
          >
            <View className="flex-row justify-between m-4  mt-4">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                Your Addresses
              </Text>
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
            <Divider />
            <View className="flex-row justify-between m-4 mt-4">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                Manage Your Profile
              </Text>
              <IconAsw onPress={()=>{navigation.navigate("Profile")}} name="arrow-forward-ios" size={18} color="gray" />
            </View>
            <Divider />
            <View className="flex-row justify-between m-4 mt-4">
              <Text
                style={{ fontFamily:"Quicksand_600SemiBold", fontSize: 16 }}
              >
                Select Language
              </Text>

              <IconAsw  onPress={()=>{navigation.navigate("Language")}} name="arrow-forward-ios" size={18} color="gray" />
            </View>
            <Divider />
            <View className="flex-row justify-between m-4 mt-4 ">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                Saved Cards & Wallet
              </Text>
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
          </Card>
        </View>
        <View className="mt-2">
          <Text
            className="px-2"
            style={{ fontFamily:"Poppins_600SemiBold", fontSize: 16 }}
          >
            Personalization
          </Text>
          <Card
            className="m-2 mt-2 border-[0.1px]"
            theme={{ roundness: 2 }}
            style={{
              height: responsiveHeight(14),
              backgroundColor: theme.colors.cardcolor
            }}
          >
            <View className="flex-row justify-between m-4 mt-4">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                Wish List
              </Text>
              <IconAsw onPress={()=>{navigation.navigate("WishList")}} name="arrow-forward-ios" size={18} color="gray" />
            </View>
            <Divider />
            <View className="flex-row justify-between m-4 mt-4 ">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                DarK Mode
              </Text>
              <Switch  
              className="bottom-2"  
              color={'green'}
             value={isThemeDark}
              onValueChange={toggleTheme} />
            </View>
          </Card>
        </View>
        <View className="mt-24">
          <Button
          className="justify-center"
            mode="contained"
            icon={"logout"}
            theme={{ roundness: 5 }}
            onPress={() => {
              firebase.auth().signOut();
            }}
            style={{height:responsiveHeight(6)}}
          >
            <Text
            className=""
              style={{
                color: theme.colors.buttoncolor,
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 18,
                 }}
            >
              Logout
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
