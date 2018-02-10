/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native'
import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux'

// Components
import RootScene from './components/RootScene/index'
import SceneTwo from './components/SceneTwo/index'

// const
const SCENE_TITLE = {
  ROOT: 'HIDEOUT CLIP',
  TWO: 'SCENE TWO'
}
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

const scenes = Actions.create(
  <Scene key="root" tabs>
    <Scene
      key="home"
      title={ SCENE_TITLE.ROOT }
      component={ RootScene }
      initial
    />
    <Scene
      key="two"
      title={ SCENE_TITLE.TWO }
      component={ SceneTwo }
      back
      backTitle="home"
    />
  </Scene>
)

class App extends Component {
  render () {
    return <Router scenes={ scenes } />
  }
}
export default App