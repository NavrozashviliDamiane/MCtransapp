import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={({ route }) => ({
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          tabBarStyle: route.name === 'index' ? { display: 'none' } : {}, // Hide tab bar on Home screen
        })}
      />
      <Tabs.Screen
        name="[Login]"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
          ),
          tabBarStyle: { display: 'none' },  // Specifically hide tab bar on this screen
        }}
      />

<Tabs.Screen
        name="MobileNumberInsert"
        options={{
          title: 'MobileNumberInsert',
  
          tabBarStyle: { display: 'none' },  // Specifically hide tab bar on this screen
        }}
      />

<Tabs.Screen
        name="PinCodeInsertScreen"
        options={{
          title: 'PinCodeInsertScreen',
  
          tabBarStyle: { display: 'none' },  // Specifically hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'HomeScreen',
  
          tabBarStyle: { display: 'none' },  // Specifically hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="CarsListPage"
        options={{
          title: 'CarsListPage',
  
          tabBarStyle: { display: 'none' },  // Specifically hide tab bar on this screen
        }}
      />

<Tabs.Screen
        name="CarDetailsScreen"
        options={{
          title: 'CarDetailsScreen',
  
          tabBarStyle: { display: 'none' },  // Specifically hide tab bar on this screen
        }}
      />
    </Tabs>

    

    
  );
}
