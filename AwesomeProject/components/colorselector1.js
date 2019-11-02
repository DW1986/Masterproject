import {StyleSheet} from "react-native";
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FastImage from "react-native-fast-image";

// render the color-pictures depending on the order for lvl 1
export function colorselector(order,colorselected) {

    switch (order) {
        case 0:
        case 1:
        case 2:
        case 3:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/red_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/red.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
        case 4:
        case 5:
        case 6:
        case 7:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/blue_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/blue.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
        case 8:
        case 9:
        case 10:
        case 11:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/green_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/green.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
        case 12:
        case 13:
        case 14:
        case 15:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/yellow_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/yellow.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
        case 16:
        case 17:
        case 18:
        case 19:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/pink_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/pink.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
        case 20:
        case 21:
        case 22:
        case 23:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/brown_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/brown.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
        case 24:
        case 25:
        case 26:
        case 27:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/purple_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/purple.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
        case 28:
        case 29:
        case 30:
        case 31:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/orange_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/orange.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
        case 32:
        case 33:
        case 34:
        case 35:
            if (colorselected === true) {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/cyan_selected.webp')}
                                  resizeMode={FastImage.resizeMode.contain}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/colors/cyan.webp')}
                                  resizeMode={FastImage.resizeMode.contain}/>;
            }
    }
}

const styles = StyleSheet.create({
    colors: {
        width: wp('8.3%'),
        height: hp('20%'),
    }
});
