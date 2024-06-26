import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Image, View } from "react-native";
import LoginScreen from "../screen/LoginScreen";
import SignUpScreen from "../screen/SignUpScreen";
import HomeScreen from "../screen/HomeScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import MenuScreen from "../screen/MenuScreen";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SearchScreen from "../screen/SearchScreen";
import IntroductionScreen from "../screen/IntroductionScreen";
import StoreDetailsScreen from "../screen/StoreDetailsScreen";
import OrderScreen from "../screen/OrderScreen";
import Order from "../navigation/Order";
import StoreListScreen from "../screen/StoreListScreen";

const Tab = createBottomTabNavigator();
export class NavBar extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            elevation: 0,
            backgroundColor: "#ffffff",
            height: 80,
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome
                  name="home"
                  size={24}
                  color={focused ? "#ff0751" : "#e0dbe6"}
                />

                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Trang Chủ
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               <Entypo name="shopping-cart" size={24} color={focused ? "#ff0751" : "#e0dbe6"} />
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Giỏ Hàng
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="StoreListScreen"
          component={StoreListScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="heart" size={24}
                  color={focused ? "#ff0751" : "#e0dbe6"} />
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Cửa Hàng
                </Text>
              </View>
            ),
          }}
        />
        
         
         <Tab.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               <AntDesign name="user" size={24}
                  color={focused ? "#ff0751" : "#e0dbe6"} />
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Tôi
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default NavBar;
