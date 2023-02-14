import React, { useEffect } from "react";
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
import { firebase } from "../config";
import { useSelector } from "react-redux";
import { translate } from "./language/Translate";

export default function Account() {
  const theme = useTheme();
  const navigation = useNavigation();

  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  const language = useSelector((state) => state.LanguageReducers);

  return (
    <SafeAreaView
      className="flex-1 w-full h-full"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Appbar
        className=""
        style={{ height: 50, backgroundColor: theme.colors.background }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content />

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
        <Appbar.Action
          icon="magnify"
          color="green"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />

        <Appbar.Action
          icon="bell"
          color="green"
          onPress={() => navigation.navigate("Notifications")}
        />
      </Appbar>
      <ScrollView className="px-2">
        <View className="mt-2">
          <Text
            className="px-2"
            style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}
          >
            {language == "English"
              ? translate[2].english
              : language == "Hindi"
              ? translate[2].hindi
              : language == "Bangla"
              ? translate[2].bangla
              : language == "Telugu"
              ? translate[2].telugu
              : language == "Tamil"
              ? translate[2].tamil
              : language == "Kannada"
              ? translate[2].kannada
              : language == "Malayalam"
              ? translate[2].malayalam
              : null}
          </Text>
          <Card
            className="m-2 mt-2 border-[0.1px]"
            theme={{ roundness: 2 }}
            style={{
              height: responsiveHeight(14),
              backgroundColor: theme.colors.cardcolor,
            }}
          >
            <View className="flex-row justify-between m-4  mt-4 ">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                {language == "English"
                  ? translate[3].english
                  : language == "Hindi"
                  ? translate[3].hindi
                  : language == "Bangla"
                  ? translate[3].bangla
                  : language == "Telugu"
                  ? translate[3].telugu
                  : language == "Tamil"
                  ? translate[3].tamil
                  : language == "Kannada"
                  ? translate[3].kannada
                  : language == "Malayalam"
                  ? translate[3].malayalam
                  : null}
              </Text>
              <IconAsw
                onPress={() => {
                  navigation.navigate("Orders");
                }}
                name="arrow-forward-ios"
                size={18}
                color="gray"
              />
            </View>

            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                {language == "English"
                  ? translate[4].english
                  : language == "Hindi"
                  ? translate[4].hindi
                  : language == "Bangla"
                  ? translate[4].bangla
                  : language == "Telugu"
                  ? translate[4].telugu
                  : language == "Tamil"
                  ? translate[4].tamil
                  : language == "Kannada"
                  ? translate[4].kannada
                  : language == "Malayalam"
                  ? translate[4].malayalam
                  : null}
              </Text>
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
          </Card>
        </View>
        <View className="mt-2">
          <Text
            className="px-2"
            style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}
          >
            {language == "English"
              ? translate[5].english
              : language == "Hindi"
              ? translate[5].hindi
              : language == "Bangla"
              ? translate[5].bangla
              : language == "Telugu"
              ? translate[5].telugu
              : language == "Tamil"
              ? translate[5].tamil
              : language == "Kannada"
              ? translate[5].kannada
              : language == "Malayalam"
              ? translate[5].malayalam
              : null}
          </Text>
          <Card
            className="m-2 mt-2 border-[0.1px]"
            theme={{ roundness: 2 }}
            style={{
              height: responsiveHeight(27),
              backgroundColor: theme.colors.cardcolor,
            }}
          >
            <View className="flex-row justify-between m-4  mt-4">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                {language == "English"
                  ? translate[6].english
                  : language == "Hindi"
                  ? translate[6].hindi
                  : language == "Bangla"
                  ? translate[6].bangla
                  : language == "Telugu"
                  ? translate[6].telugu
                  : language == "Tamil"
                  ? translate[6].tamil
                  : language == "Kannada"
                  ? translate[6].kannada
                  : language == "Malayalam"
                  ? translate[6].malayalam
                  : null}
              </Text>
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
            <Divider />
            <View className="flex-row justify-between m-4 mt-4">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                {language == "English"
                  ? translate[7].english
                  : language == "Hindi"
                  ? translate[7].hindi
                  : language == "Bangla"
                  ? translate[7].bangla
                  : language == "Telugu"
                  ? translate[7].telugu
                  : language == "Tamil"
                  ? translate[7].tamil
                  : language == "Kannada"
                  ? translate[7].kannada
                  : language == "Malayalam"
                  ? translate[7].malayalam
                  : null}
              </Text>
              <IconAsw
                onPress={() => {
                  navigation.navigate("Profile");
                }}
                name="arrow-forward-ios"
                size={18}
                color="gray"
              />
            </View>
            <Divider />
            <View className="flex-row justify-between m-4 mt-4">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                {language == "English"
                  ? translate[8].english
                  : language == "Hindi"
                  ? translate[8].hindi
                  : language == "Bangla"
                  ? translate[8].bangla
                  : language == "Telugu"
                  ? translate[8].telugu
                  : language == "Tamil"
                  ? translate[8].tamil
                  : language == "Kannada"
                  ? translate[8].kannada
                  : language == "Malayalam"
                  ? translate[8].malayalam
                  : null}
              </Text>

              <IconAsw
                onPress={() => {
                  navigation.navigate("Language");
                }}
                name="arrow-forward-ios"
                size={18}
                color="gray"
              />
            </View>
            <Divider />
            <View className="flex-row justify-between m-4 mt-4 ">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                {language == "English"
                  ? translate[9].english
                  : language == "Hindi"
                  ? translate[9].hindi
                  : language == "Bangla"
                  ? translate[9].bangla
                  : language == "Telugu"
                  ? translate[9].telugu
                  : language == "Tamil"
                  ? translate[9].tamil
                  : language == "Kannada"
                  ? translate[9].kannada
                  : language == "Malayalam"
                  ? translate[9].malayalam
                  : null}
              </Text>
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
          </Card>
        </View>
        <View className="mt-2">
          <Text
            className="px-2"
            style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}
          >
            {language == "English"
              ? translate[10].english
              : language == "Hindi"
              ? translate[10].hindi
              : language == "Bangla"
              ? translate[10].bangla
              : language == "Telugu"
              ? translate[10].telugu
              : language == "Tamil"
              ? translate[10].tamil
              : language == "Kannada"
              ? translate[10].kannada
              : language == "Malayalam"
              ? translate[10].malayalam
              : null}
          </Text>
          <Card
            className="m-2 mt-2 border-[0.1px]"
            theme={{ roundness: 2 }}
            style={{
              height: responsiveHeight(14),
              backgroundColor: theme.colors.cardcolor,
            }}
          >
            <View className="flex-row justify-between m-4 mt-4">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                {language == "English"
                  ? translate[11].english
                  : language == "Hindi"
                  ? translate[11].hindi
                  : language == "Bangla"
                  ? translate[11].bangla
                  : language == "Telugu"
                  ? translate[11].telugu
                  : language == "Tamil"
                  ? translate[11].tamil
                  : language == "Kannada"
                  ? translate[11].kannada
                  : language == "Malayalam"
                  ? translate[11].malayalam
                  : null}
              </Text>
              <IconAsw
                onPress={() => {
                  navigation.navigate("WishList");
                }}
                name="arrow-forward-ios"
                size={18}
                color="gray"
              />
            </View>
            <Divider />
            <View className="flex-row justify-between m-4 mt-4 ">
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                {language == "English"
                  ? translate[12].english
                  : language == "Hindi"
                  ? translate[12].hindi
                  : language == "Bangla"
                  ? translate[12].bangla
                  : language == "Telugu"
                  ? translate[12].telugu
                  : language == "Tamil"
                  ? translate[12].tamil
                  : language == "Kannada"
                  ? translate[12].kannada
                  : language == "Malayalam"
                  ? translate[12].malayalam
                  : null}
              </Text>
              <Switch
                className="bottom-2"
                color={"green"}
                value={isThemeDark}
                onValueChange={toggleTheme}
              />
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
            style={{ height: responsiveHeight(6) }}
          >
            <Text
              className=""
              style={{
                color: theme.colors.buttoncolor,
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 18,
              }}
            >
              {language == "English"
                ? translate[13].english
                : language == "Hindi"
                ? translate[13].hindi
                : language == "Bangla"
                ? translate[13].bangla
                : language == "Telugu"
                ? translate[13].telugu
                : language == "Tamil"
                ? translate[13].tamil
                : language == "Kannada"
                ? translate[13].kannada
                : language == "Malayalam"
                ? translate[13].malayalam
                : null}
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
