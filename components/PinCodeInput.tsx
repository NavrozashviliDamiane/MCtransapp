import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const PinCodeComponent = () => {
  const handleOtpChange = (text: string) => {
    console.log(`OTP text changed: ${text}`);
  };

  const handleOtpComplete = (text: string) => {
    console.log(`OTP is fully entered: ${text}`);
  };

  return (
    <View style={styles.container}>
      <OtpInput
        numberOfDigits={6}
        focusColor="green"
        focusStickBlinkingDuration={500}
        onTextChange={handleOtpChange}
        onFilled={handleOtpComplete}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  otpContainer: {
    width: '80%',
  },
  pinCodeContainer: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  pinCodeText: {
    fontSize: 18,
    color: '#333',
  },
  focusStick: {
    backgroundColor: 'green',
  },
  activePinCodeContainer: {
    borderColor: 'green',
  },
});

export default PinCodeComponent;
