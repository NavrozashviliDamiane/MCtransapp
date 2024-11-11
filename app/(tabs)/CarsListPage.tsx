import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '@/components/BackButton';
import LogoAndText from '@/components/LogoAndText';
import TabScrollView from '@/components/TabScrollView';
import CarList from '@/components/CarList';
import OnWayList from '@/components/OnWayList';
import ArrivingList from '@/components/ArrivingList';
import OpenList from '@/components/OpenList';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function CarsListPage() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: -selectedTab * screenWidth, // Move horizontally based on selected tab
      duration: 250, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  }, [selectedTab]);

  const renderContent = () => {
    return (
      <Animated.View
        style={[
          styles.contentContainer,
          { transform: [{ translateX }] },
        ]}
      >
        <View style={styles.pageContainer}>
          <CarList />
        </View>
        <View style={styles.pageContainer}>
          <OnWayList />
        </View>
        <View style={styles.pageContainer}>
          <ArrivingList />
        </View>
        <View style={styles.pageContainer}>
          <OpenList />
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <BackButton onPress={() => navigation.goBack()} text="Home" />
        </View>
      </View>

      <View style={styles.whiteContainer}>
        <View style={styles.logoTextContainer}>
          <LogoAndText />
        </View>

        <View style={styles.scrollView}>
          <TabScrollView selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View>

        <View style={styles.contentWrapper}>
          {renderContent()}
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
  header: {
    width: '100%',
    height: screenHeight * 0.15,
    backgroundColor: '#3629B7',
    borderBottomLeftRadius: screenWidth * 0.15,
    borderBottomRightRadius: screenWidth * 0.15,
    justifyContent: 'flex-end',
    paddingBottom: screenHeight * 0.01,
  },
  backButton: {
    top: screenWidth * 0.07,
  },
  whiteContainer: {
    flex: 4.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: screenWidth * 0.1,
    borderTopRightRadius: screenWidth * 0.1,
    paddingHorizontal: screenWidth * 0.00,
    paddingTop: screenHeight * 0.02,
  },
  logoTextContainer: {
    alignItems: 'center',
    marginBottom: screenHeight * 0.02,
  },
  scrollView: {
    width: '100%',
    top: screenWidth * 0.06,
  },
  contentWrapper: {
    overflow: 'hidden',
    width: screenWidth,
    height: screenHeight * 0.6,
    top: screenHeight * 0.060,
  },
  contentContainer: {
    flexDirection: 'row',
    width: screenWidth * 4, // Width for 4 screens (tabs)
  },
  pageContainer: {
    width: screenWidth,
    height: '100%',
  },
});
