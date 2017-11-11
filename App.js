/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Myqr from './components/myqr';
import Login from './components/login';
import Attendees from './components/attendees'


export default class App extends Component<{}> {
  onSuccess(e) {
      alert(e.data);
  }

  render() {
    const RootTabs = StackNavigator({
      Login: {
        screen: Login,
        navigationOptions: {
          headerTitle: 'EventQR',
        },
      },
      Scan: {
        screen: Myqr,
        navigationOptions: {
          headerTitle: 'Scan',
        },
      },
      Attendees: {
        screen: Attendees,
        navigationOptions: {
          headerTitle: 'Attendees',
        },
      }
    },{
       stackBarOptions: {
        activeTintColor: '#000000',
        inactiveTintColor: 'gray',
        style: {
        backgroundColor: '#F5FCFF'
        },
        indicatorStyle: {
          backgroundColor: 'green'
        },
      }
    });

    return (
      <View style={styles.container}>
      <RootTabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});
