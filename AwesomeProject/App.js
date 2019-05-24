import React from 'react';
import { StyleSheet, View, PermissionsAndroid, Text, Alert } from 'react-native';
import { createAppContainer} from "react-navigation";
import AppNavigator from "./AppNavigator";

const AppContainer = createAppContainer(AppNavigator)


export async function request_WRITE_STORAGE_runtime_permission() {

    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                'title': 'WRITE_STORAGE Permission',
                'message': 'ReactNativeCode App needs access to WRITE_STORAGE '
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

            Alert.alert("WRITE_STORAGE Granted.");
        }
        else {

            Alert.alert("WRITE_STORAGE Not Granted");

        }
    } catch (err) {
        console.warn(err)
    }
}


export default class App extends React.Component {




    async componentDidMount() {

        await request_WRITE_STORAGE_runtime_permission()

    }
    render() {
        return (


                <AppContainer/>



        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});