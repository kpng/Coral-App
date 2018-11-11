import React from 'react';
import { Platform } from 'react-native';

import { View, Button, AsyncStorage, TouchableOpacity, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from 'expo';

import SettingsScreen from './SettingsScreen';


export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: null,
    // title: 'Profile',
    headerTransparent: true,

    headerRight: <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
      <Icon.MaterialIcons
        name={'settings'}
        size={38}
        style={{ marginRight: 8 }}
      />
    </TouchableOpacity>
  });



  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.profileContainer}>
          <Image
            source={{ uri: this.props.screenProps.photoURL }}
            style={styles.profilePhoto}
          />

          <Text style={styles.profileText}>
            {this.props.screenProps.displayName}
          </Text>
        </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 23,
    // paddingLeft: 28,
    // marginTop: 32,

    backgroundColor: 'white',
  },

  profileContainer: {
    // flex: 2,
    // backgroundColor: '#BCAAA4',
    backgroundColor: 'white',
  },

  profilePhoto: {
    alignSelf: 'center',
    width: 50, height: 50, borderRadius: 25,
    marginTop: 38,
    marginBottom: 8
  },

  profileText: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 8
  }



});