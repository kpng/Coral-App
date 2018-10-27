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
    Platform,
    Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Expo from 'expo';
import { Icon, WebBrowser } from 'expo';
import AssetPath from '../constants/AssetPath';
import { FormInput } from 'react-native-elements';
import * as firebase from 'firebase';
 

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from '../aws-exports'
Amplify.configure(AWSConfig)


const BackGroundImage = '../assets/images/splash.png';
const LogoImage = '../assets/images/greenWhite.png';

const AppID = '447519875768842';

export default class AuthScreen extends React.Component {
// In development mode we will bypass the sign in process and go straight 
// to the main page after sign in
  static navigationOptions = __DEV__ ? 
    ({navigation}) => ({
    // header: null,
    // title: 'Please sign in',
    headerTransparent: true,
    headerRight:<TouchableOpacity onPress={() => navigation.navigate("Main")}>
    <Icon.MaterialIcons 
      name={'developer-mode'}
      size={38} 
      style={{ marginRight: 8 }}
    />
    </TouchableOpacity>
    }): 
    ({navigation}) => ({
    headerTransparent: true,  
    });

  // state = {
  //   username: '',
  //   password: '',
  //   phone_number: '',
  //   email: ''
  // }

  constructor(props) {
    super(props);
    this.state = {
      phone_number: "",
    };
  }

  

  login = async() => {

  }

  get SignInFB_Button() {
    return (
      <TouchableOpacity onPress={()=> this._FBsignInAsync()}>
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

            {/* <TextInput
              placeholder="Enter mobile to SignIn"
              placeholderTextColor='grey'
              keyboardType='phone-pad'
              enablesReturnKeyAutomatically={true}
              maxLength={11}
              returnKeyType='next'
              textAlign='center'
              style={styles.inputStyle}
              underlineColorAndroid='transparent'
              borderRadius={88}
              onChangeText={ value => this.onChangeText('phone_number', value) }
            /> */}

            {/* Trying to create input field with icon on the left */}
            {/* <FormInput
              placeholder = 'Enter mobile number to sign in'
              leftIcon = { <Icon.Ionicons name={'ios-call'} /> }
              inputStyle = {styles.inputStyle}
              keyboardType='phone-pad'
              enablesReturnKeyAutomatically={true}
              maxLength={11}
              returnKeyType='next'
              textAlign='center'
              onChangeText={ value => this.onChangeText('phone_number', value) }
            /> */}

            </View>

            {/* <Text style={styles.subText}>A 6-digit code will be sent to this number</Text> */}

            {/* <Text style={styles.subText}>OR</Text> */}

            {/* {this.SignInFB_Button} */}

            <SocialIcon
              title='Sign In With Facebook'
              button={true}
              raised
              type='facebook'
              underlayColor= '#ff0000'
              onPress={()=> this._FaceBooksignInViaFireBaseAsync()}
            />

            {/* <SocialIcon
              title='Sign In With Google'
              button={true}
              raised
              type='google-plus-official'
              onPress={()=> this._GOOGLEsignInAsync()}
            /> */}

            {/* {this.SignUp_Button} */}

            <View style={[styles.rowFlex]}>
              <Text style={[styles.disclaimerText]}>By signing up, you agree to our
              </Text>

              <TouchableOpacity onPress={this._handleTermsOfUsePress}>
              <Text style={styles.blueText}>Terms Of Use</Text>
              </TouchableOpacity>
              
              <Text style={[styles.disclaimerText]}>and</Text>

              <TouchableOpacity onPress={this._handlePrivacyPolicyPress}>
              <Text style={styles.blueText}>Privacy Policy</Text>
              </TouchableOpacity>

            </View>           

          </ScrollView>
      </View>      
      );
  }

  _FaceBooksignInViaFireBaseAsync = async () => {

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(AppID, 
      { permissions: ['public_profile', 'email'] })

    if (type === 'success'){
      await AsyncStorage.setItem('faceBookUserToken', token);

      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      // await AsyncStorage.setItem('faceBookUserCredential', credential);

      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch
      ( 
        (error) => {  console.log("FaceBook signIn error: ", error) }
      )

        console.log("FaceBook signIn success, credential: ", credential)
        // console.log("firebase.userInfo: ", firebase.userInfo)

    }
    else{
      console.log("SignIn notSuccess: ", type)

    }
  };  


  _FBsignInAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(AppID, 
      { permissions: ['public_profile', 'email'] })

    if (type === 'success'){
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id, name, email, about, picture.type(large)`);

      const userInfo = await response.json();
      const alertmsg = (name) => { 
        return 'Hello ' + name + '!'; };
      // alert();
      alert(alertmsg(userInfo.name));
      // alert(alertmsg(userInfo.id));
      // alert(alertmsg(token));
      

      // Alert.alert('Logged in!',`Hi ${(await response.json()).name}!`,);
      // alert(type);
      this.props.navigation.navigate('Main');
    }
    else{
      // alert(type);
    }
  };  


  _GOOGLEsignInAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(AppID, 
      { permissions: ['public_profile', 'email'] })

    if (type === 'success'){
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id, name, email, about, picture.type(large)`);

      const userInfo = await response.json();
      const alertmsg = (name) => { 
        return 'Hello ' + name + '!'; };
      // alert();
      alert(alertmsg(userInfo.name));
      // alert(alertmsg(userInfo.id));
      // alert(alertmsg(token));
      

      // Alert.alert('Logged in!',`Hi ${(await response.json()).name}!`,);
      // alert(type);
      this.props.navigation.navigate('Main');
    }
    else{
      // alert(type);
    }
  }; 
  
  _handleTermsOfUsePress = () => {
    WebBrowser.openBrowserAsync('http://coral.community');
  }  

  _handlePrivacyPolicyPress = () => {
    WebBrowser.openBrowserAsync('http://coral.community');
  }  
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
    backgroundColor: 'rgba(205, 205, 205, 0.6);',
    // backgroundColor: 'rgba(205, 205, 205, 0.8);',
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
    height: 235,
    width: 330,
    marginVertical: 18,
    alignSelf: 'center',
    alignItems: 'stretch'
  },  
  inputStyle: {
    height: 48,
    fontSize: 18,
    backgroundColor: 'rgba(205,205,205,0.8)',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ffffFf',
    color: 'black'
  },
  inputField: {
    // alignItems: 'center',
    marginBottom: 18,
  },
  subText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 26,
  },  
  disclaimerText: {
    color: 'black',
    backgroundColor: 'rgba(205,205,205,0)',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'open-sans-reg'
  },
  rowFlex: {
    marginHorizontal: -3
  },
  blueText: {
    color: '#0000ff',
    backgroundColor: 'rgba(205,205,205,0)',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'open-sans-reg'
  },  
});