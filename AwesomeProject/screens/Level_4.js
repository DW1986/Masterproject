import React, {Component} from 'react';
import {Alert, Animated, Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import {woodShild} from "../components/woodShild4";
import {text} from "../components/text4";
import {starfall} from "../components/starfall1";
import {pictureselector} from "../components/pictureselector3";



var RNFS = require('react-native-fs');
var shuffle = require('shuffle-array');
var {width, height} = Dimensions.get('window')

export default class Level_4 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dominantcolor_rgba: null,
            drawcolor: '#F1F1F1',
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg',
            colorpanel: new Animated.Value(-90),
            backpanel: new Animated.Value(-90),
            order:0,
            colorselected: '',
            mixselected:false,
            firstselected: false,
            secondselected: true,
            firstselectedcolor:'',
            secondselectedcolor:'',
            dominantcolor: '',
            fadeanimationout: new Animated.Value(1),
            fadeanimationin: new Animated.Value(0),
            opacity : new Animated.Value(0),
            ScaleValue1 : new Animated.Value(0),
            ScaleValue2 : new Animated.Value(1),
            text1:"XXX",
            text2:"XX",
            text3:"X",
            textcolor1:'#000000',
            textcolor2:'#000000',
            textcolor3:'#000000',
            ordercount:0,
            orderRDM:[[0,2],[4,6],[8,10],[12,14],[16,18]],
            orderRDM2:[[50,50]],
            errorcount:0
        }
    }


    async componentDidMount() {

        shuffle(this.state.orderRDM[0]);
        shuffle(this.state.orderRDM[1]);
        shuffle(this.state.orderRDM[2]);
        shuffle(this.state.orderRDM[3]);
        shuffle(this.state.orderRDM[4]);
        shuffle(this.state.orderRDM);
        this.state.orderRDM.push(...this.state.orderRDM2)
        //  console.log("New:",this.state.orderRDM)
        this.setState({order:this.state.orderRDM[this.state.ordercount][0]})
        this.updatetext()


    }


    componentWillUnmount() {

    }

    componentWillUpdate() {

    }

// update Text on woodShild
    updatetext(){
        if (this.props.navigation.state.params.language===false) {
            switch (this.state.order) {
                case 0:
                case 2:
                    this.setState({
                        text1: "Blau",
                        text2: "Gelb",
                        text3: "Grün",
                        textcolor1: '#0000FF',
                        textcolor2: '#FFFF00',
                        textcolor3: '#00FF00'
                    })
                    break;
                case 4:
                case 6:
                    this.setState({
                        text1: "Rot",
                        text2: "Blau",
                        text3: "Lila",
                        textcolor1: '#FF0000',
                        textcolor2: '#0000FF',
                        textcolor3: '#9D00FF'
                    })
                    break;
                case 8:
                case 10:
                    this.setState({
                        text1: "Rot",
                        text2: "Grün",
                        text3: "Braun",
                        textcolor1: '#FF0000',
                        textcolor2: '#00FF00',
                        textcolor3: '#A52A2A'
                    })
                    break;
                case 12:
                case 14:
                    this.setState({
                        text1: "Rot",
                        text2: "Gelb",
                        text3: "Orange",
                        textcolor1: '#FF0000',
                        textcolor2: '#FFFF00',
                        textcolor3: '#FFA500'
                    })
                    break;
                case 16:
                case 18:
                    this.setState({
                        text1: "Grün",
                        text2: "Lila",
                        text3: "Türkis",
                        textcolor1: '#00FF00',
                        textcolor2: '#9D00FF',
                        textcolor3: '#00FFFF'
                    })
                    break;
            }
        }else {
            switch (this.state.order) {
                case 0:
                case 2:
                    this.setState({
                        text1: "blue",
                        text2: "yellow",
                        text3: "green",
                        textcolor1: '#0000FF',
                        textcolor2: '#FFFF00',
                        textcolor3: '#00FF00'
                    })
                    break;
                case 4:
                case 6:
                    this.setState({
                        text1: "red",
                        text2: "blue",
                        text3: "purple",
                        textcolor1: '#FF0000',
                        textcolor2: '#0000FF',
                        textcolor3: '#9D00FF'
                    })
                    break;
                case 8:
                case 10:
                    this.setState({
                        text1: "red",
                        text2: "green",
                        text3: "brown",
                        textcolor1: '#FF0000',
                        textcolor2: '#00FF00',
                        textcolor3: '#A52A2A'
                    })
                    break;
                case 12:
                case 14:
                    this.setState({
                        text1: "red",
                        text2: "yellow",
                        text3: "orange",
                        textcolor1: '#FF0000',
                        textcolor2: '#FFFF00',
                        textcolor3: '#FFA500'
                    })
                    break;
                case 16:
                case 18:
                    this.setState({
                        text1: "green",
                        text2: "purple",
                        text3: "cyan",
                        textcolor1: '#00FF00',
                        textcolor2: '#9D00FF',
                        textcolor3: '#00FFFF'
                    })
                    break;
            }
        }
    }
// update order depending on dominant color and set the different states
        updateorder(){
            switch (this.state.orderRDM[this.state.ordercount][0]) {
                case 0:
                case 2:
                    if (this.state.dominantcolor === 'green') {
                        this.setState({mixselected: false,errorcount:0, drawcolor: '#F1F1F1',firstselectedcolor:'',secondselectedcolor:''})
                        this.setState(prevState => ({order: prevState.order + 1}))
                        setTimeout(() => {
                            this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                            this.setState({order: this.state.orderRDM[this.state.ordercount][0]})
                            this.updatetext()
                            if(this.state.order===50)
                                setTimeout(() =>{
                                    this.props.navigation.navigate('Level_Selection')
                                },5000)
                        }, 4000)
                    } else {
                        this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                    }
                    break
                case 4:
                case 6:
                    if (this.state.dominantcolor === 'purple') {
                        this.setState({mixselected: false,errorcount:0, drawcolor: '#F1F1F1',firstselectedcolor:'',secondselectedcolor:''})
                        this.setState(prevState => ({order: prevState.order + 1}))
                        setTimeout(() => {
                            this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                            this.setState({order: this.state.orderRDM[this.state.ordercount][0]})
                            this.updatetext()
                            if(this.state.order===50)
                                setTimeout(() =>{
                                    this.props.navigation.navigate('Level_Selection')
                                },5000)
                        }, 4000)
                    } else {
                        this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                    }
                    break
                case 8:
                case 10:
                    if (this.state.dominantcolor === 'brown') {
                        this.setState({mixselected: false,errorcount:0, drawcolor: '#F1F1F1',firstselectedcolor:'',secondselectedcolor:''})
                        this.setState(prevState => ({order: prevState.order + 1}))
                        setTimeout(() => {
                            this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                            this.setState({order: this.state.orderRDM[this.state.ordercount][0]})
                            this.updatetext()
                            if(this.state.order===50)
                                setTimeout(() =>{
                                    this.props.navigation.navigate('Level_Selection')
                                },5000)
                        }, 4000)
                    } else {
                        this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                    }
                    break
                case 12:
                case 14:
                    if (this.state.dominantcolor === 'orange') {
                        this.setState({mixselected: false,errorcount:0, drawcolor: '#F1F1F1',firstselectedcolor:'',secondselectedcolor:''})
                        this.setState(prevState => ({order: prevState.order + 1}))
                        setTimeout(() => {
                            this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                            this.setState({order: this.state.orderRDM[this.state.ordercount][0]})
                            this.updatetext()
                            if(this.state.order===50)
                                setTimeout(() =>{
                                    this.props.navigation.navigate('Level_Selection')
                                },5000)
                        }, 4000)
                    } else {
                        this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                    }
                    break
                case 16:
                case 18:
                    if (this.state.dominantcolor === 'cyan') {
                        this.setState({mixselected: false,errorcount:0, drawcolor: '#F1F1F1',firstselectedcolor:'',secondselectedcolor:''})
                        this.setState(prevState => ({order: prevState.order + 1}))
                        setTimeout(() => {
                            this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                            this.setState({order: this.state.orderRDM[this.state.ordercount][0]})
                            this.updatetext()
                            if(this.state.order===50)
                                setTimeout(() =>{
                                    this.props.navigation.navigate('Level_Selection')
                                },5000)
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

    red(){

        if(this.state.firstselectedcolor === "red" || this.state.secondselectedcolor === "red")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/red_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/red.webp')}/>
    }
    blue(){

        if(this.state.firstselectedcolor === "blue" || this.state.secondselectedcolor === "blue")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/blue_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue.webp')}/>
    }
    green(){

        if(this.state.firstselectedcolor === "green" || this.state.secondselectedcolor === "green")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/green_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/green.webp')}/>
    }
    yellow(){

        if(this.state.firstselectedcolor === "yellow" || this.state.secondselectedcolor === "yellow")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/yellow_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow.webp')}/>
    }
    pink(){

        if(this.state.firstselectedcolor === "pink" || this.state.secondselectedcolor === "pink")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/pink_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/pink.webp')}/>
    }
    brown(){

        if(this.state.firstselectedcolor === "brown" || this.state.secondselectedcolor === "brown")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/brown_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown.webp')}/>
    }
    purple(){

        if(this.state.firstselectedcolor === "purple" || this.state.secondselectedcolor === "purple")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/purple_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple.webp')}/>
    }
    orange(){

        if(this.state.firstselectedcolor === "orange" || this.state.secondselectedcolor === "orange")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/orange_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange.webp')}/>
    }
    cyan(){

        if(this.state.firstselectedcolor === "cyan" || this.state.secondselectedcolor === "cyan")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/cyan_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan.webp')}/>
    }
    mix() {
        if (this.state.firstselectedcolor === 'blue' && this.state.secondselectedcolor === 'yellow' ||
            this.state.firstselectedcolor === 'yellow' && this.state.secondselectedcolor === 'blue') {
            if (this.state.mixselected === true){
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#F1F1F1'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                               source={require('../assets/mixed_colors/green_selected.webp')}/>
                </TouchableOpacity>
            } else {
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#00FF00'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={styles.colors}
                               source={require('../assets/mixed_colors/green.webp')}/>
                </TouchableOpacity>
            }

        } else if (this.state.firstselectedcolor === 'red' && this.state.secondselectedcolor === 'blue' ||
            this.state.firstselectedcolor === 'blue' && this.state.secondselectedcolor === 'red') {
            if (this.state.mixselected === true){
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#F1F1F1'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                               source={require('../assets/mixed_colors/purple_selected.webp')}/>
                </TouchableOpacity>
            } else {
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#9D00FF'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={styles.colors}
                               source={require('../assets/mixed_colors/purple.webp')}/>
                </TouchableOpacity>
            }

        } else if (this.state.firstselectedcolor === 'red' && this.state.secondselectedcolor === 'green' ||
            this.state.firstselectedcolor === 'green' && this.state.secondselectedcolor === 'red') {
            if (this.state.mixselected === true){
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#F1F1F1'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                               source={require('../assets/mixed_colors/brown_selected.webp')}/>
                </TouchableOpacity>
            } else {
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#A52A2A'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={styles.colors}
                               source={require('../assets/mixed_colors/brown.webp')}/>
                </TouchableOpacity>
            }

        } else if (this.state.firstselectedcolor === 'red' && this.state.secondselectedcolor === 'yellow' ||
            this.state.firstselectedcolor === 'yellow' && this.state.secondselectedcolor === 'red') {
            if (this.state.mixselected === true){
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#F1F1F1'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                               source={require('../assets/mixed_colors/orange_selected.webp')}/>
                </TouchableOpacity>
            } else {
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#FFA500'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={styles.colors}
                               source={require('../assets/mixed_colors/orange.webp')}/>
                </TouchableOpacity>
            }

        } else if (this.state.firstselectedcolor === 'green' && this.state.secondselectedcolor === 'purple' ||
            this.state.firstselectedcolor === 'purple' && this.state.secondselectedcolor === 'green') {
            if (this.state.mixselected === true){
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#F1F1F1'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                               source={require('../assets/mixed_colors/cyan_selected.webp')}/>
                </TouchableOpacity>
            } else {
                return <TouchableOpacity onPress={() => {
                    this.setState({mixselected: !this.state.mixselected, drawcolor: '#00FFFF'})
                    this.refs.sketchRef.clear()}}>
                    <FastImage style={styles.colors}
                               source={require('../assets/mixed_colors/cyan.webp')}/>
                </TouchableOpacity>
            }

        }else {
            return <FastImage style={styles.colors}
                              source={require('../assets/mixed_colors/empty.webp')}/>
        }
    }
       colorselector(){
        this.setState({mixselected:false})
            switch(this.state.colorselected){
                case 'red':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'red',firstselected:false,secondselected:true,drawcolor:'#FF0000'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'red',firstselected:true,secondselected:false,drawcolor:'#FF0000'})
                    break;
                case 'blue':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'blue',firstselected:false,secondselected:true,drawcolor:'#0000FF'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'blue',firstselected:true,secondselected:false,drawcolor:'#0000FF'})
                    break;
                case 'green':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'green',firstselected:false,secondselected:true,drawcolor:'#00FF00'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'green',firstselected:true,secondselected:false,drawcolor:'#00FF00'})
                    break;
                case 'yellow':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'yellow',firstselected:false,secondselected:true,drawcolor:'#FFFF00'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'yellow',firstselected:true,secondselected:false,drawcolor:'#FFFF00'})
                    break;
                case 'pink':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'pink',firstselected:false,secondselected:true,drawcolor:'#FF1694'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'pink',firstselected:true,secondselected:false,drawcolor:'#FF1694'})
                    break;
                case 'brown':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'brown',firstselected:false,secondselected:true,drawcolor:'#A52A2A'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'brown',firstselected:true,secondselected:false,drawcolor:'#A52A2A'})
                    break;
                case 'purple':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'purple',firstselected:false,secondselected:true,drawcolor:'#9D00FF'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'purple',firstselected:true,secondselected:false,drawcolor:'#9D00FF'})
                    break;
                case 'orange':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'orange',firstselected:false,secondselected:true,drawcolor:'#FFA500'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'orange',firstselected:true,secondselected:false,drawcolor:'#FFA500'})
                    break;
                case 'cyan':
                    if(this.state.firstselected === true && this.state.secondselected === false)
                        this.setState({firstselectedcolor:'cyan',firstselected:false,secondselected:true,drawcolor:'#00FFFF'})
                    if(this.state.firstselected === false && this.state.secondselected === true)
                        this.setState({secondselectedcolor:'cyan',firstselected:true,secondselected:false,drawcolor:'#00FFFF'})
                    break;
            }
        }

    green_purple() {
        if (this.state.order >= 0 && this.state.order <= 2 ){
            return  <TouchableOpacity onPress={() => { this.setState({colorselected:"purple"},this.colorselector)
                this.refs.sketchRef.clear()
            }}>
                {this.purple()}
            </TouchableOpacity>
        }else {
            return <TouchableOpacity onPress={() => { this.setState({colorselected:"green"},this.colorselector)
                this.refs.sketchRef.clear()
            }}>
                {this.green()}
            </TouchableOpacity>
        }
    }
    brown_purple() {
        if (this.state.order >= 8 && this.state.order <= 10){
            return  <TouchableOpacity onPress={() => { this.setState({colorselected:"purple"},this.colorselector)
                this.refs.sketchRef.clear()
            }}>
                {this.purple()}
            </TouchableOpacity>
        }else {
            return <TouchableOpacity onPress={() => { this.setState({colorselected:"brown"},this.colorselector)
                this.refs.sketchRef.clear()
            }}>
                {this.brown()}
            </TouchableOpacity>
        }
    }
    orange_purple() {
        if (this.state.order >= 12 && this.state.order <= 14){
            return  <TouchableOpacity onPress={() => { this.setState({colorselected:"purple"},this.colorselector)
                this.refs.sketchRef.clear()
            }}>
                {this.purple()}
            </TouchableOpacity>
        }else {
            return <TouchableOpacity onPress={() => { this.setState({colorselected:"orange"},this.colorselector)
                this.refs.sketchRef.clear()
            }}>
                {this.orange()}
            </TouchableOpacity>
        }
    }
    cyan_purple() {
        if (this.state.order >= 16 && this.state.order <= 18){
            return  <TouchableOpacity onPress={() => { this.setState({colorselected:"purple"},this.colorselector)
                this.refs.sketchRef.clear()
            }}>
                {this.purple()}
            </TouchableOpacity>
        }else {
            return <TouchableOpacity onPress={() => { this.setState({colorselected:"cyan"},this.colorselector)
                this.refs.sketchRef.clear()
            }}>
                {this.cyan()}
            </TouchableOpacity>
        }
    }

    colortabView(){
        switch(this.state.order){
            case 0: case 2: case 4: case 6: case 8: case 10: case 12: case 14: case 16: case 18:
                return  <Animatable.View style={styles.colortab} animation={{
                    from:{left:-120},
                    to:{left:0}
                }}
                 duration={1000} easing={"linear"}>
                    <TouchableOpacity onPress={() => { this.setState({colorselected:"red"},this.colorselector)
                        this.refs.sketchRef.clear()
                    }}>
                        {this.red()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({colorselected:"blue"},this.colorselector)
                        this.refs.sketchRef.clear()
                    }}>
                        {this.blue()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({colorselected:"yellow"},this.colorselector)
                        this.refs.sketchRef.clear()
                    }}>
                        {this.yellow()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({colorselected:"pink"},this.colorselector)
                        this.refs.sketchRef.clear()
                    }}>
                        {this.pink()}
                    </TouchableOpacity>
                    {this.brown_purple()}
                    {this.green_purple()}
                    {this.orange_purple()}
                    {this.cyan_purple()}
                    {this.mix()}
                </Animatable.View>
            case 1: case 3: case 5: case 7: case 9: case 11: case 13: case 15: case 17: case 19:
                return  <Animatable.View style={styles.colortab} animation={{
                    from:{left:0},
                    to:{left:-120}
                }} duration={1000} easing={"linear"}>
                    <TouchableOpacity onPress={() => { this.setState({colorselected:"red"},this.colorselector)
                        this.refs.sketchRef.clear()
                    }}>
                        {this.red()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({colorselected:"blue"},this.colorselector)
                        this.refs.sketchRef.clear()
                    }}>
                        {this.blue()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({colorselected:"yellow"},this.colorselector)
                        this.refs.sketchRef.clear()
                    }}>
                        {this.yellow()}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({colorselected:"pink"},this.colorselector)
                        this.refs.sketchRef.clear()
                    }}>
                        {this.pink()}
                    </TouchableOpacity>
                    {this.brown_purple()}
                    {this.green_purple()}
                    {this.orange_purple()}
                    {this.cyan_purple()}
                    {this.mix()}
                </Animatable.View>
        }

    }
//<Text>order:{this.state.order}</Text>
    render() {
            return (
                <ImageBackground source={require('../assets/other/Level1.webp')} style={styles.background}>
                    <View pointerEvents="none"  >
                        <FastImage  source={require('../assets/other/Level_Selection_front2.webp')}
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

                        {this.colortabView()}

                    </View>

                    <View style={styles.shildview}>
                        {woodShild(this.state.order,this.state.errorcount)}
                        <View style={styles.textview}>

                            {text(this.state.order,this.state.errorcount,this.state.textcolor1,this.state.textcolor2,this.state.textcolor3,this.state.text1,this.state.text2,this.state.text3)}
                        </View>
                    </View>
                    <View style={styles.backtabview}>
                        <Animatable.View
                            style={styles.backtab} animation="slideInDown" duration={1000} delay={1000} easing={"linear"} useNativeDriver={true}>
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('Level_Selection')}>
                                <View>
                                    <FastImage
                                        source={require('../assets/other/BackArrow.webp')}
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
        height: '100%',

    },
    colortab: {
        width: 120,
        height: '100%',
        backgroundColor: 'white',
        borderRightColor: '#808080',
        borderRightWidth: 3,
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
