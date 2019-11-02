import React from "react";
import {Image} from 'react-native';
import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// render the starfall depending on order for lvl 1 + 2 + 3 + 4
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
        case 50:
            return <Image style={styles.starfall}
                          source={require('../assets/animations/starfall.webp')}/>;
    }
}

const styles = StyleSheet.create({
    starfall: {
        width: wp('56%'),
        height: hp('62%'),
        position: 'absolute',
        bottom: hp('24.5%'),
    }
});