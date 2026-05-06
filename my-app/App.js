import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WatchlistScreen from "./WatchlistScreen";

import TopRanked from "./TopRanked"
import SearchPage from "./SearchPage";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Top Ranked" component={TopRanked} />
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Watchlist" component={WatchlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

