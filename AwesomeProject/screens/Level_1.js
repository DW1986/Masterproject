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

var {width, height} = Dimensions.get('window')
export default class Level_1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dominantcolor_rgba:null,
            drawcolor:'#F1F1F1',
            path: RNFS.ExternalCachesDirectoryPath + '/test.jpg',
            colorpanel : new Animated.Value(-90),
            backpanel : new Animated.Value(-90),
            order:0,
            colorselected:false,
            dominantcolor:''

        }
    }

    componentDidMount(){
        //make initial Screenshot
        this.makeScreenshot()
        // animated Colorpanel
            Animated.timing(this.state.colorpanel,{
                toValue: 0,
                duration: 2000,
                easing:Easing.bounce,
            }
        ).start()
        // animated Backpanel
        Animated.timing(this.state.backpanel,{
                delay:2000,
                toValue: 0,
                duration: 2000,
                easing:Easing.bounce,
            }
        ).start()
    }

    //Change drawcolor when selected
    changedrawcolor(){
        if (this.state.order===0&&this.state.colorselected === true){
            this.setState({drawcolor:'#F1F1F1'})
        }
        else{
            this.setState({drawcolor:'#FF0000'})
        }
    }
    // Change picture to draw
    pictureselector(){
        if(this.state.order===0) {
            return <Image style={styles.pictures}
                          source={require('../assets/pictures/red_fire_engine_alpha.png')}/>
        }
       else if(this.state.order===1) {
            return <Image style={styles.pictures}
                          source={require('../assets/pictures/red_fire_engine.png')}/>
        }

       else if(this.state.order===2) {
                return <Image  style={styles.pictures}
                               source={require('../assets/pictures/red_fire_engine.png')}/>


        }
    }
    //Change Color selected picture
    colorselector(){
        switch(this.state.order) {

            case 0:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/red_selected.png')}/>

                return <Image style={styles.colors}
                              source={require('../assets/colors/red.png')}/>
            case 1:
                if (this.state.colorselected === true)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/red_selected.png')}/>

                return <Image style={styles.images}
                              source={require('../assets/colors/red.png')}/>

            default:


        }
    }
componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.order===0 && this.state.dominantcolor==='red')
        return this.setState({order:+1})
}




    // make a Screenshot, save it and get the dominant color rgba
    makeScreenshot() {
        this.refs.viewShot.capture().then(uri => {
            RNFS.writeFile(this.state.path, uri, 'base64')
                .then((success) => {
                    getAllSwatches({}, this.state.path, (error, swatches) => {
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

            case 'rgba(240,0,0,1,000)': case "rgba(248,0,0,1,000)":
                this.setState({dominantcolor:"red"})
                this.refs.sketchRef.clear()
                break;

            case 'rgba(0,0,248,1,000)':
                this.setState({dominantcolor:"blue"})
                this.refs.sketchRef.clear()
                break;
            case 'rgba(0,248,0,1,000)':
                this.setState({dominantcolor:"green"})
                this.refs.sketchRef.clear()
                break;
            case 'rgba(248,248,0,1,000)':
                this.setState({dominantcolor:"yellow"})
                this.refs.sketchRef.clear()
                break;
            case 'rgba(248,104,176,1,000)':
                this.setState({dominantcolor:"pink"})
                this.refs.sketchRef.clear()
                break;
            case 'rgba(152,120,64,1,000)':
                this.setState({dominantcolor:"brown"})
                this.refs.sketchRef.clear()
                break;
            case 'rgba(152,0,248,1,000)':
                this.setState({dominantcolor:"purple"})
                this.refs.sketchRef.clear()
                break;
            case 'rgba(248,168,8,1,000)':
                this.setState({dominantcolor:"orange"})
                this.refs.sketchRef.clear()
                break;
            case 'rgba(0,248,248,1,000)':
                this.setState({dominantcolor:"cyan"})
                this.refs.sketchRef.clear()
                break;

            default:
                this.setState({dominantcolor:"white"})

        }
    }

    render() {
        return (
            <ImageBackground source={require('../assets/fonts/Level1.png')} style={styles.background}>
                    <Text>dominant Color: {this.state.dominantcolor_rgba} </Text>
                    <Text>Color: {this.state.dominantcolor} </Text>
                <Text>drawcolor: {this.state.drawcolor} </Text>
               <Text>order: {this.state.order} </Text>
                <ViewShot ref="viewShot" options={{ format: "jpg", quality: 1.0,result:"base64"  }}>

                    <View style={styles.paint}>

                        <SketchCanvas
                            ref="sketchRef"
                            style={{ flex: 1, backgroundColor:'#F1F1F1' }}

                            strokeWidth={40}
                            strokeColor={this.state.drawcolor}
                            onStrokeEnd={() => {this.makeScreenshot()}}
                        />
                        <View pointerEvents="none"  style={{position:'absolute'}}  >
                            {this.pictureselector()}
                        </View>
                    </View>
                </ViewShot>
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
        flex: 2,

    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
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
        color: 'green',
        width: 410,
        height: 254,
        borderColor: 'grey',
        borderWidth: 3,
        marginBottom: 35,
        marginLeft: 7,
    },
    pictures: {
        width: 380,
        height: 234,
        marginLeft: 10,
        marginTop: 10
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
    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});
