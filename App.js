import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

//Img picker
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from "./app/components/AppButton";
import AlphabetCard from "./app/components/AlphabetCard";
import AlphabetDetailsScreen from "./app/screens/AlphabetDetailsScreen";
import ActivityRugScreen from "./app/screens/ActivityRugScreen";
import AlphabetLetter from "./app/components/AlphabetLetter";
import Screen from "./app/components/Screen";
import ChildInfoForm from "./app/components/ChildInfoForm";

import LoginScreen from "./app/screens/LoginScreen";
import RegisterChildScreen from "./app/screens/RegisterChildScreen";
import ChildPictureUploader from "./app/components/ChildPictureUploader";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";

import UploadChildPhotoScreen from "./app/screens/UploadChildPhotoScreen";

export default function App() {

// const [imageUri, setImageUri] = useState();

// const requestPermission = async () => {
//   const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   if (!granted) alert("Please enable permission to access photo roll");
// };

// useEffect(() => {
// requestPermission();
// }, [])

// const selectImage = async () => {
//   try { 
//     const result = await  ImagePicker.launchImageLibraryAsync();
//     if(!result.cancelled)
//     setImageUri(result.uri);
//   } catch (error) {
//     console.log('Error Reading an Image', error)
//   }
// };
{/* <NavigationContainer>
  <AuthNavigator/>
</NavigationContainer> */}


return (
<UploadChildPhotoScreen/>
  );
}


