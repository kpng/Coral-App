import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Button, Tab, Tabs, ScrollableTab } from 'native-base';

export default class NotifScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Notifications',
  };

  render() {
    return (
      // <ScrollView style={styles.container}>
      <View style={styles.placeholder}>
        <Text style={styles.emptyAlertText}>You have no upcoming recycling events.</Text>
        <Button full info style={styles.emptyAlertText}>
            <Text style={styles.emptyAlertText}>Create one now!</Text>
          </Button>
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
  emptyAlertText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
