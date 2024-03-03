import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { Image } from "react-native";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import Favorites from "../screens/Favorites";
import BrewLogo from "../assets/images/BrewLogo.png";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 2000);
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{ headerShown: false, headerBackVisible: false }}
      />
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerBackVisible: false,
          gestureEnabled: false,
          headerLeft: () => (
            <Image
              source={BrewLogo}
              style={{
                height: 35,
                width: 25,
                objectFit: "contain",
                marginRight: 5,
              }}
            />
          ),
          headerTitle: "BrewFinder",
          headerRight: () => (
            <Button
              radius={"md"}
              color={"#e45290"}
              onPress={() => navigation.navigate("Favorites")}
            >
              My Favorites
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name='DetailScreen'
        component={DetailScreen}
        options={{ headerTitle: "Details" }}
      />
      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{ headerTitle: "My Favorites" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
