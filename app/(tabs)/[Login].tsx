import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoWithCircles from '@/components/LogoWithCircles';
import BackButton from '@/components/BackButton';
import PrimaryButton from '@/components/PrimaryButton';
import { router } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Login() {
  const navigation = useNavigation();

  // Animated values for each text element
  const welcomeTextAnim = useRef(new Animated.Value(-screenWidth)).current;
  const subTextAnim = useRef(new Animated.Value(screenWidth)).current;
  const companyNameAnim = useRef(new Animated.Value(-screenWidth)).current;
  const companySubtitleAnim = useRef(new Animated.Value(screenWidth)).current;
  const successTextAnim = useRef(new Animated.Value(-screenWidth)).current;
  const infoTextAnim = useRef(new Animated.Value(screenWidth)).current;

  useEffect(() => {
    // Start animations with a bounce effect
    Animated.spring(welcomeTextAnim, {
      toValue: 0,
      friction: 2,
      useNativeDriver: true,
    }).start();

    Animated.spring(subTextAnim, {
      toValue: 0,
      friction: 2,
      useNativeDriver: true,
    }).start();

    Animated.spring(companyNameAnim, {
      toValue: 0,
      friction: 2,
      useNativeDriver: true,
    }).start();

    Animated.spring(companySubtitleAnim, {
      toValue: 0,
      friction: 2,
      useNativeDriver: true,
    }).start();

    Animated.spring(successTextAnim, {
      toValue: 0,
      friction: 2,
      useNativeDriver: true,
    }).start();

    Animated.spring(infoTextAnim, {
      toValue: 0,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Use the reusable BackButton component */}
        <BackButton onPress={() => navigation.goBack()} text="Sign up" />
      </View>

      <View style={styles.whiteContainer}>
        <Animated.Text style={[styles.welcomeText, { transform: [{ translateX: welcomeTextAnim }] }]}>
          Welcome!
        </Animated.Text>
        <Animated.Text style={[styles.subText, { transform: [{ translateX: subTextAnim }] }]}>
          Dealer MC Trans, sign in to continue
        </Animated.Text>
        
        <LogoWithCircles backgroundColor="#F0EFF9" />

        <Animated.Text style={[styles.companyName, { transform: [{ translateX: companyNameAnim }] }]}>
          MC Trans
        </Animated.Text>
        <Animated.Text style={[styles.companySubtitle, { transform: [{ translateX: companySubtitleAnim }] }]}>
          Marine Cargo Trans
        </Animated.Text>

        <Animated.Text style={[styles.successText, { transform: [{ translateX: successTextAnim }] }]}>
          Successful withdrawal!
        </Animated.Text>
        <Animated.Text style={[styles.infoText, { transform: [{ translateX: infoTextAnim }] }]}>
          You have successfully withdrawn money!{'\n'}
          Please check the balance in the card management section.
        </Animated.Text>

        <PrimaryButton 
          text="Sign In" 
          onPress={() => router.push("./MobileNumberInsert")} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3629B7',
  },
  header: {
    flex: 1,
    width: '100%',
    height: screenHeight * 0.15,
    backgroundColor: '#3629B7',
    borderBottomLeftRadius: screenWidth * 0.15,
    borderBottomRightRadius: screenWidth * 0.15,
    justifyContent: 'flex-end',
    paddingBottom: screenHeight * 0.02,
  },
  whiteContainer: {
    top: screenHeight * 0.01,
    flex: 4.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: screenWidth * 0.1,
    borderTopRightRadius: screenWidth * 0.1,
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: screenHeight * 0.05,
    alignItems: 'center',
    marginTop: -screenWidth * 0.1,
  },
  welcomeText: {
    fontSize: screenWidth * 0.06,
    fontWeight: '700',
    color: '#3629B7',
    marginTop: screenHeight * 0.01,
  },
  subText: {
    fontSize: screenWidth * 0.035,
    color: '#555',
    marginTop: screenHeight * 0.01,
    marginBottom: screenHeight * 0.08,
  },
  companyName: {
    fontSize: screenWidth * 0.055,
    fontWeight: '700',
    color: '#3629B7',
    marginTop: screenHeight * 0.02,
  },
  companySubtitle: {
    fontSize: screenWidth * 0.035,
    color: '#A0A0A0',
    marginTop: screenHeight * 0.005,
  },
  successText: {
    fontSize: screenWidth * 0.04,
    fontWeight: '600',
    color: '#3629B7',
    marginTop: screenHeight * 0.03,
    textAlign: 'center',
  },
  infoText: {
    fontSize: screenWidth * 0.035,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: screenWidth * 0.05,
    marginTop: screenHeight * 0.015,
  },
});
