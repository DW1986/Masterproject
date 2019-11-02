import * as Animatable from "react-native-animatable";
import {Dimensions, StyleSheet} from "react-native";
import React from "react";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

// render and animate the text on the woodShild depending on order. Show only if errorcount is more than 2 for lvl 2
    export function text(order,textcolor,text,errorcount) {
        if (errorcount >= 2)
            switch (order) {
                case 0:
                case 2:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 1:
                case 3:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 4:
                case 6:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 5:
                case 7:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 8:
                case 10:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 9:
                case 11:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 12:
                case 14:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 13:
                case 15:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 16:
                case 18:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 17:
                case 19:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 20:
                case 22:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 21:
                case 23:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 24:
                case 26:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 25:
                case 27:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 28:
                case 30:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 29:
                case 31:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 32:
                case 34:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipInY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;
                case 33:
                case 35:
                    return <Animatable.Text
                        style={[styles.text, {color: textcolor}]}
                        animation="flipOutY" duration={3000} useNativeDriver={true}>{text}</Animatable.Text>;

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
