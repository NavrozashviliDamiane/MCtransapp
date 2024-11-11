import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface DigitInputProps {
  onComplete: (value: string) => void;
}

export default function DigitInput({ onComplete }: DigitInputProps) {
  const inputRefs = useRef<TextInput[]>([]);
  const [values, setValues] = React.useState(Array(8).fill("")); // 8-digit phone number

  const handleTextChange = (text: string, index: number) => {
    // Allow only numeric input
    if (/^\d$/.test(text)) {
      const newValues = [...values];
      newValues[index] = text;
      setValues(newValues);

      // Move focus to the next input if a digit is entered
      if (index < values.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Call onComplete when all inputs are filled
      if (newValues.join("").length === values.length) {
        onComplete(newValues.join(""));
      }
    }
  };

  const handleKeyPress = (
    { nativeEvent: { key } }: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (key === 'Backspace' && values[index] === "") {
      // Move to the previous input if the current one is empty
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        const newValues = [...values];
        newValues[index - 1] = ""; // Clear the previous input value
        setValues(newValues);
      }
    }
  };

  return (
    <View style={styles.inputContainer}>
      {values.map((value, index) => (
        <View key={index} style={styles.inputBox}>
          <TextInput
            ref={(ref) => (inputRefs.current[index] = ref!)} // Assign ref to each input
            style={styles.inputText}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleTextChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: screenHeight * 0.03,
  },
  inputBox: {
    width: screenWidth * 0.1,
    height: screenWidth * 0.1,
    backgroundColor: '#3629B7',
    marginHorizontal: screenWidth * 0.02,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    color: '#fff',
    fontSize: screenWidth * 0.05,
    textAlign: 'center',
  },
});
