import React, {Component} from 'react';
import {Alert, Animated, Dimensions, Image,Text, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
import {getAllSwatches} from 'react-native-palette';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import {preloadImages} from "../components/preloadimages";
import {colorselector} from "../components/colorselector1";
import {woodShild} from "../components/woodShild2";
import {text} from "../components/text2";
import {starfall} from "../components/starfall1";
import {pictureselector} from "../components/pictureselector1";

var RNFS = require('react-native-fs');
var shuffle = require('shuffle-array');

var {width, height} = Dimensions.get('window')

export default class Level_2 extends Component {
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

    componentWillMount() {

    }

    componentDidMount() {

        this._isMounted = true;
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
      //  console.log("New:",this.state.orderRDM)
        this.setState({order:this.state.orderRDM[this.state.ordercount][0]})

        //make initial Screenshot
        this.makeScreenshot()
        this.updatetext()

    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate() {

    }

// update Text on woodShild
    updatetext(){
        switch(this.state.orderRDM[this.state.ordercount][0]) {
            case 0: case 1: case 2: case 3:
                this.setState({text: "ROT", textcolor: '#FF0000'})
                break;
            case 4: case 5: case 6: case 7:
                this.setState({text: "BLAU", textcolor: '#0000FF'})
                break;
            case 8: case 9: case 10: case 11:
                this.setState({text: "GRÜN", textcolor: '#00FF00'})
                break;
            case 12: case 13: case 14: case 15:
                this.setState({text: "GELB", textcolor: '#FFFF00'})
                break;
            case 16: case 17: case 18: case 19:
                this.setState({text: "PINK", textcolor: '#FF1694'})
                break;
            case 20: case 21: case 22: case 23:
                this.setState({text: "BRAUN", textcolor: '#A52A2A'})
                break;
            case 24: case 25: case 26: case 27:
                this.setState({text: "LILA", textcolor: '#9D00FF'})
                break;
            case 28: case 29: case 30: case 31:
                this.setState({text: "ORANGE", textcolor: '#FFA500'})
                break;
            case 32: case 33: case 34: case 35:
                this.setState({text: "TÜRKIES", textcolor: '#00FFFF'})
                break;
        }
    }
// update order depending on dominant color and set the different states
    updateorder(){
    switch (this.state.orderRDM[this.state.ordercount][0]) {
        case 0:
        case 2:
            if (this.state.dominantcolor === 'red') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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
            if (this.state.dominantcolor === 'blue') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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
            if (this.state.dominantcolor === 'green') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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
            if (this.state.dominantcolor === 'yellow') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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
            if (this.state.dominantcolor === 'pink') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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
        case 20:
        case 22:
            if (this.state.dominantcolor === 'brown') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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
        case 24:
        case 26:
            if (this.state.dominantcolor === 'purple') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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
        case 28:
        case 30:
            if (this.state.dominantcolor === 'orange') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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
        case 32:
        case 34:
            if (this.state.dominantcolor === 'cyan') {
                this.setState({colorselected: false,errorcount:0, drawcolor: '#F1F1F1'})
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

        if(this.state.colorselected === "red")
             return  <FastImage style={styles.colors}
                                source={require('../assets/colors/red_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/red.png')}/>
    }
    blue(){

        if(this.state.colorselected === "blue")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/blue_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/blue.png')}/>
    }
    green(){

        if(this.state.colorselected === "green")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/green_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/green.png')}/>
    }
    yellow(){

        if(this.state.colorselected === "yellow")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/yellow_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/yellow.png')}/>
    }
    pink(){

        if(this.state.colorselected === "pink")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/pink_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/pink.png')}/>
    }
    brown(){

        if(this.state.colorselected === "brown")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/brown_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/brown.png')}/>
    }
    purple(){

        if(this.state.colorselected === "purple")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/purple_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/purple.png')}/>
    }
    orange(){

        if(this.state.colorselected === "orange")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/orange_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/orange.png')}/>
    }
    cyan(){

        if(this.state.colorselected === "cyan")
            return  <FastImage style={styles.colors}
                               source={require('../assets/colors/cyan_selected.png')}/>
        return <FastImage style={styles.colors}
                          source={require('../assets/colors/cyan.png')}/>
    }

    colortabView(){
            return  <Animatable.View style={styles.colortab} animation="slideInLeft" duration={1000} easing={"linear"}>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'red',drawcolor:'#FF0000'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.red()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'blue',drawcolor:'#0000FF'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.blue()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'green',drawcolor:'#00FF00'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.green()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'yellow',drawcolor:'#FFFF00'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.yellow()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'pink',drawcolor:'#FF1694'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.pink()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'brown',drawcolor:'#A52A2A'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.brown()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'purple',drawcolor:'#9D00FF'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.purple()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'orange',drawcolor:'#FFA500'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.orange()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({colorselected:'cyan',drawcolor:'#00FFFF'})
                                                               this.refs.sketchRef.clear()}}>
                                {this.cyan()}
                            </TouchableOpacity>
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

                        {text(this.state.order,this.state.textcolor,this.state.text,this.state.errorcount)}
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
        height: '100%'
    },
    colortab: {
        width: 120,
        height: "100%",
        backgroundColor: 'white',
        borderRightColor: '#808080',
        borderRightWidth: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex:1,
        flexWrap:'wrap',
        alignContent:'space-around'

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
