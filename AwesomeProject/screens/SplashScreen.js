import React, {Component} from 'react';
import {Alert, Animated, Dimensions, Image,Text, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as Animatable from "react-native-animatable";

export default class SplashScreen extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../assets/other/Loading.png')} style={styles.background}>
                <Animatable.Image
                    style={styles.pictures} animation="rotate" iterationCount="infinite" easing="linear"
                    source={require('../assets/other/color_wheel.png')}/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pictures:{
        height:100,
        width:100
    }
})