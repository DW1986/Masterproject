import React, {Component} from 'react';
import {Alert, Animated, Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import {colorselector} from "../components/colorselector1";
import {woodShild} from "../components/woodShild2";
import {text} from "../components/text2";
import {starfall} from "../components/starfall1";
import {pictureselector} from "../components/pictureselector1";

var RNFS = require('react-native-fs');
var shuffle = require('shuffle-array');
const timer = require('react-native-timer');

var {width, height} = Dimensions.get('window')

export default class Level_2 extends Component {
    ismounted_Level2 = false
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
            dominantcolor: '',
            fadeanimationout: new Animated.Value(1),
            fadeanimationin: new Animated.Value(0),
            opacity : new Animated.Value(0),
            ScaleValue1 : new Animated.Value(0),
            ScaleValue2 : new Animated.Value(1),
            text:"XXX",
            textcolor:'#FF0000',
            orderRDM:[[0,2],[4,6],[8,10],[12,14],[16,18],[20,22],[24,26],[28,30],[32,34]],
            orderRDM2:[[50,50]],
            ordercount:0,
            errorcount:0
        }
    }

    async componentDidMount() {

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
        this.state.orderRDM.push(...this.state.orderRDM2)

        this.setState({order:this.state.orderRDM[this.state.ordercount][0]})
        this.updatetext()



    }
    componentWillMount() {
        // mount component
        this.ismounted_Level2 = true;
    }

    componentWillUnmount() {
        //unmount component
        this.ismounted_Level2 = false;
        timer.clearTimeout(this);
        timer.clearInterval(this);


    }


// update Text on woodShild
    updatetext(){

        if (this.props.navigation.state.params.language===false){
            switch(this.state.orderRDM[this.state.ordercount][0]) {
                case 0: case 2:
                    this.setState({text: "Rot", textcolor: '#FF0000'})
                    break;
                case 4: case 6:
                    timer.setTimeout(this,'blau',() =>
                            this.setState({text: "Blau", textcolor: '#0000FF'})
                        , 3000);
                    break;
                case 8: case 10:
                    timer.setTimeout(this,'gruen',() =>
                            this.setState({text: "Grün", textcolor: '#00FF00'})
                        , 3000);
                    break;
                case 12: case 14:
                    timer.setTimeout(this,'gelb',() =>
                            this.setState({text: "Gelb", textcolor: '#FFFF00'})
                        , 3000);
                    break;
                case 16: case 18:
                    timer.setTimeout(this,'pink',() =>
                            this.setState({text: "Pink", textcolor: '#FF1694'})
                        , 3000);
                    break;
                case 20: case 22:
                    timer.setTimeout(this,'braun',() =>
                            this.setState({text: "Braun", textcolor: '#A52A2A'})
                        , 3000);
                    break;
                case 24: case 26:
                    timer.setTimeout(this,'lila',() =>
                            this.setState({text: "Lila", textcolor: '#9D00FF'})
                        , 3000);
                    break;
                case 28: case 30:
                    timer.setTimeout(this,'orange',() =>
                            this.setState({text: "Orange", textcolor: '#FFA500'})
                        , 3000);
                    break;
                case 32: case 34:
                    timer.setTimeout(this,'tuerkis',() =>
                            this.setState({text: "Türkis", textcolor: '#00FFFF'})
                        , 3000);
                    break;
            }
        }else {
            switch(this.state.orderRDM[this.state.ordercount][0]) {
                case 0: case 2:
                    this.setState({text: "red", textcolor: '#FF0000'})
                    break;
                case 4: case 6:
                    timer.setTimeout(this,'blue',() =>
                            this.setState({text: "blue", textcolor: '#0000FF'})
                        , 3000);
                    break;
                case 8: case 10:
                    timer.setTimeout(this,'green',() =>
                            this.setState({text: "green", textcolor: '#00FF00'})
                        , 3000);
                    break;
                case 12: case 14:
                    timer.setTimeout(this,'yellow',() =>
                            this.setState({text: "yellow", textcolor: '#FFFF00'})
                        , 3000);
                    break;
                case 16: case 18:
                    timer.setTimeout(this,'pink',() =>
                            this.setState({text: "pink", textcolor: '#FF1694'})
                        , 3000);
                    break;
                case 20: case 22:
                    timer.setTimeout(this,'brown',() =>
                            this.setState({text: "brown", textcolor: '#A52A2A'})
                        , 3000);
                    break;
                case 24: case 26:
                    timer.setTimeout(this,'purple',() =>
                            this.setState({text: "purple", textcolor: '#9D00FF'})
                        , 3000);
                    break;
                case 28: case 30:
                    timer.setTimeout(this,'orange',() =>
                            this.setState({text: "orange", textcolor: '#FFA500'})
                        , 3000);
                    break;
                case 32: case 34:
                    timer.setTimeout(this,'cyan',() =>
                            this.setState({text: "cyan", textcolor: '#00FFFF'})
                        , 3000);
                    break;
            }
        }

    }
// update order depending on dominant color and set the different states
    updateorder(){
        switch (this.state.orderRDM[this.state.ordercount][0]) {
            case 0:
            case 2:
                if (this.state.dominantcolor === 'red') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'2',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'21',() => {
                                this.props.navigation.navigate('Level_Selection')
                            },5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 4:
            case 6:
                if (this.state.dominantcolor === 'blue') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'6',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'61',() => {
                                this.props.navigation.navigate('Level_Selection')
                            },5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 8:
            case 10:
                if (this.state.dominantcolor === 'green') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'10',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'101',() => {
                                this.props.navigation.navigate('Level_Selection')
                            },5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 12:
            case 14:
                if (this.state.dominantcolor === 'yellow') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'14',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'141',() => {
                                this.props.navigation.navigate('Level_Selection')
                            },5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 16:
            case 18:
                if (this.state.dominantcolor === 'pink') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'18',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'181',() => {
                                this.props.navigation.navigate('Level_Selection')
                            },5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 20:
            case 22:
                if (this.state.dominantcolor === 'brown') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'22',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'221',() => {
                                this.props.navigation.navigate('Level_Selection')
                            },5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 24:
            case 26:
                if (this.state.dominantcolor === 'purple') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'26',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'261',() => {
                                this.props.navigation.navigate('Level_Selection')
                            },5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 28:
            case 30:
                if (this.state.dominantcolor === 'orange') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'30',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'301',() => {
                                this.props.navigation.navigate('Level_Selection')
                            },5000)
                    }, 4000)
                } else {
                    this.setState(prevState => ({errorcount: prevState.errorcount + 1}))
                }
                break
            case 32:
            case 34:
                if (this.state.dominantcolor === 'cyan') {
                    this.setState({mixselected: false, drawcolor: '#F1F1F1'})
                    this.setState(prevState => ({order: prevState.order + 1}))
                    timer.setTimeout(this,'34',() => {
                        this.setState(prevState => ({ordercount: prevState.ordercount + 1}))
                        this.setState({order: this.state.orderRDM[this.state.ordercount][0],errorcount:0})
                        this.updatetext()
                        if(this.state.order===50)
                            timer.setTimeout(this,'341',() => {
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

        if(this.state.mixselected === "red")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/red_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/red.webp')}/>
    }
    blue(){

        if(this.state.mixselected === "blue")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/blue_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue.webp')}/>
    }
    green(){

        if(this.state.mixselected === "green")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/green_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/green.webp')}/>
    }
    yellow(){

        if(this.state.mixselected === "yellow")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/yellow_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow.webp')}/>
    }
    pink(){

        if(this.state.mixselected === "pink")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/pink_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/pink.webp')}/>
    }
    brown(){

        if(this.state.mixselected === "brown")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/brown_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown.webp')}/>
    }
    purple(){

        if(this.state.mixselected === "purple")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/purple_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple.webp')}/>
    }
    orange(){

        if(this.state.mixselected === "orange")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/orange_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange.webp')}/>
    }
    cyan(){

        if(this.state.mixselected === "cyan")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/cyan_selected.webp')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan.webp')}/>
    }

    colortabView(){
        return  <Animatable.View style={styles.colortab} animation={{
            from:{left:-120},
            to:{left:0}
        }} duration={1000} easing={"linear"}>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'red',drawcolor:'#FF0000'})
                this.refs.sketchRef.clear()}}>
                {this.red()}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'blue',drawcolor:'#0000FF'})
                this.refs.sketchRef.clear()}}>
                {this.blue()}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'green',drawcolor:'#00FF00'})
                this.refs.sketchRef.clear()}}>
                {this.green()}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'yellow',drawcolor:'#FFFF00'})
                this.refs.sketchRef.clear()}}>
                {this.yellow()}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'pink',drawcolor:'#FF1694'})
                this.refs.sketchRef.clear()}}>
                {this.pink()}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'brown',drawcolor:'#A52A2A'})
                this.refs.sketchRef.clear()}}>
                {this.brown()}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'purple',drawcolor:'#9D00FF'})
                this.refs.sketchRef.clear()}}>
                {this.purple()}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'orange',drawcolor:'#FFA500'})
                this.refs.sketchRef.clear()}}>
                {this.orange()}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({mixselected:'cyan',drawcolor:'#00FFFF'})
                this.refs.sketchRef.clear()}}>
                {this.cyan()}
            </TouchableOpacity>
        </Animatable.View>
    }
//<Text>order:{this.state.order}</Text>
    render() {
        if (this.ismounted_Level2 === true) {
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

                            {text(this.state.order, this.state.textcolor, this.state.text, this.state.errorcount)}
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
        height: '100%'
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
