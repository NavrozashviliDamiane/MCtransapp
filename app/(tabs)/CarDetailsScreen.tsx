import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import TabScrollViewDetailsPage from '@/components/TabScrollViewDetailsPage';
import AntDesign from '@expo/vector-icons/AntDesign';
// import ImageCarousel from '@/components/ImageCarousel';  // Import your ImageCarousel component

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function CarDetailsScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);

  // Animated value for horizontal translation
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: -selectedTab * screenWidth, // Move horizontally based on selected tab
      duration: 250, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  }, [selectedTab]);

  const params = useLocalSearchParams();

  const { title, vin, date, bid, price, logo, icon } = params;

  return (
    <View style={styles.container}>
      
      {/* Full-Screen Carousel Component in Header */}
      <View style={styles.header}>
        {/* <ImageCarousel />  */}
      </View>

      {/* White Container with Other Details */}
      <View style={styles.whiteContainer}>
        <View style={styles.titleContainer}>
          <AntDesign name="leftcircle" size={screenWidth * 0.07} color="#3629B7" />
          <Text style={styles.carTitle}>{title}</Text>
        </View>
        <View style={styles.tabContainer}>
          <TabScrollViewDetailsPage selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View>

        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false} // Hide the vertical scrollbar
        >
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Auction:</Text>
              <Image source={{ uri: Array.isArray(logo) ? logo[0] : logo || '' }} style={styles.logo} />
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Sale Date:</Text>
              <Text style={styles.infoValue}>{date}</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>VIN Number:</Text>
              <Text style={styles.infoValue}>{vin}</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Lot Number:</Text>
              <Text style={styles.infoValue}>70704424</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Port:</Text>
              <Text style={styles.infoValue}>PORT, GA / Poti, Georgia</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>CN Line:</Text>
              <Text style={styles.infoValue}>COSCO</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>CN Number:</Text>
              <Text style={styles.infoValue}>PL8H1182303</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>CN Entry Date:</Text>
              <Text style={styles.infoValue}>Pending...</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>CN Open Date:</Text>
              <Text style={styles.infoValue}>2024-11-15</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>CN Green Date:</Text>
              <Text style={styles.infoValue}>Pending...</Text>
            </View>
            <View style={styles.divider} />
          </View>
        </ScrollView>
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
    height: screenHeight * 0.3, // Adjusted height for the carousel header
    borderBottomLeftRadius: screenWidth * 0.15,
    borderBottomRightRadius: screenWidth * 0.15,
    overflow: 'hidden', // To keep the carousel within rounded bounds
  },
  whiteContainer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: screenWidth * 0.1,
    borderTopRightRadius: screenWidth * 0.1,
    paddingHorizontal: screenWidth * 0.00,
    paddingTop: screenHeight * 0.02,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: screenWidth * 0.8,
    left: screenWidth * 0.05,
    justifyContent: 'space-between',
  },
  carTitle: {
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
    left: screenWidth * 0.1,
  },
  tabContainer: {
    alignItems: 'flex-end',
    height: screenHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    top: screenWidth * 0.06,
  },
  infoContainer: {
    paddingHorizontal: 30,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoLabel: {
    fontSize: 16,
    color: '#006FFD',
    fontWeight: '300',
  },
  infoValue: {
    fontSize: 16,
    color: '#222222',
    textAlign: 'left', 
    fontWeight: '500',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  logo: {
    width: 50,
    height: 20,
    resizeMode: 'contain',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
});
