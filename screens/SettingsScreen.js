import React from 'react';
import { View, Button, AsyncStorage, TouchableOpacity, Image, Text, TextInput, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import { WebBrowser } from 'expo';
import * as firebase from 'firebase';

const logoDev = '../assets/images/logo-blue-dev.png';
const logoProd = '../assets/images/logo-green-prod.png';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    // title: 'Settings',
    headerTransparent: true,

  };

  componentDidMount(){
    firebase.database().ref('users/' + this.props.screenProps.uid + 'phoneNumber').on('value', (snapshot) => {
      const phoneNumberFireBDB = snapshot.val().phoneNumber;
      console.log("phoneNumberFireBDB: " + phoneNumberFireBDB); 
    });
  
  }


  onChangeText(key, value) {
    this.setState({ [key]: value })
  }

  get AboutUs_Button() {
    return (
      <TouchableOpacity onPress={this._handleAboutUsPress}>
        <Text style={styles.blueText}>About Us</Text>
      </TouchableOpacity>
    )
  }

  get TermOfUse_Button() {
    return (
      <TouchableOpacity onPress={this._handleTermsOfUsePress}>
        <Text style={styles.blueText}>Terms Of Use</Text>
      </TouchableOpacity>
    )
  }

  get PrivacyPolicy_Button() {
    return (
      <TouchableOpacity onPress={this._handlePrivacyPolicyPress}>
        <Text style={styles.blueText}>Privacy Policy</Text>
      </TouchableOpacity>
    )
  }


  get SignOut_Button() {
    return (
      <TouchableOpacity onPress={() => this._signOutAsync()}>
        <Text style={styles.blueText}>Sign Out</Text>
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <ScrollView style={styles.container}>

        <Text style={[styles.label]}>Name</Text>

        <View style={[styles.inputField]}>
          <TextInput
            placeholder={this.props.screenProps.displayName}
            placeholderTextColor='black'
            maxLength={48}
            textAlign='left'
            style={styles.inputStyle}
            borderRadius={8}
            paddingLeft={10}
            underlineColorAndroid='transparent'
            onChangeText={value => this.onChangeText('fullname', value)}
          />
        </View>

        <Text style={[styles.label]}>Email</Text>

        <View style={[styles.inputField]}>
          <TextInput
            placeholder={this.props.screenProps.email}
            placeholderTextColor='black'
            //  keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
            maxLength={48}
            //  returnKeyType='next'
            textAlign='left'
            style={styles.inputStyle}
            borderRadius={8}
            paddingLeft={10}
            underlineColorAndroid='transparent'
            onChangeText={value => this.onChangeText('email', value)}
          />
        </View>

        <Text style={[styles.label]}>Mobile number</Text>

        <View style={[styles.inputField]}>
          <TextInput
            placeholder={this.props.screenProps.phoneNumber}

            placeholderTextColor='black'
            keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
            maxLength={11}
            //  returnKeyType='next'
            textAlign='left'
            style={styles.inputStyle}
            borderRadius={8}
            paddingLeft={10}
            underlineColorAndroid='transparent'
            onChangeText={value => this.onChangeText('phoneNumber', value)}
          />
        </View>

        <Text style={[styles.label]}>Postal Code</Text>

        <View style={[styles.inputField]}>
          <TextInput
            placeholder=""
            placeholderTextColor='black'
            keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
            maxLength={11}
            //  returnKeyType='next'
            textAlign='left'
            style={styles.inputStyle}
            borderRadius={8}
            paddingLeft={10}
            underlineColorAndroid='transparent'
            onChangeText={value => this.onChangeText('phoneNumber', value)}
          />
        </View>


        <Text style={[styles.label]}>Floor number</Text>

        <View style={[styles.inputField]}>
          <TextInput
            placeholder={this.props.screenProps.phoneNumber}
            placeholderTextColor='black'
            //  keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
            maxLength={2}
            //  returnKeyType='next'
            textAlign='left'
            style={styles.inputStyle}
            borderRadius={8}
            paddingLeft={10}
            underlineColorAndroid='transparent'
            onChangeText={value => this.onChangeText('floorNumber', value)}
          />
        </View>

        <Text style={[styles.label]}>Unit number</Text>

        <View style={[styles.inputField]}>
          <TextInput
            placeholder={this.props.screenProps.uid}
            placeholderTextColor='black'
            keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
            maxLength={5}
            //  returnKeyType='next'
            textAlign='left'
            style={styles.inputStyle}
            borderRadius={8}
            paddingLeft={10}
            underlineColorAndroid='transparent'
            onChangeText={value => this.onChangeText('unitNumber', value)}
          />
        </View>


        {this.AboutUs_Button}
        {this.TermOfUse_Button}
        {this.PrivacyPolicy_Button}
        {this.SignOut_Button}


      </ScrollView>

    )
  };

  _handleAboutUsPress = () => {
    WebBrowser.openBrowserAsync('http://coral.community');
  }

  _handleTermsOfUsePress = () => {
    WebBrowser.openBrowserAsync('http://coral.community');
  }

  _handlePrivacyPolicyPress = () => {
    WebBrowser.openBrowserAsync('https://coral.community/resources/Website%20Privacy%20Policy.pdf');
  }

  _signOutAsync =
    async () => {

      firebase.auth().signOut()
        .then(() => { console.log("signed out!"); },
          (error) => { console.log("signOut error: ", error.message); }
        );

      await AsyncStorage.clear()
        .then(() => { console.log("AsyncStorage cleared!"); },
          (error) => { console.log("AsyncStorage error in clearing: ", error.message); }
        );

      this.props.navigation.navigate('AuthLoading');
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 68,
    backgroundColor: '#CFD8DC',
  },
  label: {
    marginLeft: 28
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
  inputStyle: {
    height: 42,
    backgroundColor: '#B0BEC5',
    textAlign: 'left',
    marginLeft: 18,
    marginRight: 18,
    color: '#000',
    fontFamily: 'open-sans-reg',
  },
  inputField: {
    alignItems: 'stretch',
    marginBottom: 9,
  },
  blueText: {
    color: 'blue',
    backgroundColor: 'rgba(205,205,205,0)',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'open-sans-semibold',
    padding: 8,
    marginLeft: 18,
  },
  welcomeContainer: {
    alignItems: 'center',
    // marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },  
});