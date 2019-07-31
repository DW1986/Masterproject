import React, {Component} from 'react';
import {Alert, Animated, Dimensions, Image,Text, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import {woodShild} from "../components/woodShild3";
import {text} from "../components/text3";
import {starfall} from "../components/starfall1";
import {pictureselector} from "../components/pictureselector3";

var RNFS = require('react-native-fs');

var {width, height} = Dimensions.get('window')

export default class Level_3 extends Component {
    _isMounted = false;
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
            firstselected: false,
            secondselected: false,
            dominantcolor: '',
            fadeanimationout: new Animated.Value(1),
            fadeanimationin: new Animated.Value(0),
            opacity : new Animated.Value(0),
            ScaleValue1 : new Animated.Value(0),
            ScaleValue2 : new Animated.Value(1),
            text1:"BLAU",
            text2:"GELB",
            text3:"GRÜN",
            textcolor1:'#0000FF',
            textcolor2:'#FFFF00',
            textcolor3:'#00FF00',
            ordercount:0,
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

        this._isMounted = true;


        //make initial Screenshot
        this.makeScreenshot()


    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate() {

    }

// update Text on woodShild
    updatetext(){
        switch(this.state.order) {
            case 3:
                setTimeout(() =>
                        this.setState({text1: "ROT",text2: "BLAU", text3: "LILA", textcolor1: '#FF0000', textcolor2: '#0000FF', textcolor3: '#9D00FF'})
                    , 3000);
                break;
            case 7:
                setTimeout(() =>
                        this.setState({text1: "ROT",text2: "GRÜN", text3: "BRAUN", textcolor1: '#FF0000', textcolor2: '#00FF00', textcolor3: '#A52A2A'})
                    , 3000);
                break;
            case 11:
                setTimeout(() =>
                        this.setState({text1: "ROT",text2: "GELB", text3: "ORANGE", textcolor1: '#FF0000', textcolor2: '#FFFF00', textcolor3: '#FFA500'})
                    , 3000);
                break;
            case 15:
                setTimeout(() =>
                        this.setState({text1: "GRÜN",text2: "LILA", text3: "TYRKIS", textcolor1: '#00FF00', textcolor2: '#9D00FF', textcolor3: '#00FFFF'})
                    , 3000);
                break;
        }
    }
// update order depending on dominant color and set the different states
    updateorder(){
        switch (this.state.dominantcolor) {
            case 'green':
                if(this.state.order === 0) {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    setTimeout(() => {
                        this.setState({dominantcolor:'white'})
                        this.setState(prevState => ({order: prevState.order + 1}))
                    }, 4000)
                } else {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    this.updatetext()
                    setTimeout(() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'brown':
                if(this.state.order === 4) {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    setTimeout(() => {
                        this.setState({dominantcolor:'white'})
                        this.setState(prevState => ({order: prevState.order + 1}))
                    }, 4000)
                } else {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    this.updatetext()
                    setTimeout(() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'purple':
                if(this.state.order === 8) {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    setTimeout(() => {
                        this.setState({dominantcolor:'white'})
                        this.setState(prevState => ({order: prevState.order + 1}))
                    }, 4000)
                } else {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    this.updatetext()
                    setTimeout(() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'orange':
                if(this.state.order === 12) {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    setTimeout(() => {
                        this.setState({dominantcolor:'white'})
                        this.setState(prevState => ({order: prevState.order + 1}))
                    }, 4000)
                } else {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    this.updatetext()
                    setTimeout(() => {
                        this.setState(prevState => ({order: prevState.order + 1}))
                        this.makeScreenshot()
                    }, 4000)
                }
                break;
            case 'cyan':
                if(this.state.order === 16) {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    setTimeout(() => {
                        this.setState({dominantcolor:'white'})
                        this.setState(prevState => ({order: prevState.order + 1}))
                    }, 4000)
                } else {
                    this.setState({drawcolor: '#F1F1F1',colorselected: false,firstselected:false,secondselected:false})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    this.updatetext()
                    setTimeout(() => {
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

    first(){
        switch (this.state.order) {
            case 0:
            case 1:
            case 2:
            case 3:
                if (this.state.firstselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/blue_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/blue.png')}/>
                }
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                if (this.state.firstselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/red_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/red.png')}/>
                }
                break;
            case 8:
            case 9:
            case 10:
            case 11:
                if (this.state.firstselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/red_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/red.png')}/>
                }
                break;
            case 12:
            case 13:
            case 14:
            case 15:
                if (this.state.firstselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/red_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/red.png')}/>
                }
                break;
            case 16:
            case 17:
            case 18:
            case 19:
                if (this.state.firstselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/green_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/green.png')}/>
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
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/yellow_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/yellow.png')}/>
                }
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                if (this.state.secondselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/blue_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/blue.png')}/>
                }
                break;
            case 8:
            case 9:
            case 10:
            case 11:
                if (this.state.secondselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/green_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/green.png')}/>
                }
                break;
            case 12:
            case 13:
            case 14:
            case 15:
                if (this.state.secondselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/yellow_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/yellow.png')}/>
                }
                break;
            case 16:
            case 17:
            case 18:
            case 19:
                if (this.state.secondselected === true){
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/purple_selected.png')}/>
                } else {
                    return <FastImage style={styles.colors}
                                      source={require('../assets/colors/purple.png')}/>
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
                            if (this.state.colorselected === true)
                                return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'})
                                    this.refs.sketchRef.clear()}}>
                                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                               source={require('../assets/mixed_colors/green_selected.png')}/>
                                </TouchableOpacity>
                            return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#00FF00'})
                                this.refs.sketchRef.clear()}}>
                                <FastImage style={styles.colors}
                                           source={require('../assets/mixed_colors/green.png')}/>
                            </TouchableOpacity>
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            if (this.state.colorselected === true)
                                return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'})
                                    this.refs.sketchRef.clear()}}>
                                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                               source={require('../assets/mixed_colors/purple_selected.png')}/>
                                </TouchableOpacity>
                            return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#9D00FF'})
                                this.refs.sketchRef.clear()}}>
                                <FastImage style={styles.colors}
                                           source={require('../assets/mixed_colors/purple.png')}/>
                            </TouchableOpacity>
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                            if (this.state.colorselected === true)
                                return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'})
                                    this.refs.sketchRef.clear()}}>
                                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                               source={require('../assets/mixed_colors/brown_selected.png')}/>
                                </TouchableOpacity>
                            return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#A52A2A'})
                                this.refs.sketchRef.clear()}}>
                                <FastImage style={styles.colors}
                                           source={require('../assets/mixed_colors/brown.png')}/>
                            </TouchableOpacity>
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            if (this.state.colorselected === true)
                                return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'})
                                    this.refs.sketchRef.clear()}}>
                                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                               source={require('../assets/mixed_colors/orange_selected.png')}/>
                                </TouchableOpacity>
                            return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#FFA500'})
                                this.refs.sketchRef.clear()}}>
                                <FastImage style={styles.colors}
                                           source={require('../assets/mixed_colors/orange.png')}/>
                            </TouchableOpacity>
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                            if (this.state.colorselected === true)
                                return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#F1F1F1'})
                                    this.refs.sketchRef.clear()}}>
                                    <FastImage style={[styles.colors, {alignSelf: 'flex-end'}]}
                                               source={require('../assets/mixed_colors/cyan_selected.png')}/>
                                </TouchableOpacity>
                            return <TouchableOpacity onPress={() => { this.setState({colorselected:!this.state.colorselected, drawcolor:'#00FFFF'})
                                this.refs.sketchRef.clear()}}>
                                <FastImage style={styles.colors}
                                           source={require('../assets/mixed_colors/cyan.png')}/>
                            </TouchableOpacity>
                    }
            } else {
                return <FastImage style={styles.colors}
                                  source={require('../assets/mixed_colors/empty.png')}/>
            }


        }

    colortabView(){
        return  <Animatable.View style={styles.colortab} animation="slideInLeft" duration={1000} easing={"linear"}>
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
    }
//<Text>order:{this.state.order}</Text>
    render() {
        return (
            <ImageBackground source={require('../assets/other/Level1.png')} style={styles.background}>
                <View pointerEvents="none"  >
                    <Image  source={require('../assets/other/Level_Selection_front2.png')}
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

                        {text(this.state.order,this.state.textcolor1,this.state.textcolor2,this.state.textcolor3,this.state.text1,this.state.text2,this.state.text3)}
                    </View>
                </View>
                <View style={styles.backtabview}>
                    <Animatable.View
                        style={styles.backtab} animation="slideInDown" duration={1000} delay={1000} easing={"linear"}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Level_Selection')}>
                            <View>
                                <Image
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
