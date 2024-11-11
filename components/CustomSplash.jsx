import { View, Image, Animated, Dimensions } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useRef } from 'react';

SplashScreen.preventAutoHideAsync();

export default function CustomSplash({ onFinish }) {
  const scale = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 3, 
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      SplashScreen.hideAsync();
      if (onFinish) onFinish();
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
      <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'black',
                transform: [{ scale }], 
              }}
            />
          </View>
        }
      >
        <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/images/splash.png')} style={{ width: 120, height: 120 }} resizeMode="contain" />
        </View>
      </MaskedView>
    </View>
  );
}
