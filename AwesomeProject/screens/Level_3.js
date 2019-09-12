import React, {Component} from 'react';
import {Alert, Animated, Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import {woodShild} from "../components/woodShild3";
import {text} from "../components/text3";
import {starfall} from "../components/starfall1";
import {pictureselector} from "../components/pictureselector3";
import {preloadImages} from "../components/preloadimages";

var RNFS = require('react-native-fs');
const timer = require('react-native-timer');

var {width, height} = Dimensions.get('window')

export default class Level_3 extends Component {
    ismounted_Level3 = false
    constructor(props) {
        super(props)

        this.state = {
            dominantcolor_rgba: null,
            drawcolor: '#F1F1F1',
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg',
            colorpanel: new Animated.Value(-90),
            backpanel: new Animated.Value(-90),
            order:0,
            mixselected: false,
            firstselected: false,
            secondselected: false,
            dominantcolor: '',
            fadeanimationout: new Animated.Value(1),
            fadeanimationin: new Animated.Value(0),
            opacity : new Animated.Value(0),
            ScaleValue1 : new Animated.Value(0),
            ScaleValue2 : new Animated.Value(1),
            text1:"X",
            text2:"XX",
            text3:"XXX",
            textcolor1:'#0000FF',
            textcolor2:'#FFFF00',
            textcolor3:'#00FF00',
            ordercount:0,
            errorcount:0
        }
    }
    componentWillMount() {
        // mount component
        this.ismounted_Level3 = true;
    }
    async componentDidMount() {

        this.updatetext()




    }
    componentWillUnmount() {
        //unmount component
        this.ismounted_Level3 = false;
        timer.clearTimeout(this);
        timer.clearInterval(this);


    }

// update Text on woodShild
    updatetext(){
        if (this.props.navigation.state.params.language===false){
            switch(this.state.order) {
                case 0: case 2:
                    this.setState({text1: "Blau",text2: "Gelb", text3: "Grün", textcolor1: '#0000FF', textcolor2: '#FFFF00', textcolor3: '#00FF00'})
                    break;
                case 4: case 6:
                    this.setState({text1: "Rot",text2: "Blau", text3: "Lila", textcolor1: '#FF0000', textcolor2: '#0000FF', textcolor3: '#9D00FF'})
                    break;
                case 8: case 10:
                    this.setState({text1: "Rot",text2: "Grün", text3: "Braun", textcolor1: '#FF0000', textcolor2: '#00FF00', textcolor3: '#A52A2A'})
                    break;
                case 12: case 14:
                    this.setState({text1: "Rot",text2: "Gelb", text3: "Orange", textcolor1: '#FF0000', textcolor2: '#FFFF00', textcolor3: '#FFA500'})
                    break;
                case 16: case 18:
                    this.setState({text1: "Grün",text2: "Lila", text3: "Türkis", textcolor1: '#00FF00', textcolor2: '#9D00FF', textcolor3: '#00FFFF'})
                    break;
            }
        } else {
            switch(this.state.order) {
                case 0: case 2:
                    this.setState({text1: "blue",text2: "yellow", text3: "green", textcolor1: '#0000FF', textcolor2: '#FFFF00', textcolor3: '#00FF00'})
                    break;
                case 4: case 6:
                    this.setState({text1: "red",text2: "blue", text3: "purple", textcolor1: '#FF0000', textcolor2: '#0000FF', textcolor3: '#9D00FF'})
                    break;
                case 8: case 10:
                    this.setState({text1: "red",text2: "green", text3: "brown", textcolor1: '#FF0000', textcolor2: '#00FF00', textcolor3: '#A52A2A'})
                    break;
                case 12: case 14:
                    this.setState({text1: "red",text2: "yellow", text3: "orange", textcolor1: '#FF0000', textcolor2: '#FFFF00', textcolor3: '#FFA500'})
                    break;
                case 16: case 18:
                    this.setState({text1: "green",text2: "purple", text3: "cyan", textcolor1: '#00FF00', textcolor2: '#9D00FF', textcolor3: '#00FFFF'})
                    break;
            }
        }
    }
// update order depending on dominant color and set the different states
    updateorder(){
        switch (this.state.order) {
            case 0:
            case 2:
                if (this.state.dominantcolor === 'green') {
                    this.setState({mixselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'2',() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.updatetext()
                        if (this.state.order === 50)
                            timer.setTimeout(this,'21',() => {
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 4:
            case 6:
                if (this.state.dominantcolor === 'purple') {
                    this.setState({mixselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'6',() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.updatetext()
                        if (this.state.order === 50)
                            timer.setTimeout(this,'61',() => {
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 8:
            case 10:
                if (this.state.dominantcolor === 'brown') {
                    this.setState({mixselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'10',() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.updatetext()
                        if (this.state.order === 50)
                            timer.setTimeout(this,'101',() => {
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 12:
            case 14:
                if (this.state.dominantcolor === 'orange') {
                    this.setState({mixselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'14',() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.updatetext()
                        if (this.state.order === 50)
                            timer.setTimeout(this,'141',() => {
                                this.props.navigation.navigate('Level_Selection')
                            }, 5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 16:
            case 18:
                if (this.state.dominantcolor === 'cyan') {
                    this.setState({mixselected: false, errorcount: 0, drawcolor: '#F1F1F1',firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'18',() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.updatetext()
                        timer.setTimeout(this,'181',() => {
                            this.props.navigation.navigate('Level_Selection')
                        }, 5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
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

    first(){
        switch (this.state.order) {
            case 0:
            case 1:
            case 2:
            case 3:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FFFF00'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#0000FF',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/blue.webp')}/>
                    </TouchableOpacity>
                }
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#0000FF'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FF0000',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/red.webp')}/>
                    </TouchableOpacity>
                }
                break;
            case 8:
            case 9:
            case 10:
            case 11:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#00FF00'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FF0000',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/red.webp')}/>
                    </TouchableOpacity>
                }
                break;
            case 12:
            case 13:
            case 14:
            case 15:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FFFF00'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/red_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#FF0000',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/red.webp')}/>
                    </TouchableOpacity>
                }
                break;
            case 16:
            case 17:
            case 18:
            case 19:
                if (this.state.firstselected === true){
                    if(this.state.secondselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#9D00FF'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected,drawcolor:'#00FF00',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/green.webp')}/>
                    </TouchableOpacity>
                }
                break;
        }
    }

    second() {

        switch (this.state.order) {
            case 0:
            case 1:
            case 2:
            case 3:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#0000FF'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/yellow_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/yellow_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FFFF00',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/yellow.webp')}/>
                    </TouchableOpacity>
                }
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FF0000'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/blue_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#0000FF',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/blue.webp')}/>
                    </TouchableOpacity>
                }
                break;
            case 8:
            case 9:
            case 10:
            case 11:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FF0000'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#00FF00',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/green.webp')}/>
                    </TouchableOpacity>
                }
                break;
            case 12:
            case 13:
            case 14:
            case 15:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FF0000'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/yellow_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/yellow_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#FFFF00',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/yellow.webp')}/>
                    </TouchableOpacity>
                }
                break;
            case 16:
            case 17:
            case 18:
            case 19:
                if (this.state.secondselected === true){
                    if(this.state.firstselected === true){
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#00FF00'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/purple_selected.webp')}/>
                        </TouchableOpacity>
                    }else {
                        return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={styles.colors}
                                       source={require('../assets/colors/purple_selected.webp')}/>
                        </TouchableOpacity>
                    }
                } else {
                    return <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected,drawcolor:'#9D00FF',mixselected:false})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/colors/purple.webp')}/>
                    </TouchableOpacity>
                }
                break;
        }
    }
    mix(){
        if(this.state.firstselected === true && this.state.secondselected === true){
            switch (this.state.order) {
                case 0:
                case 1:
                case 2:
                case 3:
                    if (this.state.mixselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/green_selected.webp')}/>
                        </TouchableOpacity>
                    return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#00FF00'})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/green.webp')}/>
                    </TouchableOpacity>
                case 4:
                case 5:
                case 6:
                case 7:
                    if (this.state.mixselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/purple_selected.webp')}/>
                        </TouchableOpacity>
                    return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#9D00FF'})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/purple.webp')}/>
                    </TouchableOpacity>
                case 8:
                case 9:
                case 10:
                case 11:
                    if (this.state.mixselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/brown_selected.webp')}/>
                        </TouchableOpacity>
                    return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#A52A2A'})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/brown.webp')}/>
                    </TouchableOpacity>
                case 12:
                case 13:
                case 14:
                case 15:
                    if (this.state.mixselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/orange_selected.webp')}/>
                        </TouchableOpacity>
                    return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#FFA500'})
                        this.refs.sketchRef.clear()}}>
                        <FastImage style={styles.colors}
                                   source={require('../assets/mixed_colors/orange.webp')}/>
                    </TouchableOpacity>
                case 16:
                case 17:
                case 18:
                case 19:
                    if (this.state.mixselected === true)
                        return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#F1F1F1'})
                            this.refs.sketchRef.clear()}}>
                            <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                       source={require('../assets/mixed_colors/cyan_selected.webp')}/>
                        </TouchableOpacity>
                    return <TouchableOpacity onPress={() => { this.setState({mixselected:!this.state.mixselected, drawcolor:'#00FFFF'})
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

    colortabView(){
        switch(this.state.order){
            case 0: case 4: case 8: case 12: case 16:
                return  <Animatable.View style={styles.colortab} animation={{
                    from:{left:-120},
                    to:{left:0}
                }} duration={1000} easing={"linear"}>

                    {this.first()}


                    {this.second()}

                    {this.mix()}
                </Animatable.View>
            case 3: case 7: case 11: case 15: case 19:
                return  <Animatable.View style={styles.colortab} animation={{
                    from:{left:0},
                    to:{left:-120}
                }} duration={1000} easing={"linear"}>
                    <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected})
                        this.refs.sketchRef.clear()}}>
                        {this.first()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected})
                        this.refs.sketchRef.clear()}}>
                        {this.second()}
                    </TouchableOpacity>
                    {this.mix()}
                </Animatable.View>
            case 1: case 2: case 5: case 6: case 9: case 10: case 13: case 14: case 17: case 18: case 21: case 22: case 25: case 26: case 29: case 30: case 33: case 34:
                return  <View style={styles.colortab}>
                    <TouchableOpacity onPress={() => { this.setState({firstselected:!this.state.firstselected})
                        this.refs.sketchRef.clear()}}>
                        {this.first()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({secondselected:!this.state.secondselected})
                        this.refs.sketchRef.clear()}}>
                        {this.second()}
                    </TouchableOpacity>
                    {this.mix()}
                </View>
        }

    }
//<Text>order:{this.state.order}</Text>
    render() {
        if (this.ismounted_Level3 === true) {
            return (
                <ImageBackground source={require('../assets/other/Level1.webp')} style={styles.background}>
                    <View pointerEvents="none">
                        <FastImage source={require('../assets/other/Level_Selection_front2.webp')}
                                   style={styles.font2_gras}/>
                    </View>
                    <ViewShot style={styles.paint} ref="viewShot"
                              options={{format: "jpg", quality: 1.0, result: "base64"}}>
                        <SketchCanvas
                            ref="sketchRef"
                            style={{flex: 1}}
                            strokeWidth={40}
                            strokeColor={this.state.drawcolor}
                            onStrokeEnd={() => {
                                this.makeScreenshot()
                            }}
                        />
                    </ViewShot>
                    <View pointerEvents="none"
                          style={[styles.pictures, {position: 'absolute'}, {left: width / 2 - 197}, {top: height / 2 - 152}]}>
                        {pictureselector(this.state.order)}
                        {starfall(this.state.order)}
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
                    <View style={styles.backtabview}>
                        <Animatable.View
                            style={styles.backtab} animation="slideInDown" duration={1000} delay={1000}
                            easing={"linear"} useNativeDriver={true}>
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('Level_Selection')}>
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
        height: '100%',

    },
    colortab: {
        width: 120,
        height: 160,
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
    bunny: {
        top:105,
        left:520,
        position: 'absolute',



    },
    font2_gras: {
        right:-width/2,
        bottom:-height/1.18,
        position: 'absolute',
        width:width,
        height:height,

    },
    colors: {
        width: 55,
        height: 77,
    }
});
