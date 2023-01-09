import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme, Divider, TextInput, Button } from "react-native-paper";

import { FontAwesome5, Foundation } from "@expo/vector-icons";

export const Contacts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} variant="displayLarge">
          Contacts
        </Text>
        <Text style={styles.text} variant="titleLarge">
          Founder and CEO
        </Text>
        <Text style={styles.text} variant="titleLarge">
          ROMAN MANTELMAKHER
        </Text>
        <Text style={styles.text} variant="titleLarge">
          +972545779239
        </Text>
        <Text style={styles.text} variant="titleLarge">
          roman.mantelmakher@qmail.com
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <View
          style={{
            ...styles.iconContatiner,
            backgroundColor: "mediumspringgreen",
          }}
        >
          <FontAwesome5 name="whatsapp" size={24} color="white" />
        </View>
        <View
          style={{
            ...styles.iconContatiner,
            backgroundColor: "royalblue",
          }}
        >
          <FontAwesome5 name="telegram-plane" size={24} color="white" />
        </View>
        <View
          style={{
            ...styles.iconContatiner,
            backgroundColor: "mediumspringgreen",
          }}
        >
          <Foundation name="telephone" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  textContainer: {
    alignItems: "center",
  },
  titleText: {
    marginBottom: 40,
  },
  text: { marginBottom: 20 },
  iconsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconContatiner: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
