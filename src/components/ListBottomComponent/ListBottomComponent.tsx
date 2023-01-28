import { TouchableOpacity,StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { generateColors } from "../../scheme/colors";
const colors = generateColors.colors;

const screenHeight = Dimensions.get("window").height;

interface Props {
  bottom: boolean;
}
const ListBottomComponent: React.FC<Props> = ({ bottom }) => {


  const buyTicketHandler = () => {
    console.log("buy ticket");
  }



  return (
    <View
      style={[
        styles.itemContainer,
        {
          borderBottomLeftRadius: bottom ? 5 : 0,
          borderBottomRightRadius: bottom ? 5 : 0,
        },
      ]}
    >
      
      <View style = {styles.directions}>
        <Text style = {styles.boldText}>Kiev -> Wroclaw</Text>
        <Text>Flight</Text>
      </View>
      <View style = {[styles.directions, {marginTop: 10}]}>
        <Text>3 h 55m</Text>
        <TouchableOpacity onPress={buyTicketHandler}>
        <Text style = {styles.buyTicket}>Buy Ticket</Text>
        </TouchableOpacity>
        <Text style = {styles.price}>9.9 € </Text>
      </View>
      </View>
    
  );
};

export default ListBottomComponent;

const styles = StyleSheet.create({
  itemContainer: {
    height: screenHeight / 10,
    width: "100%",
    backgroundColor: colors.surface,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  dropped: {
    flex : 1,
    margin : 10,
  },
  directions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding : 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  buyTicket: {
    borderWidth : 1,
    borderColor: colors.primary,
  },
  price : {
    color : colors.primary,
  }
});
