import React from "react";
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
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
        width: width/1.80,
        height: height/1.65,
        alignSelf:'center',
        position:'absolute',
        left:-width/200,
        bottom:height/17.3
    }
});