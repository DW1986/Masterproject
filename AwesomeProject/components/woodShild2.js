import * as Animatable from "react-native-animatable";
import React from "react";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');


// render and animate the woodShild depending on order. Show only if errorcount is more than 2 for lvl 2
export function woodShild(order,errorcount) {
    if(errorcount >= 2) {
        switch (order) {
            case 0: case 2:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY"  duration={3000} useNativeDriver={true}/>;
            case 1: case 3:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 4: case 6:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 5: case 7:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 8: case 10:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 9: case 11:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 12: case 14:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 13: case 15:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 16: case 18:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 17: case 19:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 20: case 22:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 21: case 23:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 24: case 26:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 25: case 27:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 28: case 30:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 29: case 31:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 32: case 34:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 33: case 35:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.8}, {height: height/5}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        }
    }
}
