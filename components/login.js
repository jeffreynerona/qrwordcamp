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
  TextInput,
  Keyboard
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default class Myqr extends Component<{}> {

	constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      contact: ''
    }
  }

  submit = () => {
    if(this.state.name!=='' && this.state.email !== '' && this.state.contact !== '') {
      Keyboard.dismiss();
      this.props.navigation.navigate('Scan',{name:this.state.name,email:this.state.email,contact:this.state.contact});
    } else
    {
      alert('Please Fill up the details');
    }
  }

  static navigationOptions = {
    title: 'EventQR',
  }

  render() {
    return (
      <View style={styles.container}>
      	<TextInput
        placeholder="Full Name"
        onChangeText={(name) => this.setState({name})}
        underlineColorAndroid='transparent'
        style={styles.input}
        />
        <TextInput
        placeholder="Email"
        onChangeText={(email) => this.setState({email})}
        underlineColorAndroid='transparent'
        style={styles.input}
        />
        <TextInput
        placeholder="Contact Number"
        onChangeText={(contact) => this.setState({contact})}
        underlineColorAndroid='transparent'
        style={styles.input}
        />
      	<TouchableOpacity style={styles.buttonTouchable}>
          <Text  onPress={this.submit} style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderColor:'gray',
		borderWidth: 1,
		width:'100%',
		textAlign:'center',
    marginBottom: 10
	},
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    padding: 10
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
    textAlign: 'right'
  },

  buttonTouchable: {
    padding: 16,
  },
});
