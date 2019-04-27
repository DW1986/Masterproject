import React, { Component } from 'react';
import {
    Animated,
    AppRegistry, Easing, ImageBackground,
    StyleSheet,
    View,Dimensions,Image,Text, TouchableOpacity
} from 'react-native';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

var {width, height} = Dimensions.get('window')
export default class Level_1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colorpanel : new Animated.Value(-90),
            backpanel : new Animated.Value(-90),
            colorselected:0,
            order:0,
            drawcolor:'#FD0000'
        }
    }
    componentDidMount(){
            Animated.timing(this.state.colorpanel,{
                toValue: 0,
                duration: 2000,
                easing:Easing.bounce,
            }
        ).start()
        Animated.timing(this.state.backpanel,{
                delay:2000,
                toValue: 0,
                duration: 2000,
                easing:Easing.bounce,
            }
        ).start()

    }



    _order(){
        switch(this.state.order) {

            case this.state.order =0:
                if (this.state.colorselected === 1)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/red_selected.png')}/>

                return <Image style={styles.colors}
                              source={require('../assets/colors/red.png')}/>
            case '1':
                if (this.state.colorselected === 2)
                    return <Image style={styles.colors}
                                  source={require('../assets/colors/red_selected.png')}/>

                return <Image style={styles.images}
                              source={require('../assets/colors/red.png')}/>

            default:


        }
    }
chanceStrokeColor(){
    switch(this.state.drawcolor,this.state.colorselected) {

        case this.state.order =0 , this.state.colorselected =1:
            this.setState.drawcolor='#1C04F2'

        default:


    }
}

    render() {
        return (


            <ImageBackground source={require('../assets/fonts/Level1.png')} style={styles.background}>
                 <View   style={styles.paint}>
                     <SketchCanvas
                         style={{ flex: 1 }}
                         strokeColor={this.state.drawcolor}
                         strokeWidth={15}
                     />
                     <View pointerEvents="none"  style={{position:'absolute'}}  >
                     <Image  style={styles.pictures}
                            source={require('../assets/pictures/red_fire_engine_alpha.png')}/>
                     </View>
                 </View>
                 <View style={styles.colortabview}>
                     <Animated.View

                        style ={[styles.colortab,{left:this.state.colorpanel}]} >
                        <TouchableOpacity onPress={() => this.setState({colorselected:1})}>

                            {this._order()}


                         </TouchableOpacity>

                     </Animated.View>
                 </View>
                <View style={styles.backtabview}>
                    <Animated.View

                        style ={[styles.backtab,{top:this.state.backpanel}]} >
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Level_Selection')}>
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
        position: 'absolute'


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
        width: 410,
        height: 254,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 3,
        marginBottom: 35,
        marginLeft: 7,

    },
    pictures: {
        width: 260,
        height: 160,
        marginLeft: 60,
        marginTop: 50
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
    }
});
