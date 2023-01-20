import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GamesPage() {
  return (
    <View style={styles.container}>
      <Text>Games Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
