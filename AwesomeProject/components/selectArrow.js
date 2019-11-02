import React from "react";
import * as Animatable from "react-native-animatable";
import {Dimensions, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

// render the select arrow depending on the selected egg
export function selectArrow(counter1, counter2, counter3, counter4) {
    if (counter1 >= 1)
        return <Animatable.Image source={require('../assets/other/SelectArrow.webp')}
                                 style={[styles.selectArrow, {left: wp('14%'), top: hp('30%')}]}
                                 animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate"
                                 useNativeDriver={true}/>;

    else if (counter2 >= 1)
        return <Animatable.Image source={require('../assets/other/SelectArrow.webp')}
                                 style={[styles.selectArrow, {left: wp('32%'), top: hp('30%')}]}
                                 animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate"
                                 useNativeDriver={true}/>;
    else if (counter3 >= 1)
        return <Animatable.Image source={require('../assets/other/SelectArrow.webp')}
                                 style={[styles.selectArrow, {left: wp('50%'), top: hp('30%')}]}
                                 animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate"
                                 useNativeDriver={true}/>;
    else if (counter4 >= 1)
        return <Animatable.Image source={require('../assets/other/SelectArrow.webp')}
                                 style={[styles.selectArrow, {left: wp('68%'), top: hp('30%')}]}
                                 animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate"
                                 useNativeDriver={true}/>;
}

const styles = StyleSheet.create({
    selectArrow: {
        position: 'absolute',
        width:wp('8%'),
        height: hp('20%'),
    },

});
