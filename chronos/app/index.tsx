import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation/types';

import MainScreen from './src/screens/MainScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import { COLORS } from './src/constants/colors';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {

  const [loaded, error] = useFonts({
    'Anton': require('@/assets/fonts/Anton-Regular.ttf'),
    'Stetica': require('@/assets/fonts/AA Stetica Bold.otf'),
  });
  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  return (
      <Stack.Navigator
      screenOptions={{
        animation: 'fade'
      }}
      >
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{ 
            headerShown: false,
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: '#fff',
          }} 
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ 
            title: 'Настройки',
            headerStyle: {
              backgroundColor: '#607D8B',
            },
            headerTintColor: '#fff',
          }} 
        />
      </Stack.Navigator>
  );
}