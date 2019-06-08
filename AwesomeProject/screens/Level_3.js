import React, { Component } from 'react';
import {
    Animated,
    AppRegistry, Easing, ImageBackground,
    StyleSheet,
    View, Dimensions, Image, Text, TouchableOpacity, Alert
} from 'react-native';
import RNSketchCanvas, { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
var RNFS = require('react-native-fs');
import { getAllSwatches } from 'react-native-palette';

var {width, height} = Dimensions.get('window')
export default class Level_3 extends Component {

    constructor(props) {
        super(props)
        this.state = {

            dominantcolor:'blue',

        }
    }



    render() {
        return (
            <ImageBackground source={require('../assets/fonts/Level1.png')} style={styles.background}>



                    <View style={styles.paint}>

                        <SketchCanvas
                            ref="sketchRef"
                            style={{ flex: 1, backgroundColor:'#F1F1F1' }}
                            // canvasStyle={{ ,flex: 1 }}
                            strokeWidth={40}
                            strokeColor={this.state.dominantcolor}

                        />
                    </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,




    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    },
    colortabview: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    colortab: {
        width: 90,
        height: 90,
        backgroundColor: 'white',
        borderRightColor: 'grey',
        borderRightWidth: 3,
        borderTopRightRadius: 4,
        borderTopColor: 'grey',
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',


    }, colors: {
        width: 40,
        height: 80,

    },

    paint: {
        color: 'green',
        width: 410,
        height: 254,
        borderColor: 'grey',
        borderWidth: 3,
        marginBottom: 35,
        marginLeft: 7,
    },
    pictures: {
        width: 260,
        height: 160,
        marginLeft: 60,
        marginTop: 50
    },
    backtabview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    backtab:{
        width: 90,
        height: 90,
        backgroundColor:'white',
        borderLeftColor: 'grey',
        borderLeftWidth: 3,
        borderBottomLeftRadius:4,
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        justifyContent:'center',
        alignItems:'center',
    },
    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});
