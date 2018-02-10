import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native'

import bgImg from '../images/bg_tmp.jpg'

const resizeMode = 'cover'

const BackgroundImage = () => (
  <View style={ styles.absolute }>
    <Image
      style={ styles.image }
      source={ bgImg }
    />
  </View>
)

export default BackgroundImage

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode
  }
})