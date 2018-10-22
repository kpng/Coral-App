import React from 'react';
import { View, Image,  Button, AsyncStorage, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView,
  Dimensions } from 'react-native';
import { WebBrowser } from 'expo';

const BackGroundImage = '../assets/images/signup_bg.jpg';


export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Sign Up',
  };

  constructor(props) {
    super(props);
    this.state = {
      fullname: 'full name',
      email: 'email',
      phone_number: '',
      postal: '',
      floor: '',
      unit_number: '',
      token:'',
    };
  }

  onChangeText(key, value){
    this.setState( {[key]: value} )
  }

  get Submit_Button() {
    return (
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Auth')}>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          borderRadius: 4,
          padding: 24,
          backgroundColor: 'blue',
        }}>
        < Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
        Submit
        </Text>
      </View>              
      </TouchableOpacity>      
    )
  }


  render() {
    return(
      <View style={styles.container}>
        <Image source={require(BackGroundImage)} style={[styles.bgImage]} />

        <ScrollView style={styles.overlayContainer}>
          <View style={[styles.form]}>
            <View style={[styles.inputField]}>
              <TextInput
             placeholder="Full name"
             placeholderTextColor='grey'
            //  keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
            //  maxLength={11}
            //  returnKeyType='next'
             textAlign='center'
             style={styles.inputStyle}
             onChangeText={ value => this.onChangeText('fullname', value) }
             />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
             placeholder="Email"
             placeholderTextColor='grey'
            //  keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
            //  maxLength={11}
            //  returnKeyType='next'
             textAlign='center'
             style={styles.inputStyle}
             onChangeText={ value => this.onChangeText('email', value) }
             />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
             placeholder="Phone number"
             placeholderTextColor='grey'
             keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
             maxLength={11}
            //  returnKeyType='next'
             textAlign='center'
             style={styles.inputStyle}
             onChangeText={ value => this.onChangeText('phone_number', value) }
             />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
             placeholder="Postal code"
             placeholderTextColor='grey'
             keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
             maxLength={6}
            //  returnKeyType='next'
             textAlign='center'
             style={styles.inputStyle}
             onChangeText={ value => this.onChangeText('postal', value) }
             />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
             placeholder="Floor"
             placeholderTextColor='grey'
             keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
             maxLength={2}
            //  returnKeyType='next'
             textAlign='center'
             style={styles.inputStyle}
             onChangeText={ value => this.onChangeText('floor', value) }
             />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
             placeholder="Unit number"
             placeholderTextColor='grey'
             keyboardType='phone-pad'
            //  enablesReturnKeyAutomatically={true}
             maxLength={4}
            //  returnKeyType='next'
             textAlign='center'
             style={styles.inputStyle}
             onChangeText={ value => this.onChangeText('unit_number', value) }
             />
            </View>

          {this.Submit_Button}

          </View>

            <View style={[styles.rowFlex]}>
              <Text style={[styles.forgotPswdLink]}>By signing up, you agree to our
              </Text>

              <TouchableOpacity onPress={this._handleTermsOfUsePress}>
              <Text style={styles.blueText}>Terms Of Use</Text>
              </TouchableOpacity>

                {/* <Text style={[styles.blueText]}> terms of use </Text> */}
              and 

              {/* <Text style={[styles.blueText]}> privacy policy.</Text> */}

              <TouchableOpacity onPress={this._handlePrivacyPolicyPress}>
              <Text style={styles.blueText}>Privacy Policy.</Text>
              </TouchableOpacity>

            </View>          
        </ScrollView>

      </View>
    )
  };    

  _handleTermsOfUsePress = () => {
    WebBrowser.openBrowserAsync('http://coral.community');
  }  

  _handlePrivacyPolicyPress = () => {
    WebBrowser.openBrowserAsync('http://coral.community');
  }  
    // _signOutAsync = async () => {
    //   await AsyncStorage.clear();
    //   this.props.navigation.navigate('AuthLoading');
    // };
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
  inputStyle: {
    height: 48,
    fontSize: 18,
    backgroundColor: 'rgba(255,255,255,0)',
    borderBottomWidth: 1,
    borderBottomColor: '#2196F3',
    color: 'black'
  },
  inputField: {
    // alignItems: 'center',
    marginBottom: 10,
  },  
  forgotPswdLink: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'open-sans-reg'
  },
  rowFlex: {
    marginHorizontal: -3
  },
  blueText: {
    color: '#0000ff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'open-sans-reg'
  },  
});