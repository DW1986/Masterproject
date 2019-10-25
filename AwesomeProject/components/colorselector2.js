import {StyleSheet, Dimensions} from "react-native";
import React from 'react';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('window');

// render the color-pictures for lvl 2
export function red(colorselected) {
    if (colorselected === "red") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/red_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/red.webp')}/>
    }
}

export function blue(colorselected) {
    if (colorselected === "blue") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue.webp')}/>
    }
}

export function green(colorselected) {
    if (colorselected === "green") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/green_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/green.webp')}/>
    }
}

export function yellow(colorselected) {
    if (colorselected === "yellow") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow.webp')}/>
    }
}

export function pink(colorselected) {
    if (colorselected === "pink") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/pink_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/pink.webp')}/>
    }
}

export function brown(colorselected) {
    if (colorselected === "brown") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown.webp')}/>
    }
}

export function purple(colorselected) {
    if (colorselected === "purple") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple.webp')}/>
    }
}

export function orange(colorselected) {
    if (colorselected === "orange") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange.webp')}/>
    }
}

export function cyan(colorselected) {
    if (colorselected === "cyan") {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan_selected.webp')}/>
    } else {
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan.webp')}/>
    }
}

const styles = StyleSheet.create({
    colors: {
        width: width / 14,
        height: height / 5.9,
    }
});
