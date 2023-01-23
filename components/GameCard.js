import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function GameCard(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image source={props.image} style={styles.cardImage} />
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardDescription}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
    marginBottom: 16,
  },
  cardImageContainer: {
    width: "30%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 8,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardTextContainer: {
    width: "70%",
    padding: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
});
