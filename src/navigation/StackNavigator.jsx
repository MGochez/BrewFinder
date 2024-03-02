import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen'
import Favorites from '../screens/Favorites'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(()=>{navigation.navigate('HomeScreen')}, 2000)
  },[]);

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
        options={{ headerBackVisible: false, gestureEnabled: false }}
      />
      <Stack.Screen 
        name='DetailScreen' 
        component={DetailScreen}
      />
      <Stack.Screen
        name='Favorites'
        component={Favorites}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;