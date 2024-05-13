import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen(); // Call the function when the component is mounted

    return () => {
      // Cleanup function
    };
  }, [fontsLoaded]); // Run effect when fontsLoaded changes

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Stack/>
   
  );
}
