import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GameCard from "./GameCard";

export default function GamesPage() {
  const Games = [
    {
      image: require("../../assets/Games/dice.jpg"),
      title: "Game1",
      description: "Description1",
    },
    {
      image: require("../../assets/Games/boardGame.jpg"),
      title: "Game2",
      description: "Description2",
    },
    {
      image: require("../../assets/Games/pokerCard.jpg"),
      title: "Game3",
      description: "Description3",
    },
  ];
  return (
    <View style={styles.container}>
      {Games.map((game) => (
        <GameCard
          image={game.image}
          title={game.title}
          description={game.description}
        />
      ))}
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
