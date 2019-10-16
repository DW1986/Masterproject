import React, {Component} from 'react';
import {Dimensions,Image,ImageBackground,StyleSheet,TouchableOpacity,View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import {colorselector} from "../components/colorselector1";
import {woodShild} from "../components/woodShild1";
import {text} from "../components/text1";
import {starfall} from "../components/starfall1234";
import {pictureselector} from "../components/pictureselector12";

const {width, height} = Dimensions.get('window');
const timer = require('react-native-timer');
const RNFS = require('react-native-fs');
const Sound = require('react-native-sound');

const red_ger = new Sound('red_ger.m4a', Sound.MAIN_BUNDLE);
const red_eng = new Sound('red_eng.m4a', Sound.MAIN_BUNDLE);
const blue_ger = new Sound('blue_ger.m4a', Sound.MAIN_BUNDLE);
const blue_eng = new Sound('blue_eng.m4a', Sound.MAIN_BUNDLE);
const green_ger = new Sound('green_ger.m4a', Sound.MAIN_BUNDLE);
const green_eng = new Sound('green_eng.m4a', Sound.MAIN_BUNDLE);
const yellow_ger = new Sound('yellow_ger.m4a', Sound.MAIN_BUNDLE);
const yellow_eng = new Sound('yellow_eng.m4a', Sound.MAIN_BUNDLE);
const pink_ger_eng = new Sound('pink_ger_eng.m4a', Sound.MAIN_BUNDLE);
const brown_ger = new Sound('brown_ger.m4a', Sound.MAIN_BUNDLE);
const brown_eng = new Sound('brown_eng.m4a', Sound.MAIN_BUNDLE);
const purple_ger = new Sound('purple_ger.m4a', Sound.MAIN_BUNDLE);
const purple_eng = new Sound('purple_eng.m4a', Sound.MAIN_BUNDLE);
const orange_ger = new Sound('orange_ger.m4a', Sound.MAIN_BUNDLE);
const orange_eng = new Sound('orange_eng.m4a', Sound.MAIN_BUNDLE);
const cyan_ger = new Sound('cyan_ger.m4a', Sound.MAIN_BUNDLE);
const cyan_eng = new Sound('cyan_eng.m4a', Sound.MAIN_BUNDLE);
const level_1_intro = new Sound('level_1_intro.m4a', Sound.MAIN_BUNDLE);
const exit_lvl = new Sound('exit_lvl.m4a', Sound.MAIN_BUNDLE);
const error_time_select = new Sound('error_time_select.m4a', Sound.MAIN_BUNDLE);
const error_time_color = new Sound('error_time_color.m4a', Sound.MAIN_BUNDLE);
const success_01 = new Sound('success_1.m4a', Sound.MAIN_BUNDLE);
const success_02 = new Sound('success_2.m4a', Sound.MAIN_BUNDLE);
const success_03 = new Sound('success_3.m4a', Sound.MAIN_BUNDLE);
const onTouch = new Sound('onTouch.m4a', Sound.MAIN_BUNDLE);


export default class Level_1 extends Component {
    ismounted_Level1 = false;

    constructor(props) {
        super(props);
        this.state = {
            dominantcolor_rgba: null,
            drawcolor: '#F1F1F1',
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg',
            order:0,
            colorselected: false,
            dominantcolor: 'white',
            text:"XX",
            textcolor:'#FF0000',
            bunny_order:1,
            bunny_anim:3,
            rdm:0,
            disableButton_bunny:true,
            exit:0,
            err_time_select:0,
            err_time_color:0,
            start:1,
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
        this.ismounted_Level1 = true;
    }

    componentDidMount() {
        // update text on woodshild
        this.updatetext();
        this.animbunny();
        // set interval for two errors over time
        this.errorIntervall()

    }

    componentWillUnmount() {
        //unmount component
        this.ismounted_Level1 = false;
        // clear all timer and interval

       // timer.intervalExists(this);
        timer.clearTimeout(this);
        timer.clearInterval(this)
    }
    errorIntervall(){
        timer.setInterval(this,'error',
            () => {
                if(this.state.colorselected===false){
                    this.setState({bunny_order:3,err_time_select:1,err_time_color:0})
                }
                else if(this.state.dominantcolor==="white" && this.state.colorselected===true){
                    this.setState({bunny_order:3,err_time_select:0,err_time_color:1})
                }
            },40000)
    }
    //Change drawcolor when selected
    changedrawcolor() {
        if (this.state.order <= 3 && this.state.colorselected === true)
            this.setState({drawcolor: '#FF0000'});
        else if (this.state.order >= 4 && this.state.order <= 7 && this.state.colorselected === true)
            this.setState({drawcolor: '#0000FF'});
        else if (this.state.order >= 8 && this.state.order <= 11 && this.state.colorselected === true)
            this.setState({drawcolor: '#00FF00'});
        else if (this.state.order >= 12 && this.state.order <= 15 && this.state.colorselected === true)
            this.setState({drawcolor: '#FFFF00'});
        else if (this.state.order >= 16 && this.state.order <= 19 && this.state.colorselected === true)
            this.setState({drawcolor: '#FF1694'});
        else if (this.state.order >= 20 && this.state.order <= 23 && this.state.colorselected === true)
            this.setState({drawcolor: '#A52A2A'});
        else if (this.state.order >= 24 && this.state.order <= 27 && this.state.colorselected === true)
            this.setState({drawcolor: '#9d00ff'});
        else if (this.state.order >= 28 && this.state.order <= 31 && this.state.colorselected === true)
            this.setState({drawcolor: '#FFA500'});
        else if (this.state.order >= 32 && this.state.order <= 35 && this.state.colorselected === true)
            this.setState({drawcolor: '#00FFFF'});
        else if (this.state.colorselected === false)
            this.setState({drawcolor: '#F1F1F1'});
    }
    // update Text on woodShild depending on order and language
    updatetext(){
        if (this.props.navigation.state.params.language===false){
            switch(this.state.order) {
                case 0:
                    this.setState({text: "Rot", textcolor: '#FF0000'});
                    break;
                case 3:
                    timer.setTimeout(this,'blau',() =>
                            this.setState({text: "Blau", textcolor: '#0000FF'})
                    ,3000);
                    break;
                case 7:
                    timer.setTimeout(this,'grün',() =>
                            this.setState({text: "Grün", textcolor: '#00FF00'})
                    ,3000);
                    break;
                case 11:
                    timer.setTimeout(this,'gelb',() =>
                            this.setState({text: "Gelb", textcolor: '#FFFF00'})
                     ,3000);
                    break;
                case 15:
                    timer.setTimeout(this,'pink',() =>
                            this.setState({text: "Pink", textcolor: '#FF1694'})
                    ,3000);
                    break;
                case 19:
                    timer.setTimeout(this,'braun',() =>
                            this.setState({text: "Braun", textcolor: '#A52A2A'})
                    ,3000);
                    break;
                case 23:
                    timer.setTimeout(this,'lila',() =>
                            this.setState({text: "Lila", textcolor: '#9D00FF'})
                     ,3000);
                    break;
                case 27:
                    timer.setTimeout(this,'orange',() =>
                            this.setState({text: "Orange", textcolor: '#FFA500'})
                    ,3000);
                    break;
                case 31:
                    timer.setTimeout(this,'türkis',() =>
                            this.setState({text: "Türkis", textcolor: '#00FFFF'})
                    ,3000);
                    break;
            }
        } else {
            switch(this.state.order) {
                case 0:
                    this.setState({text: "red", textcolor: '#FF0000'});
                    break;
                case 3:
                    timer.setTimeout(this,'blue',() =>
                            this.setState({text: "blue", textcolor: '#0000FF'})
                    ,3000);
                    break;
                case 7:
                    timer.setTimeout(this,'green',() =>
                            this.setState({text: "green", textcolor: '#00FF00'})
                    ,3000);
                    break;
                case 11:
                    timer.setTimeout(this,'yellow',() =>
                            this.setState({text: "yellow", textcolor: '#FFFF00'})
                    ,3000);
                    break;
                case 15:
                    timer.setTimeout(this,'pink',() =>
                            this.setState({text: "pink", textcolor: '#FF1694'})
                    ,3000);
                    break;
                case 19:
                    timer.setTimeout(this,'brown',() =>
                            this.setState({text: "brown", textcolor: '#A52A2A'})
                    ,3000);
                    break;
                case 23:
                    timer.setTimeout(this,'purple',() =>
                            this.setState({text: "purple", textcolor: '#9D00FF'})
                    ,3000);
                    break;
                case 27:
                    timer.setTimeout(this,'orange',() =>
                            this.setState({text: "orange", textcolor: '#FFA500'})
                    ,3000);
                    break;
                case 31:
                    timer.setTimeout(this,'cyan',() =>
                            this.setState({text: "cyan", textcolor: '#00FFFF'})
                    ,3000);
                    break;
            }
        }
    }
    // update order depending on dominant color and set the different states
    updateorder() {
        switch (this.state.dominantcolor) {
            case 'red':
                if(this.state.order === 0) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 1,drawcolor: '#F1F1F1',colorselected: false});
                    timer.setTimeout(this,'order_red',() => {
                        this.setState({order: 2,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 3,colorselected: false,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    timer.setTimeout(this,'order_red2',() => {
                        this.setState({order: 4,bunny_order:3})

                    }, 4000)
                }
            break;
            case 'blue':
                if(this.state.order === 4) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 5,colorselected: false,drawcolor: '#F1F1F1'});
                    timer.setTimeout(this,'order_blue',() => {
                        this.setState({order: 6,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 7,colorselected: false,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    timer.setTimeout(this,'order_blue2',() => {
                        this.setState({order: 8,played:0,bunny_order:3})
                    }, 4000)
                }
                break;
            case 'green':
                if(this.state.order === 8) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 9,colorselected: false,drawcolor: '#F1F1F1'});
                    timer.setTimeout(this,'order_green',() => {
                        this.setState({order: 10,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 11,colorselected: false,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    timer.setTimeout(this,'order_green2',() => {
                        this.setState({order: 12,played:0,bunny_order:3})
                    }, 4000)
                }
                break;
            case 'yellow':
                if(this.state.order === 12) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 13,colorselected: false,drawcolor: '#F1F1F1'});
                    timer.setTimeout(this,'order_yellow',() => {
                        this.setState({order: 14,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 15,colorselected: false,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    timer.setTimeout(this,'order_yellow2',() => {
                        this.setState({order: 16,played:0,bunny_order:3})
                    }, 4000)
                }
                break;
            case 'pink':
                if(this.state.order === 16) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 17,colorselected: false,drawcolor: '#F1F1F1'});
                    timer.setTimeout(this,'order_pink',() => {
                        this.setState({order: 18,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 19,colorselected: false,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    timer.setTimeout(this,'order_pink2',() => {
                        this.setState({order: 20,played:0,bunny_order:3})
                    }, 4000)
                }
                break;
            case 'brown':
                if(this.state.order === 20) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 21,colorselected: false,drawcolor: '#F1F1F1'});
                    timer.setTimeout(this,'order_brown',() => {
                        this.setState({order: 22,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 23,colorselected: false,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    timer.setTimeout(this,'order_brown2',() => {
                        this.setState({order: 24,played:0,bunny_order:3})
                    }, 4000)
                }
                break;
            case 'purple':
                if(this.state.order === 24) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 25,colorselected: false,drawcolor: '#F1F1F1'});
                    timer.setTimeout(this,'order_purple',() => {
                        this.setState({order: 26,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 27,colorselected: false,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    timer.setTimeout(this,'order_purple2',() => {
                        this.setState({order: 28,played:0,bunny_order:3})
                    }, 4000)
                }
                break;
            case 'orange':
                if(this.state.order === 28) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 29,colorselected: false,drawcolor: '#F1F1F1'});
                    timer.setTimeout(this,'order_orange',() => {
                        this.setState({order: 30,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 31,colorselected: false,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    timer.setTimeout(this,'order_orange2',() => {
                        this.setState({order: 32,played:0,bunny_order:3})
                    }, 4000)
                }
                break;
            case 'cyan':
                if(this.state.order === 32) {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 33,colorselected: false,drawcolor: '#F1F1F1'});
                    timer.setTimeout(this,'order_cyan',() => {
                        this.setState({order: 34,played:0,dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.rdm(3);
                    timer.clearInterval(this);
                    this.errorIntervall();
                    this.setState({bunny_order:2,order: 35,colorselected: false, played:0,drawcolor: '#F1F1F1'});
                    this.updatetext();
                    setTimeout(() => {
                        this.setState({played:1,bunny_order:5});
                        timer.setTimeout(this,'order_cyan2',() => {
                            this.props.navigation.navigate('Level_Selection')
                        },5000)
                    }, 5700)
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
    // animate color tab in and out when new color depending on order
    colortabview(){
        switch(this.state.order){
            case 0: case 4: case 8: case 12: case 16: case 20: case 24: case 28: case 32:
                return <Animatable.View
                            style={styles.colortab} animation={{
                                from:{left:-width/7.0},
                                to:{left:0}
                            }} duration={1000} easing={"linear"}>
                            <TouchableOpacity onPress={() => {
                                this.setState({colorselected:!this.state.colorselected},this.changedrawcolor);
                                this.refs.sketchRef.clear()}}>
                                {colorselector(this.state.order,this.state.colorselected)}
                            </TouchableOpacity>
                        </Animatable.View>;
            case 3: case 7: case 11: case 15: case 19: case 23: case 27: case 31: case 35:
                return <Animatable.View
                            style={styles.colortab} animation={{
                                from:{left:0},
                                to:{left:-width/7.0}
                            }} duration={1000} easing={"linear"}>
                            <TouchableOpacity onPress={() => {
                                this.setState({colorselected:!this.state.colorselected},this.changedrawcolor);
                                this.refs.sketchRef.clear()}}>
                                {colorselector(this.state.order,this.state.colorselected)}
                            </TouchableOpacity>
                        </Animatable.View>;
            case 1: case 2: case 5: case 6: case 9: case 10: case 13: case 14: case 17: case 18: case 21: case 22: case 25: case 26: case 29: case 30: case 33: case 34:
                return <View style={styles.colortab}>
                            <TouchableOpacity onPress={() => {
                                this.setState({colorselected:!this.state.colorselected},this.changedrawcolor);
                                this.refs.sketchRef.clear()}}>
                                {colorselector(this.state.order,this.state.colorselected)}
                            </TouchableOpacity>
                      </View>
        }
    }
    // get rdm number for idle-bunny_order and success-bunny_order bunny
    rdm(max) {
        this.setState({rdm:Math.floor(Math.random() * Math.floor(max))})
    }
    // control the different animations of bunny
    animbunny(){
        switch (this.state.bunny_anim) {
            // idle02-bunny_order
            case 0:
                this.rdm(2);
                timer.setTimeout(this, 'idle_02_2a', () => {
                    this.setState({opacity0: 1})
                }, 5500);
                timer.setTimeout(this, 'idle_02_2b', () => {
                    this.setState({opacity0: 0})
                }, 6500);
                    timer.setTimeout(this, 'idle_02_1', () => {
                        switch (this.state.bunny_order) {
                            case 1:
                                if (this.state.rdm === 0) {
                                    this.setState({bunny_anim: 1, disableButton_bunny: false});
                                    this.animbunny()
                                } else {
                                    this.setState({bunny_anim: 2, disableButton_bunny: false});
                                    this.animbunny()
                                }
                                break;
                            case 2:
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
                        }
                    }, 6000);
            break;
            // idle01-bunny_order
            case 1:
                timer.setTimeout(this, 'idle_01_a', () => {
                    this.setState({opacity0: 1})
                }, 3500);
                timer.setTimeout(this, 'idle_01_b', () => {
                    this.setState({opacity0: 0})
                }, 4500);
                timer.setTimeout(this, 'idle_01', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            this.setState({bunny_anim: 0, disableButton_bunny: false});
                            this.animbunny();
                            break;
                        case 2:
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
                    }
                }, 4000);

            break;
            // idle03-bunny_order
            case 2:
                timer.setTimeout(this, 'idle_03_a', () => {
                    this.setState({opacity0: 1})
                }, 4000);
                timer.setTimeout(this, 'idle_03_b', () => {
                    this.setState({opacity0: 0})
                }, 5000);
                timer.setTimeout(this, 'idle_03', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            this.setState({bunny_anim: 0, disableButton_bunny: false});
                            this.animbunny();
                            break;
                        case 2:
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
                    }
                }, 4500);
            break;
            // speak-bunny_order (intro)
            case 3:
                this.setState({bunny_order:1});
                 timer.setTimeout(this, 'sound_intro', () => {
                     level_1_intro.play()
                 }, 500);
                 timer.setTimeout(this, 'speak_intro_a', () => {
                     this.setState({opacity0: 1})
                 }, 6500);
                 timer.setTimeout(this, 'speak_intro_b', () => {
                     this.setState({opacity0: 0})
                 }, 7500);
                 timer.setTimeout(this, 'speak_intro', () => {
                     switch (this.state.bunny_order) {
                         case 1:
                            this.setState({bunny_anim: 0, disableButton_bunny: false});
                            this.animbunny();
                            break;
                         case 2:
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
                     }
                 }, 7000);
            break;
            // onTouch-bunny_order
            case 4:
                this.setState({bunny_order:1});
                timer.setTimeout(this, 'sound_onTouch', () => {
                     onTouch.play()
                }, 1000);
                timer.setTimeout(this, 'onTouch_a', () => {
                    this.setState({opacity0: 1})
                }, 4000);
                timer.setTimeout(this, 'onTouch_b', () => {
                    this.setState({opacity0: 0})
                }, 5000);
                timer.setTimeout(this, 'onTouch', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            this.setState({bunny_anim: 0, disableButton_bunny: false});
                            this.animbunny();
                            break;
                        case 2:
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
                    }
                }, 4500);
            break;
            //success_01-bunny_order
            case 5:
                this.setState({bunny_order:1});
                timer.setTimeout(this, 'sound_success_01', () => {
                    success_01.play()
                }, 1000);
                timer.setTimeout(this, 'success_01_a', () => {
                    this.setState({opacity0: 1})
                }, 4500);
                timer.setTimeout(this, 'success_01_b', () => {
                    this.setState({opacity0: 0})
                }, 5500);
                timer.setTimeout(this, 'success_01', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            this.setState({bunny_anim: 0, disableButton_bunny: false});
                            this.animbunny();
                            break;
                        case 2:
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
                    }
                }, 5000);
            break;
            //success_02-bunny_order
            case 6:
                this.setState({bunny_order:1});
                timer.setTimeout(this, 'sound_success_02', () => {
                    success_02.play()
                }, 500);
                timer.setTimeout(this, 'success_02_a', () => {
                    this.setState({opacity0: 1})
                }, 3000);
                timer.setTimeout(this, 'success_02_b', () => {
                    this.setState({opacity0: 0})
                }, 4000);
                timer.setTimeout(this, 'success_02', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            this.setState({bunny_anim: 0, disableButton_bunny: false});
                            this.animbunny();
                            break;
                        case 2:
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
                    }
                }, 3500);
            break;
            //success_03-bunny_order
            case 7:
                this.setState({bunny_order:1});
                timer.setTimeout(this, 'sound_success_03', () => {
                    success_03.play()
                }, 1000);
                timer.setTimeout(this, 'success_03_a', () => {
                    this.setState({opacity0: 1})
                }, 4500);
                timer.setTimeout(this, 'success_03_b', () => {
                    this.setState({opacity0: 0})
                }, 5500);
                timer.setTimeout(this, 'success_03', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            this.setState({bunny_anim: 0, disableButton_bunny: false});
                            this.animbunny();
                            break;
                        case 2:
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
                    }
                }, 5000);
            break;
            // speak colors + errors
            case 8:
                this.setState({bunny_order:1});
                    if (this.state.err_time_select === 1) {
                            timer.setTimeout(this, 'sound_error_time_select', () => {
                            error_time_select.play()
                        }, 800);
                    } else if (this.state.err_time_color === 1) {
                            timer.setTimeout(this, 'sound_error_time_color', () => {
                            error_time_color.play()
                        }, 800);
                    } else {
                        if(this.props.navigation.state.params.language===false){
                            switch (this.state.order) {
                                case 0:
                                    timer.setTimeout(this, 'red_ger', () => {
                                        red_ger.play()
                                    }, 1000);
                                    break;
                                case 4:
                                    timer.setTimeout(this, 'blue_ger', () => {
                                        blue_ger.play()
                                    }, 1000);
                                    break;
                                case 8:
                                    timer.setTimeout(this, 'green_ger', () => {
                                        green_ger.play()
                                    }, 1000);
                                    break;
                                case 12:
                                    timer.setTimeout(this, 'yellow_ger', () => {
                                        yellow_ger.play()
                                    }, 1000);
                                    break;
                                case 16:
                                    timer.setTimeout(this, 'pink_ger', () => {
                                        pink_ger_eng.play()
                                    }, 1000);
                                    break;
                                case 20:
                                    timer.setTimeout(this, 'brown_ger', () => {
                                        brown_ger.play()
                                    }, 1000);
                                    break;
                                case 24:
                                    timer.setTimeout(this, 'purple_ger', () => {
                                        purple_ger.play()
                                    }, 1000);
                                    break;
                                case 28:
                                    timer.setTimeout(this, 'orange_ger', () => {
                                        orange_ger.play()
                                    }, 1000);
                                    break;
                                case 32:
                                    timer.setTimeout(this, 'cyan_ger', () => {
                                        cyan_ger.play()
                                    }, 1000);
                                    break;
                            }
                        }else {
                            switch (this.state.order) {
                                case 0:
                                    timer.setTimeout(this, 'red_eng', () => {
                                        red_eng.play()
                                    }, 1000);
                                    break;
                                case 4:
                                    timer.setTimeout(this, 'blue_eng', () => {
                                        blue_eng.play()
                                    }, 1000);
                                    break;
                                case 8:
                                    timer.setTimeout(this, 'green_eng', () => {
                                        green_eng.play()
                                    }, 1000);
                                    break;
                                case 12:
                                    timer.setTimeout(this, 'yellow_eng', () => {
                                        yellow_eng.play()
                                    }, 1000);
                                    break;
                                case 16:
                                    timer.setTimeout(this, 'pink_eng', () => {
                                        pink_ger_eng.play()
                                    }, 1000);
                                    break;
                                case 20:
                                    timer.setTimeout(this, 'brown_eng', () => {
                                        brown_eng.play()
                                    }, 1000);
                                    break;
                                case 24:
                                    timer.setTimeout(this, 'purple_eng', () => {
                                        purple_eng.play()
                                    }, 1000);
                                    break;
                                case 28:
                                    timer.setTimeout(this, 'orange_eng', () => {
                                        orange_eng.play()
                                    }, 1000);
                                    break;
                                case 32:
                                    timer.setTimeout(this, 'cyan_eng', () => {
                                        cyan_eng.play()
                                    }, 1000);
                                    break;
                        }
                    }
                }
                timer.setTimeout(this, 'speak_color_a', () => {
                    this.setState({opacity0: 1})
                }, 3500);
                timer.setTimeout(this, 'speak_color_b', () => {
                    this.setState({opacity0: 0})
                }, 4500);
                timer.setTimeout(this, 'speak_color', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            this.setState({bunny_anim: 0, disableButton_bunny: false});
                            this.animbunny();
                            break;
                        case 2:
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
                    }
                }, 4000);
            break;
            //speak exit
            case 9:
                this.setState({bunny_order:1});
                timer.setTimeout(this, 'exit_lvl', () => {
                    exit_lvl.play();
                    this.setState({exit: 0});
                    timer.clearInterval(this)
                }, 1000);
                timer.setTimeout(this, 'navigate', () => {
                    this.props.navigation.navigate('Level_Selection')
                }, 4000);
                break;
        }
    }
    // render bunny depending on bunny_order
    renderbunny() {
        switch(this.state.bunny_anim) {
            case 0:
                return <View>
                            <Image
                            source={require('../assets/bunny/idle_02.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 1:
                return <View>
                            <Image
                            source={require('../assets/bunny/idle_01.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 2:
                return <View>
                            <Image
                            source={require('../assets/bunny/idle_03.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 3:
                return <View>
                            <Image
                            source={require('../assets/bunny/speak_05.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 4:
                return <View>
                            <Image
                            source={require('../assets/bunny/onTouch.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 5:
                return <View>
                            <Image
                            source={require('../assets/bunny/success_01.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 6:
                return <View>
                            <Image
                            source={require('../assets/bunny/success_02.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 7:
                return <View>
                            <Image
                            source={require('../assets/bunny/success_03.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 8:
                return <View>
                            <Image
                            source={require('../assets/bunny/speak_03.gif')}
                            style={[styles.bunny]}/>
                       </View>;
            case 9:
                return <View>
                            <Image
                            source={require('../assets/bunny/speak_02.gif')}
                            style={[styles.bunny]}/>
                       </View>
        }
    }
    // Press function for exit
    exitPress = () => {
        this.setState({bunny_order:5, err_time_select: 0, err_time_color: 0, exit: 1})
    };
    renderTouch(){
        return <View>
                    <TouchableOpacity disabled={this.state.disableButton_bunny} style={[styles.bunny]} onPress={() =>
                        this.setState({bunny_order:4})}>
                    </TouchableOpacity>
                </View>
    }

    render() {
        if (this.ismounted_Level1 === true) {
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
                        <Image source={require('../assets/other/Level_Selection_front2.webp')}
                               style={styles.font2_gras}/>
                    </View>
                    <ViewShot style={styles.paint} ref="viewShot"
                              options={{format: "jpg", quality: 1.0, result: "base64"}}>
                        <SketchCanvas
                            ref="sketchRef"
                            style={{flex: 1}}
                            strokeWidth={40}
                            strokeColor={this.state.drawcolor}
                            onStrokeEnd={this.makeScreenshot}
                        />
                    </ViewShot>
                    <View pointerEvents="none"
                          style={{position: 'absolute'}}>
                        {pictureselector(this.state.order)}
                        {starfall(this.state.order)}
                    </View>
                    <View style={styles.colortabview}>
                        {this.colortabview()}
                    </View>
                    <View style={styles.shildview}>
                        {woodShild(this.state.order)}
                        <View style={styles.textview}>

                            {text(this.state.order, this.state.textcolor, this.state.text)}
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
                                        style={{width: 50, height: 40}}/>
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
        width: width/7,
        height: height/4,
        backgroundColor: 'white',
        borderRightColor: '#808080',
        borderRightWidth: 3,
        borderTopRightRadius: 4,
        borderTopColor: '#808080',
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute'
    },
    paint: {
        backgroundColor: '#F1F1F1',
        width: width/1.77,
        height: height/1.60,
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
        bottom:-height/1.14,
        position: 'absolute',
        width:width,
        height:height,
    },
    bunny: {
        width: width/6,
        height: height/2.3,
        position:'absolute',
        marginLeft:width/3.2,
        marginTop:height/2.5
    },

});
