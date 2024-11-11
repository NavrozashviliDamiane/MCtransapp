import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '@/components/BackButton';
import LogoAndText from '@/components/LogoAndText';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';



const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type TransferType = 'card' | 'bank' | 'sameBank';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isAuctionPressed, setAuctionPressed] = useState(false);
  const [isCityPressed, setCityPressed] = useState(false);
  const [isStatePressed, setStatePressed] = useState(false);
  

  const handleTransfer = (type: TransferType) => {
    console.log(`Transfer type: ${type}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} text="Home"/>
        </View>
      </View>
      <View style={styles.whiteContainer}>
        <View style={styles.logoTextContainer}>
          <LogoAndText />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.transferOptionsContainer}
        >
          <TouchableOpacity style={styles.transferButton} onPress={() =>  router.push("./CarsListPage")}>
          <Ionicons name="car-sport" size={24} color="white" />
            <Text style={styles.transferButtonText}>Cars on The Way company</Text>
           
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferButton2} onPress={() => handleTransfer("bank")}>
          <FontAwesome6 name="cart-plus" size={24} color="white" />
            <Text style={styles.transferButtonText}>Transfered purchases car</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferButton3} onPress={() => handleTransfer("bank")}>
          <FontAwesome6 name="car-on" size={24} color="white" />
            <Text style={styles.transferButtonText}>Transfer to another bank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.transferButton, styles.disabledButton]}>
            <Text style={[styles.transferButtonText, styles.disabledButtonText]}>
            <Ionicons name="person-sharp" size={24} color="white" />
              Transfer to the same bank
            </Text>
          </TouchableOpacity>
         
        </ScrollView>
        <View style={styles.calculatorContainer}>
          <View style={styles.transportationCalculatorHeader}>
            <View>
              <Text style={styles.calculatorTitle}>TRANSPORTATION CALCULATOR</Text>
              <Text style={styles.calculatorSubtitle}>Calculate Your Transit Costs</Text>
            </View>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateText}>{new Date().toISOString().split('T')[0]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              style={[styles.dropdown, isAuctionPressed && styles.dropdownPressed]}
              onPressIn={() => setAuctionPressed(true)}
              onPressOut={() => setAuctionPressed(false)}
            >
              <Text style={[styles.dropdownText, isAuctionPressed && styles.dropdownTextPressed]}>
                Choose Auction
              </Text>
              <AntDesign name="caretdown" size={screenHeight * 0.02} color="#8C9199" style={styles.dropdownIcon} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.dropdown, isCityPressed && styles.dropdownPressed]}
              onPressIn={() => setCityPressed(true)}
              onPressOut={() => setCityPressed(false)}
            >
              <Text style={[styles.dropdownText, isCityPressed && styles.dropdownTextPressed]}>
                Choose City
              </Text>
              <AntDesign name="caretdown" size={screenHeight * 0.02} color="#8C9199" style={styles.dropdownIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.stateDropdown, isStatePressed && styles.dropdownPressed]}
            onPressIn={() => setStatePressed(true)}
            onPressOut={() => setStatePressed(false)}
          >
            <Text style={[styles.dropdownText, isStatePressed && styles.dropdownTextPressed]}>
              Choose State
            </Text>
            <AntDesign name="caretdown" size={screenHeight * 0.02} color="#8C9199" style={styles.dropdownIcon} />
          </TouchableOpacity>

          <View style={styles.portContainer}>
            <Text style={styles.portText}>PORT GA: 1220</Text>
          </View>
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
  transferOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: screenWidth * 0.05,
    marginVertical: screenHeight * 0.02,
  },
  transferButton: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.15,
    backgroundColor: '#4A5CC1',
    padding: screenWidth * 0.04,
    borderRadius: 12,
    marginHorizontal: screenWidth * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 15, 
    elevation: 20, 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  

  transferButton2: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.15,
    backgroundColor: '#556BDA',
    padding: screenWidth * 0.04,
    borderRadius: 12,
    marginHorizontal: screenWidth * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 15, 
    elevation: 20, 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  transferButton3: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.15,
    backgroundColor: '#597ABC',
    padding: screenWidth * 0.04,
    borderRadius: 12,
    marginHorizontal: screenWidth * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 15, 
    elevation: 20, 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  transferButtonText: {
    top: screenWidth * 0.01,
    color: '#fff',
    fontSize: screenWidth * 0.035,
    textAlign: 'left',
    fontWeight: '500'
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  disabledButtonText: {
    color: 'white',
    fontWeight: '700'
  },
  calculatorContainer: {
    marginTop: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.04,
    bottom: screenHeight * 0.06,
  },
  transportationCalculatorHeader: {
    flexDirection: 'row',
  },
  calculatorTitle: {
    color: '#3629B7',
    fontSize: screenWidth * 0.035,
    fontWeight: 'bold',
  },
  calculatorSubtitle: {
    color: '#A0A0A0',
    fontSize: screenWidth * 0.025,
    marginBottom: screenHeight * 0.02,
  },
  dateButton: {
    left: screenWidth * 0.09,
    backgroundColor: '#4A5CC1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: screenHeight * 0.02,
  },
  dateText: {
    color: '#fff',
    fontSize: screenWidth * 0.035,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
    width: screenWidth * 0.4,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: screenHeight * 0.015,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  dropdownText: {
    color: '#A0A0A0',
    fontSize: screenWidth * 0.035,
  },
  dropdownIcon: {
    marginLeft: 8,
  },
  stateDropdown: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: screenHeight * 0.015,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  dropdownPressed: {
    borderColor: '#3629B7',
    backgroundColor: '#ffffff',
  },
  dropdownTextPressed: {
    color: '#3629B7',
  },
  portContainer: {
    marginTop: screenHeight * 0.03,
    paddingVertical: screenHeight * 0.03,
    borderRadius: 12,
    backgroundColor: '#F0F1F5',
    alignItems: 'center',
  },
  portText: {
    fontSize: screenWidth * 0.05,
    color: '#3629B7',
    fontWeight: 'bold',
  },
});
