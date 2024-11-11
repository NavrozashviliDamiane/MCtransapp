import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

// Define the type for each car item
interface CarItem {
  id: string;
  title: string;
  vin: string;
  date: string;
  bid: string;
  price: string;
  logo: string;
  icon: string;
}

// Sample data for cars
const carData: CarItem[] = [
  {
    id: '1',
    title: '2020 Hyundai Elantra',
    vin: 'YV4A22PL8H1182303',
    date: '2024-11-05',
    bid: '-1 950.00 $',
    price: '950.00 $',
    logo: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Fcopartlogo.png?alt=media&token=93ced4f7-ee06-4b0d-a916-d3a96ce60b14',
    icon: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Flogomctransformobilescreen.png?alt=media&token=0efce50b-68f6-48e0-b3c2-0d7532f0ee68',
  },
  {
    id: '2',
    title: '2018 Hyundai Elantra',
    vin: 'YV4A22PL8H1182303',
    date: '2024-11-05',
    bid: '-1 950.00 $',
    price: '950.00 $',
    logo: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Fcopartlogo.png?alt=media&token=93ced4f7-ee06-4b0d-a916-d3a96ce60b14',
    icon: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Flogomctransformobilescreen.png?alt=media&token=0efce50b-68f6-48e0-b3c2-0d7532f0ee68',
  },
  {
    id: '3',
    title: '2018 Hyundai Elantra',
    vin: 'YV4A22PL8H1182303',
    date: '2024-11-05',
    bid: '-1 950.00 $',
    price: '950.00 $',
    logo: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Fcopartlogo.png?alt=media&token=93ced4f7-ee06-4b0d-a916-d3a96ce60b14',
    icon: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Flogomctransformobilescreen.png?alt=media&token=0efce50b-68f6-48e0-b3c2-0d7532f0ee68',
  },
  {
    id: '4',
    title: '2018 Hyundai Elantra',
    vin: 'YV4A22PL8H1182303',
    date: '2024-11-05',
    bid: '-1 950.00 $',
    price: '950.00 $',
    logo: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Fcopartlogo.png?alt=media&token=93ced4f7-ee06-4b0d-a916-d3a96ce60b14',
    icon: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Flogomctransformobilescreen.png?alt=media&token=0efce50b-68f6-48e0-b3c2-0d7532f0ee68',
  },
  {
    id: '5',
    title: '2018 Hyundai Elantra',
    vin: 'YV4A22PL8H1182303',
    date: '2024-11-05',
    bid: '-1 950.00 $',
    price: '950.00 $',
    logo: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Fcopartlogo.png?alt=media&token=93ced4f7-ee06-4b0d-a916-d3a96ce60b14',
    icon: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Flogomctransformobilescreen.png?alt=media&token=0efce50b-68f6-48e0-b3c2-0d7532f0ee68',
  },
  {
    id: '6',
    title: '2018 Hyundai Elantra',
    vin: 'YV4A22PL8H1182303',
    date: '2024-11-05',
    bid: '-1 950.00 $',
    price: '950.00 $',
    logo: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Fcopartlogo.png?alt=media&token=93ced4f7-ee06-4b0d-a916-d3a96ce60b14',
    icon: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/reactnative%2Flogomctransformobilescreen.png?alt=media&token=0efce50b-68f6-48e0-b3c2-0d7532f0ee68',
  },
];

export default function OnWayList() {
  // Define the type for renderItem
  const renderItem = ({ item }: { item: CarItem }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.carTitle}>{item.title}</Text>
          <Image source={{ uri: item.logo }} style={styles.logo} />
        </View>
        <Text style={styles.carInfo}>VIN: {item.vin}</Text>
        <Text style={styles.carInfo}>Date: <Text style={styles.date}>{item.date}</Text></Text>
        <View style={styles.priceContainer}>
          <Text style={styles.bid}>{item.bid}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={carData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F7F8FC',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  carTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222222',
  },
  logo: {
    width: 50,
    height: 20,
    resizeMode: 'contain',
  },
  carInfo: {
    fontSize: 14,
    color: '#666666',
  },
  date: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bid: {
    color: '#FF8C8C',
    fontWeight: 'bold',
    backgroundColor: '#FDE7E7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  price: {
    color: '#4A90E2',
    fontWeight: 'bold',
    backgroundColor: '#E7F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
});
