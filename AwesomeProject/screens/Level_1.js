import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';

import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

export default class Level_1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <SketchCanvas
                        style={{ flex: 1 }}
                        strokeColor={'blue'}
                        strokeWidth={15}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
