import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, Alert, TouchableOpacity, PermissionsAndroid, Animated, PanResponder
} from 'react-native';
import ViewShot from "react-native-view-shot";
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { colorsFromUrl } from 'react-native-dominant-color';
var RNFS = require('react-native-fs');
import { getAllSwatches } from 'react-native-palette';



export default class Level_2 extends Component {


    constructor(props) {
        super(props)

        this.state = {

            dominantcolor:null,
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg',


        }

    }


makeScreenshot() {
    this.refs.viewShot.capture().then(uri => {
        RNFS.writeFile(this.state.path, uri, 'base64')
            .then((success) => {
                getAllSwatches({}, this.state.path, (error, swatches) => {
                    if (error) {
                        Alert.alert(error);
                    }  else {
                        swatches.sort((a, b) => {
                            return b.population - a.population;
                        })
                    }
                    this.setState({dominantcolor_rgba: swatches[0].color});
                    this.getColor()
                })
            })
    })
}
    getColor(){
        switch(this.state.dominantcolor_rgba) {

            case 'rgba(248,0,0,1,000)':
                this.setState({dominantcolor:"red"})
                break;

            case 'rgba(0,0,248,1,000)':
                this.setState({dominantcolor:"blue"})
                break;
            case 'rgba(0,248,0,1,000)':
                this.setState({dominantcolor:"green"})
                break;
            case 'rgba(248,248,0,1,000)':
                this.setState({dominantcolor:"yellow"})
                break;
            case 'rgba(248,104,176,1,000)':
                this.setState({dominantcolor:"pink"})
                break;
            case 'rgba(152,120,64,1,000)':
                this.setState({dominantcolor:"brown"})
                break;
            case 'rgba(152,0,248,1,000)':
                this.setState({dominantcolor:"purple"})
                break;
            case 'rgba(248,168,8,1,000)':
                this.setState({dominantcolor:"orange"})
                break;
            case 'rgba(0,248,248,1,000)':
                this.setState({dominantcolor:"cyan"})
                break;

            default:
                this.setState({dominantcolor:"white"})

        }
    }


    componentDidMount () {
        this.makeScreenshot()
    }

componentWillUnmount() {
        clearTimeout(this.timeout)
}






    render() {
        return (

            <View style={styles.container}>

    <Text>dominant Color: {this.state.dominantcolor_rgba} </Text>
    <Text>Color: {this.state.dominantcolor} </Text>



                <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.1,result:"base64"  }}>

                    <View style={styles.paint}>

                        <RNSketchCanvas
                            containerStyle={{ flex: 1 }}
                            canvasStyle={{ backgroundColor:'#F1F1F1',flex: 1 }}
                            defaultStrokeWidth={40}
                            defaultStrokeIndex={8}
                            strokeColors={this.state.drawcolor}
                            onStrokeEnd={() => {this.makeScreenshot()}
                        }

                        />
                        <View pointerEvents="none"  style={{position:'absolute'}}  >
                            <Image  style={styles.pictures}
                                    source={require('../assets/pictures/ballons_alpha.png')}/>
                        </View>
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
