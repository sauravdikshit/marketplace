import { View,Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Alert, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ActivityIndicator,
  Button,
  Card,
  TextInput,
  Text,
  useTheme,
} from "react-native-paper";
import Form from "../components/Form/context";
import FormField from "../components/Form/FormField";
import { SPEC } from "../specifications/form-field-specs";
import FormSubmit from "../components/Form/FormSubmit";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loder from "../components/Loder";
import {firebase} from '../config'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("sauravkumar937@gmail.com");
  const [password, setPassword] = useState("Saurav@0");
  const [hidePass, setHidePass] = useState(true);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({});
  const [initializing,setInitialzing] = useState()

  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);
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
  const theme = useTheme();
  const emailValidations = [SPEC.EMAIL_FORMAT_INVALID, SPEC.EMAIL_REQUIRED];
  const passwordValidations = [
    SPEC.PASSWORD_FORMAT_INVALID,
    SPEC.PASSWORD_REQUIRED,
  ];

  // const login = () => {
  //   setVisible(true);
  //   if (email == "" && password == "") {
  //   } else {
  //     setTimeout(() => {
  //       getData();
  //     }, 1000);
  //   }
  // };
  //   useEffect(() => {

  //  setTimeout(()=>{
  //   getData();
  //  },5000)

  //   }, [])

  // const getData = async () => {
  //   const mEmail = await AsyncStorage.getItem("Email");
  //   const mPassword = await AsyncStorage.getItem("Password");

  //   if (email === mEmail && mPassword === password) {
  //     setVisible(false);
  //     navigation.navigate("BottomNav");
  //   } else {
  //     alert("Wrong Email & Password");
  //     setVisible(false);
  //   }
  //   console.log("Data1", mEmail);
  //   console.log("Data1.1", mPassword);
  // };
  // function onAuthStateChanged(user){
  //   setUser(user)
  //   if(initializing){
  //     setInitialzing(false)

  //   } 
  // }

  const login = async (email,password) =>{

    try{
      await firebase.auth().signInWithEmailAndPassword(email,password)
      // const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      // console.log('====================================');
      // console.log("Sucriber",subscriber);
      // console.log("User",user);
      // console.log('====================================');

    }
    catch (error){
      alert(error.message)

    }

  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex flex-1"
    >
      <SafeAreaView
        className="  w-full h-full bg-white px-4"
        style={{ backgroundColor: theme.colors.onPrimary }}
      >
        <ScrollView>
          <View className="top-32">
            <Text
              className="text-5xl left-4"
              style={{ color: theme.colors.primary,fontFamily:'Quicksand_600SemiBold',fontSize:50 }}
            
            >
              Login
            </Text>
            <Text className="left-5 text-gray-400 top-1"  style={{ fontFamily:'Quicksand_600SemiBold',fontSize:18}}>
              Please sign in to continue.
            </Text>
          </View>
          <View className="items-center  mt-32">
            <Form>
              <FormField
                required
                keyboardType="email"
                label="Username"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                className="mt-8 px-4"
                limit={25}
                validations={emailValidations}
              />
              <FormField
                required
                keyboardType="numric"
                label="Password"
                mode="outlined"
                value={password}
                onChangeText={setPassword}
                className="mt-4 px-4"
                limit={8}
                validations={passwordValidations}
                s
                secureTextEntry={hidePass ? true : false}
                icon="eye"
                onPress={() => setHidePass(!hidePass)}
              />
              <FormSubmit
                className=" left-24 mt-8 "
                style={{ fontFamily:'Quicksand_600SemiBold',fontSize:30}}
                icon={"chevron-right"}
                direction="ltr"
                onPress={() => {
                  login(email,password)
                }}
                contentStyle={{ flexDirection: "row-reverse" }}
              >
              <Text style={{ color: theme.colors.buttoncolor,fontFamily:'Quicksand_600SemiBold',fontSize:17}}>LOGIN</Text>
              
              </FormSubmit>
              {/* <Button
            className="bg-green-600 rounded-full top-8 h-12 bottom-8 m-20 justify-center"
            onPress={() => {
              Alert.alert("hello");
            }}
          >
            <Text className="text-white text-base">Login</Text>
          </Button> */}
            </Form>
          </View>

          <View className="mt-20  flex-row justify-center">
            <Text className="top-1"   style={{ fontFamily:'Quicksand_600SemiBold',fontSize:15}}>Don't have an account ? </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Signup",email);
              }}
            >
              <Text
                className=""
                style={{ color: theme.colors.primary,fontFamily:'Quicksand_600SemiBold',fontSize:18 }}
              >
                Sign up
              </Text>
            </Pressable>
          </View>
         
        </ScrollView>
        <View className=" absolute mt-72 ml-32">
          <Loder visible={visible} contentContainerStyle={containerStyle} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;
