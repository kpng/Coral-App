import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView, TextInput, StatusBar,
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Icon } from 'expo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import RecentAdded from '../components/RecentAdded';

const logoDev = '../assets/images/logo-blue-dev.png';
const logoProd = '../assets/images/logo-green-prod.png';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
      console.log("Statusbar height" + StatusBar.currentHeight)
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: this.startHeaderHeight, backgroundColor: 'transparent', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
            <View style={{
              //search box props
              flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS == 'android' ? 30 : null
            }}>
              <Ionicon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="newspaper, e-waste, ...etc"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
              />
            </View>
          </View>

          <ScrollView
            scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 18 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', paddingHorizontal: 18 }}>Recently added recycling campaigns:</Text>

              <View style={{ height: 128, marginTop: 20 }}>
                <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <RecentAdded imageUri={require('../assets/images/Campaigns/Event1.jpg')} name="Boon Keng Ville RC" />
                  <RecentAdded imageUri={require('../assets/images/Campaigns/Event2.jpg')} name="Upper Boon Keng Ville RC" />
                  <RecentAdded imageUri={require('../assets/images/Campaigns/Event3.jpg')} name="Race Course Road RC" />
                  <RecentAdded imageUri={require('../assets/images/Campaigns/Event4.jpg')} name="Whampoa South RC" />
                </ScrollView>
              </View>

              <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', paddingHorizontal: 18 }}>Verified donation drives:</Text>

                <View style={{ height: 128, marginTop: 20 }}>
                  <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <RecentAdded imageUri={require('../assets/images/Campaigns/Donate1.png')} name="Tzu Chi Foundation" />
                    <RecentAdded imageUri={require('../assets/images/Campaigns/Donate2.png')} name="Muhammadiyah Association" />
                    <RecentAdded imageUri={require('../assets/images/Campaigns/Donate3.png')} name="Metta" />
                  </ScrollView>
                </View>

              </View>
            </View>
          </ScrollView>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleVisitUsPress = () => {
    WebBrowser.openBrowserAsync('http://coral.community');
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 32,
    backgroundColor: 'transparent',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: 'transparent',

  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },

  inputStyle: {
    height: 48,
    fontSize: 18,
    backgroundColor: 'rgba(205,205,205,0.5)',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ffffFf',
    color: 'black'
  },
  inputStyleSearchBar: {
    height: 48,
    fontSize: 18,
    backgroundColor: 'rgba(205,205,205,0.5)',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ffffFf',
    color: 'black'
  },
  containerStyleSearchBar: {
    height: 68,

    backgroundColor: 'white',
  },
  leftIconContainerStyleSearchBar: {
    alignItems: 'center',
    color: 'black'
  },
  rightIconContainerStyleSearchBar: {
    alignItems: 'center'
  },

});
