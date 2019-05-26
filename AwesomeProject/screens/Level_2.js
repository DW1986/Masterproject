<script src="http://localhost:8097"></script>

import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, Alert, TouchableOpacity, PermissionsAndroid, Animated
} from 'react-native';
import ViewShot from "react-native-view-shot";
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { colorsFromUrl } from 'react-native-dominant-color';
var RNFS = require('react-native-fs');
import { getAllSwatches } from 'react-native-palette';


export default class Level_2 extends Component {

    constructor() {
        super();
        this.state = {
            drawcolor: [{color: '#ff0000'}, {color: '#00ff00'}],
            dominant_color: 'null',
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg'


        }
    }


    componentDidMount () {

        setInterval(() => {
            // Your code
            this.refs.viewShot.capture().then(uri => {
                RNFS.writeFile(this.state.path, uri, 'base64')
                    .then((success) => {

                    })
            })
// Weiß wird in den swatches nicht wiedergegeben
            // Fehler,wenn es die Dateil test... das erste mal noch nicht gibt
        getAllSwatches({}, this.state.path, (error, swatches) => {
            if (error) {
               Alert.alert(error);
            }  else {
                swatches.sort((a, b) => {
                    return b.population - a.population;
                });

            }
            this.setState({dominant_color: swatches[0].color});
            this.colortest()
        })
        }, 3000);
    }



colortest(){
    switch(this.state.dominant_color) {

        case 'rgba(248,0,0,1,000)':
           this.setState({test:"red"})
            break;

        case 'rgba(0,128,0,1,000)':
            this.setState({test:"green"})
            break;

        default:
            this.setState({test:"none"})

    }
}



    render() {
        return (
            <View style={styles.container}>

                <Text>dominant Color: {this.state.dominant_color} </Text>
                <Text>Color: {this.state.test} </Text>

                <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.1,result:"base64"  }}>

                    <View style={styles.paint}>

                        <RNSketchCanvas
                            containerStyle={{ flex: 1 }}
                            canvasStyle={{ backgroundColor:'white',flex: 1 }}
                            defaultStrokeWidth={40}
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
        borderColor: 'grey',
        borderWidth: 3,
        marginBottom: 35,
        marginLeft: 7,

    }

});
