import React from "react";
import {Image} from 'react-native';
import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('window');

// render the starfall depending on order for lvl 1 + 2 + 3 + 4
export function starfall(order) {

    switch (order) {
        case 1: case 3: case 5: case 7: case 9:
        case 11: case 13: case 15: case 17: case 19:
        case 21: case 23: case 25: case 27: case 29:
        case 31: case 33:case 35:
            return <Image  style={styles.starfall}
                              source={require('../assets/animations/starfall.webp')}/>;
    }
}

const styles = StyleSheet.create({
    starfall: {
        width: width/1.86,
        height: height/1.74,
        position:'absolute',
        right:width/200,
        bottom:height/14.5
    }
});