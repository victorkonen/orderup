import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	image: {
		flex: 1
	}
})

export default class Welcome extends Component {
  render() {
    return (
      <Image
      	style={styles.image}
      	resizeMode='contain'
        source={require('../images/welcome.jpg')}
      />
    );
  }
}