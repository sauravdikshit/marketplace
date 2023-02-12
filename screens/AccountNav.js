import React, { useState, useEffect,useCallback } from "react";
import { Alert, Image, Pressable, TouchableOpacity, View } from "react-native";
import {
  Text,
  Card,
  Appbar,
  useTheme,
  Button,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import IconAsw from "react-native-vector-icons/FontAwesome5";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ScrollView } from "react-native-gesture-handler";
import * as GetDataApi from "../api/productapi";
import { firebase } from "../config";


var imageProduct1 = "";
var imageProduct2 = "";
var imageProduct3 = "";
var imageProduct4 = "";


export default function AccountNav({route}) {
  console.log('====================================');
  console.log(route,"my route");
  console.log('====================================');

  const theme = useTheme();
  const [userName, setUserName] = useState(" ");
  const navigation = useNavigation();
  const [productData, setProductData] = useState([]);
  const [profile,setProfile] = useState(null)
 

  

  useEffect(() => {
    console.log(
      "useeffect called-------------------------------------------------"
    );
    
 
    getData();
  }, []);

  useFocusEffect(
   useCallback(() => {
      getImageData();
      getUser();
      getData();
    }, [])
  );

  const getUser = async () => {
    try {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setUserName(snapshot.data());
          } else {
            console.log("Users does not exits");
          }
        });
    } catch (error) {
      console.log("errror", error.message);
    }
  };

  const getData = async () => {
    try {
      const response = await GetDataApi.getProductData();
      console.log(response.data);
      console.log("ImageResponse", response.data[0].image);

      imageProduct1 = response.data[0].image;
      imageProduct2 = response.data[2].image;
      imageProduct3 = response.data[19].image;
      imageProduct4 = response.data[17].image;

      setProductData(response.data);
    } catch (error) {
      console.log("Error");
    }
  };
  console.log("data", productData);



    const getImageData = async () => {
    setProfile(await AsyncStorage.getItem("Image")) ;

 

  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Appbar
        className=""
        style={{ height: 50, backgroundColor: theme.colors.background }}
      >
        <View className="flex-col items-center px-2">
          <IconAsw name="redhat" size={30} color={"green"} />
          <Text
            className="text-green-600 "
            style={{ fontFamily: "Quicksand_300Light", fontSize: 13 }}
          >
            Market Place
          </Text>
        </View>
        <Appbar.Content />

        <Appbar.Action
          icon="magnify"
          color="green"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
        <Appbar.Action  icon="bell" color="green" onPress={()=>navigation.navigate("Notifications")} />
      </Appbar>
      <ScrollView className="px-2">
        <View className="flex-row mt-2  justify-between items-center">
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 19 }}>
            Hello,{" "}
            <Text
              style={{
                color: theme.colors.primary,
                fontFamily: "Quicksand_700Bold",
                fontSize: 20,
              }}
            >
              {userName.name}
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            {/* <Avatar.Icon icon={{uri:image}} size={45} /> */}
            <View  className="w-16 h-16 rounded-full border-[2px] border-green-600 items-center">
            <Image className="rounded-full" resizeMode="contain" style={{height:responsiveHeight(7.3),width:responsiveWidth(15.2)}} source={{uri:profile}}/>

            </View>
            
          </TouchableOpacity>
        </View>
        <View className="flex-row mt-2 justify-between">
          {/* <Button
            mode="outlined"
            onPress={() => console.log("Pressed")}
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(42),
              justifyContent: "center",
              backgroundColor: theme.colors.accountbtncolor,
            }}
            theme={{ roundness: 5 }}
          >
            <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
              Your Orders
            </Text>

          </Button> */}
          <Pressable onPress={()=>{navigation.navigate("Orders")}}>
          <Card  className="m-0.5 items-center border-[0.1px]" 
          style={{
              height: responsiveHeight(6.5),
              width: responsiveWidth(42),
              justifyContent: "center",
              backgroundColor: theme.colors.accountbtncolor,
            }}
            theme={{ roundness: 3 }}>
            <Text  style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
              Your Orders
            </Text>

          </Card>
          </Pressable>
          {/* <Button
            mode="outlined"
            onPress={() => console.log("Pressed")}
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(42),
              justifyContent: "center",
              backgroundColor: theme.colors.accountbtncolor,
            }}
            theme={{ roundness: 5 }}
          >
            <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
              Buy Again
            </Text>
          </Button> */}
          <Pressable  onPress={()=>{navigation.navigate("BuyAgain")}}>

       
          <Card  className="m-0.5 items-center border-[0.1px]" 
          style={{
              height: responsiveHeight(6.5),
              width: responsiveWidth(42),
              justifyContent: "center",
              backgroundColor: theme.colors.accountbtncolor,
            }}
            theme={{ roundness: 3 }}>
            <Text  style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
            Buy Again
            </Text>

          </Card>
          </Pressable>
        </View>
        <View className="flex-row mt-2 justify-between">
        <Pressable  onPress={()=>{navigation.navigate("WishList")}}>
        <Card  className="m-0.5 items-center border-[0.1px]" 
          style={{
              height: responsiveHeight(6.5),
              width: responsiveWidth(42),
              justifyContent: "center",
              backgroundColor: theme.colors.accountbtncolor,
            }}
            theme={{ roundness: 3 }}>
            <Text  style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
            Your WishList
            </Text>

          </Card>
          </Pressable>
          {/* <Button
            mode="outlined"
            onPress={() => console.log("Pressed")}
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(42),
              justifyContent: "center",
              backgroundColor: theme.colors.accountbtncolor,
            }}
            theme={{ roundness: 5 }}
          >
            <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
              Your WishList
            </Text>
          </Button> */}
          {/* <Button
            mode="outlined"
            onPress={() => {
              navigation.navigate("Account");
            }}
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(42),
              justifyContent: "center",
              backgroundColor: theme.colors.accountbtncolor,
            }}
            theme={{ roundness: 5 }}
          >
            <Text
              className=""
              style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}
            >
              Your Account
            </Text>
          </Button> */}
          <Pressable  onPress={() => {
              navigation.navigate("Account");
            }}>
          <Card  className="m-0.5 items-center border-[0.1px]" 
          style={{
              height: responsiveHeight(6.5),
              width: responsiveWidth(42),
              justifyContent: "center",
              backgroundColor: theme.colors.accountbtncolor,
            }}
            theme={{ roundness: 3 }}>
            <Text  style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
            Your Account
            </Text>

          </Card>
          </Pressable>
          
        </View>
        <View className="flex-row mt-4 justify-between">
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}>
            Your Orders
          </Text>
          <Text
            style={{
              color: theme.colors.primary,
              fontFamily: "Quicksand_600SemiBold",
              fontSize: 15,
            }}
          >
            See all
          </Text>
        </View>
        <ScrollView horizontal={true} className="" showsHorizontalScrollIndicator={false}>
          <View className="flex-row m-1  space-x-3">
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2 self-center"
                resizeMode="center"
                source={{
                  uri: imageProduct1,
                }}
                style={{
                  height: responsiveHeight(23),
                  width: responsiveWidth(39),
                }}
              />
            </Card>
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className=" self-center"
                resizeMode="center"
                source={{
                  uri: imageProduct2,
                }}
                style={{
                  height: responsiveHeight(25),
                  width: responsiveWidth(39),
                }}
              />
            </Card>
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2 self-center"
                resizeMode="center"
                source={{
                  uri: imageProduct3,
                }}
                style={{
                  height: responsiveHeight(23),
                  width: responsiveWidth(39),
                }}
              />
            </Card>
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2 self-center"
                resizeMode="center"
                source={{
                  uri: imageProduct4,
                }}
                style={{
                  height: responsiveHeight(23),
                  width: responsiveWidth(39),
                }}
              />
            </Card>
          </View>
        </ScrollView>
        <View className="flex-row mt-2 justify-between">
          <Text style={{ fontFamily:"Poppins_600SemiBold", fontSize: 16 }}>
            Your wishList
          </Text>
          <Text
            style={{
              color: theme.colors.primary,
              fontFamily: "Quicksand_600SemiBold",
              fontSize: 15,
            }}
          >
            See all
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex-row m-1 space-x-3">
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(27),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2 self-center"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/iphone.png?alt=media&token=ff689e52-d4d6-4663-95a7-5c929025c263",
                }}
                style={{
                  height: responsiveHeight(20),
                  width: responsiveWidth(39),
                }}
              />
              <Text className="self-center m-1.5"
              style={{fontFamily:'Poppins_600SemiBold',fontSize:13}}>IPHONE 12 PRO</Text>
              <Text className="self-center bottom-2 text-green-600"
              style={{fontFamily:'Poppins_500Medium',fontSize:12}}>A low as Rs.3315</Text>
            </Card>

            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(27),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2 self-center"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/pendrive.png?alt=media&token=64fa58ab-8c6e-4d14-a4b4-078a16393663",
                }}
                style={{
                  height: responsiveHeight(20),
                  width: responsiveWidth(39),
                }}
              />
              <Text className="self-center m-1.5"
              style={{fontFamily:'Poppins_600SemiBold',fontSize:13}}>SONY PENDRIVE 12GB</Text>
              <Text className="self-center bottom-2 text-green-600"
              style={{fontFamily:'Poppins_500Medium',fontSize:12}}>A low as Rs.315</Text>
            </Card>
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(27),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2 self-center"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/graytent.png?alt=media&token=3d4fd5cc-910d-4ef2-b3f3-8e4857237441",
                }}
                style={{
                  height: responsiveHeight(20),
                  width: responsiveWidth(39),
                }}
              />
              <Text className="self-center m-1.5"
              style={{fontFamily:'Poppins_600SemiBold',fontSize:13}}>SAFARI TENT </Text>
              <Text className="self-center bottom-2 text-green-600"
              style={{fontFamily:'Poppins_500Medium',fontSize:12}}>A low as Rs.2315</Text>
            </Card>

            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(27),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/macbookpro.png?alt=media&token=6b673a02-0709-40b8-883a-3d383bca4d57",
                }}
                style={{
                  height: responsiveHeight(18),
                  width: responsiveWidth(42),
                }}
              />
            </Card>
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(27),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/gopro.png?alt=media&token=8c0e3f43-59fc-463c-99f3-ff107c00d7da",
                }}
                style={{
                  height: responsiveHeight(18),
                  width: responsiveWidth(42),
                }}
              />
            </Card>

            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(27),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/haierled.png?alt=media&token=ee98da2b-8ef9-4fec-b41e-eb798e9a881f",
                }}
                style={{
                  height: responsiveHeight(20),
                  width: responsiveWidth(42),
                }}
              />
            </Card>
          </View>
        </ScrollView>
        <View className="flex-row mt-2 justify-between">
          <Text style={{ fontFamily:"Poppins_600SemiBold", fontSize: 16 }}>
            Your account
          </Text>
          <Pressable onPress={()=>{
            navigation.navigate("Account")
          }}>
          <Text
            style={{
              color: theme.colors.primary,
              fontFamily: "Quicksand_600SemiBold",
              fontSize: 15,
            }}
          >
            See all
          </Text>

          </Pressable>
        
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex-row mt-2 space-x-2">
            <Button
              mode="outlined"
              onPress={() => console.log("Pressed")}
              style={{
                height: responsiveHeight(7),
                width: responsiveWidth(44),
                justifyContent: "center",
                backgroundColor: theme.colors.accountbtncolor,
              }}
              theme={{ roundness: 8 }}
            >
              <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
                Your Addresses
              </Text>
            </Button>
            <Button
              mode="outlined"
              onPress={() => {navigation.navigate("Profile")}}
              style={{
                height: responsiveHeight(7),
                width: responsiveWidth(44),
                justifyContent: "center",
                backgroundColor: theme.colors.accountbtncolor,
              }}
              theme={{ roundness: 8 }}
            >
              <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
                Your Profiles
              </Text>
            </Button>
            <Button
              mode="outlined"
              onPress={() => console.log("Pressed")}
              style={{
                height: responsiveHeight(7),
                width: responsiveWidth(44),
                justifyContent: "center",
                backgroundColor: theme.colors.accountbtncolor,
              }}
              theme={{ roundness: 8 }}
            >
              <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
                Manage UPI
              </Text>
            </Button>
            <Button
              mode="outlined"
              onPress={() => console.log("Pressed")}
              style={{
                height: responsiveHeight(7),
                width: responsiveWidth(44),
                justifyContent: "center",
                backgroundColor: theme.colors.accountbtncolor,
              }}
              theme={{ roundness: 8 }}
            >
              <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 15 }}>
                Manage Your Profiles
              </Text>
            </Button>
          </View>
        </ScrollView>

        <View className="flex-row mt-2 justify-between">
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}>
            Buy again
          </Text>
          <Text
            style={{
              color: theme.colors.primary,
              fontFamily: "Quicksand_600SemiBold",
              fontSize: 15,
            }}
          >
            See all
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex-row m-1 space-x-4">
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-4 self-center"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/sonywatch.png?alt=media&token=2ca75bce-f795-4741-b2d6-28e0d7a27693",
                }}
                style={{
                  height: responsiveHeight(18),
                  width: responsiveWidth(42),
                }}
              />
            </Card>

            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/shoes.png?alt=media&token=482d82a0-281b-4f89-bfa1-8a11d0945ef3",
                }}
                style={{
                  height: responsiveHeight(18),
                  width: responsiveWidth(42),
                }}
              />
            </Card>
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/graytent.png?alt=media&token=3d4fd5cc-910d-4ef2-b3f3-8e4857237441",
                }}
                style={{
                  height: responsiveHeight(18),
                  width: responsiveWidth(42),
                }}
              />
            </Card>

            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/appliewatch.png?alt=media&token=0ae18aa1-36a2-4581-9bc1-f5cb3e2b4764",
                }}
                style={{
                  height: responsiveHeight(18),
                  width: responsiveWidth(42),
                }}
              />
            </Card>
            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/gopro.png?alt=media&token=8c0e3f43-59fc-463c-99f3-ff107c00d7da",
                }}
                style={{
                  height: responsiveHeight(18),
                  width: responsiveWidth(42),
                }}
              />
            </Card>

            <Card
              className="border-[0.2px] border-[#a1b594]"
              theme={{ roundness: 5 }}
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(42),
                backgroundColor: theme.colors.cardcolor,
              }}
            >
              <Image
                className="mt-2"
                resizeMode="center"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/fir-app-1ca1c.appspot.com/o/haierled.png?alt=media&token=ee98da2b-8ef9-4fec-b41e-eb798e9a881f",
                }}
                style={{
                  height: responsiveHeight(20),
                  width: responsiveWidth(42),
                }}
              />
            </Card>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
