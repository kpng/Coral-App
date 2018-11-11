import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text,
    Modal,
    ActivityIndicator
} from 'react-native';
import { Container, Content, Header, Item, Icon, Input, Button } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Camera, Permissions } from 'expo'

class CameraComponent extends Component {

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    render() {
        const { hasCameraPermission } = this.state

        // user did not grant permission but cancel the diaglog box
        if (hasCameraPermission === null) {
            return <View />
        }
        else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type}>
                        <Header searchBar rounded style={{
                            position: 'absolute', backgroundColor: 'transparent',
                            left: 0, top: 0, right: 0, zIndex: 100
                        }}>
                            <View style={{ flexDirection: 'row', flex: 4 }}>
                                <Icon name="ios-close" 
                                // onPress = { ()=> {return}}
                                style={{ color: 'white', fontSize: 48, fontWeight: 'bold' }} />
                            </View>

                            <View style={{ flexDirection: 'row', flex: 4, justifyContent: 'space-around'}}>
                            <Icon onPress = { ()=> {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back ? 
                                    Camera.Constants.Type.front : Camera.Constants.Type.back
                                })
                            }} 
                            name="ios-reverse-camera" style={{ color: 'white', fontSize: 48, fontWeight: 'bold'}} />
                            </View>
                        </Header>
                    </Camera>
                </View>
            )
        }

    }
}

export default CameraComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});