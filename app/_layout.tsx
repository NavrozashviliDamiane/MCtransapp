import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import CustomSplash from '../components/CustomSplash'; 

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Poppins-Black.ttf'),
  });
  const [isSplashVisible, setSplashVisible] = useState(true); 

  useEffect(() => {
    if (loaded) {
      setSplashVisible(false);
    }
  }, [loaded]);

  if (isSplashVisible) {
    return <CustomSplash onFinish={() => setSplashVisible(false)} />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="Login" options={{ animation: 'slide_from_right' }} />

      </Stack>
    </ThemeProvider>
  );
}
