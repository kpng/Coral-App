import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class NotifScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Notifications',
  };

  render() {
    return (
      // <ScrollView style={styles.container}>
        <View style={styles.placeholder}>
          <Text style={styles.emptyAlertText}>You have not participated in any recycling event.</Text>
        </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fee',
  },
  emptyAlertText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
