import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image,Button, Animated, TouchableOpacity,Easing,Dimensions} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {preloadImages} from "../components/preloadimages";
import FastImage from "react-native-fast-image";
import * as Animatable from "react-native-animatable";



var {width, height} = Dimensions.get('window')
export default class Level_Selection extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            cloud_1 : new Animated.Value(-80),
            cloud_2 : new Animated.Value(-240),
            cloud_3 : new Animated.Value(-400),
            counterLvL1:0,
            counterLvL2:0,
            counterLvL3:0,
            counterLvL4:0

        }
        this.Butterfly_1 = new Animated.Value(0)
        this.Butterfly_2 = new Animated.Value(0)

        var range = 1, snapshot = 50, radius = 20, radius2 =50

        /// translateX Butterfly_1
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot
            var move = Math.sin(value * Math.PI * 2) * radius;
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateX = this.Butterfly_1.interpolate({ inputRange, outputRange })

        /// translateY Butterfly_1
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot
            var move = -Math.cos(value * Math.PI * 2) * radius
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateY = this.Butterfly_1.interpolate({ inputRange, outputRange })

        /// translateX2 Butterfly_2
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot
            var move = -Math.sin((value + 1/2) * Math.PI * 2) * radius2
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateX2 = this.Butterfly_2.interpolate({ inputRange, outputRange })

        /// translateY2 Butterfly_2
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot
            var move = -Math.cos((value + 1/2) * Math.PI * 2) * radius2
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateY2 = this.Butterfly_2.interpolate({ inputRange, outputRange })

    }

    preloadImages(){
        preloadImages()

    }
    componentDidMount(){

        this.preloadImages()
        this._isMounted = true;
        this.Butterfly_1.setValue(0)
        Animated.loop(
            Animated.timing(this.Butterfly_1, {
                toValue: 1,
                duration: 16000,
            })
        ).start()

        this.Butterfly_2.setValue(0)
        Animated.loop(
            Animated.timing(this.Butterfly_2, {
                toValue: 1,
                duration: 16000,
            })
        ).start()
        Animated.loop(
            Animated.timing(this.state.cloud_1,{
                toValue: width+400,
                duration: 100000,
                asing:Easing.linear
            })
        ).start()
        Animated.loop(
            Animated.timing(this.state.cloud_2,{
                toValue: width+240,
                duration: 100000,
                asing:Easing.linear
            })
        ).start()
        Animated.loop(
            Animated.timing(this.state.cloud_3,{
                toValue: width+80,
                duration: 100000,
                asing:Easing.linear
            })
        ).start()
    }
    componentWillUnmount() {

        this._isMounted = false;
    }

    arrow() {
        if      (this.state.counterLvL1 === 1)
                    return <Animatable.Image   source={require('../assets/other/SelectArrow.png')} style={[styles.selectArrow,{left:115,top:143}]}
                                               animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" />

        else if (this.state.counterLvL2 === 1)
                     return <Animatable.Image   source={require('../assets/other/SelectArrow.png')} style={[styles.selectArrow,{left:245,top:146}]}
                                              animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" />
        else if (this.state.counterLvL3 === 1)
                    return <Animatable.Image   source={require('../assets/other/SelectArrow.png')} style={[styles.selectArrow,{left:375,top:149}]}
                                               animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" />
        else if (this.state.counterLvL4 === 1)
                    return <Animatable.Image   source={require('../assets/other/SelectArrow.png')} style={[styles.selectArrow,{left:505,top:140}]}
                                               animation="pulse" iterationCount={"infinite"} easing="linear" direction="alternate" />
    }
    LvL1(){
        if (this.state.counterLvL1 === 1)
            setTimeout(() => this.props.navigation.navigate('Level_1') ,2000)
            this.setState({counterLvL1:0})
        this.setState(prevState => ({ counterLvL1: prevState.counterLvL1 + 1 }))
        this.setState({counterLvL2:0,counterLvL3:0,counterLvL4:0})
    }
    LvL2(){
        if (this.state.counterLvL2 === 1)
            setTimeout(() => this.props.navigation.navigate('Level_2') ,2000)
        this.setState({counterLvL2:0})
        this.setState(prevState => ({ counterLvL2: prevState.counterLvL2 + 1 }))
        this.setState({counterLvL1:0,counterLvL3:0,counterLvL4:0})
    }
    LvL3(){
        if (this.state.counterLvL3 === 1)
            setTimeout(() => this.props.navigation.navigate('Level_3') ,2000)
        this.setState({counterLvL3:0})
        this.setState(prevState => ({ counterLvL3: prevState.counterLvL3 + 1 }))
        this.setState({counterLvL1:0,counterLvL2:0,counterLvL4:0})
    }
    LvL4(){
        if (this.state.counterLvL4 === 1)
            setTimeout(() => this.props.navigation.navigate('Level_2') ,2000)
        this.setState({counterLvL4:0})
        this.setState(prevState => ({ counterLvL4: prevState.counterLvL4 + 1 }))
        this.setState({counterLvL1:0,counterLvL2:0,counterLvL3:0})
    }

    render() {
        const transform = [{ translateY: this.translateY }, {translateX: this.translateX}]
        const transform2 = [{ translateY: this.translateY2 }, {translateX: this.translateX2}]
        return (
            <ImageBackground source={require('../assets/other/Level_Selection.png')} style={styles.background}>


                    <Animated.Image source={require('../assets/animations/Butterfly_2.gif')} style={[styles.Butterflys,{
                        bottom:150,marginLeft:width/1.2, transform:transform2 }]}/>
                    <Animated.Image source={require('../assets/other/cloud.png')} style ={[styles.cloud,{left:this.state.cloud_1,
                       top:50}]} />
                    <Animated.Image source={require('../assets/other/cloud.png')} style ={[styles.cloud,{left:this.state.cloud_2,
                       top:85}]} />
                    <Animated.Image source={require('../assets/other/cloud.png')} style ={[styles.cloud,{left:this.state.cloud_3,
                        top:15}]} />
                <Image source={require('../assets/other/Level_Selection_front.png')}
                       style={{position:'absolute',width: '100%', height: '100%'}}  />
                    <Animated.Image source={require('../assets/animations/Butterfly_1.gif')} style={[styles.Butterflys,{
                        bottom:90,marginLeft:width/50, transform }]}/>
                {this.arrow()}
                <View style={[styles.container]}>
                    <TouchableOpacity   onPress={() => this.LvL1()}>
                        <Image
                            source={require('../assets/animations/Egg_1.gif')}
                            style={[styles.Eggs,{bottom:12}]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => this.LvL2()}>
                        <Image
                            source={require('../assets/animations/Egg_2.gif')}
                            style={[styles.Eggs,{bottom:5}]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => this.LvL3()}>
                        <Image
                            source={require('../assets/animations/Egg_3.gif')}
                            style={[styles.Eggs,{bottom:15}]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => this.LvL4()}>
                        <Image
                            source={require('../assets/animations/Egg_4.gif')}
                            style={[styles.Eggs,{bottom:9}]}
                        />
                    </TouchableOpacity>

                </View>
                <View pointerEvents="none"  >
                    <Image  source={require('../assets/other/Level_Selection_front2.png')}
                            style={styles.font2_gras} />
                </View>
            </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignContent: 'center'
    },
    Eggs:{
        width:130,
        height:140,
    },
    Butterflys:{
        width:35,
        height:35,
        position:'absolute'
    },
    cloud:{
        width:80,
        height:50,
        position:'absolute',
    },
    font2_gras: {
        flex: 1,
        bottom:0,
        position: 'absolute',
        width:width,
        height:height,
    },
    selectArrow: {
        position: 'absolute',
        width:50,
        height:70,
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        top:120,
        right:30
    },
});