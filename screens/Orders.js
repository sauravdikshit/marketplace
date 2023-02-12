import React, { useState ,useEffect} from "react";
import { View } from "react-native";
import { Text,useTheme,Appbar, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export default function Orders() {
      const theme = useTheme()
      const navigation = useNavigation()
      const [ordersData, setOrdersData] = useState(null)
      useEffect(() => {
       setOrdersData(null)
      }, [ordersData])
      
  return (
    <SafeAreaView className=" fliex-1 w-full h-full"
    style={{ backgroundColor: theme.colors.background }}>
        <Appbar
        className=""
        style={{ height: 50, backgroundColor: theme.colors.background}}
       >
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title="My Orders"
          titleStyle={{ fontSize: 18, }}
        />
      

        <Appbar.Action
          icon="magnify"
          color="green"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
        
        <Appbar.Action icon="shopping" color="green" onPress={() => {navigation.navigate("Bag")}} />
      </Appbar>
    {ordersData == null ? ( 
       <View className=" mt-36 items-center">
        <LottieView
          className="h-56"
          source={require("../assets/checking-orders.json")}
          autoPlay
          loop
        />
        <Text>Oops, you haven't placed an order yet</Text>
        <Button
        className="mt-2" 
        mode="contained"
        onPress={()=>{navigation.navigate("Home")}}
        >Orders Now</Button>
      </View>
      ):(
            <Text>This is your orders Details...</Text>

      )}
    
    </SafeAreaView>
  );
}
