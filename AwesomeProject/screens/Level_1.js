import React, {Component} from 'react';
import {Alert, Animated, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
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
            text:"XX",
            textcolor:'#FF0000',
            anim:0,
            rdm:0
        }
    }

    componentDidMount() {
        this.makeScreenshot()
        this.updatetext()


    }
    componentWillMount() {

    }

    componentWillUnmount() {

    }
    //Change drawcolor when selected
    changedrawcolor() {
        if (this.state.order <= 3 && this.state.colorselected === true)
            this.setState({drawcolor: '#FF0000'})
        else if (this.state.order >= 4 && this.state.order <= 7 && this.state.colorselected === true)
            this.setState({drawcolor: '#0000FF'})
        else if (this.state.order >= 8 && this.state.order <= 11 && this.state.colorselected === true)
            this.setState({drawcolor: '#00FF00'})
        else if (this.state.order >= 12 && this.state.order <= 15 && this.state.colorselected === true)
            this.setState({drawcolor: '#FFFF00'})
        else if (this.state.order >= 16 && this.state.order <= 19 && this.state.colorselected === true)
            this.setState({drawcolor: '#FF1694'})
        else if (this.state.order >= 20 && this.state.order <= 23 && this.state.colorselected === true)
            this.setState({drawcolor: '#A52A2A'})
        else if (this.state.order >= 24 && this.state.order <= 27 && this.state.colorselected === true)
            this.setState({drawcolor: '#9d00ff'})
        else if (this.state.order >= 28 && this.state.order <= 31 && this.state.colorselected === true)
            this.setState({drawcolor: '#FFA500'})
        else if (this.state.order >= 32 && this.state.order <= 35 && this.state.colorselected === true)
            this.setState({drawcolor: '#00FFFF'})
        else if (this.state.colorselected === false)
            this.setState({drawcolor: '#F1F1F1'})
    }
// update Text on woodShild
    updatetext(){
        if (this.props.navigation.state.params.language===false){
            switch(this.state.order) {
                case 0:
                    this.setState({text: "Rot", textcolor: '#FF0000'})
                    break;
                case 3:
                    setTimeout(() =>
                            this.setState({text: "Blau", textcolor: '#0000FF'})
                        , 3000);
                    break;
                case 7:
                    setTimeout(() =>
                            this.setState({text: "Grün", textcolor: '#00FF00'})
                        , 3000);
                    break;
                case 11:
                    setTimeout(() =>
                            this.setState({text: "Gelb", textcolor: '#FFFF00'})
                        , 3000);
                    break;
                case 15:
                    setTimeout(() =>
                            this.setState({text: "Pink", textcolor: '#FF1694'})
                        , 3000);
                    break;
                case 19:
                    setTimeout(() =>
                            this.setState({text: "Braun", textcolor: '#A52A2A'})
                        , 3000);
                    break;
                case 23:
                    setTimeout(() =>
                            this.setState({text: "Lila", textcolor: '#9D00FF'})
                        , 3000);
                    break;
                case 27:
                    setTimeout(() =>
                            this.setState({text: "Orange", textcolor: '#FFA500'})
                        , 3000);
                    break;
                case 31:
                    setTimeout(() =>
                            this.setState({text: "Türkis", textcolor: '#00FFFF'})
                        , 3000);
                    break;
            }
        }else {
            switch(this.state.order) {
                case 0:
                            this.setState({text: "red", textcolor: '#FF0000'})
                    break;
                case 3:
                    setTimeout(() =>
                            this.setState({text: "blue", textcolor: '#0000FF'})
                        , 3000);
                    break;
                case 7:
                    setTimeout(() =>
                            this.setState({text: "green", textcolor: '#00FF00'})
                        , 3000);
                    break;
                case 11:
                    setTimeout(() =>
                            this.setState({text: "yellow", textcolor: '#FFFF00'})
                        , 3000);
                    break;
                case 15:
                    setTimeout(() =>
                            this.setState({text: "pink", textcolor: '#FF1694'})
                        , 3000);
                    break;
                case 19:
                    setTimeout(() =>
                            this.setState({text: "brown", textcolor: '#A52A2A'})
                        , 3000);
                    break;
                case 23:
                    setTimeout(() =>
                            this.setState({text: "purple", textcolor: '#9D00FF'})
                        , 3000);
                    break;
                case 27:
                    setTimeout(() =>
                            this.setState({text: "orange", textcolor: '#FFA500'})
                        , 3000);
                    break;
                case 31:
                    setTimeout(() =>
                            this.setState({text: "cyan", textcolor: '#00FFFF'})
                        , 3000);
                    break;
            }
        }

    }
// update order depending on dominant color and set the different states
    updateorder() {
        switch (this.state.dominantcolor) {
            case 'red':
                if(this.state.order === 0) {
                    this.setState({order: 1,drawcolor: '#F1F1F1',colorselected: false})
                    setTimeout(() => {
                        this.setState({order: 2,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 3,colorselected: false,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 4})
                        this.makeScreenshot()

                    }, 4000)
                }
            break;
            case 'blue':
                if(this.state.order === 4) {
                    this.setState({order: 5,colorselected: false,drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 6,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 7,colorselected: false,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 8,played:0})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'green':
                if(this.state.order === 8) {
                    this.setState({order: 9,colorselected: false,drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 10,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 11,colorselected: false,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 12,played:0})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'yellow':
                if(this.state.order === 12) {
                    this.setState({order: 13,colorselected: false,drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 14,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 15,colorselected: false,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 16,played:0,})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'pink':
                if(this.state.order === 16) {
                    this.setState({order: 17,colorselected: false,drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 18,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 19,colorselected: false,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 20,played:0})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'brown':
                if(this.state.order === 20) {
                    this.setState({order: 21,colorselected: false,drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 22,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 23,colorselected: false,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 24,played:0})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'purple':
                if(this.state.order === 24) {
                    this.setState({order: 25,colorselected: false,drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 26,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 27,colorselected: false,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 28,played:0})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'orange':
                if(this.state.order === 28) {
                    this.setState({order: 29,colorselected: false,drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 30,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 31,colorselected: false,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({order: 32,played:0})
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'cyan':
                if(this.state.order === 32) {
                    this.setState({order: 33,colorselected: false,drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 34,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 35,colorselected: false, played:0,drawcolor: '#F1F1F1'})
                    this.updatetext()
                    setTimeout(() => {
                        this.setState({played:1,anim:5})
                        this.makeScreenshot()
                        setTimeout(() =>{
                            this.props.navigation.navigate('Level_Selection')
                        },5000)
                    }, 5700)

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
            case 'rgba(248,16,144,1,000)':
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
    colortabview(){
        switch(this.state.order){
            case 0: case 4: case 8: case 12: case 16: case 20: case 24: case 28: case 32:
                return <Animatable.View
                    style={styles.colortab} animation={{
                        from:{left:-120},
                        to:{left:0}
                    }} duration={1000} easing={"linear"}>
                        <TouchableOpacity onPress={() => {
                            this.setState({colorselected:!this.state.colorselected},this.changedrawcolor)
                            this.refs.sketchRef.clear()
                        }}>
                            {colorselector(this.state.order,this.state.colorselected)}
                        </TouchableOpacity>
                    </Animatable.View>
            case 3: case 7: case 11: case 15: case 19: case 23: case 27: case 31: case 35:
                return <Animatable.View
                    style={styles.colortab} animation={{
                    from:{left:0},
                    to:{left:-120}
                }} duration={1000} easing={"linear"}>
                    <TouchableOpacity onPress={() => {
                        this.setState({colorselected:!this.state.colorselected},this.changedrawcolor)
                        this.refs.sketchRef.clear()

                    }}>
                        {colorselector(this.state.order,this.state.colorselected)}
                    </TouchableOpacity>
                </Animatable.View>
            case 1: case 2: case 5: case 6: case 9: case 10: case 13: case 14: case 17: case 18: case 21: case 22: case 25: case 26: case 29: case 30: case 33: case 34:
                return <View style={styles.colortab} >
                    <TouchableOpacity onPress={() => {
                        this.setState({colorselected:!this.state.colorselected},this.changedrawcolor)
                        this.refs.sketchRef.clear()
                    }}>
                        {colorselector(this.state.order,this.state.colorselected)}
                    </TouchableOpacity>
                </View>
        }

    }
    rdm(max) {
        this.setState({rdm1:Math.floor(Math.random() * max)})
    }

    // Test Code for displaying state:
//<Text>rgba:{this.state.dominantcolor_rgba}</Text>
//                     <Text>dominantcolor:{this.state.dominantcolor}</Text>
//                     <Text>drawcolor:{this.state.drawcolor}</Text>
//                     <Text>oder:{this.state.order}</Text>
//                     <Text>mixselected:{String(this.state.mixselected)}</Text>
    //<Text>Text:{String(this.state.text)}</Text>
//<Text>Text:{String(this.state.text)}</Text>
//<Text>oder:{this.state.order}</Text>
//<Text>anim:{this.state.anim}</Text>
//<Text>order:{this.state.order}</Text>
    render() {
            return (
                <ImageBackground source={require('../assets/other/Level1.png')} style={styles.background}>
                    <View pointerEvents="none"  >
                        <FastImage  source={require('../assets/other/Level_Selection_front2.png')}
                                    style={styles.font2_gras} />

                    </View>
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
                        {this.colortabview()}
                    </View>

                    <View style={styles.shildview}>
                        {woodShild(this.state.order)}
                        <View style={styles.textview}>

                            {text(this.state.order,this.state.textcolor,this.state.text)}
                        </View>
                    </View>
                    <View style={styles.backtabview}>
                        <Animatable.View
                            style={styles.backtab} animation="slideInDown" duration={1000} delay={1000} easing={"linear"}>
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('Level_Selection')}>
                                <View>
                                    <FastImage
                                        source={require('../assets/other/BackArrow.png')}
                                        style={{width:50,height:40}}
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
        borderRightColor: '#808080',
        borderRightWidth: 3,
        borderTopRightRadius: 4,
        borderTopColor: '#808080',
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paint: {
        backgroundColor: '#F1F1F1',
        width: 400,
        height: 244,
        borderColor: 'black',
        borderWidth: 4,
        marginBottom: 65,
        marginLeft: 0,
    },
    backtabview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    backtab: {
        width: 70,
        height: 70,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth:6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70/2,

    },
    shildview: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    textview: {
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute'

    },
    font2_gras: {
        right:-width/2,
        bottom:-height/1.18,
        position: 'absolute',
        width:width,
        height:height,

    }
});
