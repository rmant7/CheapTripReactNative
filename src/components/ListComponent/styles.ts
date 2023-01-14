import { Dimensions, StyleSheet } from "react-native";
import { generateColors } from "../../scheme/colors";

const colors = generateColors.colors;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  box: {
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius:5,
    height: screenHeight / 8.5,
    // backgroundColor: "rgba(210,210,210,0.2)",
    // backgroundColor: 'rgba(255,255,255,0.8)',
    backgroundColor: colors.surface,
    borderColor: "grey",
    borderWidth: 1,
    paddingVertical: 2.5,
  },
  inline: {
    flexDirection: "row",
    paddingBottom: 2.5,
    marginLeft: 5,
  },
  logo: {
    marginHorizontal: 4,
    paddingVertical: 5,
  },
  price: {
    color: "#fff",
    fontWeight: "bold",
  },
  priceContainer: {
    backgroundColor: "#ff6721",
    padding: 3,
    borderRadius: 5,
  },
  detailsButton: {
    position: "absolute",
    bottom: '20%',
    right: '2.5%',
  },
 
  location: {
    marginHorizontal: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingBottom: 10,
  },
  time: {
    color: 'grey',
    marginLeft: 5,
  },
  itemContainer: {
    height: screenHeight / 10,
    width: "100%",
    // backgroundColor: 'rgba(255,255,255,0.8)',
    
    borderTopWidth: 0,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow : {
    elevation : 5,
    width: '95%',
    alignSelf: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  }
});

export default styles;
