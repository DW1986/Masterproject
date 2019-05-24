import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, Alert, TouchableOpacity, PermissionsAndroid
} from 'react-native';

import ViewShot from "react-native-view-shot";
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { colorsFromUrl } from 'react-native-dominant-color';
import RNFetchBlob from 'react-native-fetch-blob'


export default class Level_2 extends Component {

    constructor() {
        super();
        this.state = {
            drawcolor: [{color: '#ff0000'}, {color: '#00ff00'}],
            dominant_color: '#ffffff',
            imageUrl: 'https://source.unsplash.com/random/800x600',
            path : '/cache/test.png'

        }
    }

    componentDidMount () {
        RNFetchBlob.fs.writeFile(this.state.path, 'foo', 'utf8')
            .then(()=>{ Alert.alert("success" + this.state.path) })



        this.sleep(10000).then(() => {
            this.refs.viewShot.capture().then(uri => {

            });
        })


    }
    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
asdf() {
    this.sleep(10000).then(() => {

    colorsFromUrl(this.state.imageUrl, (err, colors) => {
        if(!err) {
            this.setState({ dominant_color: colors.dominantColor });
        }
    })
    })
}

    render() {
        return (
            <View style={styles.container}>
                {this.asdf()}
                <Text>dominant Color: {this.state.dominant_color} </Text>
                <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
                <View ref="viewRef" style={styles.paint}>
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
