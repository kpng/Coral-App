import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import Camera from '../components/Camera';
import Tab1 from './UpcomingTab';
import Tab2 from './FavTab';
import Tab3 from './PastTab';


export default class RecycleScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // title: 'Recycle',
  };

  render() {
    return (
      // <ScrollView style={styles.container}>
      // </ScrollView>
      <View style={styles.container}>
        <Tabs renderTabBar={() => <ScrollableTab />} >
          <Tab heading="Upcoming">
            <Tab1 />
          </Tab>
          {/* <Tab heading="Favourite">
            <Tab2 />
          </Tab> */}
          <Tab heading="Past">
            <Tab3 />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: 'transparent',
  },
});
