import {StyleSheet} from "react-native";
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FastImage from "react-native-fast-image";


// render the color-pictures for lvl 2
export function red(first,second) {

    if (first === "red" || second === "red")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/red_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/red.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}
export function blue(first,second) {

    if (first === "blue" || second === "blue")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/blue.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}
export function green(first,second) {

    if (first === "green" || second === "green")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/green_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/green.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}
export function yellow(first,second) {

    if (first === "yellow" || second === "yellow")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/yellow.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}
export function pink(first,second) {

    if (first === "pink" || second === "pink")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/pink_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/pink.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}
export function brown(first,second) {

    if (first === "brown" || second === "brown")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/brown.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}
export function purple(first,second) {

    if (first === "purple" || second === "purple")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/purple.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}
export function orange(first,second) {

    if (first === "orange" || second === "orange")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/orange.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}
export function cyan(first,second) {

    if (first === "cyan" || second === "cyan")
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan_selected.webp')}
                          resizeMode={FastImage.resizeMode.contain}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/cyan.webp')}
                      resizeMode={FastImage.resizeMode.contain}/>
}

const styles = StyleSheet.create({
    colors: {
        width: wp('6.5%'),
        height: hp('15.8%'),
    }
});
