/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default class Myqr extends Component<{}> {
  static navigationOptions = {
    title: 'Scan',
  }

  logToEvent = (eventid) => {
    fetch('http://192.168.43.210/test1/index.php/wp-json/wp/v2/attendees', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic YWRtaW46MTIzNA0K',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        'title' : this.props.navigation.state.params.name,
        'fields' : {
          'email' : this.props.navigation.state.params.email,
          'contact_number' : this.props.navigation.state.params.contact
        },
        'categories' : [eventid],
        'status' : 'publish'
      })
    })
    .then((response) => response.json())
      .then((responseJson) => {
        alert('Welcome to the Event!');
        this.props.navigation.navigate('Attendees',{id: eventid});
      }).catch((error) => {
        alert(error);
      });
  }

  onSuccess(e) {
      this.logToEvent(e.data);
  }

  render() {
    return (
      <QRCodeScanner
      onRead={this.onSuccess.bind(this)}
      topContent={(
        <Text style={styles.centerText}>
          Scan the Event QR Code
        </Text>
      )}
      bottomContent={(
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text  onPress={() => this.props.navigation.navigate('Login')} style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      )}
    />
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
