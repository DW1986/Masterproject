import React from "react";
import * as Animatable from "react-native-animatable";
import {StyleSheet, Text} from "react-native";

export function selectArrow(counter1, counter2, counter3, counter4) {
    if      (counter1 >= 1)
        return <Animatable.Image   source={require('../assets/other/SelectArrow.webp')} style={[styles.selectArrow,{left:115,top:143}]}
                                   animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" useNativeDriver={true} />

    else if (counter2 >= 1)
        return <Animatable.Image   source={require('../assets/other/SelectArrow.webp')} style={[styles.selectArrow,{left:245,top:146}]}
                                   animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" useNativeDriver={true} />
    else if (counter3 >= 1)
        return <Animatable.Image   source={require('../assets/other/SelectArrow.webp')} style={[styles.selectArrow,{left:375,top:149}]}
                                   animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" useNativeDriver={true} />
    else if (counter4 >= 1)
        return <Animatable.Image   source={require('../assets/other/SelectArrow.webp')} style={[styles.selectArrow,{left:505,top:140}]}
                                   animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" useNativeDriver={true} />
}

const styles = StyleSheet.create({

    selectArrow: {
        position: 'absolute',
        width:50,
        height:70,
    },

});
