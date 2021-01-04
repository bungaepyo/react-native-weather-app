import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "bf23511da98859cfbf70a44a9072cbd2";

export default class extends React.Component {

    state = {
        isLoading: true,
    };

    getWeather = async (latitude, longitude) => {
        const { 
            data: { 
                main: { 
                    temp 
                },
                weather
            } 
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
        );
        this.setState({
            isLoading: false,
            temp,
            condition: weather[0].main
        });
    };

    getLocation = async () => {
        try {
            const response = await Location.requestPermissionsAsync();
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            //Send to API and get Weather
        } catch (error) {
            Alert.alert("Location Permission Denied.", "Please enable location.");
        }
    }

    componentDidMount() {
        this, this.getLocation();
    }

    render() {
        const { isLoading, temp, condition } = this.state;
        return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
    }
}
