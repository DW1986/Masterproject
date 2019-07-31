import * as Animatable from "react-native-animatable";
import {StyleSheet, Text} from "react-native";
import React from "react";

// render and animate the text on the woodShild depending on order
    export function text(order,textcolor,text,errorcount) {
        if(errorcount >= 2)
        switch (order) {
            case 0: case 2:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" delay={2000} duration={3000}>{text}</Animatable.Text>
                break;
            case 1: case 3:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;
            case 4: case 6:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" duration={3000}>{text}</Animatable.Text>
                break;
            case 5: case 7:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;
            case 8: case 10:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" duration={3000}>{text}</Animatable.Text>
                break;
            case 9: case 11:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;
            case 12: case 14:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" duration={3000}>{text}</Animatable.Text>
                break;
            case 13: case 15:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;
            case 16: case 18:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" duration={3000}>{text}</Animatable.Text>
                break;
            case 17: case 19:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;
            case 20: case 22:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" duration={3000}>{text}</Animatable.Text>
                break;
            case 21: case 23:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;
            case 24: case 26:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" duration={3000}>{text}</Animatable.Text>
                break;
             case 25: case 27:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;
            case 28: case 30:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" duration={3000}>{text}</Animatable.Text>
                break;
            case 29: case 31:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;
            case 32: case 34:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipInY" duration={3000}>{text}</Animatable.Text>
                break;
            case 33: case 35:
                return <Animatable.Text
                    style={[styles.text,{color: textcolor}]}
                    animation="flipOutY" duration={3000}>{text}</Animatable.Text>
                break;

            default:
        }
    }
const styles = StyleSheet.create({
    text:{


        fontSize: 45,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowRadius: 20,
        height:70,
        overflow:'visible'





}


})
