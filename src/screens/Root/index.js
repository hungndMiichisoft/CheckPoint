import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'screens/HomeScreen';
import SplashScreen from 'screens/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="splash" component={SplashScreen} /> */}
        <Stack.Screen name="home">
          {() => <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="List" component={HomeScreen} />
          </Tab.Navigator>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}