import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, useTheme, TextInput, Button } from "react-native-paper";

import { FontAwesome5 } from "@expo/vector-icons";

export const Home = () => {
  const [forCity, setForCity] = useState("");
  const [toCity, setToCity] = useState("");
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            ...styles.title,
            color: theme.colors.secondary,
          }}
          variant="titleMedium"
        >
          Find most beneficial and unusual routes between cities with airports,
          combining flight, train, bus, ferry and rideshare.
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          label="From"
          value={forCity}
          onChangeText={(text) => setForCity(text)}
          mode={"outlined"}
        />
        <FontAwesome5
          style={styles.iconArrow}
          name="angle-double-down"
          size={24}
          color={`${theme.colors.primary}`}
        />
        <TextInput
          style={styles.input}
          label="To"
          value={toCity}
          onChangeText={(text) => setToCity(text)}
          mode={"outlined"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="delete"
          mode="elevated"
          onPress={() => console.log("Pressed")}
        >
          Clear
        </Button>
        <Button
          icon="car"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Let`s go
        </Button>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/image/Logo_ChT_2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    padding: 0,
    margin: 0,
    textAlign: "center",
  },
  mainContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  input: {
    width: "100%",
  },
  iconArrow: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",

    resizeMode: "contain",
  },
});
