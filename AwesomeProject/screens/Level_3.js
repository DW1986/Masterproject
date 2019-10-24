import React, {Component} from 'react';
import {Dimensions, ImageBackground, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import {woodShild} from "../components/woodShild3";
import {text} from "../components/text3";
import {starfall} from "../components/starfall";
import {pictureselector} from "../components/pictureselector34";

const RNFS = require('react-native-fs');
const timer = require('react-native-timer');
const {width, height} = Dimensions.get('window');
const Sound = require('react-native-sound');

const leaf = new Sound('leaf.m4a', Sound.MAIN_BUNDLE);
const frog = new Sound('frog.m4a', Sound.MAIN_BUNDLE);
const horses = new Sound('horses.m4a', Sound.MAIN_BUNDLE);
const teddy = new Sound('teddy.m4a', Sound.MAIN_BUNDLE);
const butterfly = new Sound('butterfly.m4a', Sound.MAIN_BUNDLE);
const flowers = new Sound('flowers.m4a', Sound.MAIN_BUNDLE);
const fish = new Sound('fish.m4a', Sound.MAIN_BUNDLE);
const carrots = new Sound('carrots.m4a', Sound.MAIN_BUNDLE);
const ballons = new Sound('ballons.m4a', Sound.MAIN_BUNDLE);
const ice_cream = new Sound('ice_cream.m4a', Sound.MAIN_BUNDLE);
const Level_3_intro = new Sound('Level_3_intro.m4a', Sound.MAIN_BUNDLE);
const exit_lvl = new Sound('exit_lvl.m4a', Sound.MAIN_BUNDLE);
const error_green_ger = new Sound('error_green_ger.m4a', Sound.MAIN_BUNDLE);
const error_green_eng = new Sound('error_green_eng.m4a', Sound.MAIN_BUNDLE);
const error_brown_ger = new Sound('error_brown_ger.m4a', Sound.MAIN_BUNDLE);
const error_brown_eng = new Sound('error_brown_eng.m4a', Sound.MAIN_BUNDLE);
const error_purple_ger = new Sound('error_purple_ger.m4a', Sound.MAIN_BUNDLE);
const error_purple_eng = new Sound('error_purple_eng.m4a', Sound.MAIN_BUNDLE);
const error_orange_ger = new Sound('error_orange_ger.m4a', Sound.MAIN_BUNDLE);
const error_orange_eng = new Sound('error_orange_eng.m4a', Sound.MAIN_BUNDLE);
const error_cyan_ger = new Sound('error_cyan_ger.m4a', Sound.MAIN_BUNDLE);
const error_cyan_eng = new Sound('error_cyan_eng.m4a', Sound.MAIN_BUNDLE);
const error_time_select = new Sound('error_time_select.m4a', Sound.MAIN_BUNDLE);
const error_time_color = new Sound('error_time_color.m4a', Sound.MAIN_BUNDLE);
const success_01 = new Sound('success_1.m4a', Sound.MAIN_BUNDLE);
const success_02 = new Sound('success_2.m4a', Sound.MAIN_BUNDLE);
const success_03 = new Sound('success_3.m4a', Sound.MAIN_BUNDLE);
const onTouch = new Sound('onTouch.m4a', Sound.MAIN_BUNDLE);

export default class Level_3 extends Component {
    ismounted_Level3 = false;

    constructor(props) {
        super(props);
        this.state = {
            dominantcolor_rgba: null,
            drawcolor: '#F1F1F1',
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg',
            order:0,
            colorselected: false,
            firstselected: false,
            secondselected: false,
            dominantcolor: '',
            text1:"X",
            text2:"XX",
            text3:"XXX",
            textcolor1:'#0000FF',
            textcolor2:'#FFFF00',
            textcolor3:'#00FF00',
            errorcount:0,
            bunny_order:1,
            bunny_anim:11,
            rdm:0,
            disableButton_bunny:true,
            exit:0,
            err_time_select:0,
            err_time_color:0,
            time_error_played:0,
            color_error_played:0,
            intro_played:0,
            color_played:0,
            success_played:0,
            exit_played:0,
            opacity0:0
        }
    }

    componentWillMount() {
        // mount component
        this.ismounted_Level3 = true;
    }

    async componentDidMount() {
        // update text
        this.updatetext();
        this.animbunny();
        // set interval for two errors over time
        this.errorIntervall();
    }

    componentWillUnmount() {
        //unmount component
        this.ismounted_Level3 = false;
        // clear all timer and interval
        timer.clearTimeout(this);
        timer.clearInterval(this);
    }
    errorIntervall(){
        timer.setInterval(this,'error',
            () => {
                if(this.state.colorselected===false && this.state.firstselected===false && this.state.secondselected===false){
                    this.setState({bunny_order:5,err_time_select:1,err_time_color:0})
                }
                else if(this.state.dominantcolor==="white" && this.state.colorselected!==false || this.state.firstselected!==false || this.state.secondselected!==false){
                    this.setState({bunny_order:5,err_time_select:0,err_time_color:1})
                }
            },40000)
    }
    // update Text on woodshild depending on order and language
    updatetext(){
        if (this.props.navigation.state.params.language===false){
            switch(this.state.order) {
                case 0: case 2:
                    this.setState({text1: "Blau",text2: "Gelb", text3: "Grün", textcolor1: '#0000FF', textcolor2: '#FFFF00', textcolor3: '#00FF00'});
                    break;
                case 4: case 6:
                    this.setState({text1: "Rot",text2: "Blau", text3: "Lila", textcolor1: '#FF0000', textcolor2: '#0000FF', textcolor3: '#9D00FF'});
                    break;
                case 8: case 10:
                    this.setState({text1: "Rot",text2: "Grün", text3: "Braun", textcolor1: '#FF0000', textcolor2: '#00FF00', textcolor3: '#A52A2A'});
                    break;
                case 12: case 14:
                    this.setState({text1: "Rot",text2: "Gelb", text3: "Orange", textcolor1: '#FF0000', textcolor2: '#FFFF00', textcolor3: '#FFA500'});
                    break;
                case 16: case 18:
                    this.setState({text1: "Grün",text2: "Blau", text3: "Türkis", textcolor1: '#00FF00', textcolor2: '#0000FF', textcolor3: '#00FFFF'});
                    break;
            }
        } else {
            switch(this.state.order) {
                case 0: case 2:
                    this.setState({text1: "blue",text2: "yellow", text3: "green", textcolor1: '#0000FF', textcolor2: '#FFFF00', textcolor3: '#00FF00'});
                    break;
                case 4: case 6:
                    this.setState({text1: "red",text2: "blue", text3: "purple", textcolor1: '#FF0000', textcolor2: '#0000FF', textcolor3: '#9D00FF'});
                    break;
                case 8: case 10:
                    this.setState({text1: "red",text2: "green", text3: "brown", textcolor1: '#FF0000', textcolor2: '#00FF00', textcolor3: '#A52A2A'});
                    break;
                case 12: case 14:
                    this.setState({text1: "red",text2: "yellow", text3: "orange", textcolor1: '#FF0000', textcolor2: '#FFFF00', textcolor3: '#FFA500'});
                    break;
                case 16: case 18:
                    this.setState({text1: "green",text2: "blue", text3: "cyan", textcolor1: '#00FF00', textcolor2: '#0000FF', textcolor3: '#00FFFF'});
                    break;
            }
        }
    }
    error(){
        if(this.state.errorcount===1){
            this.setState({bunny_order:3})
        }else if(this.state.errorcount===2){
            this.setState({bunny_order:6})
        }
    }
    // update order depending on dominant color and set the different states
    updateorder(){
        switch (this.state.order) {
            case 0:
            case 2:
                if (this.state.dominantcolor === 'green') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,colorselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false});
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this,'2',() => {
                        this.setState(prevState => ({order: prevState.order + 1}));
                        this.updatetext();
                        if (this.state.order === 50)
                            timer.setTimeout(this,'21',() => {
                                this.setState({order:0,bunny_order:1,bunny_anim:11,exit: 0,start:1});
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 3000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 4:
            case 6:
                if (this.state.dominantcolor === 'purple') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,colorselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false});
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this,'6',() => {
                        this.setState(prevState => ({order: prevState.order + 1}));
                        this.updatetext();
                        if (this.state.order === 50)
                            timer.setTimeout(this,'61',() => {
                                this.setState({order:0,bunny_order:1,bunny_anim:11,exit: 0,start:1});
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 3000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 8:
            case 10:
                if (this.state.dominantcolor === 'brown') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,colorselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false});
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this,'10',() => {
                        this.setState(prevState => ({order: prevState.order + 1}));
                        this.updatetext();
                        if (this.state.order === 50)
                            timer.setTimeout(this,'101',() => {
                                this.setState({order:0,bunny_order:1,bunny_anim:11,exit: 0,start:1});
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 3000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 12:
            case 14:
                if (this.state.dominantcolor === 'orange') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,colorselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false});
                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this,'14',() => {
                        this.setState(prevState => ({order: prevState.order + 1}));
                        this.updatetext();
                        if (this.state.order === 50)
                            timer.setTimeout(this,'141',() => {
                                this.setState({order:0,bunny_order:1,bunny_anim:11,exit: 0,start:1});
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 3000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}));
                    this.error();
                }
                break;
            case 16:
            case 18:
                if (this.state.dominantcolor === 'cyan') {
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,colorselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false});

                    this.setState(prevState => ({order: prevState.order + 1}));
                    timer.setTimeout(this,'18',() => {
                        if(this.state.order ===19){
                            this.setState({order:50});
                        }else{
                            this.setState(prevState => ({order: prevState.order + 1}));
                        }
                        this.updatetext();
                        if(this.state.order=== 50) {
                            timer.setTimeout(this,'181',() => {
                                this.setState({order:0,bunny_order:1,bunny_anim:11,exit: 0,start:1});
                                timer.clearInterval(this);
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                        }
                    }, 3000)
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
    };
    // get the dominant color from the picture (rgba -> text)
    getColor(){
        switch(this.state.dominantcolor_rgba) {
            case "rgba(248,0,0,1,000)":
                this.setState({dominantcolor:"red"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(0,0,248,1,000)':
                this.setState({dominantcolor:"blue"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(0,248,0,1,000)':
                this.setState({dominantcolor:"green"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(248,248,0,1,000)':
                this.setState({dominantcolor:"yellow"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(248,16,144,1,000)':
                this.setState({dominantcolor:"pink"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(160,40,40,1,000)':
                this.setState({dominantcolor:"brown"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(152,0,248,1,000)':
                this.setState({dominantcolor:"purple"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(248,160,0,1,000)':
                this.setState({dominantcolor:"orange"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            case 'rgba(0,248,248,1,000)':
                this.setState({dominantcolor:"cyan"});
                this.refs.sketchRef.clear();
                this.updateorder();
                break;
            default:
                this.setState({dominantcolor:"white"})
        }
    }
    // render the first color depending on order
    first(){
        switch (this.state.order) {
            case 0: case 1: case 2: case 3:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FFFF00'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#0000FF',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/blue.webp')}/>
                    </TouchableOpacity>
                }
              case 4: case 5: case 6: case 7:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#0000FF'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FF0000',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/red.webp')}/>
                    </TouchableOpacity>
                }
            case 8: case 9: case 10: case 11:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#00FF00'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FF0000',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/red.webp')}/>
                    </TouchableOpacity>
                }
            case 12: case 13: case 14: case 15:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FFFF00'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FF0000',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/red.webp')}/>
                    </TouchableOpacity>
                }
            case 16: case 17: case 18: case 19:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#0000FF'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#00FF00',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/green.webp')}/>
                    </TouchableOpacity>
                }
        }
    }
    // render the second color depending on order
    second() {
        switch (this.state.order) {
            case 0: case 1: case 2: case 3:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#0000FF'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/yellow_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/yellow_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FFFF00',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/yellow.webp')}/>
                    </TouchableOpacity>
                }
            case 4: case 5: case 6: case 7:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FF0000'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#0000FF',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/blue.webp')}/>
                    </TouchableOpacity>
                }
            case 8: case 9: case 10: case 11:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FF0000'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#00FF00',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/green.webp')}/>
                    </TouchableOpacity>
                }
            case 12: case 13: case 14: case 15:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FF0000'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/yellow_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/yellow_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FFFF00',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/yellow.webp')}/>
                    </TouchableOpacity>
                }
            case 16: case 17: case 18: case 19:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#00FF00'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#0000FF',colorselected:false});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/blue.webp')}/>
                    </TouchableOpacity>
                }
        }
    }
    // render the mix color depending on the selected colors
    mix(){
        if(this.state.firstselected === true && this.state.secondselected === true){
            switch (this.state.order) {
                case 0: case 1: case 2: case 3:
                    if (this.state.colorselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/green_selected.webp')}/>
                        </TouchableOpacity>;
                    return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#00FF00'});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/green.webp')}/>
                    </TouchableOpacity>;
                case 4: case 5: case 6: case 7:
                    if (this.state.colorselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/purple_selected.webp')}/>
                        </TouchableOpacity>;
                    return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#9D00FF'});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/purple.webp')}/>
                    </TouchableOpacity>;
                case 8: case 9: case 10: case 11:
                    if (this.state.colorselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/brown_selected.webp')}/>
                        </TouchableOpacity>;
                    return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#A52A2A'});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/brown.webp')}/>
                    </TouchableOpacity>;
                case 12: case 13: case 14: case 15:
                    if (this.state.colorselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/orange_selected.webp')}/>
                        </TouchableOpacity>;
                    return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#FFA500'});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/orange.webp')}/>
                    </TouchableOpacity>;
                case 16: case 17: case 18: case 19:
                    if (this.state.colorselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'});
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/cyan_selected.webp')}/>
                        </TouchableOpacity>;
                    return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#00FFFF'});
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/cyan.webp')}/>
                    </TouchableOpacity>
            }
        } else {
            return <FastImage style={styles.colors}
                              source={require('../assets/mixed_colors/empty.webp')}/>
        }
    }
    // control the colortabView
    colortabView(){
        switch(this.state.order){
            case 0: case 4: case 8: case 12: case 16:
                return  <Animatable.View style={styles.colortab} animation={{
                    from:{left:-width/6.5},
                    to:{left:0}
                }} duration={1000} easing={"linear"}>
                    {this.first()}
                    {this.second()}
                    {this.mix()}
                </Animatable.View>;
            case 3: case 7: case 11: case 15: case 19:
                return  <Animatable.View style={styles.colortab} animation={{
                    from:{left:0},
                    to:{left:-width/6.5}
                }} duration={1000} easing={"linear"}>
                    <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected});
                        this.refs.sketchRef.clear()}}>
                        {this.first()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected});
                        this.refs.sketchRef.clear()}}>
                        {this.second()}
                    </TouchableOpacity>
                    {this.mix()}
                </Animatable.View>;
            case 1: case 2: case 5: case 6: case 9: case 10: case 13: case 14: case 17: case 18: case 21: case 22: case 25: case 26: case 29: case 30: case 33: case 34:
                return  <View style={styles.colortab}>
                    <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected});
                        this.refs.sketchRef.clear()}}>
                        {this.first()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected});
                        this.refs.sketchRef.clear()}}>
                        {this.second()}
                    </TouchableOpacity>
                    {this.mix()}
                </View>
        }
    }
    rdm(max) {
        this.setState({rdm:Math.floor(Math.random() * Math.floor(max))});
    }
    pictures_speak(){
        timer.setTimeout(this, 'pictures_speak', () => {
            switch(this.state.order){
                case 5: case 6:
                    this.setState({bunny_order:6});
                    break;
                case 1: case 2: case 3: case 4: case 7: case 8:  case 9: case 10:  case 13: case 14: case 15:case 16:
                    this.setState({bunny_order:5});
                    break;
                case 0: case 17: case 18:
                    this.setState({bunny_order:3});
                    break;
                case 11: case 12:
                    this.setState({bunny_order:7});
                    break;
            }
        }, 1000);



// switch 02 -> 6, 03 -> 5, 04 -> 3
    }
    animbunny(){
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
                this.setState({bunny_order:1});
                timer.setTimeout(this, 'carrots', () => {
                    carrots.play();
                }, 1000);
                timer.setTimeout(this, 'speak_intro_a', () => {
                    this.setState({opacity0: 1,start:0});
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
                this.setState({bunny_order:1});
                timer.setTimeout(this, 'sound_onTouch', () => {
                    onTouch.play();
                }, 1000);
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
                timer.setTimeout(this, 'sound_success_01', () => {
                    success_01.play();
                    this.pictures_speak();
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
                timer.setTimeout(this, 'sound_success_02', () => {
                    success_02.play();
                    this.pictures_speak();
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
                timer.setTimeout(this, 'sound_success_03', () => {
                    success_03.play();
                    this.pictures_speak();
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
                this.setState({bunny_order:1});
                if (this.state.errorcount === 1) {
                    this.setState({dominantcolor: 'white'});
                    if(this.props.navigation.state.params.language===false) {
                        this.setState({errorcount:0});
                        switch(this.state.order){
                            case 0: case 1:case 2:
                                timer.setTimeout(this, 'error_green_ger', () => {
                                    error_green_ger.play();
                                }, 1000);
                                break;
                            case 4: case 5: case 6:
                                timer.setTimeout(this, 'error_purple_ger', () => {
                                    error_purple_ger.play();
                                }, 1000);
                                break;
                            case 8: case 9: case 10:
                                timer.setTimeout(this, 'error_brown_ger', () => {
                                    error_brown_ger.play();
                                }, 1000);
                                break;
                            case 12: case 13: case 14:
                                timer.setTimeout(this, 'error_orange_ger', () => {
                                    error_orange_ger.play();
                                }, 1000);
                                break;
                            case 16: case 17: case 18:
                                timer.setTimeout(this, 'error_cyan_ger', () => {
                                    error_cyan_ger.play();
                                }, 1000);
                                break;
                        }
                    }else {
                        this.setState({errorcount:0});
                        switch (this.state.order) {
                            case 0:
                            case 3:
                            case 2:
                                timer.setTimeout(this, 'error_green_eng', () => {
                                    error_green_eng.play();
                                }, 1000);
                                break;
                            case 4:
                            case 5:
                            case 6:
                                timer.setTimeout(this, 'error_purple_eng', () => {
                                    error_purple_eng.play();
                                }, 1000);
                                break;
                            case 8:
                            case 9:
                            case 10:
                                timer.setTimeout(this, 'error_brown_eng', () => {
                                    error_brown_eng.play();
                                }, 1000);
                                break;
                            case 12:
                            case 13:
                            case 14:
                                timer.setTimeout(this, 'error_orange_eng', () => {
                                    error_orange_eng.play();
                                }, 1000);
                                break;
                            case 16:
                            case 17:
                            case 18:
                                timer.setTimeout(this, 'error_cyan_eng', () => {
                                    error_cyan_eng.play();
                                }, 1000);
                                break;
                        }
                    }
                } else {
                    switch (this.state.order) {
                        case 0:
                            timer.setTimeout(this, 'leaf', () => {
                                leaf.play();
                            }, 1000);
                            break;
                        case 17: case 18:
                            timer.setTimeout(this, 'ice_cream', () => {
                                ice_cream.play();
                            }, 1000);
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
                this.setState({bunny_order:1});
                if (this.state.err_time_select === 1 ) {
                    timer.setTimeout(this, 'sound_error_time_select', () => {
                        error_time_select.play();
                        this.setState({err_time_select:0});
                    }, 1000);
                } else if (this.state.err_time_color === 1) {
                    timer.setTimeout(this, 'sound_error_time_color', () => {
                        error_time_color.play();
                        this.setState({err_time_color:0});
                    }, 1000);
                }else {
                    switch (this.state.order) {
                        case 1: case 2:
                            timer.setTimeout(this, 'frog', () => {
                                frog.play();
                            }, 1000);
                            break;
                        case 3: case 4:
                            timer.setTimeout(this, 'butterfly', () => {
                                butterfly.play();
                            }, 1000);
                            break;
                        case 7:case 8:
                            timer.setTimeout(this, 'horses', () => {
                                horses.play();
                            }, 1000);
                            break;
                        case 9: case 10:
                            timer.setTimeout(this, 'teddy', () => {
                                teddy.play();
                            }, 1000);
                            break;
                        case 13: case 14:
                            timer.setTimeout(this, 'fish', () => {
                                fish.play();
                            }, 1000);
                            break;
                        case 15: case 16:
                            timer.setTimeout(this, 'ballons', () => {
                                ballons.play();
                            }, 1000);
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
                this.setState({bunny_order:1});
                if(this.state.exit===1){
                    timer.setTimeout(this, 'exit_lvl', () => {
                        exit_lvl.play();

                        timer.clearInterval(this);
                        timer.setTimeout(this, 'navigate', () => {
                            this.setState({order:0,bunny_order:1,bunny_anim:11,exit: 0,start:1});
                            this.props.navigation.navigate('Level_Selection')
                        }, 4000);
                    }, 1000);
                }else if(this.state.order===6 || this.state.order===5  && this.state.errorcount===0){
                    timer.setTimeout(this, 'flowers', () => {
                        flowers.play();
                    }, 1000);
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
                //speak_06
            case 11:
                timer.setTimeout(this, 'sound_intro', () => {
                    Level_3_intro.play();
                    this.pictures_speak();
                }, 1000);
                timer.setTimeout(this, 'speak_06_a', () => {
                    this.setState({opacity0: 1});
                }, 7500);
                timer.setTimeout(this, 'speak_06_b', () => {
                    this.setState({opacity0: 0});
                }, 8500);
                timer.setTimeout(this, 'speak_06', () => {
                    this.helper01();
                }, 8000);
                break;
        }

    }
    // helper for bunnyanim()
    helper01(){
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
        switch(this.state.bunny_anim) {
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
                </View>;
            case 11:
                return <View>
                    <Image
                        source={require('../assets/bunny/speak_06.webp')}
                        style={[styles.bunny]}/>
                </View>;
        }
    }
    // Press function for exit
    exitPress =()=> {
        this.setState({bunny_order:6, err_time_select: 0, err_time_color: 0, exit: 1,start:1})
    };

    renderTouch(){
        return <View>
            <TouchableOpacity disabled={this.state.disableButton_bunny} style={[styles.bunny]} onPress={() =>
                this.setState({bunny_order:4})}>
            </TouchableOpacity>
        </View>
    }

    render() {
        if (this.ismounted_Level3 === true) {
            return (
                <ImageBackground source={require('../assets/other/Level1.webp')} style={styles.background}>
                    {this.renderbunny()}
                    <View>
                        <FastImage
                            source={require('../assets/bunny/initial_bunny.png')}
                            style={[styles.bunny,{opacity:this.state.opacity0}]}/>
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
                            strokeWidth={height/12}
                            strokeColor={this.state.drawcolor}
                            onStrokeEnd={this.makeScreenshot}
                        />
                    </ViewShot>
                    <View pointerEvents="none"
                          style={{position: 'absolute'}}>
                        {pictureselector(this.state.order)}
                        {starfall(this.state.order)}
                        <View style={[styles.paint,{position:"absolute"},{backgroundColor:'transparent'}]}/>
                    </View>

                    <View style={styles.colortabview}>
                        {this.colortabView()}
                    </View>
                    <View style={styles.shildview}>
                        {woodShild(this.state.order, this.state.errorcount)}
                        <View style={styles.textview}>
                            {text(this.state.order, this.state.textcolor1, this.state.textcolor2, this.state.textcolor3, this.state.text1, this.state.text2, this.state.text3)}
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <Animatable.View
                            style={styles.backtab} animation="slideInDown" duration={1000} delay={1000}
                            easing={"linear"} useNativeDriver={true}>
                            <TouchableOpacity onPress={this.exitPress}>
                                <View>
                                    <Image
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
        height: '100%',
    },
    colortab: {
        width: width/6.5,
        height: height/2.9,
        backgroundColor: 'white',
        borderRightColor: '#808080',
        borderRightWidth: 3,
        borderTopRightRadius: 4,
        borderTopColor: '#808080',
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    paint: {
        backgroundColor: '#F1F1F1',
        width: width/1.80,
        height: height/1.70,
        borderColor: 'black',
        borderWidth: 4,
        marginBottom: height/6,
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
        bottom:-height/1.16,
        position: 'absolute',
        width:width,
        height:height,
    },
    colors: {
        width: width/14,
        height: height/5.9,
    },
    bunny: {
        width: width/6,
        height: height/2.3,
        position:'absolute',
        marginLeft:width/3.2,
        marginTop:height/2.5
    },
});
