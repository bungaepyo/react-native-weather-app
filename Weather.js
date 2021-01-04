import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Weather({ temp }) {
    return (
        <LinearGradient
            style={styles.container}
            colors={["#4c669f", "#3b5998", "#192f6a"]}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.topHalfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy" color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.bottomHalfContainer}>

            </View>
        </LinearGradient>
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
        color: "white",
        fontSize: 42
    }
});
