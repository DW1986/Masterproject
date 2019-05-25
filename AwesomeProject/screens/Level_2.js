import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, Alert, TouchableOpacity, PermissionsAndroid
} from 'react-native';
import ViewShot from "react-native-view-shot";
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { colorsFromUrl } from 'react-native-dominant-color';

export default class Level_2 extends Component {

    constructor() {
        super();
        this.state = {
            drawcolor: [{color: '#ff0000'}, {color: '#00ff00'}],
            dominant_color: '#ffffff',
            imageUrl: 'https://source.unsplash.com/random/800x600',
        }
    }

    componentDidMount () {

// Random pictures updates dominant color after 2 seconds
        sleep(2000).then(() => {
            colorsFromUrl(this.state.imageUrl, (err, colors) => {
                if (!err) {
                    this.setState({dominant_color: colors.dominantColor})
                }
            })
        })

// Screenshot picture should update dominant color after 4 seconds (not working)
        sleep(4000).then(() => {
           Alert.alert("Color should update now again")
            this.refs.viewShot.capture().then(uri => {
                colorsFromUrl(uri, (err, colors) => {
                    if (!err) {
                        this.setState({dominant_color: colors.dominantColor})
                    }
                })
            });
        })

        function sleep (time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
    }




    render() {
        return (
            <View style={styles.container}>

                <Text>dominant Color: {this.state.dominant_color} </Text>
                <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
                <View style={styles.paint}>
                        <RNSketchCanvas
                            containerStyle={{ flex: 1 }}
                            canvasStyle={{ flex: 1 }}
                            defaultStrokeWidth={15}
                            defaultStrokeIndex={0}
                            strokeColors={this.state.drawcolor}
                        />

                </View>
                </ViewShot>
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
        width: 410,
        height: 254,
        backgroundColor: 'black',
        borderColor: 'grey',
        borderWidth: 3,
        marginBottom: 35,
        marginLeft: 7,
    }

});
