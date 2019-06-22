import {Image, StyleSheet} from "react-native";
import React, { Component } from 'react';
import FastImage from 'react-native-fast-image'

// render the selected-color-pictures depending on the order
export function colorselector(order,colorselected){

    switch(order) {

        case 0:
        case 1:
        case 2:
        case 3:
            if (colorselected === true)
                return <FastImage style={styles.colors} source={require('../assets/colors/red_selected.png')}/>
            return <FastImage style={styles.colors}
                          source={require('../assets/colors/red.png')}/>
        case 4:
        case 5:
        case 6:
        case 7:
            if (colorselected === true)
                return <FastImage style={styles.colors}
                              source={require('../assets/colors/blue_selected.png')}/>
            return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue.png')}/>
        case 8:
        case 9:
        case 10:
        case 11:
            if (colorselected === true)
                return <FastImage style={styles.colors}
                              source={require('../assets/colors/green_selected.png')}/>
            return <FastImage style={styles.colors}
                          source={require('../assets/colors/green.png')}/>
        case 12:
        case 13:
        case 14:
        case 15:
            if (colorselected === true)
                return <FastImage style={styles.colors}
                              source={require('../assets/colors/yellow_selected.png')}/>
            return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow.png')}/>
        case 16:
        case 17:
        case 18:
        case 19:
            if (colorselected === true)
                return <FastImage style={styles.colors}
                              source={require('../assets/colors/pink_selected.png')}/>
            return <Image style={styles.colors}
                          source={require('../assets/colors/pink.png')}/>
        case 20:
        case 21:
        case 22:
        case 23:
            if (colorselected === true)
                return <FastImage style={styles.colors}
                              source={require('../assets/colors/brown_selected.png')}/>
            return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown.png')}/>
        case 24:
        case 25:
        case 26:
        case 27:
            if (colorselected === true)
                return <FastImage style={styles.colors}
                              source={require('../assets/colors/purple_selected.png')}/>
            return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple.png')}/>
        case 28:
        case 29:
        case 30:
        case 31:
            if (colorselected === true)
                return <FastImage style={styles.colors}
                              source={require('../assets/colors/orange_selected.png')}/>
            return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange.png')}/>
        case 32:
        case 33:
        case 34:
        case 35:
            if (colorselected === true)
                return <FastImage style={styles.colors}
                              source={require('../assets/colors/cyan_selected.png')}/>
            return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan.png')}/>
        default:
    }
}

const styles = StyleSheet.create({
 colors: {
        width: 40,
        height: 80,
    }
});
