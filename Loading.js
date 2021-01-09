import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.text}>Getting the Weather</Text>
    </View>;
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#304352"
    },
    text:{
        color: "#D7D2CC",
        fontSize: 30
    }
});