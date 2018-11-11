import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Camera from '../components/Camera'



export default class RecycleScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Recycle',
  };

  render() {
    return (

      // <ScrollView style={styles.container}>
      // </ScrollView>
      <View style={styles.container}>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: '#fef',
  },
});
