import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignUpScreen from "../screen/SignUpScreen";
import LoginScreen from "../screen/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import NavBar from "../component/NavBar";
import Detail from "../screen/Detail";
import Product from "../component/Product";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="NavBar">

       <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
            <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="NavBar"
        component={NavBar}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: true,
          headerBackTitle: "Back", }}
      />
        <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
