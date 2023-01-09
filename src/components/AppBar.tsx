import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Menu, useTheme, Text } from "react-native-paper";

interface BarProps {
  navigation: any;
  back?: any;
  options: any;
}

export function CustomNavigationBar({ navigation, back, options }: BarProps) {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Appbar.Header style={options.headerStyle}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,

          width: "100%",
        }}
      >
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}

        <View style={{ alignItems: "flex-start" }}>
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
            Pay less,visit more!
          </Text>
        </View>
        {!back ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action
                icon="menu"
                color="white"
                onPress={openMenu}
                size={36}
              />
            }
          >
            <Menu.Item
              onPress={() => {
                closeMenu();
                navigation.navigate("Contacts");
                console.log("Option 1 was pressed");
              }}
              title="Contacts"
            />
            <Menu.Item
              onPress={() => {
                console.log("Option 2 was pressed");
              }}
              title="Option 2"
            />
            <Menu.Item
              onPress={() => {
                console.log("Option 3 was pressed");
              }}
              title="Option 3"
              disabled
            />
          </Menu>
        ) : null}
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  title: {},
});
