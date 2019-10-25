import React, {Component} from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import {woodShild} from "../components/woodShild2";
import {text} from "../components/text2";
import {starfall} from "../components/starfall";
import {pictureselector} from "../components/pictureselector12";
import {red,blue,green,yellow,pink,brown,purple,orange,cyan} from "../components/colorselector2";

const RNFS = require('react-native-fs');
const shuffle = require('shuffle-array');
const timer = require('react-native-timer');
const {width, height} = Dimensions.get('window');
const Sound = require('react-native-sound');

// load sounds (multiple times played)
const error_2 = new Sound('error_2.m4a', Sound.MAIN_BUNDLE);
const error_time_select = new Sound('error_time_select.m4a', Sound.MAIN_BUNDLE);
const error_time_color = new Sound('error_time_color.m4a', Sound.MAIN_BUNDLE);
const success_01 = new Sound('success_1.m4a', Sound.MAIN_BUNDLE);
const success_02 = new Sound('success_2.m4a', Sound.MAIN_BUNDLE);
const success_03 = new Sound('success_3.m4a', Sound.MAIN_BUNDLE);
const onTouch = new Sound('onTouch.m4a', Sound.MAIN_BUNDLE);

export default class Level_2 extends Component {
    ismounted_Level2 = false;

    constructor(props) {
        super(props);
        this.state = {
            dominantcolor_rgba: null,
            drawcolor: '#F1F1F1',
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg',
            order: 0,
            colorselected: false,
            dominantcolor: 'white',
            text: "XXX",
            textcolor: '#FF0000',
            orderRDM: [[0, 2], [4, 6], [8, 10], [12, 14], [16, 18], [20, 22], [24, 26], [28, 30], [32, 34]],
            orderRDM2: [[50, 50]],
            ordercount: 0,
            errorcount: 0,
            bunny_order: 1,
            bunny_anim: 3,
            rdm: 0,
            disableButton_bunny: true,
            exit: 0,
            err_time_select: 0,
            err_time_color: 0,
            start: 1,
            opacity0: 0
        }
    }

    componentWillMount() {
        // mount component
        this.ismounted_Level2 = true;
        // load sounds (one time played)
        this.state.fire_engine = new Sound('fire_engine.m4a', Sound.MAIN_BUNDLE);
        this.state.fire_engine = new Sound('fire_engine.m4a', Sound.MAIN_BUNDLE);
        this.state.strawberry = new Sound('strawberry.m4a', Sound.MAIN_BUNDLE);
        this.state.police_car = new Sound('police_car.m4a', Sound.MAIN_BUNDLE);
        this.state.whale = new Sound('whale.m4a', Sound.MAIN_BUNDLE);
        this.state.leaf = new Sound('leaf.m4a', Sound.MAIN_BUNDLE);
        this.state.frog = new Sound('frog.m4a', Sound.MAIN_BUNDLE);
        this.state.sun = new Sound('sun.m4a', Sound.MAIN_BUNDLE);
        this.state.bananas = new Sound('bananas.m4a', Sound.MAIN_BUNDLE);
        this.state.flamingos = new Sound('flamingos.m4a', Sound.MAIN_BUNDLE);
        this.state.pig = new Sound('pig.m4a', Sound.MAIN_BUNDLE);
        this.state.horses = new Sound('horses.m4a', Sound.MAIN_BUNDLE);
        this.state.teddy = new Sound('teddy.m4a', Sound.MAIN_BUNDLE);
        this.state.butterfly = new Sound('butterfly.m4a', Sound.MAIN_BUNDLE);
        this.state.flowers = new Sound('flowers.m4a', Sound.MAIN_BUNDLE);
        this.state.fish = new Sound('fish.m4a', Sound.MAIN_BUNDLE);
        this.state.carrots = new Sound('carrots.m4a', Sound.MAIN_BUNDLE);
        this.state.ballons = new Sound('ballons.m4a', Sound.MAIN_BUNDLE);
        this.state.ice_cream = new Sound('ice_cream.m4a', Sound.MAIN_BUNDLE);
        this.state.Level_2_intro = new Sound('Level_2_intro.m4a', Sound.MAIN_BUNDLE);
        this.state.exit_lvl = new Sound('exit_lvl.m4a', Sound.MAIN_BUNDLE);
        this.state.error_red_ger = new Sound('error_red_ger.m4a', Sound.MAIN_BUNDLE);
        this.state.error_red_eng = new Sound('error_red_eng.m4a', Sound.MAIN_BUNDLE);
        this.state.error_blue_ger = new Sound('error_blue_ger.m4a', Sound.MAIN_BUNDLE);
        this.state.error_blue_eng = new Sound('error_blue_eng.m4a', Sound.MAIN_BUNDLE);
        this.state.error_green_ger = new Sound('error_green_ger.m4a', Sound.MAIN_BUNDLE);
        this.state.error_green_eng = new Sound('error_green_eng.m4a', Sound.MAIN_BUNDLE);
        this.state.error_yellow_ger = new Sound('error_yellow_ger.m4a', Sound.MAIN_BUNDLE);
        this.state.error_yellow_eng = new Sound('error_yellow_eng.m4a', Sound.MAIN_BUNDLE);
        this.state.error_pink_ger_eng = new Sound('error_pink_ger_eng.m4a', Sound.MAIN_BUNDLE);
        this.state.error_brown_ger = new Sound('error_brown_ger.m4a', Sound.MAIN_BUNDLE);
        this.state.error_brown_eng = new Sound('error_brown_eng.m4a', Sound.MAIN_BUNDLE);
        this.state.error_purple_ger = new Sound('error_purple_ger.m4a', Sound.MAIN_BUNDLE);
        this.state.error_purple_eng = new Sound('error_purple_eng.m4a', Sound.MAIN_BUNDLE);
        this.state.error_orange_ger = new Sound('error_orange_ger.m4a', Sound.MAIN_BUNDLE);
        this.state.error_orange_eng = new Sound('error_orange_eng.m4a', Sound.MAIN_BUNDLE);
        this.state.error_cyan_ger = new Sound('error_cyan_ger.m4a', Sound.MAIN_BUNDLE);
        this.state.error_cyan_eng = new Sound('error_cyan_eng.m4a', Sound.MAIN_BUNDLE);
    }

    componentDidMount() {
        // shuffle all pictures
        shuffle(this.state.orderRDM[0]);
        shuffle(this.state.orderRDM[1]);
        shuffle(this.state.orderRDM[2]);
        shuffle(this.state.orderRDM[3]);
        shuffle(this.state.orderRDM[4]);
        shuffle(this.state.orderRDM[5]);
        shuffle(this.state.orderRDM[6]);
        shuffle(this.state.orderRDM[7]);
        shuffle(this.state.orderRDM[8]);
        shuffle(this.state.orderRDM);
        this.state.orderRDM.push(...this.state.orderRDM2);
        this.setState({order: this.state.orderRDM[this.state.ordercount][0]});
        // update text on woodshild
        this.updatetext();
        // start bunny animation
        this.animbunny();
        // set interval for two errors over time
        this.errorIntervall();
    }

    componentWillUnmount() {
        //unmount component
        this.ismounted_Level2 = false;
        // clear all timer and timeouts
        timer.clearTimeout(this);
        timer.clearInterval(this);
    }

    // intervall for 2 errors
    errorIntervall() {
        timer.setInterval(this, 'error',
            () => {
                if (this.state.colorselected === false) {
                    this.setState({bunny_order: 5, err_time_select: 1, err_time_color: 0})
                } else if (this.state.dominantcolor === "white" && this.state.colorselected !== false) {
                    this.setState({bunny_order: 5, err_time_select: 0, err_time_color: 1})
                }
            }, 40000)
    }

    // update Text on woodshild depending on order and language
    updatetext() {
        if (this.props.navigation.state.params.language === false) {
            switch (this.state.orderRDM[this.state.ordercount][0]) {
                case 0:
                case 2:
                    this.setState({text: "Rot", textcolor: '#FF0000'});
                    break;
                case 4:
                case 6:
                    timer.setTimeout(this, 'blau', () =>
                            this.setState({text: "Blau", textcolor: '#0000FF'})
                        , 3000);
                    break;
                case 8:
                case 10:
                    timer.setTimeout(this, 'gruen', () =>
                            this.setState({text: "Grün", textcolor: '#00FF00'})
                        , 3000);
                    break;
                case 12:
                case 14:
                    timer.setTimeout(this, 'gelb', () =>
                            this.setState({text: "Gelb", textcolor: '#FFFF00'})
                        , 3000);
                    break;
                case 16:
                case 18:
                    timer.setTimeout(this, 'pink', () =>
                            this.setState({text: "Pink", textcolor: '#FF1694'})
                        , 3000);
                    break;
                case 20:
                case 22:
                    timer.setTimeout(this, 'braun', () =>
                            this.setState({text: "Braun", textcolor: '#A52A2A'})
                        , 3000);
                    break;
                case 24:
                case 26:
                    timer.setTimeout(this, 'lila', () =>
                            this.setState({text: "Lila", textcolor: '#9D00FF'})
                        , 3000);
                    break;
                case 28:
                case 30:
                    timer.setTimeout(this, 'orange', () =>
                            this.setState({text: "Orange", textcolor: '#FFA500'})
                        , 3000);
                    break;
                case 32:
                case 34:
                    timer.setTimeout(this, 'tuerkis', () =>
                            this.setState({text: "Türkis", textcolor: '#00FFFF'})
                        , 3000);
                    break;
            }
        } else {
            switch (this.state.orderRDM[this.state.ordercount][0]) {
                case 0:
                case 2:
                    this.setState({text: "red", textcolor: '#FF0000'});
                    break;
                case 4:
                case 6:
                    timer.setTimeout(this, 'blue', () =>
                            this.setState({text: "blue", textcolor: '#0000FF'})
                        , 3000);
                    break;
                case 8:
                case 10:
                    timer.setTimeout(this, 'green', () =>
                            this.setState({text: "green", textcolor: '#00FF00'})
                        , 3000);
                    break;
                case 12:
                case 14:
                    timer.setTimeout(this, 'yellow', () =>
                            this.setState({text: "yellow", textcolor: '#FFFF00'})
                        , 3000);
                    break;
                case 16:
                case 18:
                    timer.setTimeout(this, 'pink', () =>
                            this.setState({text: "pink", textcolor: '#FF1694'})
                        , 3000);
                    break;
                case 20:
                case 22:
                    timer.setTimeout(this, 'brown', () =>
                            this.setState({text: "brown", textcolor: '#A52A2A'})
                        , 3000);
                    break;
                case 24:
                case 26:
                    timer.setTimeout(this, 'purple', () =>
                            this.setState({text: "purple", textcolor: '#9D00FF'})
                        , 3000);
                    break;
                case 28:
                case 30:
                    timer.setTimeout(this, 'orange', () =>
                            this.setState({text: "orange", textcolor: '#FFA500'})
                        , 3000);
                    break;
                case 32:
                case 34:
                    timer.setTimeout(this, 'cyan', () =>
                            this.setState({text: "cyan", textcolor: '#00FFFF'})
                        , 3000);
                    break;
            }
        }
    }

    // change bunny order when error (2 errors possible)
    error() {
        if (this.state.errorcount === 1) {
            this.setState({bunny_order: 3})
        } else if (this.state.errorcount === 2) {
            this.setState({bunny_order: 6})
        }
    }

    // update order depending on dominant color and set the different states
    updateorder() {
        switch (this.state.orderRDM[this.state.ordercount][0]) {
            case 0:
            case 2:
                if (this.state.dominantcolor === 'red') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '2', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '21', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 4:
            case 6:
                if (this.state.dominantcolor === 'blue') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '6', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '61', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 8:
            case 10:
                if (this.state.dominantcolor === 'green') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '10', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '101', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 12:
            case 14:
                if (this.state.dominantcolor === 'yellow') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '14', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '141', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 16:
            case 18:
                if (this.state.dominantcolor === 'pink') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '18', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '181', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 20:
            case 22:
                if (this.state.dominantcolor === 'brown') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '22', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '221', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 24:
            case 26:
                if (this.state.dominantcolor === 'purple') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '26', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '261', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 28:
            case 30:
                if (this.state.dominantcolor === 'orange') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '30', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '301', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 32:
            case 34:
                if (this.state.dominantcolor === 'cyan') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({
                        err_time_select: 0,
                        error_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                        errorcount: 0
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '34', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '341', () => {
                                this.setState({
                                    err_time_select: 0,
                                    error_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1
                                });
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 5100)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
        }
    }

    // make a Screenshot, save it and get the dominant color rgba (when release painting)
    makeScreenshot = () => {
        this.refs.viewShot.capture().then(uri => {
            RNFS.writeFile(this.state.path, uri, 'base64')
                .then(() => {
                    getAllSwatches('high', this.state.path, (error, swatches) => {
                        if (error) {
                            console.log(error);
                        } else {
                            swatches.sort((a, b) => {
                                return b.population - a.population;
                            })
                        }
                        this.setState({dominantcolor_rgba: swatches[0].color});
                        this.getColor()
                    })
                })
        })
    };

    // get the dominant color from the picture (rgba -> text)
    getColor() {
        switch (this.state.dominantcolor_rgba) {
            case "rgba(248,0,0,1,000)":
                this.setState({dominantcolor: "red"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;

            case 'rgba(0,0,248,1,000)':
                this.setState({dominantcolor: "blue"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(0,248,0,1,000)':
                this.setState({dominantcolor: "green"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(248,248,0,1,000)':
                this.setState({dominantcolor: "yellow"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(248,16,144,1,000)':
                this.setState({dominantcolor: "pink"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(160,40,40,1,000)':
                this.setState({dominantcolor: "brown"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(152,0,248,1,000)':
                this.setState({dominantcolor: "purple"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(248,160,0,1,000)':
                this.setState({dominantcolor: "orange"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(0,248,248,1,000)':
                this.setState({dominantcolor: "cyan"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            default:
                this.setState({dominantcolor: "white"})
        }
    }

    // control the colortabView
    colortabView() {
        return <Animatable.View style={styles.colortab} animation={{
            from: {left: -120},
            to: {left: 0}
        }} duration={1000} easing={"linear"}>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'red', drawcolor: '#FF0000'});
                this.refs.sketchRef.clear()
            }}>
                {red(this.state.colorselected)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'blue', drawcolor: '#0000FF'});
                this.refs.sketchRef.clear()
            }}>
                {blue(this.state.colorselected)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'green', drawcolor: '#00FF00'});
                this.refs.sketchRef.clear()
            }}>
                {green(this.state.colorselected)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'yellow', drawcolor: '#FFFF00'});
                this.refs.sketchRef.clear()
            }}>
                {yellow(this.state.colorselected)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'pink', drawcolor: '#FF1694'});
                this.refs.sketchRef.clear()
            }}>
                {pink(this.state.colorselected)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'brown', drawcolor: '#A52A2A'});
                this.refs.sketchRef.clear()
            }}>
                {brown(this.state.colorselected)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'purple', drawcolor: '#9D00FF'});
                this.refs.sketchRef.clear()
            }}>
                {purple(this.state.colorselected)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'orange', drawcolor: '#FFA500'});
                this.refs.sketchRef.clear()
            }}>
                {orange(this.state.colorselected)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.setState({colorselected: 'cyan', drawcolor: '#00FFFF'});
                this.refs.sketchRef.clear()
            }}>
                {cyan(this.state.colorselected)}
            </TouchableOpacity>
        </Animatable.View>
    }

    // get rdm number for idle-bunny_order and success-bunny_order bunny
    rdm(max) {
        this.setState({rdm: Math.floor(Math.random() * Math.floor(max))});
    }

    // change bunny_order for pictures
    pictures_speak() {
        timer.setTimeout(this, 'pictures_speak', () => {
            switch (this.state.orderRDM[this.state.ordercount][0]) {
                case 24:
                    this.setState({bunny_order: 6});
                    break;
                case 4:
                case 10:
                case 16:
                case 18:
                case 20:
                case 22:
                case 26:
                case 30:
                case 32:
                    this.setState({bunny_order: 5});
                    break;
                case 0:
                case 2:
                case 6:
                case 8:
                case 12:
                case 14:
                case 34:
                    this.setState({bunny_order: 3});
                    break;
                case 28:
                    this.setState({bunny_order: 7});
                    break;
                default:
                    this.setState({bunny_order: 1});
            }
        }, 1000);
    }

    // control the different animations of bunny
    animbunny() {
        switch (this.state.bunny_anim) {
            // idle02-bunny_order
            case 0:
                timer.setTimeout(this, 'idle_02_2a', () => {
                    this.setState({opacity0: 1});
                }, 3500);
                timer.setTimeout(this, 'idle_02_2b', () => {
                    this.setState({opacity0: 0});
                }, 4500);
                timer.setTimeout(this, 'idle_02_1', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            if (this.state.rdm === 0) {
                                this.setState({bunny_anim: 1, disableButton_bunny: false});
                                this.animbunny();
                            } else {
                                this.setState({bunny_anim: 2, disableButton_bunny: false});
                                this.animbunny();
                            }
                            break;
                        case 2:
                            this.rdm(3);
                            this.setState({bunny_anim: this.state.rdm + 5, disableButton_bunny: true});
                            this.animbunny();
                            break;
                        case 3:
                            this.setState({bunny_anim: 8, disableButton_bunny: true});
                            this.animbunny();
                            break;
                        case 4:
                            this.setState({bunny_anim: 4, disableButton_bunny: true});
                            this.animbunny();
                            break;
                        case 5:
                            this.setState({bunny_anim: 9, disableButton_bunny: true});
                            this.animbunny();
                            break;
                        case 6:
                            this.setState({bunny_anim: 10, disableButton_bunny: true});
                            this.animbunny();
                            break;
                        case 7:
                            this.setState({bunny_anim: 3, disableButton_bunny: true});
                            this.animbunny();
                            break;

                    }
                }, 4000);
                break;
            // idle01-bunny_order
            case 1:
                timer.setTimeout(this, 'idle_01_a', () => {
                    this.setState({opacity0: 1});
                }, 3500);
                timer.setTimeout(this, 'idle_01_b', () => {
                    this.setState({opacity0: 0});
                }, 4500);
                timer.setTimeout(this, 'idle_01', () => {
                    this.helper01();
                }, 4000);
                break;
            // idle03-bunny_order
            case 2:
                timer.setTimeout(this, 'idle_03_a', () => {
                    this.setState({opacity0: 1});
                }, 4000);
                timer.setTimeout(this, 'idle_03_b', () => {
                    this.setState({opacity0: 0});
                }, 5000);
                timer.setTimeout(this, 'idle_03', () => {
                    this.helper01();
                }, 4500);
                break;
            // speak_05
            case 3:
                this.setState({bunny_order: 1});
                if (this.state.start === 1) {
                    timer.setTimeout(this, 'sound_intro', () => {
                        this.state.Level_2_intro.play(() => {
                            this.state.Level_2_intro.release()
                        });
                        this.setState({start: 0});
                        this.pictures_speak();
                    }, 50);
                } else {
                    timer.setTimeout(this, 'carrots', () => {
                        this.state.carrots.play(() => {
                            this.state.carrots.release()
                        })
                    }, 500);
                }
                timer.setTimeout(this, 'speak_intro_a', () => {
                    this.setState({opacity0: 1, start: 0});
                }, 6500);
                timer.setTimeout(this, 'speak_intro_b', () => {
                    this.setState({opacity0: 0});
                }, 7500);
                timer.setTimeout(this, 'speak_intro', () => {
                    this.helper01();
                }, 7000);
                break;
            // onTouch-bunny_order
            case 4:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_onTouch', () => {
                    onTouch.stop(() => {
                        onTouch.play()
                    })
                }, 500);
                timer.setTimeout(this, 'onTouch_a', () => {
                    this.setState({opacity0: 1});
                }, 4000);
                timer.setTimeout(this, 'onTouch_b', () => {
                    this.setState({opacity0: 0});
                }, 5000);
                timer.setTimeout(this, 'onTouch', () => {
                    this.helper01();
                }, 4500);
                break;
            //success_01-bunny_order
            case 5:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_success_01', () => {
                    success_01.stop(() => {
                        success_01.play()
                    })
                }, 1000);
                timer.setTimeout(this, 'success_01_a', () => {
                    this.setState({opacity0: 1});
                }, 4500);
                timer.setTimeout(this, 'success_01_b', () => {
                    this.setState({opacity0: 0});
                }, 5500);
                timer.setTimeout(this, 'success_01', () => {
                    this.helper01();
                }, 5000);
                break;
            //success_02-bunny_order
            case 6:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_success_02', () => {
                    success_02.stop(() => {
                        success_02.play()
                    })
                }, 500);
                timer.setTimeout(this, 'success_02_a', () => {
                    this.setState({opacity0: 1});
                }, 3000);
                timer.setTimeout(this, 'success_02_b', () => {
                    this.setState({opacity0: 0});
                }, 4000);
                timer.setTimeout(this, 'success_02', () => {
                    this.helper01();
                }, 3500);
                break;
            //success_03-bunny_order
            case 7:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_success_03', () => {
                    success_03.stop(() => {
                        success_03.play()
                    })
                }, 1000);
                timer.setTimeout(this, 'success_03_a', () => {
                    this.setState({opacity0: 1});
                }, 4500);
                timer.setTimeout(this, 'success_03_b', () => {
                    this.setState({opacity0: 0});
                }, 5500);
                timer.setTimeout(this, 'success_03', () => {
                    this.helper01();
                }, 5000);
                break;
            // speak 04
            case 8:
                this.setState({bunny_order: 1});
                if (this.state.errorcount === 1) {
                    this.setState({dominantcolor: 'white'});
                    if (this.props.navigation.state.params.language === false) {
                        switch (this.state.order) {
                            case 0:
                            case 2:
                                timer.setTimeout(this, 'error_red_ger', () => {
                                    this.state.error_red_ger.play(() => {
                                        this.state.error_red_ger.release()
                                    })
                                }, 500);
                                break;
                            case 4:
                            case 6:
                                timer.setTimeout(this, 'error_blue_ger', () => {
                                    this.state.error_blue_ger.play(() => {
                                        this.state.error_blue_ger.release()
                                    })
                                }, 500);
                                break;
                            case 8:
                            case 10:
                                timer.setTimeout(this, 'error_green_ger', () => {
                                    this.state.error_green_ger.play(() => {
                                        this.state.error_green_ger.release()
                                    })
                                }, 500);
                                break;
                            case 12:
                            case 14:
                                timer.setTimeout(this, 'error_yellow_ger', () => {
                                    this.state.error_yellow_ger.play(() => {
                                        this.state.error_yellow_ger.release()
                                    })
                                }, 500);
                                break;
                            case 16:
                            case 18:
                                timer.setTimeout(this, 'error_pink_ger_eng', () => {
                                    this.state.error_pink_ger_eng.play(() => {
                                        this.state.error_pink_ger_eng.release()
                                    })
                                }, 500);
                                break;
                            case 20:
                            case 22:
                                timer.setTimeout(this, 'error_brown_ger', () => {
                                    this.state.error_brown_ger.play(() => {
                                        this.state.error_brown_ger.release()
                                    })
                                }, 500);
                                break;
                            case 24:
                            case 26:
                                timer.setTimeout(this, 'error_purple_ger', () => {
                                    this.state.error_purple_ger.play(() => {
                                        this.state.error_purple_ger.release()
                                    })
                                }, 500);
                                break;
                            case 28:
                            case 30:
                                timer.setTimeout(this, 'error_orange_ger', () => {
                                    this.state.error_orange_ger.play(() => {
                                        this.state.error_orange_ger.release()
                                    })
                                }, 500);
                                break;
                            case 32:
                            case 34:
                                timer.setTimeout(this, 'error_cyan_ger', () => {
                                    this.state.error_cyan_ger.play(() => {
                                        this.state.error_cyan_ger.release()
                                    })
                                }, 500);
                                break;
                        }
                    } else {
                        switch (this.state.order) {
                            case 0:
                            case 2:
                                timer.setTimeout(this, 'error_red_eng', () => {
                                    this.state.error_red_eng.play(() => {
                                        this.state.error_red_eng.release()
                                    })
                                }, 500);
                                break;
                            case 4:
                            case 6:
                                timer.setTimeout(this, 'error_blue_eng', () => {
                                    this.state.error_blue_eng.play(() => {
                                        this.state.error_blue_eng.release()
                                    })
                                }, 500);
                                break;
                            case 8:
                            case 10:
                                timer.setTimeout(this, 'error_green_eng', () => {
                                    this.state.error_green_eng.play(() => {
                                        this.state.error_green_eng.release()
                                    })
                                }, 500);
                                break;
                            case 12:
                            case 14:
                                timer.setTimeout(this, 'error_yellow_eng', () => {
                                    this.state.error_yellow_eng.play(() => {
                                        this.state.error_yellow_eng.release()
                                    })
                                }, 500);
                                break;
                            case 16:
                            case 18:
                                timer.setTimeout(this, 'error_pink_ger_eng', () => {
                                    this.state.error_pink_ger_eng.play(() => {
                                        this.state.error_pink_ger_eng.release()
                                    })
                                }, 500);
                                break;
                            case 20:
                            case 22:
                                timer.setTimeout(this, 'error_brown_eng', () => {
                                    this.state.error_brown_eng.play(() => {
                                        this.state.error_brown_eng.release()
                                    })
                                }, 500);
                                break;
                            case 24:
                            case 26:
                                timer.setTimeout(this, 'error_purple_eng', () => {
                                    this.state.error_purple_eng.play(() => {
                                        this.state.error_purple_eng.release()
                                    })
                                }, 500);
                                break;
                            case 28:
                            case 30:
                                timer.setTimeout(this, 'error_orange_eng', () => {
                                    this.state.error_orange_eng.play(() => {
                                        this.state.error_orange_eng.release()
                                    })
                                }, 500);
                                break;
                            case 32:
                            case 34:
                                timer.setTimeout(this, 'error_cyan_eng', () => {
                                    this.state.error_cyan_eng.play(() => {
                                        this.state.error_cyan_eng.release()
                                    })
                                }, 500);
                                break;
                        }
                    }
                } else if (this.state.errorcount === 0) {
                    switch (this.state.order) {
                        case 0:
                            timer.setTimeout(this, 'fire_engine', () => {
                                this.state.fire_engine.play(() => {
                                    this.state.fire_engine.release()
                                })
                            }, 50);
                            break;
                        case 2:
                            timer.setTimeout(this, 'strawberry', () => {
                                this.state.strawberry.play(() => {
                                    this.state.strawberry.release()
                                })
                            }, 800);
                            break;
                        case 6:
                            timer.setTimeout(this, 'whale', () => {
                                this.state.whale.play(() => {
                                    this.state.whale.release()
                                })
                            }, 500);
                            break;
                        case 8:
                            timer.setTimeout(this, 'leaf', () => {
                                this.state.leaf.play(() => {
                                    this.state.leaf.release()
                                })
                            }, 100);
                            break;
                        case 12:
                            timer.setTimeout(this, 'sun', () => {
                                this.state.sun.play(() => {
                                    this.state.sun.release()
                                })
                            }, 500);
                            break;
                        case 14:
                            timer.setTimeout(this, 'bananas', () => {
                                this.state.bananas.play(() => {
                                    this.state.bananas.release()
                                })
                            }, 300);
                            break;
                        case 34:
                            timer.setTimeout(this, 'ice_cream', () => {
                                this.state.ice_cream.play(() => {
                                    this.state.ice_cream.release()
                                })
                            }, 500);
                            break;
                    }
                }
                timer.setTimeout(this, 'speak_04_a', () => {
                    this.setState({opacity0: 1});
                }, 5500);
                timer.setTimeout(this, 'speak_04_b', () => {
                    this.setState({opacity0: 0});
                }, 6500);
                timer.setTimeout(this, 'speak_04', () => {
                    this.helper01();
                }, 6000);
                break;
            //speak_03
            case 9:
                this.setState({bunny_order: 1});
                if (this.state.err_time_select === 1) {
                    timer.setTimeout(this, 'sound_error_time_select', () => {
                        error_time_select.stop(() => {
                            error_time_select.play()
                        });
                        this.setState({err_time_select: 0});
                    }, 500);
                } else if (this.state.err_time_color === 1) {
                    timer.setTimeout(this, 'sound_error_time_color', () => {
                        error_time_color.stop(() => {
                            error_time_color.play()
                        });
                        this.setState({err_time_color: 0});
                    }, 800);
                } else {
                    switch (this.state.order) {
                        case 4:
                            timer.setTimeout(this, 'police_car', () => {
                                this.state.police_car.play(() => {
                                    this.state.police_car.release()
                                })
                            }, 500);
                            break;
                        case 10:
                            timer.setTimeout(this, 'frog', () => {
                                this.state.frog.play(() => {
                                    this.state.frog.release()
                                })
                            }, 500);
                            break;
                        case 16:
                            timer.setTimeout(this, 'flamingos', () => {
                                this.state.flamingos.play(() => {
                                    this.state.flamingos.release()
                                })
                            }, 50);
                            break;
                        case 18:
                            timer.setTimeout(this, 'pig', () => {
                                this.state.pig.play(() => {
                                    this.state.pig.release()
                                })
                            }, 500);
                            break;
                        case 20:
                            timer.setTimeout(this, 'horses', () => {
                                this.state.horses.play(() => {
                                    this.state.horses.release()
                                })
                            }, 500);
                            break;
                        case 22:
                            timer.setTimeout(this, 'teddy', () => {
                                this.state.teddy.play(() => {
                                    this.state.teddy.release()
                                })
                            }, 500);
                            break;
                        case 26:
                            timer.setTimeout(this, 'butterfly', () => {
                                this.state.butterfly.play(() => {
                                    this.state.butterfly.release()
                                })
                            }, 500);
                            break;
                        case 30:
                            timer.setTimeout(this, 'fish', () => {
                                this.state.fish.play(() => {
                                    this.state.fish.release()
                                })
                            }, 500);
                            break;
                        case 32:
                            timer.setTimeout(this, 'ballons', () => {
                                this.state.ballons.play(() => {
                                    this.state.ballons.release()
                                })
                            }, 500);
                            break;

                    }
                }
                timer.setTimeout(this, 'speak_03_a', () => {
                    this.setState({opacity0: 1});
                }, 4500);
                timer.setTimeout(this, 'speak_03_b', () => {
                    this.setState({opacity0: 0});
                }, 5500);
                timer.setTimeout(this, 'speak_03', () => {
                    this.helper01();
                }, 5000);
                break;
            //speak_02
            case 10:
                this.setState({bunny_order: 1});
                if (this.state.exit === 1) {
                    timer.setTimeout(this, 'exit_lvl', () => {
                        this.state.exit_lvl.play(() => {
                            this.state.exit_lvl.release()
                        });
                        this.setState({exit: 0, start: 1});
                        timer.clearInterval(this);
                        timer.setTimeout(this, 'navigate', () => {
                            this.setState({
                                err_time_select: 0,
                                error_time_color: 0,
                                ordercount: 0,
                                order: 0,
                                bunny_order: 1,
                                bunny_anim: 3,
                                exit: 0,
                                start: 1
                            });
                            this.props.navigation.navigate('Level_Selection')
                        }, 4000);
                    }, 1000);
                } else if (this.state.errorcount === 2) {
                    timer.setTimeout(this, 'error_2', () => {
                        error_2.stop(() => {
                            error_2.play()
                        });
                        this.setState({dominantcolor: 'white'});
                    }, 50);
                } else if (this.state.order === 24 && this.state.errorcount === 0) {
                    timer.setTimeout(this, 'flowers', () => {
                        this.state.flowers.play(() => {
                            this.state.flowers.release()
                        })
                    }, 500);
                }
                timer.setTimeout(this, 'speak_02_a', () => {
                    this.setState({opacity0: 1});
                }, 3500);
                timer.setTimeout(this, 'speak_02_b', () => {
                    this.setState({opacity0: 0});
                }, 4500);
                timer.setTimeout(this, 'speak_02', () => {
                    this.helper01();
                }, 4000);
                break;
        }
    }

    // helper for bunnyanim()
    helper01() {
        switch (this.state.bunny_order) {
            case 1:
                this.setState({bunny_anim: 0, disableButton_bunny: false});
                this.animbunny();
                break;
            case 2:
                this.rdm(3);
                this.setState({bunny_anim: this.state.rdm + 5, disableButton_bunny: true});
                this.animbunny();
                break;
            case 3:
                this.setState({bunny_anim: 8, disableButton_bunny: true});
                this.animbunny();
                break;
            case 4:
                this.setState({bunny_anim: 4, disableButton_bunny: true});
                this.animbunny();
                break;
            case 5:
                this.setState({bunny_anim: 9, disableButton_bunny: true});
                this.animbunny();
                break;
            case 6:
                this.setState({bunny_anim: 10, disableButton_bunny: true});
                this.animbunny();
                break;
            case 7:
                this.setState({bunny_anim: 3, disableButton_bunny: true});
                this.animbunny();
                break;
        }
    }

    // render bunny depending on bunny_order
    renderbunny() {
        switch (this.state.bunny_anim) {
            case 0:
                return <View>
                    <Image
                        source={require('../assets/bunny/idle_02.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 1:
                return <View>
                    <Image
                        source={require('../assets/bunny/idle_01.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 2:
                return <View>
                    <Image
                        source={require('../assets/bunny/idle_03.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 3:
                return <View>
                    <Image
                        source={require('../assets/bunny/speak_05.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 4:
                return <View>
                    <Image
                        source={require('../assets/bunny/onTouch.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 5:
                return <View>
                    <Image
                        source={require('../assets/bunny/success_01.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 6:
                return <View>
                    <Image
                        source={require('../assets/bunny/success_02.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 7:
                return <View>
                    <Image
                        source={require('../assets/bunny/success_03.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 8:
                return <View>
                    <Image
                        source={require('../assets/bunny/speak_04.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 9:
                return <View>
                    <Image
                        source={require('../assets/bunny/speak_03.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 10:
                return <View>
                    <Image
                        source={require('../assets/bunny/speak_02.webp')}
                        style={[styles.bunny]}/>
                </View>
        }
    }

    // Press function for exit
    exitPress = () => {
        this.setState({bunny_order: 6, err_time_select: 0, err_time_color: 0, exit: 1, start: 1})
    };

// Press function for touch
    renderTouch() {
        return <View>
            <TouchableOpacity disabled={this.state.disableButton_bunny} style={[styles.bunny]} onPress={() =>
                this.setState({bunny_order: 4})}>
            </TouchableOpacity>
        </View>
    }

    // renderfunction
    render() {
        if (this.ismounted_Level2 === true) {
            return (
                <ImageBackground source={require('../assets/other/Level1.webp')} style={styles.background}>
                    {this.renderbunny()}
                    <View>
                        <FastImage
                            source={require('../assets/bunny/initial_bunny.png')}
                            style={[styles.bunny, {opacity: this.state.opacity0}]}/>
                    </View>
                    {this.renderTouch()}
                    <View pointerEvents="none">
                        <FastImage source={require('../assets/other/Level_Selection_front2.webp')}
                                   style={styles.font2_gras}/>
                    </View>
                    <ViewShot style={styles.paint} ref="viewShot"
                              options={{format: "jpg", quality: 1.0, result: "base64"}}>
                        <SketchCanvas
                            ref="sketchRef"
                            style={{flex: 1}}
                            strokeWidth={height / 12}
                            strokeColor={this.state.drawcolor}
                            onStrokeEnd={this.makeScreenshot}
                        />
                    </ViewShot>
                    <View pointerEvents="none"
                          style={[{position: 'absolute'}]}>
                        {pictureselector(this.state.order)}
                        {starfall(this.state.order)}
                        <View style={[styles.paint, {position: "absolute"}, {backgroundColor: 'transparent'}]}/>
                    </View>
                    <View style={styles.colortabview}>
                        {this.colortabView()}
                    </View>
                    <View style={styles.shildview}>
                        {woodShild(this.state.order, this.state.errorcount)}
                        <View style={styles.textview}>
                            {text(this.state.order, this.state.textcolor, this.state.text, this.state.errorcount)}
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <Animatable.View
                            style={styles.backtab} animation="slideInDown" duration={1000} delay={1000}
                            easing={"linear"} useNativeDriver={true}>
                            <TouchableOpacity onPress={this.exitPress}>
                                <View>
                                    <FastImage
                                        source={require('../assets/other/BackArrow.webp')}
                                        style={{width: 50, height: 40}}
                                    />
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </ImageBackground>
            );
        }
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
        width: width / 6,
        height: height / 1.15,
        backgroundColor: 'white',
        borderRightColor: '#808080',
        borderRightWidth: 3,
        borderTopRightRadius: 4,
        borderTopColor: '#808080',
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    paint: {
        backgroundColor: '#F1F1F1',
        width: width / 1.80,
        height: height / 1.70,
        borderColor: 'black',
        borderWidth: 4,
        marginBottom: height / 6,
    },
    buttonView: {
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
        borderWidth: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70 / 2,
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
        position: 'absolute'
    },
    font2_gras: {
        right: -width / 2,
        bottom: -height / 1.16,
        position: 'absolute',
        width: width,
        height: height,
    },
    bunny: {
        width: width / 6,
        height: height / 2.3,
        position: 'absolute',
        marginLeft: width / 3.2,
        marginTop: height / 2.5
    },
});
