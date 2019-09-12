import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import * as Animatable from "react-native-animatable";

export default class SplashScreen extends React.Component {

    render() {
        return (
            <ImageBackground style={styles.background}>
                <Animatable.Image
                    style={styles.pictures} animation="rotate" iterationCount="infinite" easing="linear"
                    source={require('../assets/other/color_wheel.webp')}/>
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
        backgroundColor: 'orange'
    },
    pictures:{
        height:100,
        width:100
    }
});