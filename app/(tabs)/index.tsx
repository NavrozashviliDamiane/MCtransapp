import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View, StatusBar, Easing, Dimensions, BackHandler, Alert } from 'react-native';
import { router } from 'expo-router';
import LogoWithCircles from '@/components/LogoWithCircles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HomeScreen() {
  const [logoBackgroundColor, setLogoBackgroundColor] = useState('white');
  const [displayedText, setDisplayedText] = useState(''); // Holds the progressively typed text
  const fullText = "Welcome!"; // Full text to display

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0 for fade-in effect
  const bounceAnim = useRef(new Animated.Value(-50)).current; // Initial position for bounce effect
  const typingSpeed = 50; // Typing speed in milliseconds (faster typing)

  useEffect(() => {
    const onBackPress = () => {
      if (router.canGoBack()) {
        router.back();
      } else {
        Alert.alert("Exit App", "Do you want to exit?", [
          { text: "Cancel", style: "cancel" },
          { text: "Yes", onPress: () => BackHandler.exitApp() }
        ]);
      }
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);
    return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, []);

  useEffect(() => {
    // Typing effect: update displayedText progressively to simulate typing
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
        
        // Start bounce animation after typing completes
        Animated.spring(bounceAnim, {
          toValue: 0, // Bring back to original position
          friction: 3, // Adjust to control bounce effect strength
          useNativeDriver: true,
        }).start();
      }
    }, typingSpeed); // Faster typing speed

    // Fade-in animation to gradually increase opacity
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade in to opacity 1
      duration: fullText.length * typingSpeed, // Sync fade-in duration with typing effect
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, []);

  const handlePress = () => {
    setLogoBackgroundColor('rgba(255, 255, 255, 0.8)'); // Temporarily set to white with 50% opacity
    setTimeout(() => {
      setLogoBackgroundColor('white'); // Revert back after 50ms with 50% opacity
      router.push("./login"); // Navigate after color reverts
    }, 30);
};


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Apply fadeAnim and bounceAnim for combined fade-in and bounce effect */}
      <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim, transform: [{ translateY: bounceAnim }] }]}>
        {displayedText}
      </Animated.Text>

      {/* Wrap LogoWithCircles in Pressable */}
      <Pressable onPress={handlePress}>
        <LogoWithCircles backgroundColor={logoBackgroundColor} />
      </Pressable>

      <View style={styles.textContainer}>
        <Text style={styles.companyName}>MC Trans</Text>
        <Text style={styles.subtitle}>Marine Cargo Trans</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3629B7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    position: 'absolute',
    top: screenHeight * 0.10, 
    left: screenWidth * 0.1, 
    fontSize: screenWidth * 0.085, 
    color: '#FFFFFF',
    fontWeight: '200',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: screenHeight * 0.02,
  },
  companyName: {
    fontSize: screenWidth * 0.08, 
    color: '#FFFFFF',
    fontWeight: '900',
  },
  subtitle: {
    fontSize: screenWidth * 0.035,
    color: '#FFFFFF',
    letterSpacing: 2,
  },
});
