import * as Animatable from "react-native-animatable";
import {StyleSheet, Text} from "react-native";
import React from "react";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// render and animate the text on the woodShild depending on order for lvl 1
    export function text(order,textcolor,text) {
        switch (order) {
            case 0:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 1:
            case 2:
                return <Text
                    style={[styles.text, {color: textcolor}]}>{text}</Text>;
            case 3:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 4:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 5:
            case 6:
                return <Text
                    style={[styles.text, {color: textcolor}]}>{text}</Text>;
            case 7:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 8:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 9:
            case 10:
                return <Text
                    style={[styles.text, {color: textcolor}]}>{text}</Text>;
            case 11:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 12:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 13:
            case 14:
                return <Text
                    style={[styles.text, {color: textcolor}]}>{text}</Text>;
            case 15:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 16:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 17:
            case 18:
                return <Text
                    style={[styles.text, {color: textcolor}]}>{text}</Text>;
            case 19:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 20:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 21:
            case 22:
                return <Text
                    style={[styles.text, {color: textcolor}]}>{text}</Text>;
            case 23:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 24:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 25:
            case 26:
                return <Text
                    style={[styles.text, {color: textcolor}]}>{text}</Text>;
            case 27:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 28:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 29:
            case 30:
                return <Text
                    style={[styles.text, {color: textcolor}]}>{text}</Text>;
            case 31:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 32:
                return <Animatable.Text
                    style={[styles.text, {color: textcolor}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
            case 33:
            case 34:
                return <Text
                    style={[styles.text, {color: textcolor}]} useNativeDriver={true}>{text}</Text>;
            default:
        }
    }

const styles = StyleSheet.create({
    text: {
        fontSize: hp('10%'),
        fontStyle: 'normal',
        fontWeight: 'bold',
        textShadowColor: 'black',
        bottom: hp('8%'),
        overflow: 'visible',
    }
});
