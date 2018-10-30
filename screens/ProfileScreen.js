import React from 'react';
import { Platform } from 'react-native';

import { View, Button, AsyncStorage, TouchableOpacity, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from 'expo';

import SettingsScreen from './SettingsScreen';

const ProfilePix = 'https://graph.facebook.com/10217938171825644/picture';

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
    paddingTop: 18,
    // paddingLeft: 28,

    backgroundColor: '#D7CCC8',
  },

  profileContainer: {
    flex: 2,
    backgroundColor: '#BCAAA4',
  },

  profilePhoto: {
    alignSelf: 'center',
    width: 80, height: 80, borderRadius: 40,
    marginTop: 8,
    marginBottom: 8
  },

  profileText: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 8
  }

  

});