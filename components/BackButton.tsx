// src/components/BackButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface BackButtonProps {
  onPress: () => void;
  text?: string;
}

export default function BackButton({ onPress, text = 'Back' }: BackButtonProps) {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Ionicons name="chevron-back" size={24} color="#fff" />
      <Text style={styles.backButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: screenWidth * 0.05,
    bottom: screenHeight * 0.07,
  },
  backButtonText: {
    color: '#fff',
    fontSize: screenWidth * 0.045,
    fontWeight: '500',
    marginLeft: 5,
  },
});
