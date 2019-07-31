import * as Animatable from "react-native-animatable";
import React from "react";
import {StyleSheet} from "react-native";


// render and animate the different pictures for coloring depending on order
    export function pictureselector(order) {
        switch (order) {
            case 0:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} delay={2000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/red_fire_engine_alpha.png')}/>
            case 1 :
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/red_fire_engine.png')}/>
            case 2:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/strawberry_alpha.png')}/>
            case 3:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/strawberry.png')}/>
            case 4:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/police-car_alpha.png')}/>
            case 5:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/police-car.png')}/>
            case 6:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/whale_alpha.png')}/>
            case 7:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/whale.png')}/>
            case 8:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/leaf_alpha.png')}/>
            case 9:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/leaf.png')}/>
            case 10:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/frog_alpha.png')}/>
            case 11:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/frog.png')}/>
            case 12:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/sun_alpha.png')}/>
            case 13:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/sun.png')}/>
            case 14:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/bannana_alpha.png')}/>
            case 15:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/bannana.png')}/>
            case 16:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/flamengo_alpha.png')}/>
            case 17:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/flamengo.png')}/>
            case 18:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/pig_alpha.png')}/>
            case 19:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/pig.png')}/>
            case 20:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/horse_alpha.png')}/>
            case 21:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/horse.png')}/>
            case 22:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/Teddy_alpha.png')}/>
            case 23:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/Teddy.png')}/>
            case 24:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/flower_alpha.png')}/>
            case 25:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/flower.png')}/>
            case 26:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/butterfly_alpha.png')}/>
            case 27:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/butterfly.png')}/>
            case 28:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/carrots_alpha.png')}/>
            case 29:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/carrots.png')}/>
            case 30:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/fish_alpha.png')}/>
            case 31:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/fish.png')}/>
            case 32:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/ballons_alpha.png')}/>
            case 33:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/ballons.png')}/>
            case 34:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"}
                    source={require('../assets/pictures/ice-cream_alpha.png')}/>
            case 35:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"}
                    source={require('../assets/pictures/ice-cream.png')}/>
        }
    }
const styles = StyleSheet.create({
    pictures: {
marginLeft:0.8,
        marginTop:-11,
        width: 392,
        height: 237,

    }

});