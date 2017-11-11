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
  FlatList
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default class Attendees extends Component<{}> {

	constructor(props) {
    super(props)
    this.state = {
      attendees: [],
      eventSet: false,
      id: 0
    }
  }

  componentDidMount() {
  	let id = this.props.navigation.state.params.id;
  	let eventURL = `http://192.168.43.210/test1/index.php/wp-json/wp/v2/attendees?categories=${id}`;
    fetch(eventURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        attendees: response,
        eventSet: true,
        id: id
      });
    });
  }

  static navigationOptions = {
    title: 'Attendees',
    headerLeft: null
  }

  render() {
  	let list = <Text>No one's here yet</Text>;
    if(this.state.attendees.length>=1) {
      list = <FlatList
        data={this.state.attendees}
        renderItem={({item}) =><View style={styles.attendee}><Text style={styles.whitetext}>{item.title.rendered}</Text></View>}
        keyExtractor={(item, index) => index}
        />;
    }
    return (
      <View style={styles.container}>
      	{list}
    
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    padding: 10
  },
  attendee: {
    width: '100%',
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 10
  },
  whitetext: {
    color:'#FFFFFF'
  }
});
