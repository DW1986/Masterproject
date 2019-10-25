import {StyleSheet,Dimensions} from "react-native";
import React from 'react';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('window');

// render the color-pictures depending on the order for lvl 1
export function colorselector(order,colorselected) {

    switch (order) {
        case 0:
        case 1:
        case 2:
        case 3:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/red_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/red.webp')}/>;
            }
        case 4:
        case 5:
        case 6:
        case 7:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/blue_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/blue.webp')}/>;
            }
        case 8:
        case 9:
        case 10:
        case 11:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/green_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/green.webp')}/>;
            }
        case 12:
        case 13:
        case 14:
        case 15:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/yellow_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/yellow.webp')}/>;
            }
        case 16:
        case 17:
        case 18:
        case 19:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/pink_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/pink.webp')}/>;
            }
        case 20:
        case 21:
        case 22:
        case 23:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/brown_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/brown.webp')}/>;
            }
        case 24:
        case 25:
        case 26:
        case 27:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/purple_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/purple.webp')}/>;
            }
        case 28:
        case 29:
        case 30:
        case 31:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/orange_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/orange.webp')}/>;
            }
        case 32:
        case 33:
        case 34:
        case 35:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/cyan_selected.webp')}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/cyan.webp')}/>;
            }
    }
}

const styles = StyleSheet.create({
    colors: {
        width: width / 14,
        height: height / 5.9,
    }
});
