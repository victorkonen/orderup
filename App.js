import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from "./components/Welcome";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}