import React from 'react';
import { View, Button, AsyncStorage, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Profile',
  };

  get SignOut_Button() {
    return (
      <TouchableOpacity onPress={()=> this._signOutAsync()}>
      <View
        style={{
          width: '80%',
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
    return(
      <ScrollView style={styles.container}>

      {/* <Button title="Sign out" onPress={this._signOutAsync} /> */}
      {this.SignOut_Button}
      </ScrollView>

    )
  };    

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('AuthLoading');
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ffe',
  },
});