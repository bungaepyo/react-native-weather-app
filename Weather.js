import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp }) {
    return (
        <View style={styles.container}>
            <View style={styles.topHalfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.bottomHalfContainer}>

            </View>
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Haze",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    topHalfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomHalfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42
    }
});
