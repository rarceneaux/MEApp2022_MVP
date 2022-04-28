
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterChildScreen from "../screens/RegisterChildScreen";
import LoginScreen from "../screens/LoginScreen";
import ActivityRugScreen from '../screens/ActivityRugScreen';
import AlphabetDetailsScreen from '../screens/AlphabetDetailsScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ headerStyle: {backgroundColor: "#098731"}, headerTintColor:'white'}} name="Welcome To The ME APP" component={WelcomeScreen}/>
    <Stack.Screen options={{ headerStyle: {backgroundColor: "#098731"}, headerTintColor:'white'}}  name="Login" component={LoginScreen}/>
    <Stack.Screen options={{ headerStyle: {backgroundColor: "#098731"}, headerTintColor:'white'}} name="Register" component={RegisterChildScreen}/>
    <Stack.Screen options={{ headerStyle: {backgroundColor: "#098731"}, headerTintColor:'white'}} name="Activity Rug" component={ActivityRugScreen}/>
    <Stack.Screen options={{ headerStyle: {backgroundColor: "#098731"}, headerTintColor:'white'}} name="Alphabets" component={AlphabetDetailsScreen}/>
  </Stack.Navigator>
);


export default AuthNavigator;