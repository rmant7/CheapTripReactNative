import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  ThemeProvider,
} from "react-native-paper";

import { Main } from "./src/components/Main";
import { generateColors } from "./src/screens/scheme/colors";

const theme = {
  ...DefaultTheme,
  colors: generateColors.colors,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
