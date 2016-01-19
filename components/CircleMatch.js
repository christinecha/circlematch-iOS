"use strict"

import React from 'react-native'
import Grid from './Grid.js'

const {
  StyleSheet,
  View,
  Text
} = React

class CircleMatch extends React.Component {
  render() {
    console.log('rendering CircleMatch')
    return (
      <View style={styles.container}>
        <Grid />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
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

export default CircleMatch
