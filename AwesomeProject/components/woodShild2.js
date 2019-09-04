import * as Animatable from "react-native-animatable";
import React from "react";

// render and animate the woodShild depending on order
    export function woodShild(order,errorcount) {
    if(errorcount >= 2)
        switch (order) {
            case 0: case 2:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY"  duration={3000} useNativeDriver={true}/>
                break;
            case 1: case 3:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 4: case 6:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 5: case 7:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 8: case 10:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 9: case 11:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 12: case 14:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 13: case 15:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 16: case 18:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 17: case 19:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 20: case 22:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 21: case 23:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 24: case 26:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 25: case 27:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 28: case 30:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 29: case 31:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 32: case 34:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
            case 33: case 35:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: 250}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
            default:
        }
    }
