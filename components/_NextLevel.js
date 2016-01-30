"use strict"

import React from 'react-native'
import {getPoints} from '../helpers.js'

const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React

class _NextLevel extends React.Component {

  render() {
    const {level, closeModal, autoSolved, timeLeft} = this.props

    let announcement = 'woohoo!'
    let points = getPoints(level, timeLeft) - 50

    if (autoSolved == true) {
      announcement = 'auto-solved!'
      let points = 0
    }

    return (
      <TouchableOpacity onPress={() => closeModal()}>
        <View style={styles.container}>
          <Text>{announcement}</Text>
          <Text style={styles.points}>+ 50 points</Text>
          <Text style={styles.points}>+ {points} speed bonus</Text>
          <Text style={{marginTop: 20}}>tap to continue</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 300,
    backgroundColor: 'rgba(241,241,242,0.8)'
  },
  points: {
    fontSize: 30
  }
})

export default _NextLevel
