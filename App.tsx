import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { Main } from "./src/components/Main";
import { generateColors } from "./src/scheme/colors";

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
