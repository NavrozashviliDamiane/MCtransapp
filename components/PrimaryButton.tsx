// src/components/PrimaryButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}

export default function PrimaryButton({ text, onPress }: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3629B7',
    paddingVertical: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.1,
    borderRadius: screenWidth * 0.02,
    alignItems: 'center',
    width: '80%',
    marginTop: screenHeight * 0.04,
  },
  buttonText: {
    color: '#fff',
    fontSize: screenWidth * 0.04,
    fontWeight: '600',
  },
});
