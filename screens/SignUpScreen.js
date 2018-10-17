import React from 'react';
import { View, Image,  Button, AsyncStorage, TouchableOpacity, Text, StyleSheet, ScrollView,
  Dimensions } from 'react-native';

const BackGroundImage = '../assets/images/splash.png';


export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Sign Up',
  };

  get SignIn_Button() {
    return (
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Auth')}>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          borderRadius: 4,
          padding: 24,
          backgroundColor: '#3B5998',
        }}>
        < Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
        Back to Sign In
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

        {/* <Button title="Sign out" onPress={this._signOutAsync} /> */}
        {this.SignIn_Button}
        </ScrollView>

      </View>
    )
  };    

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
});