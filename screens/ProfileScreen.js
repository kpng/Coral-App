import React from 'react';
import { View, Button, AsyncStorage, TouchableOpacity, Text } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  get SignOut_Button() {
    return (
      <TouchableOpacity onPress={()=> this._signOutAsync()}>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          borderRadius: 4,
          padding: 24,
          backgroundColor: '#3B5998',
        }}>
        < Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
        Sign Out Now
        </Text>
      </View>              
      </TouchableOpacity>      
    )
  }


  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return(
      <Button title="Sign out" onPress={this._signOutAsync} />
      // {this.SignOut_Button}
    )
  };    

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('AuthLoading');
    };
}
