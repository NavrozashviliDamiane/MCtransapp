import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OtpInput } from 'react-native-otp-entry';
import BackButton from '@/components/BackButton';
import PrimaryButton from '@/components/PrimaryButton';
import LogoAndText from '@/components/LogoAndText';
import { router } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function PinCodeInsertScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  const handleComplete = (phoneNumber: string) => {
    setOtp(phoneNumber);
  };

  const handleContinue = () => {
    if (otp.length < 9) {
      setIsModalVisible(true);
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }).start();
    } else {
      router.push("./PinCodeInsertScreen");
    }
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsModalVisible(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} text="Sign up" />
      </View>

      <View style={styles.whiteContainer}>
        <View style={styles.logoTextContainer}>
          <LogoAndText />
        </View>

        <Text style={styles.promptText}>Enter confirmation code</Text>
        <Text style={styles.secondaryText}>A 4-digit code was sent to {'\n'}
        599 14 60 49</Text>

        <View style={styles.otpInputContainer}>
          <OtpInput
            numberOfDigits={4}
            focusColor="green"
            focusStickBlinkingDuration={500}
            onTextChange={handleComplete}
            type="numeric"
            theme={{
              containerStyle: styles.otpContainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
          />
        </View>

        <Text style={styles.resendText}>Resend Code</Text>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            text="Continue" 
            onPress={handleContinue} 
          />
        </View>

        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="none"
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
              <Text style={styles.modalTitle}>⚠️ Warning</Text>
              <Text style={styles.modalMessage}>
                Are you sure you want to continue without completing the OTP? You’ll need to enter all digits.
              </Text>
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonPrimary]}
                  onPress={() => {
                    closeModal();
                    router.push("./HomeScreen");
                  }}
                >
                  <Text style={[styles.modalButtonText, styles.modalButtonTextPrimary]}>Continue</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>
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
    flex: 4.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: screenWidth * 0.1,
    borderTopRightRadius: screenWidth * 0.1,
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: screenHeight * 0.04,
    alignItems: 'center',
    marginTop: -screenWidth * 0.1,
  },
  logoTextContainer: {
    flexDirection: 'row',
    left: screenWidth * 0.01,
  },
  promptText: {
    fontSize: screenWidth * 0.045,
    top: screenHeight * 0.04,
    fontWeight: '600',
    color: 'black',
    marginVertical: screenHeight * 0.02,
    textAlign: 'center',
  },
  resendText: {
    fontSize: screenHeight * 0.020,
    top: screenHeight * 0.04,
    fontWeight: '500',
    textAlign: 'center',
    color: '#006FFD'
  },
  secondaryText: {
    top: screenHeight * 0.04,
    fontSize: screenWidth * 0.030,
    fontWeight: '300',
    color: 'black',
    textAlign: 'center'
  },
  otpInputContainer: {
    marginTop: screenHeight * 0.1,
    width: screenWidth * 0.8,
    alignItems: 'center',
  },
  otpContainer: {
    width: screenWidth * 0.5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pinCodeContainer: {
    width: screenWidth * 0.14,
    height: screenHeight * 0.08,
    borderWidth: 1.4,
    backgroundColor: 'white',
    borderRadius: screenWidth * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: screenWidth * 0.01,
  },
  pinCodeText: {
    fontSize: screenWidth * 0.05,
    color: 'black',
  },
  focusStick: {
    backgroundColor: 'black',
    height: screenHeight * 0.030,
    width: screenWidth * 0.002,
  },
  activePinCodeContainer: {
    borderColor: 'black',
  },
  buttonContainer: {
    marginTop: screenHeight * 0.04,
    width: '100%',
    alignItems: 'center',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: screenWidth * 0.05,
    fontWeight: '700',
    color: '#3629B7',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: screenWidth * 0.04,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3629B7',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: screenWidth * 0.04,
    color: '#3629B7',
    fontWeight: '600',
  },
  modalButtonPrimary: {
    backgroundColor: '#3629B7',
  },
  modalButtonTextPrimary: {
    color: '#fff',
  },
});
