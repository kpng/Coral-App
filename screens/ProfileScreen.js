import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return(
      <Button title="Sign me out :)" onPress={this._signOutAsync} />
    )
  };    

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('AuthLoading');
    }
}
