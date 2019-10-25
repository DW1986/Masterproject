import * as Animatable from "react-native-animatable";
import React from "react";
import FastImage from 'react-native-fast-image'
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

// render and animate the woodShild depending on order for lvl 1
export function woodShild(order) {

    switch (order) {
        case 0:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}/>;
        case 1:
        case 2:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
        case 3:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 4:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 5:
        case 6:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
        case 7:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 8:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 9:
        case 10:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
        case 11:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 12:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 13:
        case 14:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
        case 15:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 16:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 17:
        case 18:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
        case 19:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 20:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 21:
        case 22:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
        case 23:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 24:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 25:
        case 26:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
        case 27:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 28:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 29:
        case 30:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
        case 31:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        case 32:
            return <Animatable.Image
                source={require('../assets/other/Wood-Shild.webp')} style={[{width: width / 2.8}, {height: height / 5}]}
                animation="flipInY" duration={3000} useNativeDriver={true}/>;
        case 33:
        case 34:
            return <FastImage
                source={require('../assets/other/Wood-Shild.webp')}
                style={[{width: width / 2.8}, {height: height / 5}]}/>;
    }
}
