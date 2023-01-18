import React, { useState, useMemo } from "react";
import { Text, View, FlatList, Alert } from "react-native";
import styles from "./styles";
import { FontAwesome5, Fontisto, MaterialIcons } from "@expo/vector-icons";
import ListBottomComponent from "../ListBottomComponent/ListBottomComponent";

type ListComponentProps = {
  forCity: string;
  toCity: string;
  item: any;
};

const ListComponent: React.FC<ListComponentProps> = ({
  item,
  forCity,
  toCity,
}) => {
  const [locationsVisible, setLocationsVisible] = useState(false);

  const items = [1, 2, 3, 4, 5];

  return (
    <View style = {styles.shadow}>
      <View
        style={[
          styles.box,
          {
            borderBottomLeftRadius: locationsVisible ? 0 : 5,
            borderBottomRightRadius: locationsVisible ? 0 : 5,
          },
        ]}
      >
        <View style={styles.inline}>
          <Fontisto style={styles.logo} name="plane" size={24} color="grey" />
          <FontAwesome5 style={styles.logo} name="bus" size={24} color="grey" />
          <FontAwesome5 style={styles.logo} name="train" size={24} color="grey" />
          <Fontisto style={styles.logo} name="car" size={24} color="grey" />
        </View>
        <View style={styles.inline}>
          <Text style={styles.location}>Kiev</Text>
          <Fontisto name="arrow-right" size={12} color="black" />
          <Text style={styles.location}>Wroclaw</Text>
          <Fontisto name="arrow-right" size={12} color="black" />
          <Text style={styles.location}>Poznan</Text>
          <Fontisto name="arrow-right" size={12} color="black" />
          <Text style={styles.location}>Frankfurt</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.time}>8 h 36 m</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>€{" " + item.price}</Text>
          </View>
        </View>
        <View style={styles.detailsButton}>
          <MaterialIcons
            onPress={() => {
              setLocationsVisible((prev) => !prev);
            }}
            name={
              !locationsVisible ? "keyboard-arrow-down" : "keyboard-arrow-up"
            }
            size={30}
            color="black"
          />
        </View>
      </View>
      {locationsVisible &&
        items.map((item, index) => {
          return (
            <ListBottomComponent
              key={index.toString()}
              bottom={index === items.length - 1}
            />
          );
        })}
</View>
  );
};

export default React.memo(ListComponent);
