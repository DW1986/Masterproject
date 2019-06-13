import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, Alert, TouchableOpacity, PermissionsAndroid, Animated, PanResponder, ImageBackground, img
} from 'react-native';
import ViewShot from "react-native-view-shot";
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
var RNFS = require('react-native-fs');
import { getAllSwatches } from 'react-native-palette';
import { ColorExtractor } from 'react-color-extractor'



export default class Level_2 extends Component {


    constructor(props) {
        super(props)

        this.state = {
            colors: [],
            dominantcolor:null,



        }

    }

    renderSwatches = () => {
        const { colors } = this.state

        return colors.map((color, id) => {
            return (
                <div
                    key={id}
                    style={{
                        backgroundColor: color,
                        width: 100,
                        height: 100
                    }}
                />
            )
        })
    }

    getColors = colors =>
        this.setState(state => ({ colors: [...state.colors, ...colors] }))




    render() {
        return (

            <View style={styles.container}>

                <Text>rgba:{this.state.dominantcolor_rgba}</Text>
                <Text>dominantcolor:{this.state.dominantcolor}</Text>
                <Text>drawcolor:{this.state.drawcolor}</Text>
                <Text>oder:{this.state.order}</Text>
                <Text>colorselected:{String(this.state.colorselected)}</Text>





                <View style={styles.paint} >

                    <ColorExtractor getColors={this.getColors}>
                        <img
                            src="https://i.imgur.com/OCyjHNF.jpg"
                            style={{ width: 700, height: 500 }}
                        />
                    </ColorExtractor>
                </View>
            <View>
                {this.renderSwatches()}

            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

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

});
