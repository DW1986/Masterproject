import React from "react";
import * as Animatable from "react-native-animatable";
import {Dimensions, StyleSheet, Text} from "react-native";

var {width, height} = Dimensions.get('window');

export function selectArrow(counter1, counter2, counter3, counter4) {
    if      (counter1 >= 1)
        return <Animatable.Image   source={require('../assets/other/SelectArrow.webp')} style={[styles.selectArrow,{left:width/6,top:height/3}]}
                                   animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" useNativeDriver={true} />

    else if (counter2 >= 1)
        return <Animatable.Image   source={require('../assets/other/SelectArrow.webp')} style={[styles.selectArrow,{left:width/2.9,top:height/3}]}
                                   animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" useNativeDriver={true} />
    else if (counter3 >= 1)
        return <Animatable.Image   source={require('../assets/other/SelectArrow.webp')} style={[styles.selectArrow,{left:width/1.9,top:height/3}]}
                                   animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" useNativeDriver={true} />
    else if (counter4 >= 1)
        return <Animatable.Image   source={require('../assets/other/SelectArrow.webp')} style={[styles.selectArrow,{left:width/1.41,top:height/3}]}
                                   animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" useNativeDriver={true} />
}

const styles = StyleSheet.create({
    selectArrow: {
        position: 'absolute',
        width:width/15,
        height:height/6,
    },

});
