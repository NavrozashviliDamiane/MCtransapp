import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-input';
import BackButton from '@/components/BackButton';
import PrimaryButton from '@/components/PrimaryButton';
import { router } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function MobileNumberInsert() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  // Explicitly define the ref type as PhoneInput
  const phoneInputRef = useRef<PhoneInput>(null);

  useEffect(() => {
    // Automatically focus on the phone input when the screen loads
    phoneInputRef.current?.focus();
  }, []);

  const handleContinue = () => {
    if (phoneNumber.length < 9) {
      // Show warning or error as needed
    } else {
      router.push("./PinCodeInsertScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} text="Sign up" />
      </View>

      <View style={styles.whiteContainer}>
        <Text style={styles.promptText}>Enter your phone number</Text>
        <View style={styles.inputContainer} >
        <PhoneInput
          ref={phoneInputRef}
          initialCountry="ge"
          onChangePhoneNumber={(number) => setPhoneNumber(number)}
          textProps={{
            placeholder: '1234 123456',
            keyboardType: 'phone-pad', 
            autoFocus: true, 
          }}
          textStyle={styles.phoneInputText}
          flagStyle={styles.flag}
          style={styles.phoneInput}
        />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton 
            text="Continue" 
            onPress={handleContinue} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3629B7',
  },
  inputContainer: {
    top: screenHeight * 0.15
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
    flex: 4.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: screenWidth * 0.1,
    borderTopRightRadius: screenWidth * 0.1,
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: screenHeight * 0.04,
    alignItems: 'center',
    marginTop: -screenWidth * 0.1,
  },
  promptText: {
    fontSize: screenWidth * 0.045,
    top: screenHeight * 0.04,
    fontWeight: '600',
    color: '#3629B7',
    marginVertical: screenHeight * 0.02,
    textAlign: 'center',
  },
  phoneInput: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.07,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInputText: {
    fontSize: screenWidth * 0.04,
    color: '#555',
  },
  flag: {
    width: 30,
    height: 20,
    marginLeft: 5,
  },
  buttonContainer: {
    top: screenHeight * 0.15,
    marginTop: screenHeight * 0.04,
    width: '100%',
    alignItems: 'center',
  },
});
