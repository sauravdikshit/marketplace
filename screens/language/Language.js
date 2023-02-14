import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Pressable,
} from "react-native";
import { Avatar, Card, Appbar, useTheme, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import IconFeather from "react-native-vector-icons/Feather";
import FormSubmit from "../../components/Form/FormSubmit";
import { useState,useEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { useNavigation } from "@react-navigation/native";
import { changeLanguage } from "../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { translate } from "./Translate";

export default function Language() {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.LanguageReducers);

  const [currentlanguage, setCurrentLanguage] = useState("English");
  const languages = [
    {
      Title: "English",
      Subtitle: null,
    },
    {
      Title: "Hindi",
      Subtitle: "हिन्दी",
    },
    {
      Title:"Bangla",
      Subtitle:'বাংলা'
    },
    {
      Title: "Telugu",
      Subtitle: "తెలుగు",
    },
    {
      Title: "Tamil",
      Subtitle: "தமிழ்",
    },
    {
      Title: "Kannada",
      Subtitle: "ಕನ್ನಡ",
    },
    {
      Title: "Malayalam",
      Subtitle: "മലയാളം",
    },
 
  ];

  const changeLang = (currlang) => {
      setCurrentLanguage(currlang)
      dispatch(changeLanguage(currlang))
  }



console.log("====================================");
      console.log(currentlanguage,language);
      console.log("====================================");
  useEffect(() => {
     
       
       
    
  
  
    
  }, [currentlanguage])
  

  return (
    <SafeAreaView
      className=" h-full w-full  "
      style={{ backgroundColor: theme.colors.background }}
    >
      <Appbar
        className="bg-white"
        style={{ backgroundColor: theme.colors.background }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
     
        <Appbar.Content title={(language=="English")?translate[0].english:(language=='Hindi')?translate[0].hindi:(language=="Bangla")?translate[0].bangla:(language=="Telugu")?translate[0].telugu:(language=="Tamil")?translate[0].tamil:(language=='Kannada')?translate[0].kannada:(language=='Malayalam')?translate[0].malayalam:null}
      //   {language=='English'  ?translate[0].english:translate[0].hindi ? (language=='Telugu'):translate[0].telugu }
        
        />
      </Appbar>

      <ScrollView className="px-4">
        {/* <View className="mt-16 mb-5 px-2">
              <Text variant="bodyMedium" style={{ fontSize: 22 }}>
                Select your language
              </Text>
            </View> */}
        <View className="mt-2 ">
          {languages.map((val, id) => {
            return (
              <Pressable onPress={() => changeLang(val.Title)} key={id}>
                <Card
                  className=" rounded-[12px]  bg-[#FFFBFF] h-20 mb-4 mx-0.5"
                  theme={{ roundness: 2 }}
                  style={{
                    backgroundColor: theme.colors.cardcolor,
                  }}
                >
                  <Card.Title
                    title={val.Title}
                    titleStyle={{
                      fontSize: 15,
                      fontWeight: "600",
                      marginTop: 10,
                      color: "#201A17",
                    }}
                    subtitle={val.Subtitle}
                    subtitleNumberOfLines={2}
                    left={(props) => (
                      <Icon
                        size={22}
                        name={
                          language == val.Title
                            ? "checkbox"
                            : "square-outline"
                        }
                        color={language == val.Title ? "green" : "black"}
                      />
                    )}
                  />
                </Card>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
      <View className="mb-5 px-4">
        {/* <TouchableOpacity
          onPress={() => {
            //     navigation.navigate("Intro");
          }}
        >
          <FormSubmit>Continue</FormSubmit>
        </TouchableOpacity> */}

        <Button
          className="justify-center"
          mode="contained"
          theme={{ roundness: 5 }}
          onPress={() => {
           
            navigation.navigate("BottomNav");
          }}
          style={{ height: responsiveHeight(6) }}
        >
          <Text
            className=""
            style={{
              color: theme.colors.buttoncolor,
              fontFamily: "Quicksand_600SemiBold",
              fontSize: 15,
            }}
          >
            {(language=="English")?translate[1].english:(language=='Hindi')?translate[1].hindi:(language=="Bangla")?translate[1].bangla:(language=="Telugu")?translate[1].telugu:(language=="Tamil")?translate[1].tamil:(language=='Kannada')?translate[1].kannada:(language=='Malayalam')?translate[1].malayalam:null}
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
