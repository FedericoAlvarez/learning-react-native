import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import MyScene from './app/MyScene';

export default class SupermarketList extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF'}}>
        <StatusBar barStyle="light-content" />
        <MyScene />
      </View>
    );
  }

}

AppRegistry.registerComponent('SupermarketList', () => SupermarketList);
