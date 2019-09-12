import * as Animatable from "react-native-animatable";
import React from "react";
import FastImage from 'react-native-fast-image'
import {Dimensions} from "react-native";
var {width, height} = Dimensions.get('window')

// render and animate the woodShild depending on order
    export function woodShild(order) {
        switch (order) {

            case 0:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/2.7}, {height: height/5}]}
                    animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}/>
                break;
            case 1:
            case 2:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            case 3:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 4:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 5:
            case 6:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            case 7:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 8:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 9:
            case 10:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            case 11:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 12:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 13:
            case 14:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            case 15:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 16:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 17:
            case 18:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            case 19:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 20:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 21:
            case 22:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            case 23:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 24:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 25:
            case 26:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            case 27:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 28:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
                break;
            case 29:
            case 30:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            case 31:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>
                break;
            case 32:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>
            case 33:
            case 34:
                return <FastImage
                    source={require('../assets/other/Wood-Shild.webp')} style={[{width: width/3}, {height: 80}]}/>
                break;
            default:
        }
    }
