import React from 'react';
import {
    BackHandler,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    TouchableOpacity,
    Easing,
    Image,
} from 'react-native';
import {preloadImages} from "../components/preloadimages";
import {selectArrow} from "../components/selectArrow";
import * as Animatable from "react-native-animatable";
import SplashScreen from "./SplashScreen";
import FastImage from "react-native-fast-image";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {intro,exit,level_1,level_2,level_3,level_4,speach_eng,speach_ger,onTouch,music} from "../components/sounds";

const timer = require('react-native-timer');

export default class Level_Selection extends React.Component {
    ismounted_Level_Selection = false;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            cloud_1: new Animated.Value(-80),
            cloud_2: new Animated.Value(-240),
            cloud_3: new Animated.Value(-400),
            counterLvL1: 0,
            counterLvL2: 0,
            counterLvL3: 0,
            counterLvL4: 0,
            counterLanguage: 0,
            language: false,
            disableButton_language: false,
            bunny_anim: 3,
            bunny_order: 1,
            rdm: 0,
            disableButton_bunny: true,
            played1: 0,
            played2: 0,
            played3: 0,
            played4: 0,
            opacity0: 0,
            exitButton: 0,
            one: 1,
            zero: 0,
            test: 0
        };

        this.Butterfly_1 = new Animated.Value(0);
        this.Butterfly_2 = new Animated.Value(0);
        var range = 1, snapshot = 50, radius = 20, radius2 = 50;

        // translateX butterfly_1
        var inputRange = [], outputRange = [];
        for (var i = 0; i <= snapshot; ++i) {
            var value = i / snapshot;
            var move = Math.sin(value * Math.PI * 2) * radius;
            inputRange.push(value)
            outputRange.push(move)
        }
        this.translateX = this.Butterfly_1.interpolate({inputRange, outputRange});

        // translateY butterfly_1
        var inputRange = [], outputRange = []
        for (var i = 0; i <= snapshot; ++i) {
            var value = i / snapshot;
            var move = -Math.cos(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move)
        }
        this.translateY = this.Butterfly_1.interpolate({inputRange, outputRange});

        // translateX2 butterfly_2
        var inputRange = [], outputRange = [];
        for (var i = 0; i <= snapshot; ++i) {
            var value = i / snapshot;
            var move = -Math.sin((value + 1 / 2) * Math.PI * 2) * radius2;
            inputRange.push(value);
            outputRange.push(move)
        }
        this.translateX2 = this.Butterfly_2.interpolate({inputRange, outputRange});

        // translateY2 butterfly_2
        var inputRange = [], outputRange = [];
        for (var i = 0; i <= snapshot; ++i) {
            var value = i / snapshot;
            var move = -Math.cos((value + 1 / 2) * Math.PI * 2) * radius2;
            inputRange.push(value);
            outputRange.push(move)
        }
        this.translateY2 = this.Butterfly_2.interpolate({inputRange, outputRange})
    }

    componentWillMount() {
        // mount component
        this.ismounted_Level_Selection = true;
    }

    async componentDidMount() {
        // preload images
        preloadImages();
        // start animbunny Intervall, when loading screen is over
        const data = await preloadImages();
        if (data !== null) {
            timer.setTimeout(this, 'loading',
                () => {
                    this.setState({isLoading: false});
                    this.animbunny();
                }, 3000
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
            Animated.timing(this.state.cloud_1, {
                toValue: wp('100%') + 400,
                duration: 100000,
                asing: Easing.linear
            })
        ).start();
        //animate cloud_2
        Animated.loop(
            Animated.timing(this.state.cloud_2, {
                toValue: wp('100%') + 240,
                duration: 100000,
                asing: Easing.linear
            })
        ).start();
        //animate cloud_3
        Animated.loop(
            Animated.timing(this.state.cloud_3, {
                toValue: wp('100%') + 80,
                duration: 100000,
                asing: Easing.linear
            })
        ).start()
    }

    componentWillUnmount() {
        // unmount component
        this.ismounted_Level_Selection = false;
        // cancle all timer and interal
        timer.timeoutExists(this);
        global.sound.stop();
        global.music.stop();
    }

    resetLvLcounters() {
        this.setState({
            counterLvL1: 0,
            counterLvL2: 0,
            counterLvL3: 0,
            counterLvL4: 0,
            played1: 0,
            played2: 0,
            played3: 0,
            played4: 0
        })
    }

    // Selection LvL1
    LvL1Press = () => {
        if (this.state.counterLvL1 === 1 && this.state.bunny_order !== 4) {
            timer.timeoutExists(this);
            global.sound.stop();
            this.setState({bunny_anim: 0, bunny_order: 1});
            this.props.navigation.navigate('Level_1', {language: this.state.language,}, this.resetLvLcounters())
        } else {
            this.setState(prevState => ({counterLvL1: prevState.counterLvL1 + 1}));
            this.setState({
                counterLanguage: 0,
                played2: 0,
                played3: 0,
                played4: 0,
                counterLvL2: 0,
                counterLvL3: 0,
                counterLvL4: 0,
                bunny_order: 3,
            })
        }
    };
    // Selection LvL2
    LvL2Press = () => {
        if (this.state.counterLvL2 === 1 && this.state.bunny_order !== 4) {
            timer.timeoutExists(this);
            global.sound.stop();
            this.setState({bunny_anim: 0, bunny_order: 1});
            this.props.navigation.navigate('Level_2', {language: this.state.language}, this.resetLvLcounters())
        } else {
            this.setState(prevState => ({counterLvL2: prevState.counterLvL2 + 1}));
            this.setState({
                counterLanguage: 0,
                played1: 0,
                played3: 0,
                played4: 0,
                counterLvL1: 0,
                counterLvL3: 0,
                counterLvL4: 0,
                bunny_order: 5
            })
        }
    };
    // Selection LvL3
    LvL3Press = () => {
        if (this.state.counterLvL3 === 1 && this.state.bunny_order !== 4) {
            timer.timeoutExists(this);
            global.sound.stop();
            this.setState({bunny_anim: 0, bunny_order: 1});
            this.props.navigation.navigate('Level_3', {language: this.state.language}, this.resetLvLcounters())
        } else {
            this.setState(prevState => ({counterLvL3: prevState.counterLvL3 + 1}));
            this.setState({
                counterLanguage: 0,
                played1: 0,
                played2: 0,
                played4: 0,
                counterLvL1: 0,
                counterLvL2: 0,
                counterLvL4: 0,
                bunny_order: 3
            })
        }
    };
    // Selection LvL4
    LvL4Press = () => {
        if (this.state.counterLvL4 === 1 && this.state.bunny_order !== 4) {
            timer.timeoutExists(this);
            global.sound.stop();
            this.setState({bunny_anim: 0, bunny_order: 1});
            this.props.navigation.navigate('Level_4', {language: this.state.language}, this.resetLvLcounters())
        } else {
            this.setState(prevState => ({counterLvL4: prevState.counterLvL4 + 1}));
            this.setState({
                counterLanguage: 0,
                played1: 0,
                played2: 0,
                played3: 0,
                counterLvL1: 0,
                counterLvL2: 0,
                counterLvL3: 0,
                bunny_order: 5
            })
        }
    };

    // render flag for language
    language() {
        if (this.state.language === false) {
            return <TouchableOpacity disabled={this.state.disableButton_language} onPress={() =>
                this.setState({
                    counterLanguage: 1,
                    language: !this.state.language,
                    disableButton_language: true,
                    bunny_order: 3
                }, this.disablelanguagetimer())}>
                <View>
                    <Image
                        source={require('../assets/other/flag_ger.webp')}
                        style={{width: 40, height: 30}}
                    />
                </View>
            </TouchableOpacity>
        } else {
            return <TouchableOpacity disabled={this.state.disableButton_language} onPress={() =>
                this.setState({
                    counterLanguage: 1,
                    language: !this.state.language,
                    disableButton_language: true,
                    bunny_order: 3
                }, this.disablelanguagetimer())}>
                <View>
                    <Image
                        source={require('../assets/other/flag_eng.webp')}
                        style={{width: 40, height: 30}}
                    />
                </View>
            </TouchableOpacity>
        }
    }

    //disable language button for some time after pressed
    disablelanguagetimer() {
        timer.setTimeout(this, 'language', () => this.setState({disableButton_language: false}), 8000)
    }

    // get rdm number for idle animation bunny
    rdm(max) {
        this.setState({rdm: Math.floor(Math.random() * Math.floor(max))})
    }

    // control the different animations of bunny
    animbunny() {
        switch (this.state.bunny_anim) {
            // idle02-bunny_order
            case 0:
                this.rdm(2);
                timer.setTimeout(this, 'idle_02_1a', () => {
                    this.setState({opacity0: 1})
                }, 5300);
                timer.setTimeout(this, 'idle_02_1b', () => {
                    this.setState({opacity0: 0})
                }, 6700);
                timer.setTimeout(this, 'idle_02_1', () => {
                    switch (this.state.bunny_order) {
                        case 1:
                            if (this.state.rdm === 0) {
                                this.setState({bunny_anim: 1, disableButton_bunny: false});
                                this.animbunny()
                            } else {
                                this.setState({bunny_anim: 2, disableButton_bunny: false});
                                this.animbunny()
                            }
                            break;
                        case 3:
                            this.setState({bunny_anim: 5, disableButton_bunny: true});
                            this.animbunny();
                            break;
                        case 4:
                            this.setState({bunny_anim: 4, disableButton_bunny: true});
                            this.animbunny();
                            break;
                        case 5:
                            this.setState({bunny_anim: 6, disableButton_bunny: true});
                            this.animbunny();
                            break;
                        case 6:
                            this.setState({bunny_anim: 7, disableButton_bunny: true});
                            this.animbunny();
                            break;
                    }
                }, 6000);
                break;
            // idle01-bunny_order
            case 1:
                timer.setTimeout(this, 'idle_01_a', () => {
                    this.setState({opacity0: 1})
                }, 3300);
                timer.setTimeout(this, 'idle_01_b', () => {
                    this.setState({opacity0: 0})
                }, 4700);
                timer.setTimeout(this, 'idle_01', () => {
                    this.helper01();
                }, 4000);
                break;
            // idle03-bunny_order
            case 2:
                timer.setTimeout(this, 'idle_03_a', () => {
                    this.setState({opacity0: 1})
                }, 3800);
                timer.setTimeout(this, 'idle_03_b', () => {
                    this.setState({opacity0: 0})
                }, 5200);
                timer.setTimeout(this, 'idle_03', () => {
                    this.helper01();
                }, 4500);
                break;
            // speak-bunny_order (intro)
            case 3:
                timer.setTimeout(this, 'sound_intro', () => {
                    {
                        intro()
                    }
                    {
                        music(this.state.zero)
                    }
                }, 200);
                timer.setTimeout(this, 'wink_a', () => {
                    this.setState({opacity0: 1})
                }, 6300);
                timer.setTimeout(this, 'wink_b', () => {
                    this.setState({opacity0: 0})
                }, 7700);
                timer.setTimeout(this, 'wink', () => {
                    this.helper01();
                }, 7000);
                break;
            // onTouch-bunny_order
            case 4:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_onTouch', () => {
                    {
                        onTouch()
                    }
                }, 1000);
                timer.setTimeout(this, 'onTouch_a', () => {
                    this.setState({opacity0: 1})
                }, 3800);
                timer.setTimeout(this, 'onTouch_b', () => {
                    this.setState({opacity0: 0})
                }, 5200);
                timer.setTimeout(this, 'onTouch', () => {
                    this.helper01();
                }, 4500);
                break;
            //speak04-lvl 1 +3 + language
            case 5:
                this.setState({bunny_order: 1});
                if (this.state.counterLvL1 >= 1 && this.state.counterLanguage === 0) {
                    timer.setTimeout(this, 'sound_level_1', () => {
                        {
                            level_1()
                        }
                    }, 50);
                } else if (this.state.counterLvL3 >= 1 && this.state.counterLanguage === 0) {
                    timer.setTimeout(this, 'sound_level_3', () => {
                        {
                            level_3()
                        }
                    }, 50);
                } else if (this.state.counterLanguage === 1) {
                    if (this.state.language === false) {
                        timer.setTimeout(this, 'sound_ger', () => {
                            {
                                speach_ger()
                            }
                        }, 50);
                    } else {
                        timer.setTimeout(this, 'sound_eng', () => {
                            {
                                speach_eng()
                            }
                        }, 50);
                    }
                }
                if (this.state.counterLvL1 >= 1 && this.state.counterLanguage === 0) {
                    timer.setTimeout(this, 'speak_04_ba', () => {
                        this.setState({opacity0: 0})
                    }, 6700);
                } else if (this.state.counterLvL3 >= 1 && this.state.counterLanguage === 0) {
                    timer.setTimeout(this, 'speak_04_bb', () => {
                        this.setState({opacity0: 0})
                    }, 6700);
                } else if (this.state.counterLanguage === 1) {
                    timer.setTimeout(this, 'speak_04_bc', () => {
                        this.setState({opacity0: 0})
                    }, 6700);
                }
                timer.setTimeout(this, 'speak_04_a', () => {
                    this.setState({opacity0: 1})
                }, 5300);
                timer.setTimeout(this, 'speak_04', () => {
                    this.helper01();
                }, 6000);
                break;
            //speak05-lvl 2 +4
            case 6:
                this.setState({bunny_order: 1});
                if (this.state.counterLvL2 >= 1) {
                    timer.setTimeout(this, 'sound_level_2', () => {
                        {
                            level_2()
                        }
                    }, 50);
                } else if (this.state.counterLvL4 >= 1) {
                    timer.setTimeout(this, 'sound_level_4', () => {
                        {
                            level_4()
                        }
                    }, 50);
                }
                if (this.state.counterLvL2 >= 1) {
                    timer.setTimeout(this, 'speak_05_ba', () => {
                        this.setState({opacity0: 0})
                    }, 7700);
                } else if (this.state.counterLvL4 >= 1) {
                    timer.setTimeout(this, 'speak_05_bb', () => {
                        this.setState({opacity0: 0})
                    }, 7700);
                }
                timer.setTimeout(this, 'speak_05_a', () => {
                    this.setState({opacity0: 1})
                }, 6300);
                timer.setTimeout(this, 'speak_05', () => {
                    this.helper01();
                }, 7000);
                break;
            //speak_03 exit
            case 7:
                this.setState({bunny_order: 1});
                timer.setTimeout(this, 'sound_exit', () => {
                    {
                        exit()
                    }
                }, 1000);
                timer.setTimeout(this, 'exit_a', () => {
                    this.setState({opacity0: 1})
                }, 4300);
                timer.setTimeout(this, 'exit_b', () => {
                    this.setState({opacity0: 0})
                }, 5700);
                timer.setTimeout(this, 'exit', () => {
                    BackHandler.exitApp();
                    global.music.stop();
                    global.sound.stop();

                }, 5000);
                break;
        }
    }

    // helper for animbunny()
    helper01() {
        switch (this.state.bunny_order) {
            case 1:
                this.setState({bunny_anim: 0, disableButton_bunny: false});
                this.animbunny();
                break;
            case 3:
                this.setState({bunny_anim: 5, disableButton_bunny: true});
                this.animbunny();
                break;
            case 4:
                this.setState({bunny_anim: 4, disableButton_bunny: true});
                this.animbunny();
                break;
            case 5:
                this.setState({bunny_anim: 6, disableButton_bunny: true});
                this.animbunny();
                break;
            case 6:
                this.setState({bunny_anim: 7, disableButton_bunny: true});
                this.animbunny();
                break;
        }
    }

    // render bunny depending on bunny_order
    renderbunny() {
        switch (this.state.bunny_anim) {
            case 0:
                return <View>
                    <Image
                        source={require('../assets/bunny/idle_02.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 1:
                return <View>
                    <Image
                        source={require('../assets/bunny/idle_01.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 2:
                return <View>
                    <Image
                        source={require('../assets/bunny/idle_03.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 3:
                return <View>
                    <Image
                        source={require('../assets/bunny/wink.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 4:
                return <View>
                    <Image
                        source={require('../assets/bunny/onTouch.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 5:
                return <View>
                    <Image
                        source={require('../assets/bunny/speak_04.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 6:
                return <View>
                    <Image
                        source={require('../assets/bunny/speak_05.webp')}
                        style={[styles.bunny]}/>
                </View>;
            case 7:
                return <View>
                    <Image
                        source={require('../assets/bunny/speak_03.webp')}
                        style={[styles.bunny]}/>
                </View>;
        }
    }

    // Press function for exit
    exitPress = () => {
        this.setState(prevState => ({exitButton: prevState.exitButton + 1}));
        this.setState({bunny_order: 6});
        if (this.state.exitButton === 1) {
            BackHandler.exitApp();
            global.music.stop();
            global.sound.stop();
        }
    };

    renderTouch() {
        return <View>
            <TouchableOpacity disabled={this.state.disableButton_bunny} style={[styles.bunny]} onPress={() =>
                this.setState({bunny_order: 4})}>
            </TouchableOpacity>
        </View>
    }

    render() {
        if (this.ismounted_Level_Selection === true) {
            if (this.state.isLoading) {
                return <SplashScreen/>;
            } else {
                const transform = [{translateY: this.translateY}, {translateX: this.translateX}];
                const transform2 = [{translateY: this.translateY2}, {translateX: this.translateX2}];
                return (
                    <ImageBackground source={require('../assets/other/Level_Selection.webp')} style={styles.background}>

                        <Animated.Image source={require('../assets/animations/butterfly_2.webp')}
                                        style={[styles.butterflys, {
                                            bottom: hp('40%'), left: wp('77%'), transform: transform2
                                        }]}/>
                        <Animated.Image source={require('../assets/other/cloud.webp')} style={[styles.cloud, {
                            left: this.state.cloud_1,
                            top: hp('5%')
                        }]}/>
                        <Animated.Image source={require('../assets/other/cloud.webp')} style={[styles.cloud, {
                            left: this.state.cloud_2,
                            top: hp('9%')
                        }]}/>
                        <Animated.Image source={require('../assets/other/cloud.webp')} style={[styles.cloud, {
                            left: this.state.cloud_3,
                            top: hp('7%')
                        }]}/>
                        <Image source={require('../assets/other/Level_Selection_front.webp')}
                               style={{position: 'absolute', width: '100%', height: '100%'}}/>
                        <Animated.Image source={require('../assets/animations/butterfly_1.webp')}
                                        style={[styles.butterflys, {
                                            bottom: hp('18%'), marginLeft: wp('2%'), transform
                                        }]}/>
                        {selectArrow(this.state.counterLvL1, this.state.counterLvL2, this.state.counterLvL3, this.state.counterLvL4,)}
                        {this.renderbunny()}
                        <View>
                            <FastImage
                                source={require('../assets/bunny/initial_bunny.png')}
                                style={[styles.bunny, {opacity: this.state.opacity0}]}/>
                        </View>
                        {this.renderTouch()}
                        <View pointerEvents="none">
                            <Image source={require('../assets/other/Level_Selection_front2.webp')}
                                   style={styles.font2_gras}/>
                        </View>
                        <View style={[styles.eggsView]}>
                            <TouchableOpacity onPress={this.LvL1Press}>
                                <Image
                                    source={require('../assets/animations/egg_1.webp')}
                                    style={[styles.eggs, {bottom: hp('2%')}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.LvL2Press}>
                                <Image
                                    source={require('../assets/animations/egg_2.webp')}
                                    style={[styles.eggs, {bottom: hp('4%')}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.LvL3Press}>
                                <Image
                                    source={require('../assets/animations/egg_3.webp')}
                                    style={[styles.eggs, {bottom: hp('3%')}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.LvL4Press}>
                                <Image
                                    source={require('../assets/animations/egg_4.webp')}
                                    style={[styles.eggs, {bottom: hp('5%')}]}/>
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
                                            style={{width: 35, height: 25}}/>
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

                        <View pointerEvents="none">
                            <Image source={require('../assets/other/Level_Selection_front2.webp')}
                                   style={styles.font2_gras}/>
                        </View>
                    </ImageBackground>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    eggs: {
        width: wp('18%'),
        height: hp('36%'),
        resizeMode: 'contain',
    },
    butterflys: {
        width: wp('8%'),
        height: hp('8%'),
        position: 'absolute',
        resizeMode: 'contain'
    },
    cloud: {
        width: wp('12%'),
        height: hp('12%'),
        position: 'absolute',
    },
    font2_gras: {
        flex: 1,
        left: wp('0%'),
        bottom: hp('0%'),
        position: 'absolute',
        width: wp('100%'),
        height: hp('100%'),
        resizeMode: 'stretch'
    },
    eggsView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginRight: wp('10%')

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
        top: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70 / 2,
    },
    exitView: {
        width: 70,
        height: 70,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70 / 2,
    },
    bunny: {
        width: wp('16%'),
        height: hp('42%'),
        position: 'absolute',
        marginLeft: wp('83%'),
        marginTop: hp('53%'),
    },
});
