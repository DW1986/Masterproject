import * as Animatable from "react-native-animatable";
import React from "react";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

// render and animate the woodShild depending on order for lvl 3
export function woodShild(order) {

    switch (order) {
        case 0:
        case 1:
        case 2:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}/>;
        case 3:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 4:
        case 5:
        case 6:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 7:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 8:
        case 9:
        case 10:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 11:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 12:
        case 13:
        case 14:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 15:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 16:
        case 17:
        case 18:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 19:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 1.8}, {height: height / 5}, {resizeMode: 'stretch'}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
    }
}
