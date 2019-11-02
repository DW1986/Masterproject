import * as Animatable from "react-native-animatable";
import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// render and animate the woodShild depending on order. Show only if errorcount is more than 2 for lvl 4
export function woodShild(order,errorcount) {
    if (errorcount >= 2) {
        switch (order) {
            case 0:
            case 2:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 1:
            case 3:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 4:
            case 6:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 5:
            case 7:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 8:
            case 10:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 9:
            case 11:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 12:
            case 14:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 13:
            case 15:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
            case 16:
            case 18:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipInY" duration={3000} useNativeDriver={true}/>;
            case 17:
            case 19:
                return <Animatable.Image
                    source={require('../assets/other/Wood-Shild.webp')}
                    style={[{width: wp('55%')},{bottom: wp('2%')}, {height: hp('20%')},{resizeMode: 'stretch'},{position: 'absolute'}]}
                    animation="flipOutY" duration={3000} useNativeDriver={true}/>;
        }
    }
}
