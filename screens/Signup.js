import { View, Pressable, Image, Alert } from "react-native";
import React, { useState, useMemo } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Form from "../components/Form/context";
import FormField from "../components/Form/FormField";
import { SPEC } from "../specifications/form-field-specs";
import FormSubmit from "../components/Form/FormSubmit";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme, Text, Button } from "react-native-paper";

import { EMAIL_REGEX } from "../constants";
import { firebase } from "../config";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("Saurav");
  const [userEmail, setUserEmail] = useState("sauravkumar937@gmail.com");
  const [userPassword, setUserPassword] = useState("Saurav@0");
  const [confirmPassword, setConfirmPassword] = useState("Saurav@0");
  const [hidePass, setHidePass] = useState(true);
  const [confhidePass, setConfHidePass] = useState(true);
  const theme = useTheme();
  const nameValidations = useMemo(
    () => [SPEC.NAME_REQUIRED, SPEC.NAME_VALID],
    []
  );

  const emailValidations = useMemo(() => [
    SPEC.EMAIL_REQUIRED,
    SPEC.EMAIL_FORMAT_INVALID,
  ]);
  const passwordValidations = useMemo(() => [
    SPEC.PASSWORD_REQUIRED,
    SPEC.PASSWORD_FORMAT_INVALID,
  ]);
  // const StoreData = async () => {
  //   if (userPassword === confirmPassword) {
  //     try {
  //       await AsyncStorage.setItem("Name", name);
  //       await AsyncStorage.setItem("Email", userEmail);
  //       await AsyncStorage.setItem("Password", userPassword);
  //       await AsyncStorage.setItem("ConfirmPassword", confirmPassword);
  //     } catch (e) {
  //       Alert.alert("Something is wrong");
  //     }
  //     navigation.navigate("Login");
  //   } else {
  //     Alert.alert("Your Password is not Match");
  //   }
  // };
  // console.log("Data", name);

  const registerUser = async (userEmail, userPassword, name) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://market-place-71dbd.firebaseapp.com",
          })
          .then(() => {
            alert("Verification email sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                name,
                userEmail,
                userPassword,
              });
          })

          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handlePassword = async () => {
    setConfirmPassword;
    if (userPassword == confirmPassword) {
    } else {
      alert("Password is not match");
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-white w-full h-full px-4"
      style={{ backgroundColor: theme.colors.onPrimary }}
    >
      <ScrollView>
        <View>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 380, height: 100 }}
          />
        </View>

        <View className="mt-8 left-2">
          <Text
            className="text-3xl"
            style={{
              color: theme.colors.primary,
              fontFamily: "Quicksand_600SemiBold",
              fontSize: 26,
            }}
          >
            Create Account
          </Text>
        </View>
        <View className="items-center">
          <Form>
            <FormField
              required
              keyboardType="alphabet"
              label="Full Name"
              mode="outlined"
              value={name}
              onChangeText={setName}
              className="mt-4 px-4"
              limit={18}
              validations={nameValidations}
            />
            <FormField
              required
              keyboardType="Email"
              label="Email"
              mode="outlined"
              value={userEmail}
              onChangeText={setUserEmail}
              className="mt-4 px-4"
              validations={emailValidations}
            />
            <FormField
              required
              keyboardType="numric"
              label="Password"
              mode="outlined"
              value={userPassword}
              onChangeText={setUserPassword}
              className="mt-4 px-4"
              limit={8}
              validations={passwordValidations}
              secureTextEntry={confhidePass ? true : false}
              icon="eye"
              onPress={() => setConfHidePass(!confhidePass)}
            />
            <FormField
              required
              keyboardType="numric"
              label="Confirm Password"
              mode="outlined"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="mt-4 px-4"
              limit={8}
              validations={passwordValidations}
              secureTextEntry={hidePass ? true : false}
              icon="eye"
              onPress={() => setHidePass(!hidePass)}
            />
            <FormSubmit
              className=" left-24 mt-8 "
              icon={"chevron-right"}
              onPress={() => {
                if (userPassword === confirmPassword) {
                  registerUser(userEmail, userPassword, name);
                } else {
                  alert("Password is not match");
                }
              }}
              contentStyle={{ flexDirection: "row-reverse" }}
            >
              <Text
                style={{
                  color: theme.colors.buttoncolor,
                  fontFamily: "Quicksand_600SemiBold",
                  fontSize: 17,
                }}
              >
                SIGNUP
              </Text>
            </FormSubmit>
            {/* <Button
            className="bg-green-600 rounded-full top-8 h-12 bottom-8 m-20 justify-center"
            onPress={() => {
              navigation.navigate("Login" ,{name:name})
            }}
          >
            <Text className="text-white text-base">send data</Text>
          </Button> */}
          </Form>
        </View>
        <View className="mt-8  flex-row justify-center">
          <Text
            className="top-1"
            style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 15 }}
          >
            Already have an account ?{" "}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              className="text-lg "
              style={{
                color: theme.colors.primary,
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 18,
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
