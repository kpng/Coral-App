import React from 'react';
import { Platform } from 'react-native';

import { View, Button, AsyncStorage, TouchableOpacity, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from 'expo';
import { Avatar } from 'react-native-elements';

import SettingsScreen from './SettingsScreen';

const ProfilePix = 'https://graph.facebook.com/10217938171825644/picture';

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    // header: null,
    title: 'Profile',
    headerTransparent: true,

    headerRight:<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
    <Icon.MaterialIcons 
      name={'settings'}
      size={38} 
      style={{ marginRight: 8 }}
    />
    </TouchableOpacity>
  });
    


  render() {
    return(
      <ScrollView style={styles.container}>

        <Image source={{uri: 'https://graph.facebook.com/10217938171825644/picture/download.jpeg'}} style={[styles.bgImage]} />

      </ScrollView>

    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ffe',
  },
  header:{
    backgroundColor: '#1f1f1d',
    paddingTop: 30,
    paddingBottom: 17,
    position: 'relative',
    flex: 2.4
  },
  body: {
    flex: 2
  },
  overlay: {
    height: null,
    width: null,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    paddingTop: 17,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  menuIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  menuIconTouchable: {
    position: 'absolute',
    left: 11,
    top: 25,
    zIndex: 9,
    padding: 5
  },
  row:{
    flexDirection: 'row',

  },
  titleContent:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12
  },
  title: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginRight: 10,
    fontFamily: 'Oswald-Regular'
  },
  code:{
    color: '#2bc2fa',
    fontSize: 10,
    lineHeight: 13.7,
    fontFamily: 'open-sans-semibold',
    marginTop: 5
  },
  media: {
    width: 115,
    height: 115,
    backgroundColor: '#fff',
    borderRadius: 115/2,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileText: {
    fontSize: 10,
    color: '#fff',
    paddingHorizontal: 16,
    textAlign: 'center'
  },
  editProfileText: {
    position: 'absolute',
    top: -20,
    right: 20
  },
  contactText: {
    color: '#fff',
    fontSize: 10,
    marginHorizontal: 8
  },
  block: {
    paddingTop: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderColor: '#ccc',
  },
  amountBlock: {
    flex: 1,
    paddingLeft: 28
  },
  label:{
    fontSize: 14,
    color: '#ee8c3c',
    fontFamily: 'Oswald-Regular',
    marginBottom: 22
  },
  amount: {
    fontSize: 25,
    fontFamily:'gotham-round',
    paddingTop: 5,
    marginRight: 10
  },
  btnTouchable: {
    backgroundColor: '#eb3a46',
    // paddingHorizontal: 47,
    paddingVertical: 10,
    width: 123,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Oswald-Regular'
  },
  payBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  topupIcon: {
    height: 29,
    resizeMode: 'contain',
    width: 30
  },
  topupBlock: {
    flex: 1,
    paddingLeft: 28
  },
  topUpLi: {
    // paddingHorizontal: 15,
    backgroundColor: '#3bb866',
    height: 28,
    justifyContent: 'center',
    marginRight: 8,
    width: 41,
    alignItems: 'center'
  },
  topUpLiText:{
    // fontSize: 10,
    fontFamily: 'Oswald-Regular',
    color: '#fff',
  },
  bgImage: {
    height: null,
    width: null,
    flex: 1
  },  
});