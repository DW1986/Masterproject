import React, { Component } from 'react';
import {
    Animated,
    AppRegistry, Easing, ImageBackground,
    StyleSheet,
    View, Dimensions, Image, Text, TouchableOpacity, Alert
} from 'react-native';
import RNSketchCanvas, { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import ViewShot from "react-native-view-shot";
var RNFS = require('react-native-fs');
import { getAllSwatches } from 'react-native-palette';
import { SimpleAnimation } from 'react-native-simple-animations';


var {width, height} = Dimensions.get('window')
export default class Level_2 extends Component {

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
            text:"ROT",
            textcolor:'#FF0000'


        }
    }

    scaleanimation() {
        Animated.sequence([
            Animated.timing(this.state.ScaleValue2, {
                toValue: 0,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true

            }),
            Animated.timing(this.state.ScaleValue2, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true,

            })
        ]).start()
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true

        })
    }


    fadein() {
        Animated.timing(this.state.fadeanimationin, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,

            }
        ).start()
    }

    fadeout() {
        Animated.timing(this.state.fadeanimationout, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,

            }
        ).start()
    }


    componentDidMount() {

        Animated.timing(this.state.fadeanimationin, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
                delay: 4000
            }
        ).start()
        Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 0,
                delay:4050,
            }
        ).start()
        Animated.timing(this.state.ScaleValue1, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                delay:4000


            }
        ).start()

        //make initial Screenshot
        this.makeScreenshot()
        // animated Colorpanel
        Animated.timing(this.state.colorpanel, {
                toValue: 0,
                duration: 2000,
                easing: Easing.bounce,
            }
        ).start()
        // animated Backpanel
        Animated.timing(this.state.backpanel, {
                delay: 2000,
                toValue: 0,
                duration: 2000,
                easing: Easing.bounce,
            }
        ).start()
    }

    //Change drawcolor when selected
    changedrawcolor() {
        if (this.state.order <= 3 && this.state.colorselected === false)
            this.setState({drawcolor: '#FF0000'})
        else if (this.state.order >= 4 && this.state.order <= 7 && this.state.colorselected === false)
            this.setState({drawcolor: '#0000FF'})
        else if (this.state.order >= 8 && this.state.order <= 11 && this.state.colorselected === false)
            this.setState({drawcolor: '#00FF00'})
        else if (this.state.order >= 12 && this.state.order <= 15 && this.state.colorselected === false)
            this.setState({drawcolor: '#FFFF00'})
        else if (this.state.order >= 16 && this.state.order <= 19 && this.state.colorselected === false)
            this.setState({drawcolor: '#FFC0CB'})
        else if (this.state.order >= 20 && this.state.order <= 23 && this.state.colorselected === false)
            this.setState({drawcolor: '#A52A2A'})
        else if (this.state.order >= 24 && this.state.order <= 27 && this.state.colorselected === false)
            this.setState({drawcolor: '#9d00ff'})
        else if (this.state.order >= 28 && this.state.order <= 31 && this.state.colorselected === false)
            this.setState({drawcolor: '#FFA500'})
        else if (this.state.order >= 32 && this.state.order <= 35 && this.state.colorselected === false)
            this.setState({drawcolor: '#00FFFF'})
        else if (this.state.colorselected === true)
            this.setState({drawcolor: '#F1F1F1'})

    }

    // upadte Text
    updatetext(){
        if(this.state.order===4) {
            setTimeout(() =>
                    this.setState({text:"BLAU",textcolor:'#0000FF'})
                , 3000);
        }
        else if(this.state.order === 9) {
            setTimeout(() =>
                    this.setState({text:"GRÜN",textcolor:'#00FF00'})

                , 1500);
        }
        else if(this.state.order === 7) {
            setTimeout(() =>
                    this.setState({text:"GELB"})
                , 1500);
        }
        else if(this.state.order === 7) {
            setTimeout(() =>
                    this.setState({text:"ROSA"})
                , 1500);
        }
        else if(this.state.order === 7) {
            setTimeout(() =>
                    this.setState({text:"BRAUN"})
                , 1500);
        }
        else if(this.state.order === 7) {
            setTimeout(() =>
                    this.setState({text:"LILA"})
                , 1500);
        }
        else if(this.state.order === 7) {
            setTimeout(() =>
                    this.setState({text:"ORANGE"})
                , 1500);
        }
        else if(this.state.order === 7) {
            setTimeout(() =>
                    this.setState({text:"TYRKIS"})
                , 1500);
        }
    }
    //render Text
    text(){
        if(this.state.order===0) {
            return  <Animated.Text style={[{height:70},{position:'absolute'},{opacity: this.state.opacity},{fontSize:45},{color:this.state.textcolor},{fontStyle:'italic'},{fontWeight: 'bold'},
                {transform: [{scaleX: this.state.ScaleValue1.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        })
                    }]}]}>{this.state.text}</Animated.Text>
        }
        else if(this.state.order>=1 && this.state.order <= 3) {
            return  <Text style={[{height:70},{position:'absolute'},{fontSize:45},{color:this.state.textcolor},{fontStyle:'italic'},{fontWeight: 'bold'},
            ]}>{this.state.text}</Text>
        }
        else if(this.state.order===4 ) {
            return <Animated.Text
                onLoad={this.scaleanimation()}
                style={[{height: 70}, {position: 'absolute'}, {opacity: this.state.opacity}, {fontSize: 45}, {color:this.state.textcolor}, {fontStyle: 'italic'},{fontWeight: 'bold'},
                    {
                        transform: [{
                            scaleX: this.state.ScaleValue2.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })
                        }]
                    }]}>{this.state.text}</Animated.Text>
        } else if(this.state.order>=1 && this.state.order <= 3) {
            return  <Text style={[{height:70},{position:'absolute'},{fontSize:45},{color:this.state.textcolor},{fontStyle:'italic'},{fontWeight: 'bold'},
            ]}>{this.state.text}</Text>
        }
    }
// change woodshild
    shild(){

        switch(this.state.order){
            case 0:
                return <SimpleAnimation
                    delay={4000}
                    duration={4000}
                    staticType='zoom'
                >
                    <Image source={require('../assets/fonts/Wood-Shild.png')}style={[{width:250},{height:80}]}/>
                </SimpleAnimation>
            break;
            case 1:case 2:
                return <Image
                    source={require('../assets/fonts/Wood-Shild.png')}
                    style={[{width: 250}, {height: 80},]}
                />
                break;
            case 3:
                return <SimpleAnimation
                    duration={4000}
                    aim={'out'}
                    staticType='zoom'
                >
                    <Image source={require('../assets/fonts/Wood-Shild.png')} style={[{width: 250}, {height: 80}]}/>
                </SimpleAnimation>
                break;
            case 4:
                return <SimpleAnimation
                    duration={4000}
                    aim={'in'}
                    staticType='zoom'
                >
                    <Image source={require('../assets/fonts/Wood-Shild.png')}style={[{width:250},{height:80}]}/>
                </SimpleAnimation>
                break;
            default:
        }
    }

    // Change picture to draw
    pictureselector(){
        if(this.state.order===0) {
            return <Animated.Image
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/red_fire_engine_alpha.png')}/>
        }
        else if(this.state.order===1) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/red_fire_engine.png')}/>
        }
        else if(this.state.order===2) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/strawberry_alpha.png')}/>
        }
        else if(this.state.order===3) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/strawberry.png')}/>
        }
        else if(this.state.order===4) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/police-car_alpha.png')}/>
        }
        else if(this.state.order===5) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/police-car.png')}/>
        }
        else if(this.state.order===6) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/whale_alpha.png')}/>
        }
        else if(this.state.order===7) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/whale.png')}/>
        }
        else if(this.state.order===8) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/leaf_alpha.png')}/>
        }
        else if(this.state.order===9) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/leaf.png')}/>
        }
        else if(this.state.order===10) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/frog_alpha.png')}/>
        }
        else if(this.state.order===11) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/frog.png')}/>
        }
        else if(this.state.order===12) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/sun_alpha.png')}/>
        }
        else if(this.state.order===13) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/sun.png')}/>
        }
        else if(this.state.order===14) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/bannana_alpha.png')}/>
        }
        else if(this.state.order===15) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/bannana.png')}/>
        }
        else if(this.state.order===16) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/flamengo_alpha.png')}/>
        }
        else if(this.state.order===17) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/flamengo.png')}/>
        }
        else if(this.state.order===18) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/pig_alpha.png')}/>
        }
        else if(this.state.order===19) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/pig.png')}/>
        }
        else if(this.state.order===20) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/horse_alpha.png')}/>
        }
        else if(this.state.order===21) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/horse.png')}/>
        }
        else if(this.state.order===22) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/Teddy_alpha.png')}/>
        }
        else if(this.state.order===23) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/Teddy.png')}/>
        }
        else if(this.state.order===24) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/flower_alpha.png')}/>
        }
        else if(this.state.order===25) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/flower.png')}/>
        }
        else if(this.state.order===26) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/butterfly_alpha.png')}/>
        }
        else if(this.state.order===27) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/butterfly.png')}/>
        }
        else if(this.state.order===28) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/orange_alpha.png')}/>
        }
        else if(this.state.order===29) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/orange.png')}/>
        }
        else if(this.state.order===30) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/fish_alpha.png')}/>
        }
        else if(this.state.order===31) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/fish.png')}/>
        }
        else if(this.state.order===32) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/ballons_alpha.png')}/>
        }
        else if(this.state.order===33) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/ballons.png')}/>
        }
        else if(this.state.order===34) {
            return <Animated.Image
                onLoad={this.fadein()}
                style={[styles.pictures,{opacity:this.state.fadeanimationin}]}
                source={require('../assets/pictures/ice-cream_alpha.png')}/>
        }
        else if(this.state.order===33) {
            return <Animated.Image
                onLoad={this.fadeout()}
                style={[styles.pictures,{opacity:this.state.fadeanimationout}]}
                source={require('../assets/pictures/ice-cream.png')}/>
        }
    }
    //Change Color selected picture
    colorselector(){
        switch(this.state.order) {

            case 0:case 1:case 2:case 3:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors} source={require('../assets/colors/red_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/red.png')}/>
            case 4:case 5:case 6:case 7:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/blue_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/blue.png')}/>
            case 8:case 9:case 10:case 11:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/green_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/green.png')}/>
            case 12:case 13:case 14:case 15:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/yellow_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/yellow.png')}/>
            case 16:case 17:case 18:case 19:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/pink_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/pink.png')}/>
            case 20:case 21:case 22:case 23:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/brown_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/brown.png')}/>
            case 24:case 25:case 26:case 27:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/purple_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/purple.png')}/>
            case 28:case 29:case 30:case 31:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/orange_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/orange.png')}/>
            case 32:case 33:case 34:case 35:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/cyan_selected.png')}/>
                return <Image style={styles.colors}
                              source={require('../assets/colors/cyan.png')}/>

            default:


        }
    }
    updateorder() {

        switch (this.state.dominantcolor) {
            case 'red':
                if(this.state.order === 0) {
                    this.setState({order: 1})
                    this.setState({colorselected: false})
                    this.setState({dominantcolor:'white'})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 2})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 3})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 4})
                        this.makeScreenshot()
                        //   this.updatetext()
                    }, 4000)
                }
                break;
            case 'blue':
                if(this.state.order === 4) {
                    this.setState({order: 5})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 6})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 7})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 8})
                        this.makeScreenshot()
                        this.updatetext()
                    }, 4000)
                }
                break;
            case 'green':
                if(this.state.order === 8) {
                    this.setState({order: 9})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 10})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 11})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 12})
                        this.makeScreenshot()
                        this.updatetext()
                    }, 4000)
                }
                break;
            case 'yellow':
                if(this.state.order === 12) {
                    this.setState({order: 13})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 14})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 15})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 16})
                        this.makeScreenshot()
                        this.updatetext()
                    }, 4000)
                }
                break;
            case 'pink':
                if(this.state.order === 16) {
                    this.setState({order: 17})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 18})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 19})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 20})
                        this.makeScreenshot()
                        this.updatetext()
                    }, 4000)
                }
                break;
            case 'brown':
                if(this.state.order === 20) {
                    this.setState({order: 21})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 22})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 23})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 24})
                        this.makeScreenshot()
                        this.updatetext()
                    }, 4000)
                }
                break;
            case 'purple':
                if(this.state.order === 24) {
                    this.setState({order: 25})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 26})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 27})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 28})
                        this.makeScreenshot()
                        this.updatetext()
                    }, 4000)
                }
                break;
            case 'orange':
                if(this.state.order === 28) {
                    this.setState({order: 29})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 30})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 31})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 32})
                        this.makeScreenshot()
                        this.updatetext()
                    }, 4000)
                }
                break;
            case 'cyan':
                if(this.state.order === 32) {
                    this.setState({order: 33})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.setState({order: 34})
                        this.setState({dominantcolor:'white'})
                    }, 4000)
                } else {
                    this.setState({order: 35})
                    this.setState({colorselected: false})
                    this.setState({drawcolor: '#F1F1F1'})
                    setTimeout(() => {
                        this.props.navigation.navigate('Level_Selection')
                    }, 4000)
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
            case 'rgba(240,200,208,1,000)':
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
//<Text>rgba:{this.state.dominantcolor_rgba}</Text>
//                     <Text>dominantcolor:{this.state.dominantcolor}</Text>
//                     <Text>drawcolor:{this.state.drawcolor}</Text>
//                     <Text>oder:{this.state.order}</Text>
//                     <Text>colorselected:{String(this.state.colorselected)}</Text>
    //<Text>Text:{String(this.state.text)}</Text>

    render() {
        return (
            <ImageBackground source={require('../assets/fonts/Level1.png')} style={styles.background}>
                <Text>Text:{String(this.state.text)}</Text>
                <Text>oder:{this.state.order}</Text>
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
                <View pointerEvents="none"  style={{position:'absolute'}}  >
                    {this.pictureselector()}
                </View>



                <View style={styles.colortabview}>

                    <Animated.View

                        style ={[styles.colortab,{left:this.state.colorpanel}]} >
                        <TouchableOpacity onPress={() => {
                            this.refs.sketchRef.clear()
                            this.setState({colorselected:!this.state.colorselected})
                            this.changedrawcolor()


                        }}>
                            {this.colorselector()}

                        </TouchableOpacity>

                    </Animated.View>
                </View>
                <View style={styles.shildview}>

                    {this.shild()}

                    {this.text()}


                </View>
                <View style={styles.backtabview}>
                    <Animated.View

                        style ={[styles.backtab,{top:this.state.backpanel}]} >
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Level_Selection')}>
                            <View>
                                <Image
                                    source={require('../assets/fonts/BackArrow.png')}
                                    style={{width:40,height:60}}
                                />
                            </View>
                        </TouchableOpacity>

                    </Animated.View>
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
        borderRightColor: 'grey',
        borderRightWidth: 3,
        borderTopRightRadius: 4,
        borderTopColor: 'grey',
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',


    }, colors: {
        width: 40,
        height: 80,

    },

    paint: {
        backgroundColor: '#F1F1F1',
        width: 410,
        height: 254,
        borderColor: 'grey',
        borderWidth: 3,
        marginBottom: 35,
        marginLeft: 7,


    },
    pictures: {
        width: 349,
        height: 220,
        marginBottom: 35


    },
    backtabview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    backtab:{
        width: 90,
        height: 90,
        backgroundColor:'white',
        borderLeftColor: 'grey',
        borderLeftWidth: 3,
        borderBottomLeftRadius:4,
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        justifyContent:'center',
        alignItems:'center',
    },
    shildview:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',


    },
    text:{

        position:'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'blue'

    },

});
