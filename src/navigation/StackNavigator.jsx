import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen'
import Favorites from '../screens/Favorites'
import LogoIconMini from '../components/icons/LogoIconMini';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(()=>{
       navigation.navigate('HomeScreen')
    //navigation.dispatch(NavigationActions.)
  }, 2000)
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
        options={{
          headerBackVisible: false, 
          gestureEnabled: false, 
          //headerLeft: () => null,
          headerTitle: 'BrewFinder',
          headerRight: () => <Button radius={'md'}
                              color={'#e45290'}
                              onPress={() => navigation.navigate('Favorites')}
                              >My Favorites</Button>}}
      />
      <Stack.Screen 
        name='DetailScreen' 
        component={DetailScreen}
        options={{headerTitle: 'Details' }}
      />
      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{headerTitle: 'My Favorites'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;