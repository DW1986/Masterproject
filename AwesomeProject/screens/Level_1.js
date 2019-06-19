import React, {Component} from 'react';
import {Alert, Animated, Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import {colorselector} from "../components/colorselector1";
import {woodShild} from "../components/woodShild1";
import {text} from "../components/text1";
import {starfall} from "../components/starfall1";
import {pictureselector} from "../components/pictureselector1";

var RNFS = require('react-native-fs');

var {width, height} = Dimensions.get('window')
export default class Level_1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dominantcolor_rgba: null,
            drawcolor: '#F1F1F1',
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg',
            colorpanel: new Animated.Value(-90),
            backpanel: new Animated.Value(-90),
            order:0,
            colorselected: false,
            dominantcolor: '',
            fadeanimationout: new Animated.Value(1),
            fadeanimationin: new Animated.Value(0),
            opacity : new Animated.Value(0),
            ScaleValue1 : new Animated.Value(0),
            ScaleValue2 : new Animated.Value(1),
            text:"ROT",
            textcolor:'#FF0000'
        }
    }

    componentDidMount() {
        //make initial Screenshot
        this.makeScreenshot()
    }

//Change drawcolor when selected
    changedrawcolor() {
        if (this.state.order <= 3 && this.state.colorselected === false)
            this.setState({drawcolor: '#FF0000'})
        else if (this.state.order >= 4 && this.state.order <= 7 && this.state.colorselected === false)
            this.setState({drawcolor: '#0000FF'})
        else if (this.state.order >= 8 && this.state.order <= 11 && this.state.colorselected === false)
            this.setState({drawcolor: '#00FF00'})
        else if (this.state.order >= 12 && this.state.order <= 15 && this.state.colorselected === false)
            this.setState({drawcolor: '#FFFF00'})
        else if (this.state.order >= 16 && this.state.order <= 19 && this.state.colorselected === false)
            this.setState({drawcolor: '#FFC0CB'})
        else if (this.state.order >= 20 && this.state.order <= 23 && this.state.colorselected === false)
            this.setState({drawcolor: '#A52A2A'})
        else if (this.state.order >= 24 && this.state.order <= 27 && this.state.colorselected === false)
            this.setState({drawcolor: '#9d00ff'})
        else if (this.state.order >= 28 && this.state.order <= 31 && this.state.colorselected === false)
            this.setState({drawcolor: '#FFA500'})
        else if (this.state.order >= 32 && this.state.order <= 35 && this.state.colorselected === false)
            this.setState({drawcolor: '#00FFFF'})
        else if (this.state.colorselected === true)
            this.setState({drawcolor: '#F1F1F1'})

    }
// update Text on woodShild
    updatetext(){
        switch(this.state.order) {
            case 3:
                setTimeout(() =>
                        this.setState({text: "BLAU", textcolor: '#0000FF'})
                    , 3000);
                break;
            case 7:
                setTimeout(() =>
                        this.setState({text: "GRÜN", textcolor: '#00FF00'})
                    , 3000);
                break;
            case 11:
                setTimeout(() =>
                        this.setState({text: "GELB", textcolor: '#FFFF00'})
                    , 3000);
                break;
            case 15:
                setTimeout(() =>
                        this.setState({text: "ROSA", textcolor: '#FFC0CB'})
                    , 3000);
                break;
            case 19:
                setTimeout(() =>
                        this.setState({text: "BRAUN", textcolor: '#A52A2A'})
                    , 3000);
                break;
            case 23:
                setTimeout(() =>
                        this.setState({text: "LILA", textcolor: '#9D00FF'})
                    , 3000);
                break;
            case 27:
                setTimeout(() =>
                        this.setState({text: "ORANGE", textcolor: '#FFA500'})
                    , 3000);
                break;
            case 31:
                setTimeout(() =>
                        this.setState({text: "TÜRKIS", textcolor: '#00FFFF'})
                    , 3000);
                break;
        }
    }
// update order depending on dominant color and set the different states
    updateorder() {
        switch (this.state.dominantcolor) {
            case 'red':
                if(this.state.order === 0) {
                    this.setState({order: 1})
                    this.setState({colorselected: false})
                    this.setState({dominantcolor:'white'})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 2})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 3})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 4})
                        this.makeScreenshot()

                    }, 4000)
                }
            break;
            case 'blue':
                if(this.state.order === 4) {
                    this.setState({order: 5})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 6})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 7})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 8})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'green':
                if(this.state.order === 8) {
                    this.setState({order: 9})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 10})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 11})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 12})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'yellow':
                if(this.state.order === 12) {
                    this.setState({order: 13})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 14})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 15})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 16})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'pink':
                if(this.state.order === 16) {
                    this.setState({order: 17})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 18})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 19})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 20})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'brown':
                if(this.state.order === 20) {
                    this.setState({order: 21})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 22})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 23})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 24})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'purple':
                if(this.state.order === 24) {
                    this.setState({order: 25})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 26})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 27})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 28})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'orange':
                if(this.state.order === 28) {
                    this.setState({order: 29})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 30})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 31})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 32})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'cyan':
                if(this.state.order === 32) {
                    this.setState({order: 33})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 34})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 35})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.props.navigation.navigate('Level_Selection')
                    }, 4000)
                }
                break;
        }
    }
// make a Screenshot, save it and get the dominant color rgba
    makeScreenshot() {
        this.refs.viewShot.capture().then(uri => {
            RNFS.writeFile(this.state.path, uri, 'base64')
                .then((success) => {
                    getAllSwatches('high', this.state.path, (error, swatches) => {
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
// get the dominant color from the picture (rgba -> text)
    getColor(){
        switch(this.state.dominantcolor_rgba) {

            case "rgba(248,0,0,1,000)":
                this.setState({dominantcolor:"red"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;

            case 'rgba(0,0,248,1,000)':
                this.setState({dominantcolor:"blue"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;
            case 'rgba(0,248,0,1,000)':
                this.setState({dominantcolor:"green"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;
            case 'rgba(248,248,0,1,000)':
                this.setState({dominantcolor:"yellow"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;
            case 'rgba(240,200,208,1,000)':
                this.setState({dominantcolor:"pink"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;
            case 'rgba(160,40,40,1,000)':
                this.setState({dominantcolor:"brown"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;
            case 'rgba(152,0,248,1,000)':
                this.setState({dominantcolor:"purple"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;
            case 'rgba(248,160,0,1,000)':
                this.setState({dominantcolor:"orange"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;
            case 'rgba(0,248,248,1,000)':
                this.setState({dominantcolor:"cyan"})
                this.refs.sketchRef.clear()
                this.updateorder()
                break;

            default:
                this.setState({dominantcolor:"white"})

        }
    }
    // Test Code for displaying state:
//<Text>rgba:{this.state.dominantcolor_rgba}</Text>
//                     <Text>dominantcolor:{this.state.dominantcolor}</Text>
//                     <Text>drawcolor:{this.state.drawcolor}</Text>
//                     <Text>oder:{this.state.order}</Text>
//                     <Text>colorselected:{String(this.state.colorselected)}</Text>
    //<Text>Text:{String(this.state.text)}</Text>
//<Text>Text:{String(this.state.text)}</Text>
//<Text>oder:{this.state.order}</Text>
    render() {
        return (
            <ImageBackground source={require('../assets/fonts/Level1.png')} style={styles.background}>
                <ViewShot style={styles.paint} ref="viewShot" options={{ format: "jpg", quality: 1.0,result:"base64"  }}>
                    <SketchCanvas
                            ref="sketchRef"
                            style={{ flex: 1 }}
                            strokeWidth={40}
                            strokeColor={this.state.drawcolor}
                            onStrokeEnd={() => {
                                this.makeScreenshot()
                            }}
                        />
                </ViewShot>
                <View pointerEvents="none"  style={[styles.pictures,{position:'absolute'},{left:width/2-197}, {top:height/2-152}]}  >
                    {pictureselector(this.state.order)}
                    {starfall(this.state.order)}
                </View>
                <View style={styles.colortabview}>
                     <Animatable.View
                         style={styles.colortab} animation="slideInLeft" duration={1000} easing={"linear"}>
                        <TouchableOpacity onPress={() => {
                            this.refs.sketchRef.clear()
                            this.setState({colorselected:!this.state.colorselected})
                            this.changedrawcolor()
                        }}>
                            {colorselector(this.state.order,this.state.colorselected)}
                         </TouchableOpacity>
                     </Animatable.View>
                 </View>
                <View style={styles.shildview}>
                    {woodShild(this.state.order)}
                    <View style={{position: 'absolute', justifyContent: 'flex-end', alignItems: 'center'}}>
                        {text(this.state.order,this.state.textcolor,this.state.text)}
                    </View>
                </View>
                <View style={styles.backtabview}>
                    <Animatable.View
                        style={styles.backtab} animation="slideInDown" duration={1000} delay={1000} easing={"linear"}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Level_Selection')}>
                            <View>
                                <Image
                                    source={require('../assets/fonts/BackArrow.png')}
                                    style={{width:40,height:60}}
                                />
                            </View>
                        </TouchableOpacity>

                    </Animatable.View>
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
    },
    paint: {
        backgroundColor: '#F1F1F1',
        width: 410,
        height: 254,
        borderColor: 'grey',
        borderWidth: 4,
        marginBottom: 35,
        marginLeft: 7,
    },
    pictures: {
        marginTop: 4,
        width: 392,
        height: 240,
    },
    backtabview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    backtab: {
        width: 90,
        height: 90,
        backgroundColor: 'white',
        borderLeftColor: 'grey',
        borderLeftWidth: 3,
        borderBottomLeftRadius: 4,
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shildview: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});
