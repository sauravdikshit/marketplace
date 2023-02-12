import React, { useState, useEffect, createRef, useMemo } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Avatar,
  Appbar,
  Divider,
  useTheme,
  Card,
  Button,
} from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import BottomSheet from "reanimated-bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";
import AsyncStorage from "@react-native-async-storage/async-storage";

var image = "";

export default function Profile() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [hasCameraPermission, setHasCamereaPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(false);

  const [imageFront, setImageFront] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTouchable, setIsTouchable] = useState(false);
  const snapPoints = useMemo(() => ["22%", "0%"], []);
  const bs = createRef();

  useEffect(() => {
    (async () => {
      const camStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasCamereaPermission(camStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);
  useEffect(() => {
    console.log("====================================");
    console.log("Second useEffect Called");
    console.log("====================================");
    getImageData();
  }, []);
  const imageDir = FileSystem.cacheDirectory + "profileImage/";
  const imageFileUri = (imageName) =>
    imageDir + `profileImage_${imageName}_marketplace.png`;

  async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(imageDir);
    if (!dirInfo.exists) {
      console.log("Image directory doesn't exist, creating...");
      await FileSystem.makeDirectoryAsync(imageDir, { intermediates: true });
    }
  }

  const getSingleImage = async (imageName, imageId) => {
    try {
      await ensureDirExists();

      const fileUri = imageFileUri(imageName);
      const fileInfo = await FileSystem.getInfoAsync(fileUri);

      if (!fileInfo.exists) {
        // console.log("Image isn't cached locally. Downloading...");

        let options = {
          from: imageId,
          to: fileUri,
        };
        await FileSystem.copyAsync(options);
      }

      return fileUri;
    } catch (error) {
      console.error(error);
    }
  };

  //Gallery function

  const pickImage = async () => {
    bs.current.snapTo(1);

    setIsOpen(false);
    setSelectedGallery(true);

    const galleryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!galleryStatus.granted) {
      Alert.alert("Permission denied");
    }

    let capturedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    //Gallery Condition
    var imageSize = capturedImage.base64.length * (3 / 4) - 2;

    if (!capturedImage.cancelled) {
      console.log(imageSize, "imageSize");
      if (imageSize > 1000000) {
        const manipResult = await ImageManipulator.manipulateAsync(
          capturedImage.localUri || capturedImage.uri,
          [{ resize: { height: 1000, width: 1000 } }],
          { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );
        let imagefile = await getSingleImage(Date.now(), manipResult.uri);
        console.log(imagefile, "myimageFile");

        setImageFront(imagefile);
      } else {
        Alert.alert("File is too large! MAX-SIZE is 1MB ");
      }
    }
  };

  //Camera Function
  const pickCamera = async () => {
    setSelectedCamera(true);
    bs.current.snapTo(1);
    setIsOpen(false);

    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();

    if (cameraStatus.status !== "granted") {
      alert("Permission denied");
    }

    let capturedImage = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    //camera condition
    var imageSize = capturedImage.base64.length * (3 / 4) - 2;

    if (!capturedImage.cancelled) {
      console.log(imageSize, "imageSize");
      if (imageSize > 3000000) {
        const manipResult = await ImageManipulator.manipulateAsync(
          capturedImage.localUri || capturedImage.uri,
          [{ resize: { height: 1000, width: 1000 } }],
          { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );

        let imagefile = await getSingleImage(Date.now(), manipResult.uri);
        console.log(imagefile, "myimageFile");
        setImageFront(imagefile);
      } else {
        Alert.alert("File is too large! MAX-SIZE is 1MB ");
      }
    }
  };
  const handleSnapPress = async () => {
    console.log("Start BottomSheet..");
    setIsOpen(true);
    bs.current.snapTo(0);
    setIsTouchable(true);
  };
  const renderInner = () => (
    <View
      className="flex  w-full h-full border-[0.5px] border-[#c5c7c5] px-2 rounded-t-3xl top-2"
      style={{ backgroundColor: theme.colors.background, elevation: 5 }}
    >
      <View className="mt-2 items-center">
        <View
          className="w-8 h-1.5 rounded-[10px]"
          style={{ backgroundColor: theme.colors.bottomsheethandle }}
        ></View>
      </View>
      <View className="flex flex-row ml-5 mt-5">
        <Icon size={30} name="folderopen" color="green" />
        <View>
          <TouchableOpacity onPress={pickImage}>
            <Text className="text-lg ml-5">Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row ml-5 mt-6">
        <Icon size={29} name="camerao" color="green" />

        <TouchableOpacity onPress={pickCamera}>
          <Text className="text-lg ml-5">Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const storeData = async () => {
    console.log("====================================");
    console.log("storedata xcall");
    console.log("====================================");

    try {
      await AsyncStorage.setItem("Image", imageFront);
      console.log("Dataaaaaaaaaaaaaaaaa", imageFront);
    } catch (e) {
      Alert.alert("Something is wrong");
    }
  };
  const getImageData = async () => {
    setImageFront(await AsyncStorage.getItem("Image"));

    console.log("Image", image);
  };

  return (
    <SafeAreaView
      className="flex-1 w-full h-full"
      style={[{ backgroundColor: theme.colors.background }]}
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

      <BottomSheet
        ref={bs}
        initialSnap={1}
        snapPoints={snapPoints}
        enableHandlePanningGesture={true}
        renderContent={renderInner}
        onCloseEnd={() => {
          setIsOpen(false);
          setIsTouchable(false);
        }}
      />

      <Image
        resizeMode="cover"
        source={require("../assets/banner.jpg")}
        style={[
          {
            height: responsiveHeight(14),
            width: responsiveWidth(100),
            opacity: isOpen ? 0.2 : 1,
          },
        ]}
      />
      <View className="absolute z-40 mt-24 px-4  items-center">
        <Card.Cover
          className="rounded-full border-[2px] border-green-600"
          style={[
            { height: responsiveHeight(14.9), width: responsiveWidth(31.5) },
          ]}
          source={{ uri: imageFront }}
        ></Card.Cover>
        <View className="absolute  left-24 top-20 items-center">
          <Pressable onPress={() => handleSnapPress()}>
            <Card
              className="bg-green-600 justify-center rounded-full"
              style={{
                height: responsiveHeight(5),
                width: responsiveWidth(10.5),
              }}
            >
              <Icon
                name="camera"
                size={20}
                color="white"
                style={{ marginLeft: 11 }}
              />
            </Card>
          </Pressable>
        </View>
      </View>
      <Button
        onPress={() => {
          storeData();
          //  navigation.navigate("AccountNav")
          //  navigation.setParams({imageFront:imageFront})
        }}
      >
        Okay
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 45,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
});
