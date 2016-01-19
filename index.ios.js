'use strict'

import React from 'react-native'
import CircleMatch from './components/CircleMatch.js'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React

class App extends React.Component{
  render() {
    console.log('rendering App')
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'CircleMatch',
          component: CircleMatch
        }} />
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('circlematch_native', () => App);
