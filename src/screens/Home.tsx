import React, { useState } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { Text, useTheme, Divider, TextInput, Button } from "react-native-paper";

import { FontAwesome5 } from "@expo/vector-icons";

export const Home = () => {
  const [forCity, setForCity] = useState("");
  const [toCity, setToCity] = useState("");
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.titleContainer,
          backgroundColor: theme.colors.primary,
        }}
      >
        <Text
          style={{
            ...styles.title,
            color: theme.colors.onPrimary,
          }}
          variant="displayLarge"
        >
          CheapTrip
        </Text>
        <Text
          style={{
            ...styles.title,
            color: theme.colors.onPrimary,
          }}
          variant="displaySmall"
        >
          Плати меньше,посети больше!
        </Text>
      </View>
      <Divider />
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          label="Откуда"
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
          label="Куда"
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
          Очистить
        </Button>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Поехали
        </Button>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/image/Logo_ChT_2.png")}
        />
      </View>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {},
  mainContainer: {
    margin: 16,
    alignItems: "center",
  },
  input: {
    width: "100%",
  },
  iconArrow: {
    marginTop: 5,
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
