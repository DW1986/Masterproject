import React from 'react';
import {BackHandler,StyleSheet,View,ImageBackground,Animated,TouchableOpacity,Easing,Dimensions,Image} from 'react-native';
import {preloadImages} from "../components/preloadimages";
import {selectArrow} from "../components/selectArrow";
import * as Animatable from "react-native-animatable";
import SplashScreen from "./SplashScreen";

const {width, height} = Dimensions.get('window');
const Sound = require('react-native-sound');
const timer = require('react-native-timer');

const intro = new Sound('intro.m4a', Sound.MAIN_BUNDLE);
const level_1 = new Sound('level_1.m4a', Sound.MAIN_BUNDLE);
const level_2 = new Sound('level_2.m4a', Sound.MAIN_BUNDLE);
const level_3 = new Sound('level_3.m4a', Sound.MAIN_BUNDLE);
const level_4 = new Sound('level_4.m4a', Sound.MAIN_BUNDLE);
const speach_eng = new Sound('speach_eng.m4a', Sound.MAIN_BUNDLE);
const speach_ger = new Sound('speach_ger.m4a', Sound.MAIN_BUNDLE);
const exit = new Sound('exit.m4a', Sound.MAIN_BUNDLE);
const onTouch = new Sound('onTouch.m4a', Sound.MAIN_BUNDLE);

export default class Level_Selection extends React.Component {
    ismounted_Level_Selection = false;

    constructor(props) {
        super(props);
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
            disableButton_language:false,
            anim:0,
            rdm:0,
            opacity0:1,
            opacity1:0,
            opacity2:0,
            opacity3:0,
            opacity4:0,
            opacity5:0,
            opacity6:0,
            disableButton_bunny:true,
            played1:0,
            played2:0,
            played3:0,
            played4:0,

        };
        this.Butterfly_1 = new Animated.Value(0);
        this.Butterfly_2 = new Animated.Value(0);
        var range = 1, snapshot = 50, radius = 20, radius2 =50;

        // translateX butterfly_1
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = Math.sin(value * Math.PI * 2) * radius;
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateX = this.Butterfly_1.interpolate({ inputRange, outputRange });

        // translateY butterfly_1
        var inputRange = [], outputRange = []
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = -Math.cos(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move)
        }
        this.translateY = this.Butterfly_1.interpolate({ inputRange, outputRange });

        // translateX2 butterfly_2
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = -Math.sin((value + 1/2) * Math.PI * 2) * radius2;
            inputRange.push(value);
            outputRange.push(move)
        }
        this.translateX2 = this.Butterfly_2.interpolate({ inputRange, outputRange });

        // translateY2 butterfly_2
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = -Math.cos((value + 1/2) * Math.PI * 2) * radius2;
            inputRange.push(value);
            outputRange.push(move)
        }
        this.translateY2 = this.Butterfly_2.interpolate({ inputRange, outputRange })
    }

    componentWillMount() {
        // mount component
        this.ismounted_Level_Selection = true;

    }

    async componentDidMount(){
        // preload images (makes no differenz at the moment)
        preloadImages();

        // start animbunny Intervall, when loading screen is over
        const data = await preloadImages();
        if (data !== null) {
            timer.setTimeout( this,'loading',
                () => {
                    this.setState({ isLoading: false });
                    intro.setCurrentTime(0.4);
                    intro.play();
                    timer.setTimeout( this,'wink',
                        () => {
                            this.setState({opacity0:0,opacity1:1,bunny_order:1})
                            timer.setInterval( this,'bunny_order',
                                () => {
                                    this.animbunny()
                                },3000)
                        },6000
                    )
                },3000
            )
        }
        //animate butterfly_1
        this.Butterfly_1.setValue(0);
        Animated.loop(
            Animated.timing(this.Butterfly_1, {
                toValue: 1,
                duration: 16000,
            })
        ).start();
        // animate butterfly_2
        this.Butterfly_2.setValue(0);
        Animated.loop(
            Animated.timing(this.Butterfly_2, {
                toValue: 1,
                duration: 16000,
            })
        ).start();
        //animate cloud_1
        Animated.loop(
            Animated.timing(this.state.cloud_1,{
                toValue: width+400,
                duration: 100000,
                asing:Easing.linear
            })
        ).start();
        //animate cloud_2
        Animated.loop(
            Animated.timing(this.state.cloud_2,{
                toValue: width+240,
                duration: 100000,
                asing:Easing.linear
            })
        ).start();
        //animate cloud_3
        Animated.loop(
            Animated.timing(this.state.cloud_3,{
                toValue: width+80,
                duration: 100000,
                asing:Easing.linear
            })
        ).start()
    }
    resetLvLcounters() {
        this.setState({counterLvL1:0,counterLvL2:0,counterLvL3:0,counterLvL4:0,played1:0,played2:0,played3:0,played4:0})
    }
    componentWillUnmount() {
        // unmount component
        this.ismounted_Level_Selection = false;
        // cancle all timer and interal
        timer.timeoutExists(this);
        timer.timeoutExists(this);
    }
    // Selection LvL1
    LvL1Press = () => {
        if (this.state.counterLvL1 === 1 && this.state.bunny_order!==4){
            this.props.navigation.navigate('Level_1', { language: this.state.language,},this.resetLvLcounters())
        } else {
            this.setState(prevState => ({ counterLvL1: prevState.counterLvL1 + 1 }));
            this.setState({played2:0,played3:0,played4:0,counterLvL2:0,counterLvL3:0,counterLvL4:0,bunny_order:4})
        }
    };
    // Selection LvL2
    LvL2Press = () => {
        if (this.state.counterLvL2 === 1 && this.state.bunny_order!==4){
            this.props.navigation.navigate('Level_2', { language: this.state.language },this.resetLvLcounters())
        } else {
            this.setState(prevState => ({ counterLvL2: prevState.counterLvL2 + 1 }));
            this.setState({played1:0,played3:0,played4:0,counterLvL1:0,counterLvL3:0,counterLvL4:0,bunny_order:4})
        }
    };
    // Selection LvL3
    LvL3Press = () => {
        if (this.state.counterLvL3 === 1 && this.state.bunny_order!==4){
            this.props.navigation.navigate('Level_3', { language: this.state.language },this.resetLvLcounters())
        } else {
            this.setState(prevState => ({ counterLvL3: prevState.counterLvL3 + 1 }));
            this.setState({played1:0,played2:0,played4:0,counterLvL1:0,counterLvL2:0,counterLvL4:0,bunny_order:4})
        }
    };
    // Selection LvL4
    LvL4Press = () => {
        if (this.state.counterLvL4 === 1 && this.state.bunny_order!==4){
            this.props.navigation.navigate('Level_4', { language: this.state.language },this.resetLvLcounters())
        } else {
            this.setState(prevState => ({ counterLvL4: prevState.counterLvL4 + 1 }));
            this.setState({played1:0,played2:0,played3:0,counterLvL1:0,counterLvL2:0,counterLvL3:0,bunny_order:4})
        }
    };
    // render flag for language
    language(){
        if(this.state.language===false) {
            return <TouchableOpacity disabled={this.state.disableButton_language} onPress={() =>
                this.setState({language:!this.state.language,disableButton_language:true,bunny_order:6},this.disablelanguagetimer())}>
                <View>
                    <Image
                        source={require('../assets/other/flag_ger.webp')}
                        style={{width: 40, height: 30}}
                    />
                </View>
            </TouchableOpacity>
        } else {
            return <TouchableOpacity disabled={this.state.disableButton_language} onPress={() =>
                this.setState({language:!this.state.language,disableButton_language:true,bunny_order:6},this.disablelanguagetimer())}>
                <View>
                    <Image
                        source={require('../assets/other/flag_eng.webp')}
                        style={{width:40,height:30}}
                    />
                </View>
            </TouchableOpacity>
        }
    }
    //disable language button for some time after pressed
    disablelanguagetimer(){
        timer.setTimeout(this,'language',() => this.setState({disableButton_language:false}),5000)
    }
    // get rdm number for idle animation bunny
    rdm(max) {
        this.setState({rdm:Math.floor(Math.random() * Math.floor(max))})
    }
    // control the different animations of bunny
    animbunny(){
        switch (this.state.bunny_order) {
            // wink-bunny_order at the start
            case 0:
                this.setState({opacity0:0,opacity1:1,opacity2:0,opacity3:0,opacity4:0,opacity5:0,opacity6:0,bunny_order:2,disableButton_bunny:false});
                break;
            // idle02-bunny_order
            case 1:
                this.rdm(2);
                if(this.state.rdm===0){
                    this.setState({opacity0:0,opacity1:0,opacity2:1,opacity3:0,opacity4:0,opacity5:0,opacity6:0,bunny_order:2,disableButton_bunny:false});
                } else {
                    this.setState({opacity0:0,opacity1:0,opacity2:0,opacity3:1,opacity4:0,opacity5:0,opacity6:0,bunny_order:3,disableButton_bunny:false});
                }
                break;
            // idle01-bunny_order
            case 2:
                this.setState({opacity0:0,opacity1:1,opacity2:0,opacity3:0,opacity4:0,opacity5:0,opacity6:0,bunny_order:1,disableButton_bunny:false});
                break;
            // idle03-bunny_order
            case 3:
                this.setState({opacity0:0,opacity1:1,opacity2:0,opacity3:0,opacity4:0,opacity5:0,opacity6:0,bunny_order:1,disableButton_bunny:false});
                break;
            // speak-bunny_order lvl-selection
            case 4:
                this.setState({opacity0:0,opacity1:0,opacity2:0,opacity3:0,opacity4:1,opacity5:0,opacity6:0,disableButton_bunny:false});
                // lvl 1 selected
                if(this.state.counterLvL1 >=1 && this.state.played1===0) {
                    this.setState({played1:1});
                    level_1.setCurrentTime(0.5);
                    level_1.play();
                    timer.setTimeout(this,'level_1',() => {
                        this.setState({bunny_order:1,opacity4:0,opacity6:1});
                        if(this.state.counterLvL1>=2){
                             this.props.navigation.navigate('Level_1', { language: this.state.language },this.resetLvLcounters())
                        }
                     },4000)
                }
                // lvl 2 selected
                else if(this.state.counterLvL2 >=1 && this.state.played2===0){
                    this.setState({played2:1});
                    level_2.setCurrentTime(0.5);
                    level_2.play();
                    timer.setTimeout(this,'level_2',() => {
                        this.setState({bunny_order:1,opacity4:0,opacity6:1});
                        if(this.state.counterLvL2>=2){
                            this.props.navigation.navigate('Level_2', { language: this.state.language },this.resetLvLcounters())
                        }
                    },5000)
                }
                // lvl 3 selected
                else if(this.state.counterLvL3 >=1 && this.state.played3===0){
                    this.setState({played3:1});
                    level_3.setCurrentTime(0.5);
                    level_3.play();
                    timer.setTimeout(this,'level_3',() => {
                         this.setState({bunny_order:1,opacity4:0,opacity6:1});
                         if(this.state.counterLvL3>=2){
                             this.props.navigation.navigate('Level_3', { language: this.state.language },this.resetLvLcounters())
                         }
                    },4000)
                }
                // lvl 4 selected
                else if(this.state.counterLvL4 >=1 && this.state.played4===0) {
                    this.setState({played4:1});
                    level_4.setCurrentTime(0.5);
                    level_4.play();
                    timer.setTimeout(this,'level_4',() => {
                        this.setState({bunny_order:1,opacity4:0,opacity6:1});
                        if(this.state.counterLvL4>=2){
                            this.props.navigation.navigate('Level_4', { language: this.state.language },this.resetLvLcounters())
                        }
                    },5000);
                }
                break;
            // onTouch-bunny_order
            case 5:
                this.setState({bunny_order:1,opacity0:0,opacity1:0,opacity2:0,opacity3:0,opacity4:0,opacity5:1,opacity6:0,disableButton_bunny:true});
                onTouch.play();
                break;
            // speak-bunny_order language-selection
            case 6:
                this.setState({bunny_order:1,opacity0:0,opacity1:0,opacity2:0,opacity3:0,opacity4:1,opacity5:0,opacity6:0,disableButton_bunny:true});
                if(this.state.language===false){
                    speach_ger.setCurrentTime(0.5);
                    speach_ger.play();
                } else {
                    speach_eng.setCurrentTime(0.5);
                    speach_eng.play();
                }
                break;
            // speak-bunny_order exit
            case 7:
                this.setState({opacity0:0,opacity1:0,opacity2:0,opacity3:0,opacity4:1,opacity5:0,opacity6:0,bunny_order:1,disableButton_bunny:false});
                exit.setCurrentTime(0.5);
                exit.play();
                timer.setTimeout(this,'exit',() => {
                    BackHandler.exitApp()
                },3000);
                break;
        }
    }
    // render bunny depending on bunny_order
    renderbunny(){
        return <View>
                    <Image source={require('../assets/bunny/wink.gif')} style={[styles.bunny,{opacity:this.state.opacity0}]}/>

                    <Image
                        source={require('../assets/bunny/idle_02.gif')} style={[styles.bunny,{opacity:this.state.opacity1}]}/>
                     <Image
                        source={require('../assets/bunny/idle_01.gif')} style={[styles.bunny,{opacity:this.state.opacity2}]}/>
                    <Image
                        source={require('../assets/bunny/idle_03.gif')} style={[styles.bunny,{opacity:this.state.opacity3}]}/>
                    <Image
                        source={require('../assets/bunny/speak_01.gif')} style={[styles.bunny,{opacity:this.state.opacity4}]}/>
                    <Image
                        source={require('../assets/bunny/onTouch.gif')} style={[styles.bunny,{opacity:this.state.opacity5}]}/>
                    <Image
                        source={require('../assets/bunny/initial_bunny.webp')} style={[styles.bunny,{opacity:this.state.opacity6}]}/>
                    <TouchableOpacity disabled={this.state.disableButton_bunny} style={[styles.bunny]} onPress={() =>
                        this.setState({bunny_order:5})}>
                    </TouchableOpacity>
        </View>
    }
    // Press function for exit
    exitPress = () => {
        this.setState({
            bunny_order:7
        })
    };
    // Testing Code for variables:
    //<View style={[{position:'absolute'},{alignSelf:'center'}]}>
    //<Text>disabled:{String(this.state.disableButton_bunny)}</Text>
    //<Text>bunny_order:{this.state.bunny_order}</Text>
    //</View>
    render() {
        if (this.ismounted_Level_Selection === true){
            if (this.state.isLoading) {
                return <SplashScreen />;
            } else {
                const transform = [{ translateY: this.translateY }, {translateX: this.translateX}];
                const transform2 = [{ translateY: this.translateY2 }, {translateX: this.translateX2}];
                return (
                    <ImageBackground source={require('../assets/other/Level_Selection.webp')} style={styles.background}>
                        <Animated.Image source={require('../assets/animations/butterfly_2.webp')} style={[styles.butterflys,{
                            bottom:'40%',left:'78%', transform:transform2 }]}/>
                        <Animated.Image source={require('../assets/other/cloud.webp')} style ={[styles.cloud,{left:this.state.cloud_1,
                            top:height/10}]} />
                        <Animated.Image source={require('../assets/other/cloud.webp')} style ={[styles.cloud,{left:this.state.cloud_2,
                            top:height/30}]} />
                        <Animated.Image source={require('../assets/other/cloud.webp')} style ={[styles.cloud,{left:this.state.cloud_3,
                            top:height/20}]} />
                        <Image source={require('../assets/other/Level_Selection_front.webp')}
                               style={{position:'absolute',width: '100%', height: '100%'}}  />
                        <Animated.Image source={require('../assets/animations/butterfly_1.webp')} style={[styles.butterflys,{
                            bottom:height/5,marginLeft:width/30, transform }]}/>
                        {selectArrow(this.state.counterLvL1,this.state.counterLvL2,this.state.counterLvL3,this.state.counterLvL4,)}
                        {this.renderbunny()}
                        <View style={[styles.eggsView]}>
                            <TouchableOpacity   onPress={this.LvL1Press}>
                                <Image
                                    source={require('../assets/animations/egg_1.webp')}
                                    style={[styles.eggs,{bottom:'5%'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity   onPress={this.LvL2Press}>
                                <Image
                                    source={require('../assets/animations/egg_2.webp')}
                                    style={[styles.eggs,{bottom:'6%'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity   onPress={this.LvL3Press}>
                                <Image
                                    source={require('../assets/animations/egg_3.webp')}
                                    style={[styles.eggs,{bottom:'5%'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity   onPress={this.LvL4Press}>
                                <Image
                                    source={require('../assets/animations/egg_4.webp')}
                                    style={[styles.eggs,{bottom:'7%'}]}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <Animatable.View
                                style={styles.exitView} animation={{
                                from: {left: -120},
                                to: {left: 0}
                            }} duration={1000} delay={1000} easing={"linear"}>
                                <TouchableOpacity onPress={this.exitPress}>
                                    <View>
                                        <Image
                                            source={require('../assets/other/cross.webp')}
                                            style={{width:35,height:25}}/>
                                    </View>
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View
                                style={styles.languageView} animation={{
                                from: {left: -120},
                                to: {left: 0}
                            }} duration={1000} delay={1000} easing={"linear"}>
                                {this.language()}
                            </Animatable.View>
                        </View>
                        <View pointerEvents="none"  >
                            <Image  source={require('../assets/other/Level_Selection_front2.webp')}
                                    style={styles.font2_gras} />
                        </View>
                    </ImageBackground>
                );
            }
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
    eggs:{
        width:width/5.5,
        height:height/3,
    },
    butterflys:{
        width:width/25,
        height:height/17,
        position:'absolute'
    },
    cloud:{
        width:width/8,
        height:height/8,
        position:'absolute',
    },
    font2_gras: {
        flex: 1,
        bottom:0,
        position: 'absolute',
        width:width,
        height:height,
    },
    eggsView: {
        flex:4,
        justifyContent:'center',
        alignItems:'flex-end',
        flexDirection: 'row',
        marginRight:width/15

    },
    buttonView: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    languageView: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        top:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70/2,
    },
    exitView: {
        width: 70,
        height: 70,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth:6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70/2,
    },
    bunny: {
        width: width/6,
        height: height/2.5,
        position:'absolute',
        marginLeft:width/1.2,
        marginTop:height/2
    },
});
