import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type TabScrollViewProps = {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabScrollViewDetailsPage: React.FC<TabScrollViewProps> = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    { title: 'ALL Cars', backgroundColor: '#3629B7' },
    { title: 'On Way', backgroundColor: '#4A5CC1' },
    { title: 'Arriving', backgroundColor: '#657FC4' },
    { title: 'Open', backgroundColor: '#8CA3CC' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {tabs.map((tab, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedTab(index)}
            style={[
              styles.tabButton,
              { backgroundColor: tab.backgroundColor },
              selectedTab === index && styles.selectedTabButton,
              index !== 0 && styles.overlapTab,
            ]}
          >
            <Text style={[styles.tabTitle, selectedTab === index && styles.selectedTabTitle]}>{tab.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TabScrollViewDetailsPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    height: screenHeight * 0.1,
    justifyContent: 'flex-end',
  },
  tabButton: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.07,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  selectedTabButton: {
    borderBottomWidth: 4,
    borderBottomColor: '#FF9900', // Bottom border to indicate selection
    shadowColor: '#000', // Shadow for elevation effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  overlapTab: {
    marginLeft: -10,
  },
  tabTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
  selectedTabTitle: {
    color: '#FFFFFF',
    fontSize: 16, // Larger font size for selected tab
    fontWeight: 'bold', // Bold text for selected tab
  },
  tabCount: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  selectedTabCount: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
