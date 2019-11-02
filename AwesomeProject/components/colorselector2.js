import {StyleSheet} from "react-native";
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FastImage from "react-native-fast-image";

// render the color-pictures for lvl 2
export function red(colorselected) {
    if (colorselected === "red") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/red_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/red.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

export function blue(colorselected) {
    if (colorselected === "blue") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

export function green(colorselected) {
    if (colorselected === "green") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/green_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/green.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

export function yellow(colorselected) {
    if (colorselected === "yellow") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

export function pink(colorselected) {
    if (colorselected === "pink") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/pink_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/pink.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

export function brown(colorselected) {
    if (colorselected === "brown") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

export function purple(colorselected) {
    if (colorselected === "purple") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

export function orange(colorselected) {
    if (colorselected === "orange") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

export function cyan(colorselected) {
    if (colorselected === "cyan") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>
    }
}

const styles = StyleSheet.create({
    colors: {
        width: wp('6.5%'),
        height: hp('15.8%'),
    }
});
