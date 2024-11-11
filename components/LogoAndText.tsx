import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');



export default function LogoAndText() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/images/logomctransformobilescreen.png')}
      />
    <View>
    <Text style={styles.companyName}>
         MC TRANS
     </Text>
     <Text style={styles.companySubtitle}>
         Marine Cargo Trans
     </Text>
    </View>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    right: screenWidth * 0.24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row'
  },
  companyName: {
    fontSize: screenWidth * 0.05,
    fontWeight: 'bold',
    color: '#000',
  },
  companySubtitle: {
    fontSize: screenWidth * 0.03,
    fontWeight: '400',
    color: '#A0A0A0',
    marginTop: screenHeight * 0.005,
  },
  
});
