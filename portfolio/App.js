import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ExperienceScreen from './screens/ExperienceScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About Me' }} />
        <Stack.Screen name="Experience" component={ExperienceScreen} options={{ title: 'Experience' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


