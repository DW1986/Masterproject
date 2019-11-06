import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {onTouch,fire_engine,strawberry,police_car,whale,leaf,frog,sun,bananas,flamingos,pig,horses,teddy,butterfly,flowers,fish,
    carrots,ballons,ice_cream,level_2_intro,exit_lvl,error_red_ger,error_red_eng,error_blue_ger,error_blue_eng,error_green_ger,error_green_eng,
    error_yellow_ger,error_yellow_eng,error_pink_ger_eng,error_brown_ger,error_brown_eng,error_purple_ger,error_purple_eng,
    error_orange_ger,error_orange_eng,error_cyan_ger,error_cyan_eng,error_2,error_time_select,error_time_color,
    success_01,success_02,success_03} from "../components/sounds";



const RNFS = require('react-native-fs');
const shuffle = require('shuffle-array');
const timer = require('react-native-timer');



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
            opacity0: 0,
            exit2Button: 0,
        }
    }

    componentWillMount() {
        // mount component
        this.ismounted_Level2 = true;

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
                    this.setState({text: "rot", textcolor: '#FF0000'});
                    break;
                case 4:
                case 6:
                    timer.setTimeout(this, 'blau', () =>
                            this.setState({text: "blau", textcolor: '#0000FF'})
                        , 3000);
                    break;
                case 8:
                case 10:
                    timer.setTimeout(this, 'gruen', () =>
                            this.setState({text: "grün", textcolor: '#00FF00'})
                        , 3000);
                    break;
                case 12:
                case 14:
                    timer.setTimeout(this, 'gelb', () =>
                            this.setState({text: "gelb", textcolor: '#FFFF00'})
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
                    timer.setTimeout(this, 'braun', () =>
                            this.setState({text: "braun", textcolor: '#A52A2A'})
                        , 3000);
                    break;
                case 24:
                case 26:
                    timer.setTimeout(this, 'lila', () =>
                            this.setState({text: "lila", textcolor: '#9D00FF'})
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
                    timer.setTimeout(this, 'tuerkis', () =>
                            this.setState({text: "türkis", textcolor: '#00FFFF'})
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '2', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '21', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '6', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '61', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '10', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '101', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '14', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '141', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '18', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '181', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '22', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '221', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '26', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '261', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '30', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '301', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                        err_time_color: 0,
                        bunny_order: 2,
                        colorselected: false,
                        drawcolor: '#F1F1F1',
                    });
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this, '34', () => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}));
                        this.setState({errorcount: 0,dominantcolor: 'white', order: this.state.orderRDM[this.state.ordercount][0]});
                        this.updatetext();
                        this.pictures_speak();
                        if (this.state.order === 50)
                            timer.setTimeout(this, '341', () => {
                                this.setState({
                                    err_time_select: 0,
                                    err_time_color: 0,
                                    ordercount: 0,
                                    order: 0,
                                    bunny_order: 1,
                                    bunny_anim: 3,
                                    exit: 0,
                                    start: 1,
                                    errorcount: 0
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
                }, 3300);
                timer.setTimeout(this, 'idle_02_2b', () => {
                    this.setState({opacity0: 0});
                }, 4700);
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
                }, 3300);
                timer.setTimeout(this, 'idle_01_b', () => {
                    this.setState({opacity0: 0});
                }, 4700);
                timer.setTimeout(this, 'idle_01', () => {
                    this.helper01();
                }, 4000);
                break;
            // idle03-bunny_order
            case 2:
                timer.setTimeout(this, 'idle_03_a', () => {
                    this.setState({opacity0: 1});
                }, 3800);
                timer.setTimeout(this, 'idle_03_b', () => {
                    this.setState({opacity0: 0});
                }, 5200);
                timer.setTimeout(this, 'idle_03', () => {
                    this.helper01();
                }, 4500);
                break;
            // speak_05
            case 3:
                this.setState({bunny_order: 1});
                if (this.state.start === 1) {
                    timer.setTimeout(this, 'sound_intro', () => {
                        {level_2_intro()}
                        this.pictures_speak();
                        this.setState({start: 0})
                    }, 1500);
                } else {
                    timer.setTimeout(this, 'carrots', () => {
                        {carrots()}
                    }, 500);
                }
                timer.setTimeout(this, 'speak_intro_a', () => {
                    this.setState({opacity0: 1, start: 0});
                }, 6300);
                if (this.state.start === 1) {
                    timer.setTimeout(this, 'speak_intro_ba', () => {
                        this.setState({opacity0: 0});
                    }, 7700);
                } else {
                    timer.setTimeout(this, 'speak_intro_bb', () => {
                        this.setState({opacity0: 0});
                    }, 7700);
                }
                timer.setTimeout(this, 'speak_intro', () => {
                    this.helper01();
                }, 7000);
                break;
            // onTouch-bunny_order
            case 4:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_onTouch', () => {
                    {onTouch()}
                }, 500);
                timer.setTimeout(this, 'onTouch_a', () => {
                    this.setState({opacity0: 1});
                }, 3800);
                timer.setTimeout(this, 'onTouch_b', () => {
                    this.setState({opacity0: 0});
                }, 5200);
                timer.setTimeout(this, 'onTouch', () => {
                    this.helper01();
                }, 4500);
                break;
            //success_01-bunny_order
            case 5:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_success_01', () => {
                    {success_01()}
                }, 1000);
                timer.setTimeout(this, 'success_01_a', () => {
                    this.setState({opacity0: 1});
                }, 4300);
                timer.setTimeout(this, 'success_01_b', () => {
                    this.setState({opacity0: 0});
                }, 5700);
                timer.setTimeout(this, 'success_01', () => {
                    this.helper01();
                }, 5000);
                break;
            //success_02-bunny_order
            case 6:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_success_02', () => {
                    {success_02()}
                }, 500);
                timer.setTimeout(this, 'success_02_a', () => {
                    this.setState({opacity0: 1});
                }, 2800);
                timer.setTimeout(this, 'success_02_b', () => {
                    this.setState({opacity0: 0});
                }, 4200);
                timer.setTimeout(this, 'success_02', () => {
                    this.helper01();
                }, 3500);
                break;
            //success_03-bunny_order
            case 7:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_success_03', () => {
                    {success_03()}
                }, 1000);
                timer.setTimeout(this, 'success_03_a', () => {
                    this.setState({opacity0: 1});
                }, 4300);
                timer.setTimeout(this, 'success_03_b', () => {
                    this.setState({opacity0: 0});
                }, 5700);
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
                                    {error_red_ger()}
                                }, 500);
                                break;
                            case 4:
                            case 6:
                                timer.setTimeout(this, 'error_blue_ger', () => {
                                    {error_blue_ger()}
                                }, 500);
                                break;
                            case 8:
                            case 10:
                                timer.setTimeout(this, 'error_green_ger', () => {
                                    {error_green_ger()}
                                }, 500);
                                break;
                            case 12:
                            case 14:
                                timer.setTimeout(this, 'error_yellow_ger', () => {
                                    {error_yellow_ger()}
                                }, 500);
                                break;
                            case 16:
                            case 18:
                                timer.setTimeout(this, 'error_pink_ger_eng', () => {
                                    {error_pink_ger_eng()}
                                }, 500);
                                break;
                            case 20:
                            case 22:
                                timer.setTimeout(this, 'error_brown_ger', () => {
                                    {error_brown_ger()}
                                }, 500);
                                break;
                            case 24:
                            case 26:
                                timer.setTimeout(this, 'error_purple_ger', () => {
                                    {error_purple_ger()}
                                }, 500);
                                break;
                            case 28:
                            case 30:
                                timer.setTimeout(this, 'error_orange_ger', () => {
                                    {error_orange_ger()}
                                }, 500);
                                break;
                            case 32:
                            case 34:
                                timer.setTimeout(this, 'error_cyan_ger', () => {
                                    {error_cyan_ger()}
                                }, 500);
                                break;
                        }
                    } else {
                        switch (this.state.order) {
                            case 0:
                            case 2:
                                timer.setTimeout(this, 'error_red_eng', () => {
                                    {error_red_eng()}
                                }, 500);
                                break;
                            case 4:
                            case 6:
                                timer.setTimeout(this, 'error_blue_eng', () => {
                                    {error_blue_eng()}
                                }, 500);
                                break;
                            case 8:
                            case 10:
                                timer.setTimeout(this, 'error_green_eng', () => {
                                    {error_green_eng()}
                                }, 500);
                                break;
                            case 12:
                            case 14:
                                timer.setTimeout(this, 'error_yellow_eng', () => {
                                    {error_yellow_eng()}
                                }, 500);
                                break;
                            case 16:
                            case 18:
                                timer.setTimeout(this, 'error_pink_ger_eng', () => {
                                    {error_pink_ger_eng()}
                                }, 500);
                                break;
                            case 20:
                            case 22:
                                timer.setTimeout(this, 'error_brown_eng', () => {
                                    {error_brown_eng()}
                                }, 500);
                                break;
                            case 24:
                            case 26:
                                timer.setTimeout(this, 'error_purple_eng', () => {
                                    {error_purple_eng()}
                                }, 500);
                                break;
                            case 28:
                            case 30:
                                timer.setTimeout(this, 'error_orange_eng', () => {
                                    {error_orange_eng()}
                                }, 500);
                                break;
                            case 32:
                            case 34:
                                timer.setTimeout(this, 'error_cyan_eng', () => {
                                    {error_cyan_eng()}
                                }, 500);
                                break;
                        }
                    }
                } else if (this.state.errorcount === 0) {
                    switch (this.state.order) {
                        case 0:
                            timer.setTimeout(this, 'fire_engine', () => {
                                {fire_engine()}
                            }, 50);
                            break;
                        case 2:
                            timer.setTimeout(this, 'strawberry', () => {
                                {strawberry()}
                            }, 800);
                            break;
                        case 6:
                            timer.setTimeout(this, 'whale', () => {
                                {whale()}
                            }, 500);
                            break;
                        case 8:
                            timer.setTimeout(this, 'leaf', () => {
                                {leaf()}
                            }, 100);
                            break;
                        case 12:
                            timer.setTimeout(this, 'sun', () => {
                                {sun()}
                            }, 500);
                            break;
                        case 14:
                            timer.setTimeout(this, 'bananas', () => {
                                {bananas()}
                            }, 300);
                            break;
                        case 34:
                            timer.setTimeout(this, 'ice_cream', () => {
                                {ice_cream()}
                            }, 500);
                            break;
                    }
                }
                timer.setTimeout(this, 'speak_04_a', () => {
                    this.setState({opacity0: 1});
                }, 5300);
                if (this.state.errorcount === 1) {
                    timer.setTimeout(this, 'speak_04_ba', () => {
                        this.setState({opacity0: 0});
                    }, 6700);
                } else {
                    timer.setTimeout(this, 'speak_04_bb', () => {
                        this.setState({opacity0: 0});
                    }, 6700);
                }
                timer.setTimeout(this, 'speak_04', () => {
                    this.helper01();
                }, 6000);
                break;
            //speak_03
            case 9:
                this.setState({bunny_order: 1});
                if (this.state.err_time_select === 1) {
                    timer.setTimeout(this, 'sound_error_time_select', () => {
                        {error_time_select()}
                        this.setState({err_time_select: 0});
                    }, 500);
                } else if (this.state.err_time_color === 1) {
                    timer.setTimeout(this, 'sound_error_time_color', () => {
                        {error_time_color()}
                        this.setState({err_time_color: 0});
                    }, 800);
                } else {
                    switch (this.state.order) {
                        case 4:
                            timer.setTimeout(this, 'police_car', () => {
                                {police_car()}
                            }, 500);
                            break;
                        case 10:
                            timer.setTimeout(this, 'frog', () => {
                                {frog()}
                            }, 500);
                            break;
                        case 16:
                            timer.setTimeout(this, 'flamingos', () => {
                                {flamingos()}
                            }, 50);
                            break;
                        case 18:
                            timer.setTimeout(this, 'pig', () => {
                                {pig()}
                            }, 500);
                            break;
                        case 20:
                            timer.setTimeout(this, 'horses', () => {
                                {horses()}
                            }, 500);
                            break;
                        case 22:
                            timer.setTimeout(this, 'teddy', () => {
                                {teddy()}
                            }, 500);
                            break;
                        case 26:
                            timer.setTimeout(this, 'butterfly', () => {
                                {butterfly()}
                            }, 500);
                            break;
                        case 30:
                            timer.setTimeout(this, 'fish', () => {
                                {fish()}
                            }, 500);
                            break;
                        case 32:
                            timer.setTimeout(this, 'ballons', () => {
                                {ballons()}
                            }, 500);
                            break;

                    }
                }
                timer.setTimeout(this, 'speak_03_a', () => {
                    this.setState({opacity0: 1});
                }, 4300);
                if (this.state.err_time_select === 1) {
                    timer.setTimeout(this, 'speak_03_ba', () => {
                        this.setState({opacity0: 0})
                    }, 5700);
                } else if (this.state.err_time_color === 1) {
                    timer.setTimeout(this, 'speak_03_bb', () => {
                        this.setState({opacity0: 0})
                    }, 5700);
                } else {
                    timer.setTimeout(this, 'speak_03_bc', () => {
                        this.setState({opacity0: 0})
                    }, 5700);
                }
                timer.setTimeout(this, 'speak_03', () => {
                    this.helper01();
                }, 5000);
                break;
            //speak_02
            case 10:
                this.setState({bunny_order: 1});
                if (this.state.exit2Button === 1) {
                    timer.setTimeout(this, 'exit_lvl', () => {
                        {exit_lvl()}
                    }, 1000);
                    timer.clearInterval(this);
                    timer.setTimeout(this, 'navigate', () => {
                        this.setState({
                            err_time_select: 0,
                            err_time_color: 0,
                            ordercount: 0,
                            order: 0,
                            bunny_order: 1,
                            bunny_anim: 3,
                            exit: 0,
                            start: 1,
                            exit2Button:0
                        });
                        this.props.navigation.navigate('Level_Selection')
                    }, 4000);
                } else if (this.state.errorcount === 2) {
                    timer.setTimeout(this, 'error_2', () => {
                        {error_2()}
                        this.setState({dominantcolor: 'white'});
                    }, 50);
                } else if (this.state.order === 24 && this.state.errorcount === 0) {
                    timer.setTimeout(this, 'flowers', () => {
                        {flowers()}
                    }, 500);
                }
                timer.setTimeout(this, 'speak_02_a', () => {
                    this.setState({opacity0: 1});
                }, 3300);
                if (this.state.errorcount === 2) {
                    timer.setTimeout(this, 'speak_02_ba', () => {
                        this.setState({opacity0: 0});
                    }, 4700);
                } else {
                    timer.setTimeout(this, 'speak_02_bb', () => {
                        this.setState({opacity0: 0});
                    }, 4700);
                }
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
        this.setState(prevState => ({exit2Button: prevState.exit2Button + 1}));
        this.setState({bunny_order: 6, err_time_select: 0, err_time_color: 0, exit: 1});
        if(this.state.exit2Button===1){
            this.props.navigation.navigate('Level_Selection');
            this.setState({
                err_time_select: 0,
                err_time_color: 0,
                ordercount: 0,
                order: 0,
                bunny_order: 1,
                bunny_anim: 3,
                exit: 0,
                start: 1,
                exit2Button:0
            });
        }
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
                    <View style={styles.paint2}>
                        <Image
                            source={require('../assets/other/paint.webp')}
                            style={styles.paint2}/>
                    </View>
                    {this.renderbunny()}
                    <View>
                        <FastImage
                            source={require('../assets/bunny/initial_bunny.png')}
                            style={[styles.bunny, {opacity: this.state.opacity0}]}/>
                    </View>
                    <Image pointerEvents="none" source={require('../assets/other/Level_Selection_front2.webp')}
                           style={styles.font2_gras}/>
                    {this.renderTouch()}
                    <ViewShot style={styles.paint} ref="viewShot"
                              options={{format: "jpg", quality: 1.0, result: "base64"}}>
                        <SketchCanvas
                            ref="sketchRef"
                            style={{flex: 1}}
                            strokeWidth={wp('5%')}
                            strokeColor={this.state.drawcolor}
                            onStrokeEnd={this.makeScreenshot}
                        />
                    </ViewShot>
                    <View pointerEvents="none"
                          style={[styles.background]}>
                        {pictureselector(this.state.order)}
                        {starfall(this.state.order)}
                        <View
                            style={[styles.paint, {position: "absolute"}, {bottom: hp('24.5%')}, {backgroundColor: 'transparent'}]}/>
                    </View>
                    <View style={styles.colortabview}>
                        {this.colortabView()}
                    </View>
                    <View style={styles.shildview}>
                        {woodShild(this.state.order, this.state.errorcount)}
                        {text(this.state.order, this.state.textcolor, this.state.text, this.state.errorcount)}
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
        width: wp('15%'),
        height: hp('80%'),
        backgroundColor: 'white',
        borderRightColor: '#808080',
        borderRightWidth: wp('0.5%'),
        borderTopRightRadius: wp('0.5%'),
        borderTopColor: '#808080',
        borderTopWidth: wp('0.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    paint: {
        backgroundColor: '#F1F1F1',
        width: wp('56%'),
        height: hp('62%'),
        borderColor: 'black',
        borderWidth: wp('0.5%'),
        bottom: hp('24.5%'),
        position:'absolute'
    },
    paint2: {
        width: wp('60%'),
        height: hp('85%'),
        position:'absolute',
        resizeMode: 'stretch'
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
        width: wp('100%'),
        height: hp('100%'),
        position:'absolute'
    },
    font2_gras: {
        flex: 1,
        left:wp('0%'),
        bottom:  hp('0%'),
        position: 'absolute',
        width: wp('100%'),
        height: hp('100%'),
    },
    bunny: {
        width: wp('16%'),
        height: hp('42%'),
        position: 'absolute',
        marginLeft: wp('32%'),
        marginTop: hp('48%'),
    },
});
