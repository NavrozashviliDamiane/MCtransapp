import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface LogoWithCirclesProps {
  backgroundColor: string;
}

export default function LogoWithCircles({ backgroundColor }: LogoWithCirclesProps) {
  return (
    <View style={[styles.logoContainer, { backgroundColor }]}>
      <Image
        source={require('../assets/images/home.png')}
        style={styles.logo}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    borderRadius: screenWidth * 0.4,
    padding: screenWidth * 0.05,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
 
  logo: {
    width: screenWidth * 0.25,
    height: screenWidth * 0.25,
  },
 
});
