import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Routes from './app/Routes';
import Firebase from './app/utils/firebase/Firebase';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    Firebase.initialise();
  }

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
