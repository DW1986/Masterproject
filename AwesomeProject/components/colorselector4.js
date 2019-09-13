import {StyleSheet} from "react-native";
import React from 'react';
import FastImage from 'react-native-fast-image';

// render the color-pictures for lvl 2
export function red(first,second){

    if(first === "red" || second === "red")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/red_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/red.webp')}/>
}
export function blue(first,second){

    if(first === "blue" || second === "blue")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/blue_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/blue.webp')}/>
}
export function green(first,second){

    if(first === "green" || second === "green")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/green_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/green.webp')}/>
}
export function yellow(first,second){

    if(first === "yellow" || second === "yellow")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/yellow_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/yellow.webp')}/>
}
export function pink(first,second){

    if(first === "pink" || second === "pink")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/pink_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/pink.webp')}/>
}
export function brown(first,second){

    if(first === "brown" || second === "brown")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/brown_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/brown.webp')}/>
}
export function purple(first,second){

    if(first === "purple" || second === "purple")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/purple_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/purple.webp')}/>
}
export function orange(first,second){

    if(first === "orange" || second === "orange")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/orange_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/orange.webp')}/>
}
export function cyan(first,second){

    if(first === "cyan" || second === "cyan")
        return  <FastImage style={styles.colors}
                           source={require('../assets/colors/cyan_selected.webp')}/>;
    return <FastImage style={styles.colors}
                      source={require('../assets/colors/cyan.webp')}/>
}

const styles = StyleSheet.create({
    colors: {
        width: 55,
        height: 77,
    }
});
