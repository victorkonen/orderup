import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	image: {
		flex: 1
	}
})

const LoadingScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Loading Screen</Text>
  </View>
);

export default LoadingScreen;