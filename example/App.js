/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import VideoView from 'react-native-gvr-video-android'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <VideoView
          video={{
            uri: 'https://yanwsh.github.io/videojs-panorama/assets/shark.mp4',
            type: 'mono'
          }}
          volume={1}
          style={{ width: 300, height: 200 }}
          enableInfoButton={false}
          enableFullscreenButton
          enableCardboardButton
          enableTouchTracking
          hidesTransitionView
          paused={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
