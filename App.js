import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import GamesPage from "./components/GamesPage/GamesPage";
import HomePage from "./components/HomePage/HomePage";
import ProfileIcon from "./components/ProfileIcon";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GameDetail from "./components/GamesPage/GameDetail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function GameStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GamePage"
        component={GamesPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetail"
        component={GameDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <ProfileIcon />
        </View>
        <View style={styles.bottomRowContainer}>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Tab.Screen
              name="Home"
              component={HomePage}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Games"
              component={GameStack}
              options={{
                tabBarLabel: "Game",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="cards-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsPage}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="circle-edit-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topRowContainer: {
    flex: 1,
    top: 10,
    right: 10,
  },
  bottomRowContainer: {
    flex: 6,
    backgroundColor: "#f7f7f7",
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
