import * as Animatable from "react-native-animatable";
import {Dimensions, StyleSheet, Text} from "react-native";
import React from "react";

const {height} = Dimensions.get('window');

// render and animate the text on the woodShild depending on order for lvl 3
    export function text(order,textcolor1,textcolor2,textcolor3,text1,text2,text3) {
        switch (order) {
            case 0:
                return <Animatable.View animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 1:
            case 2:
                return <Text style={[styles.text, {color: textcolor1}]}>{text1}
                    <Text style={{color: 'black'}}> +
                        <Text style={{color: textcolor2}}> {text2}
                            <Text style={{color: 'black'}}> =
                                <Text style={{color: textcolor3}}> {text3}</Text>
                            </Text>
                        </Text>
                    </Text>
                </Text>;
            case 3:
                return <Animatable.View animation="flipOutY" duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 4:
                return <Animatable.View animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 5:
            case 6:
                return <Text style={[styles.text, {color: textcolor1}]}>{text1}
                    <Text style={{color: 'black'}}> +
                        <Text style={{color: textcolor2}}> {text2}
                            <Text style={{color: 'black'}}> =
                                <Text style={{color: textcolor3}}> {text3}</Text>
                            </Text>
                        </Text>
                    </Text>
                </Text>;
            case 7:
                return <Animatable.View
                    animation="flipOutY" duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 8:
                return <Animatable.View animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 9:
            case 10:
                return <Text style={[styles.text, {color: textcolor1}]}>{text1}
                    <Text style={{color: 'black'}}> +
                        <Text style={{color: textcolor2}}> {text2}
                            <Text style={{color: 'black'}}> =
                                <Text style={{color: textcolor3}}> {text3} </Text>
                            </Text>
                        </Text>
                    </Text>
                </Text>;
            case 11:
                return <Animatable.View animation="flipOutY" duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 12:
                return <Animatable.View animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 13:
            case 14:
                return <Text style={[styles.text, {color: textcolor1}]}>{text1}
                    <Text style={{color: 'black'}}> +
                        <Text style={{color: textcolor2}}> {text2}
                            <Text style={{color: 'black'}}> =
                                <Text style={{color: textcolor3}}> {text3}</Text>
                            </Text>
                        </Text>
                    </Text>
                </Text>;
            case 15:
                return <Animatable.View animation="flipOutY" duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 16:
                return <Animatable.View animation="flipInY" delay={2000} duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3} </Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
            case 17:
            case 18:
                return <Text style={[styles.text, {color: textcolor1}]}>{text1}
                    <Text style={{color: 'black'}}> +
                        <Text style={{color: textcolor2}}> {text2}
                            <Text style={{color: 'black'}}> =
                                <Text style={{color: textcolor3}}> {text3}</Text>
                            </Text>
                        </Text>
                    </Text>
                </Text>;
            case 19:
                return <Animatable.View animation="flipOutY" duration={3000} useNativeDriver={true}>
                    <Text style={[styles.text, {color: textcolor1}]}>{text1}
                        <Text style={{color: 'black'}}> +
                            <Text style={{color: textcolor2}}> {text2}
                                <Text style={{color: 'black'}}> =
                                    <Text style={{color: textcolor3}}> {text3} </Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Animatable.View>;
        }
    }

const styles = StyleSheet.create({
    text: {
        fontSize: height / 12.5,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textShadowColor: 'black',
        bottom: height / 18,
        overflow: 'visible',
        flexDirection: 'row',
        justifyContent: "flex-start"
    }
});
