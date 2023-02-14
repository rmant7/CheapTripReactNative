import React, { useState, useEffect, FC, useMemo, useCallback } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { Text, useTheme, TextInput, Button, RadioButton, Checkbox } from "react-native-paper";

import flying_routes from "../../assets/files/flying_routes.json"
import fixed_routes from "../../assets/files/fixed_routes.json"
import Routes from "../../assets/files/routes.json"


interface Props {
    routes: any,
    setRoutes: any,
}

export const SortRoutes: FC<Props> = ({ routes, setRoutes }) => {
    // transportation types:
    // 1 - plane
    // 2 - train (I guess) 
    // 3 - car (I guess)

    const [plane, setPlane] = useState(true)
    const [train, setTrain] = useState(true)
    const [car, setCar] = useState(true)

    useEffect(() => {
        const initialRoutes = [...Object.values(plane && flying_routes), ...Object.values(train && fixed_routes), ...Object.values(car && Routes)]
       
        setRoutes(initialRoutes)

    }, [plane, train, car])

    return (
        <View>
            <Text>SortRoutes</Text>
            <View style={styles.checkBoxContainer}>
                <View style={styles.checkBox}>
                    <Text>Plane</Text>
                    <Checkbox status={plane ? "checked" : "unchecked"}
                        onPress={() => setPlane(!plane)} />
                </View>
                <View style={styles.checkBox}>
                    <Text>Train</Text>
                    <Checkbox status={train ? "checked" : "unchecked"}
                        onPress={() => setTrain(!train)} />
                </View>
                <View style={styles.checkBox}>
                    <Text>Car</Text>
                    <Checkbox status={car ? "checked" : "unchecked"}
                        onPress={() => setCar(!car)} />
                </View>
            </View>
            <Text>{routes.length}</Text>

        </View>)
}

const styles = StyleSheet.create({

    checkBoxContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    checkBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    }
})



