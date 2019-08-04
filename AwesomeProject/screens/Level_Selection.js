import React from 'react';
import {BackHandler, StyleSheet, View, ImageBackground, Animated, TouchableOpacity, Easing, Dimensions} from 'react-native';
import {preloadImages} from "../components/preloadimages";
import {selectArrow} from "../components/selectArrow";
import FastImage from "react-native-fast-image";
import * as Animatable from "react-native-animatable";
import SplashScreen from "./SplashScreen";

var {width, height} = Dimensions.get('window')

export default class Level_Selection extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {
            isLoading:true,
            cloud_1 : new Animated.Value(-80),
            cloud_2 : new Animated.Value(-240),
            cloud_3 : new Animated.Value(-400),
            counterLvL1:0,
            counterLvL2:0,
            counterLvL3:0,
            counterLvL4:0,
            language:false,
            disableBotton:false
        }
        this.Butterfly_1 = new Animated.Value(0)
        this.Butterfly_2 = new Animated.Value(0)
        var range = 1, snapshot = 50, radius = 20, radius2 =50

        /// translateX butterfly_1
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot
            var move = Math.sin(value * Math.PI * 2) * radius;
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateX = this.Butterfly_1.interpolate({ inputRange, outputRange })

        /// translateY butterfly_1
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot
            var move = -Math.cos(value * Math.PI * 2) * radius
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateY = this.Butterfly_1.interpolate({ inputRange, outputRange })

        /// translateX2 butterfly_2
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot
            var move = -Math.sin((value + 1/2) * Math.PI * 2) * radius2
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateX2 = this.Butterfly_2.interpolate({ inputRange, outputRange })

        /// translateY2 butterfly_2
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot
            var move = -Math.cos((value + 1/2) * Math.PI * 2) * radius2
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateY2 = this.Butterfly_2.interpolate({ inputRange, outputRange })
    }

    async componentDidMount(){
        // mount component
        this._isMounted = true;
        //preload images
        preloadImages()
        const data = await preloadImages();
        if (data !== null) {
            setTimeout(
                () => {  this.setState({ isLoading: false });
                },2000
            )
        }
        //animate butterfly_1
        this.Butterfly_1.setValue(0)
        Animated.loop(
            Animated.timing(this.Butterfly_1, {
                toValue: 1,
                duration: 16000,
            })
        ).start()
        // animate butterfly_2
        this.Butterfly_2.setValue(0)
        Animated.loop(
            Animated.timing(this.Butterfly_2, {
                toValue: 1,
                duration: 16000,
            })
        ).start()
        //animate cloud_1
        Animated.loop(
            Animated.timing(this.state.cloud_1,{
                toValue: width+400,
                duration: 100000,
                asing:Easing.linear
            })
        ).start()
        //animate cloud_2
        Animated.loop(
            Animated.timing(this.state.cloud_2,{
                toValue: width+240,
                duration: 100000,
                asing:Easing.linear
            })
        ).start()
        //animate cloud_3
        Animated.loop(
            Animated.timing(this.state.cloud_3,{
                toValue: width+80,
                duration: 100000,
                asing:Easing.linear
            })
        ).start()
    }

    componentWillUnmount() {
        //unmount component
        this._isMounted = false;
    }
    // Selection LvL1
    LvL1(){
        if (this.state.counterLvL1 === 1)
            setTimeout(() => this.props.navigation.navigate('Level_1', { language: this.state.language }) ,2000)
            this.setState({counterLvL1:0})
        this.setState(prevState => ({ counterLvL1: prevState.counterLvL1 + 1 }))
        this.setState({counterLvL2:0,counterLvL3:0,counterLvL4:0})
    }
    // Selection LvL2
    LvL2(){
        if (this.state.counterLvL2 === 1)
            setTimeout(() => this.props.navigation.navigate('Level_2', { language: this.state.language }) ,2000)
        this.setState({counterLvL2:0})
        this.setState(prevState => ({ counterLvL2: prevState.counterLvL2 + 1 }))
        this.setState({counterLvL1:0,counterLvL3:0,counterLvL4:0})
    }
    // Selection LvL3
    LvL3(){
        if (this.state.counterLvL3 === 1)
            setTimeout(() => this.props.navigation.navigate('Level_3', { language: this.state.language }) ,2000)
        this.setState({counterLvL3:0})
        this.setState(prevState => ({ counterLvL3: prevState.counterLvL3 + 1 }))
        this.setState({counterLvL1:0,counterLvL2:0,counterLvL4:0})
    }
    // Selection LvL4
    LvL4(){
        if (this.state.counterLvL4 === 1)
            setTimeout(() => this.props.navigation.navigate('Level_4', { language: this.state.language }) ,2000)
        this.setState({counterLvL4:0})
        this.setState(prevState => ({ counterLvL4: prevState.counterLvL4 + 1 }))
        this.setState({counterLvL1:0,counterLvL2:0,counterLvL3:0})
    }
    // render language
    language(){
        if(this.state.language===false) {
            return <TouchableOpacity disabled={this.state.disableBotton} onPress={() =>
                this.setState({language:!this.state.language,disableBotton:true},this.disablelanguagetimer())}>
                <View>
                    <FastImage
                        source={require('../assets/other/flag_ger.png')}
                        style={{width: 40, height: 30}}
                    />
                </View>
            </TouchableOpacity>
        } else {
            return <TouchableOpacity disabled={this.state.disableBotton} onPress={() =>
                this.setState({language:!this.state.language,disableBotton:true},this.disablelanguagetimer())}>
                <View>
                    <FastImage
                        source={require('../assets/other/flag_eng.png')}
                        style={{width:40,height:30}}
                    />
                </View>
            </TouchableOpacity>
        }
    }
    //disable language button for some time after pressed
    disablelanguagetimer(){
        setTimeout(() => this.setState({disableBotton:false}),5000)
    }
    render() {
        if(this._isMounted = true){
            if (this.state.isLoading) {
                return <SplashScreen />;
            }
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
                    <FastImage source={require('../assets/other/Level_Selection_front.png')}
                               style={{position:'absolute',width: '100%', height: '100%'}}  />
                    <Animated.Image source={require('../assets/animations/Butterfly_1.gif')} style={[styles.Butterflys,{
                        bottom:90,marginLeft:width/50, transform }]}/>
                    {selectArrow(this.state.counterLvL1,this.state.counterLvL2,this.state.counterLvL3,this.state.counterLvL4,)}
                    <View style={[styles.container]}>
                        <TouchableOpacity   onPress={() => this.LvL1()}>
                            <FastImage
                                source={require('../assets/animations/Egg_1.gif')}
                                style={[styles.Eggs,{bottom:12}]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity   onPress={() => this.LvL2()}>
                            <FastImage
                                source={require('../assets/animations/Egg_2.gif')}
                                style={[styles.Eggs,{bottom:5}]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity   onPress={() => this.LvL3()}>
                            <FastImage
                                source={require('../assets/animations/Egg_3.gif')}
                                style={[styles.Eggs,{bottom:15}]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity   onPress={() => this.LvL4()}>
                            <FastImage
                                source={require('../assets/animations/Egg_4.gif')}
                                style={[styles.Eggs,{bottom:9}]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.backtabview}>
                        <Animatable.View
                            style={styles.backtab2} animation={{
                            from: {left: -120},
                            to: {left: 0}
                        }}duration={1000} delay={1000} easing={"linear"}>
                            <TouchableOpacity onPress={() =>
                                BackHandler.exitApp()}>
                                <View>
                                    <FastImage
                                        source={require('../assets/other/cross.png')}
                                        style={{width:35,height:25}}
                                    />
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View
                            style={styles.backtab1} animation={{
                            from: {left: -120},
                            to: {left: 0}
                        }}duration={1000} delay={1000} easing={"linear"}>
                            {this.language()}
                        </Animatable.View>
                    </View>
                    <View pointerEvents="none"  >
                        <FastImage  source={require('../assets/other/Level_Selection_front2.png')}
                                    style={styles.font2_gras} />
                    </View>
                </ImageBackground>
            );
        }

    }
}
//styles
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
    backtabview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    backtab1: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        top:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70/2,
    },
    backtab2: {
        width: 60,
        height: 60,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth:6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70/2,

    },
});
