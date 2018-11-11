import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView, TextInput,
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Icon } from 'expo';
import Ionicon from 'react-native-vector-icons/Ionicons';

const logoDev = '../assets/images/logo-blue-dev.png';
const logoProd = '../assets/images/logo-green-prod.png';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex: 1}}>
      <View style={{ height: 80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
      <View style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1
    }}>
      <Ionicon name="ios-search" size={20} style={{marginRight: 10}} />
      <TextInput 
      underlineColorAndroid="transparent"
      placeholder="newspaper, e-waste, ...etc"
      placeholderTextColor="grey"
      style={{ flex: 1, fontWeight: '700', backgroundColor: 'white'}}
      />
      
      </View>
      </View>

        {/* <View>
          //simulate an empty space above the search bar
          <Text style={{ fontSize: 50, color: 'white' }}>Go</Text>
        </View> */}
        {/* <SearchBar
          inputStyle={styles.inputStyleSearchBar}
          containerStyle={styles.containerStyleSearchBar}
          leftIconContainerStyle={styles.leftIconContainerStyleSearchBar}
          rightIconContainerStyle={styles.rightIconContainerStyleSearchBar}
          round
          lightTheme
          clearIcon={{ color: 'black' }}
          searchIcon={{ size: 88 }}
          // noIcon
          platform
          backgroundColor='white'

          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder='newspaper, e-waste, ...'
        /> */}
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require(logoDev)
                  : require(logoProd)
              }
              style={styles.welcomeImage}
            />
          </View>
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',

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
