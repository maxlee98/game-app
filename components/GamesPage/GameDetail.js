import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";

const screenWidth = Dimensions.get("window").height;
const imageHeight = screenWidth / 3;

export default function GameDetail({ route }) {
  const props = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Play"
          onPress={() => {
            // navigate to game screen
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 5,
    height: imageHeight,
  },
  image: {
    height: imageHeight,
  },
  textContainer: {
    flex: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
});
