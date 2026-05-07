import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WatchlistScreen from "./WatchlistScreen";

import TopRanked from "./TopRanked";
import SearchScreen from "./screens/SearchScreen";

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

