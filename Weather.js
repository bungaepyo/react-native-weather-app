import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        subtitle: "Consider wearing a mask"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        subtitle: "Be aware!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
        subtitle: "Maybe an extra jacket?"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#00C6FB", "#005BEA"],
        subtitle: "Take an umbrella with you"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        subtitle: "Take out your winter boots!"
    },
    Atmosphere: {
        iconName: "weather-cloudy",
        gradient: ["#89F7FE", "#66A6FF"],
        subtitle: "Look out the window"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        subtitle: "Nice weather to go out!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        subtitle: "Who likes a cloudy weather?"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        subtitle: "Moist moist moist"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        subtitle: "Consider wearing a mask"
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            style={styles.container}
            colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content" />
            <View style={styles.topHalfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.bottomHalfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{condition}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 24
    },
    textContainer: {
        alignItems: "flex-start"
    }
});
