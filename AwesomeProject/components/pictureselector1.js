import * as Animatable from "react-native-animatable";
import React from "react";
import {Dimensions, StyleSheet} from "react-native";

var {width, height} = Dimensions.get('window')


// render and animate the different pictures for coloring depending on order
    export function pictureselector(order) {
        switch (order) {
        //    case 0:
          //  case 2:
         //   case 4: case 6: case 8: case 10: case 12: case 14: case 16: case 18: case 20: case 22: case 24: case 26: case 28: case 30: case 32: case 34: case 36:
         //       return <Animatable.Image
         //           style={styles.pictures} animation="fadeIn" duration={3000} delay={2000} easing={"ease-in-cubic"} useNativeDriver={true}
         //           source={require('../assets/pictures/test.png')}/>
            case 0:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} delay={2000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/red_fire_engine_alpha.webp')}/>
            case 1 :
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/red_fire_engine.webp')}/>
            case 2:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/strawberry_alpha.webp')}/>
            case 3:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/strawberry.webp')}/>
            case 4:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/police-car_alpha.webp')}/>
            case 5:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/police-car.webp')}/>
            case 6:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/whale_alpha.webp')}/>
            case 7:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/whale.webp')}/>
            case 8:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/leaf_alpha.webp')}/>
            case 9:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/leaf.webp')}/>
            case 10:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/frog_alpha.webp')}/>
            case 11:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/frog.webp')}/>
            case 12:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/sun_alpha.webp')}/>
            case 13:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/sun.webp')}/>
            case 14:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/bannana_alpha.webp')}/>
            case 15:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/bannana.webp')}/>
            case 16:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/flamengo_alpha.webp')}/>
            case 17:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/flamengo.webp')}/>
            case 18:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/pig_alpha.webp')}/>
            case 19:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/pig.webp')}/>
            case 20:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/horse_alpha.webp')}/>
            case 21:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/horse.webp')}/>
            case 22:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/Teddy_alpha.webp')}/>
            case 23:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/Teddy.webp')}/>
            case 24:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/flower_alpha.webp')}/>
            case 25:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/flower.webp')}/>
            case 26:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/butterfly_alpha.webp')}/>
            case 27:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/butterfly.webp')}/>
            case 28:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/carrots_alpha.webp')}/>
            case 29:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/carrots.webp')}/>
            case 30:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/fish_alpha.webp')}/>
            case 31:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/fish.webp')}/>
            case 32:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/ballons_alpha.webp')}/>
            case 33:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/ballons.webp')}/>
            case 34:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeIn" duration={3000} easing={"ease-in-cubic"} useNativeDriver={true}
                    source={require('../assets/pictures/ice-cream_alpha.webp')}/>
            case 35:
                return <Animatable.Image
                    style={styles.pictures} animation="fadeOut" duration={7000} easing={"ease-out-expo"} useNativeDriver={true}
                    source={require('../assets/pictures/ice-cream.webp')}/>
        }
    }
const styles = StyleSheet.create({
    pictures: {
        resizeMode:'contain',
        width: width/1.83,
        height: height/1.7,
        alignSelf:'center',
        left:-width/400,
        top:-height/ 12

    }

});