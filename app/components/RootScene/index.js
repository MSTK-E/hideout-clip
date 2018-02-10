import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import {
  Actions
} from 'react-native-router-flux'
import BackgroundImage from '../BackgroundImage'

const Root = () => (
  <View style={ styles.container }>
    <BackgroundImage />
    <Text style={ styles.text }>Test</Text>
    <TouchableOpacity onPress={Actions.two}>
      <Text>Link</Text>
    </TouchableOpacity>
  </View>
)

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF'
  }
})