import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text, Image,
    Modal, Dimensions,
    ActivityIndicator
} from 'react-native';

const { height, width } = Dimensions.get('window')

class NearYou extends Component {
    render() {
        return (
            <View style={{ width: width, height: 200, marginTop: 20, paddingHorizontal: 20 }}>
                <Image style={{
                    flex: 1, height: null, width: null,
                    resizeMode: 'cover', borderRadius: 0, borderWidth: 1,
                    borderColor: '#dddddd'
                }} source={this.props.imageUri} />
                <Text style={{ fontSize: 16, fontWeight: '400',
                                borderWidth: 1, borderColor: '#dddddd' }}>
                                {this.props.text}</Text>
            </View>

        );
    }
}

export default NearYou;