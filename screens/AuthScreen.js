import React from 'react';
import {   
    Button,
    StyleSheet,
    AsyncStorage,
    Image,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput,
    Dimensions } from 'react-native';

const BackGroundImage = '../assets/images/splash.png';
const LogoImage = '../assets/images/greenWhite.png';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    // title: 'Please sign in',
  };

  login = async() => {}

  get SignInFB_Button() {
    return (
      <TouchableOpacity onPress={()=> this._signInAsync()}>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          borderRadius: 4,
          padding: 24,
          backgroundColor: '#3B5998',
        }}>
        < Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
        Sign in with Facebook
        </Text>
      </View>              
      </TouchableOpacity>      
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require(BackGroundImage)} style={[styles.bgImage]} />
          <ScrollView style={styles.overlayContainer}>
            <Image source={require(LogoImage)} style={[styles.logo]} />

            {/* <Button title="Sign in!" onPress={this._signInAsync} /> */}
            <TextInput
              placeholder="Enter mobile number to sign in"
              placeholderTextColor='grey'
              keyboardType='phone-pad'
              enablesReturnKeyAutomatically={true}
              maxLength={11}
              alignSelf='center'
              returnKeyType='next'
              style={styles.inputStyle}
            />
            <Text style={styles.subText}>A 6-digit code will be sent to this number</Text>

            <Text style={styles.subText}>OR</Text>

            {this.SignInFB_Button}
 
          </ScrollView>
      </View>    
      );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: '#fff',
  },
  bgImage: {
    height: null,
    width: null,
    flex: 1
  },
  overlayContainer: {
    backgroundColor: 'rgba(205, 205, 205, 0.8);',
    position: 'absolute',
    top: 40,
    right: 0,
    left: 0,
    marginHorizontal: Dimensions.get('window').width > 320 ? 16 : 10,
    marginVertical: 14,
    paddingHorizontal: 10,
    paddingBottom: 16,
    paddingTop: 16,
  },
  logo: {
    height: 165,
    width: 270,
    alignSelf: 'center',
    alignItems: 'stretch'
  },  
  inputStyle: {
    height: 42,
    fontSize: 18,
    backgroundColor: 'rgba(255,255,255,0)',
    textAlign: 'center',
    color: 'black'
  },
  inputField: {
    alignItems: 'stretch',
    marginBottom: 6,
  },
  subText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 26,
  },  
});