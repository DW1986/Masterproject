import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image,Button, Animated, TouchableOpacity,Easing,Dimensions} from 'react-native';


var {width, height} = Dimensions.get('window')
export default class Level_Selection extends React.Component {

    constructor(props) {
        super(props)



        this.state = {
            cloud_1 : new Animated.Value(-80),
            cloud_2 : new Animated.Value(-240),
            cloud_3 : new Animated.Value(-400)
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


    componentDidMount(){


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



    render() {
        const transform = [{ translateY: this.translateY }, {translateX: this.translateX}]
        const transform2 = [{ translateY: this.translateY2 }, {translateX: this.translateX2}]
        return (
            <ImageBackground source={require('../assets/Level_Selection.png')} style={styles.background}>


                <Animated.Image source={require('../assets/gifs/Butterfly_1.gif')} style={[styles.Butterflys,{
                    marginTop:height/1.8,marginLeft:width/1.2, transform:transform2 }]}>
                </Animated.Image>
                <Animated.Image source={require('../assets/cloud.png')} style ={[styles.cloud,{left:this.state.cloud_1,
                    marginTop:height*0.25}]} >
                </Animated.Image>
                <Animated.Image source={require('../assets/cloud.png')} style ={[styles.cloud,{left:this.state.cloud_2,
                    marginTop:height*0.4,marginRight: width*0.2}]} >
                </Animated.Image>
                <Animated.Image source={require('../assets/cloud.png')} style ={[styles.cloud,{left:this.state.cloud_3,
                    marginTop:height*0.1,marginRight: width*0.2}]} >
                </Animated.Image>
                <Image source={require('../assets/Level_Selection_front.png')}
                       style={{width: '100%', height: '100%'}}  />
                <Animated.Image source={require('../assets/gifs/Butterfly_9.gif')} style={[styles.Butterflys,{
                    marginTop:height/1.5,marginLeft:width/15, transform }]}>
                </Animated.Image>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('Level_1')}>
                        <View>
                            <Image
                                source={require('../assets/gifs/Egg_1.gif')}
                                style={[styles.Eggs,{marginTop:height*0.56}]}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('SignatureScreen')}>
                        <View>
                            <Image
                                source={require('../assets/gifs/Egg_2.gif')}
                                style={[styles.Eggs,{marginTop:height*0.58}]}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('SignatureScreen')}>
                        <View>
                            <Image
                                source={require('../assets/gifs/Egg_3.gif')}
                                style={[styles.Eggs,{marginTop:height*0.6}]}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('SignatureScreen')}>
                        <View>
                            <Image
                                source={require('../assets/gifs/Egg_4.gif')}
                                style={[styles.Eggs,{marginTop:height*0.54}]}
                            />
                        </View>
                    </TouchableOpacity>

                </View>
                <Image source={require('../assets/Level_Selection_front2.png')}
                       style={styles.font2_gras}  />
            </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    Eggs:{
        width:120,
        height:140,

    },
    Butterflys:{
        width:50,
        height:50,
        position:'absolute'

    },
    cloud:{
        width:80,
        height:50,
        position:'absolute',
        resizeMode:"contain"
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: "center",
        flexDirection:'row',
        position:'absolute',
        marginLeft:width*0.15

    },  font2_gras: {
        flex: 1,
marginTop:height*0.85,
        position: 'absolute',
        width:width,
        height:height*0.1,

    }
});