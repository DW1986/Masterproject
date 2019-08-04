import React from "react";
import FastImage from 'react-native-fast-image'
import {StyleSheet} from "react-native";

// render the starfall depending on order
    export function starfall(order) {
        switch (order) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
            case 11:
            case 13:
            case 15:
            case 17:
            case 19:
            case 21:
            case 23:
            case 25:
            case 27:
            case 29:
            case 31:
            case 33:
            case 35:
                return <FastImage  style={styles.starfall}
                              source={require('../assets/other/starfall.gif')}/>
                break;
            default:
        }
    }
const styles = StyleSheet.create({
    starfall: {
        marginLeft:0.8,
        marginTop:-237,
        width: 392,
        height: 237,
        opacity: 0.5

    }
});