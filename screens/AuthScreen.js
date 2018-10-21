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
import Expo from 'expo';

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from '../aws-exports'
Amplify.configure(AWSConfig)


const BackGroundImage = '../assets/images/splash.png';
const LogoImage = '../assets/images/greenWhite.png';
const AppID = '447519875768842';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // title: 'Please sign in',
  };

  state = {
    username: '',
    password: '',
    phone_number: '',
    email: ''
  }

  login = async() => {

  }

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
        < Text style={{ color: 'white', fontFamily: 'open-sans-semibold', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
        Sign in with Facebook
        </Text>
      </View>              
      </TouchableOpacity>      
    )
  }

  get SignUp_Button() {
    return (
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUp')}>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          borderRadius: 4,
          padding: 24,
          // backgroundColor: '#3B5998',
        }}>
        < Text style={{ color: 'blue', fontFamily: 'open-sans-semibold', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
        Sign Up
        </Text>
      </View>              
      </TouchableOpacity>      
    )
  }


  onChangeText(key, value){
    this.setState( {[key]: value} )
  }

  signUp(){
    Auth.signUp({
      username: this.state.phone_number,
      password: 'Qwerty-123',
      attributes: {
        email: 'kongphui@gmail.com',
        phone_number: this.state.phone_number
      }
    })
    .then( () => console.log('successful sign up!') )
    .catch( err => console.log('error signing up: ', err))
  }

  confirmSignUp(){
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
    .then( () => console.log('successful confirm sign up!'))
    .catch( err => console.log('error confirming sign up: ', err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require(BackGroundImage)} style={[styles.bgImage]} />
          <ScrollView style={styles.overlayContainer}>
            <Image source={require(LogoImage)} style={[styles.logo]} />

            {/* <Button title="Sign in!" onPress={this._signInAsync} /> */}
            <View style={[styles.inputField]}>

            <TextInput
              placeholder="Enter mobile number to sign in"
              placeholderTextColor='grey'
              keyboardType='phone-pad'
              enablesReturnKeyAutomatically={true}
              maxLength={11}
              returnKeyType='next'
              textAlign='center'
              style={styles.inputStyle}
              onChangeText={ value => this.onChangeText('phone_number', value) }
            />
            </View>

            <Text style={styles.subText}>A 6-digit code will be sent to this number</Text>

            <Text style={styles.subText}>OR</Text>

            {this.SignInFB_Button}

            {this.SignUp_Button}
 
          </ScrollView>
      </View>    
      );
  }

  _signInAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(AppID, 
      { permissions: ['public_profile', 'email'] })

    if (type === 'success'){
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id, name, email, about, picture.type(large)`);

      const userInfo = await response.json();
      const alertmsg = userInfo.name.concat(userInfo.picture," logged in");
      // alert(alertmsg);

      // Alert.alert('Logged in!',`Hi ${(await response.json()).name}!`,);
      // alert(type);
      this.props.navigation.navigate('Main');
    }
    else{
      // alert(type);
    }
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
    height: 48,
    fontSize: 18,
    backgroundColor: 'rgba(255,255,255,0)',
    borderBottomWidth: 0,
    borderBottomColor: '#2196F3',
    color: 'black'
  },
  inputField: {
    // alignItems: 'center',
    marginBottom: 1,
  },
  subText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 26,
  },  
});