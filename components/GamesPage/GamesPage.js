import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { gameData } from "./data/gamesData";
import GameCard from "./GameCard";

export default function GamesPage() {
  const Games = gameData;
  return (
    <FlatList
      data={Games}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GameCard
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )}
    />
  );
}

// export default function GamesPage() {
//   const Games = gameData;
//   return (
//     <View style={styles.container}>
//       {Games.map((game) => (
//         <GameCard
//           image={game.image}
//           title={game.title}
//           description={game.description}
//         />
//       ))}
//       <Text>Games Page</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
