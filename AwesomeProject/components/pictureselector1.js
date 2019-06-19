import * as Animatable from "react-native-animatable";
import React from "react";
import {StyleSheet} from "react-native";

// render and animate the different pictures for coloring depending on order
    export function pictureselector(order) {
        if (order === 0) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} delay={2000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/red_fire_engine_alpha.png')}/>
        } else if (order === 1) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/red_fire_engine.png')}/>
        } else if (order === 2) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/strawberry_alpha.png')}/>
        } else if (order === 3) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/strawberry.png')}/>
        } else if (order === 4) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/police-car_alpha.png')}/>
        } else if (order === 5) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/police-car.png')}/>
        } else if (order === 6) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/whale_alpha.png')}/>
        } else if (order === 7) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/whale.png')}/>
        } else if (order === 8) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/leaf_alpha.png')}/>
        } else if (order === 9) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/leaf.png')}/>
        } else if (order === 10) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/frog_alpha.png')}/>
        } else if (order === 11) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/frog.png')}/>
        } else if (order === 12) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/sun_alpha.png')}/>
        } else if (order === 13) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/sun.png')}/>
        } else if (order === 14) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/bannana_alpha.png')}/>
        } else if (order === 15) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/bannana.png')}/>
        } else if (order === 16) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/flamengo_alpha.png')}/>
        } else if (order === 17) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/flamengo.png')}/>
        } else if (order === 18) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/pig_alpha.png')}/>
        } else if (order === 19) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/pig.png')}/>
        } else if (order === 20) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/horse_alpha.png')}/>
        } else if (order === 21) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/horse.png')}/>
        } else if (order === 22) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/Teddy_alpha.png')}/>
        } else if (order === 23) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/Teddy.png')}/>
        } else if (order === 24) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/flower_alpha.png')}/>
        } else if (order === 25) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/flower.png')}/>
        } else if (order === 26) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/butterfly_alpha.png')}/>
        } else if (order === 27) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/butterfly.png')}/>
        } else if (order === 28) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/orange_alpha.png')}/>
        } else if (order === 29) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/orange.png')}/>
        } else if (order === 30) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/fish_alpha.png')}/>
        } else if (order === 31) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/fish.png')}/>
        } else if (order === 32) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/ballons_alpha.png')}/>
        } else if (order === 33) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/ballons.png')}/>
        } else if (order === 34) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                source={require('../assets/pictures/ice-cream_alpha.png')}/>
        } else if (order === 33) {
            return <Animatable.Image
                style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                source={require('../assets/pictures/ice-cream.png')}/>
        }
    }
const styles = StyleSheet.create({
    pictures: {
        marginTop: 4,
        width: 392,
        height: 240,

    }

});