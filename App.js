import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Routes from './app/Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#001064"
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
