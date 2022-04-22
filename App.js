import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from "./app/components/AppButton";
import AlphabetCard from "./app/components/AlphabetCard";



export default function App() {
  return (
  <AlphabetCard
    letter="A"
    image={require("./app/assets/apple.jpg")}
    word="Apple"
  />
  );
}


