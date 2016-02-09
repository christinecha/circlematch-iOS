"use strict"

import React from 'react-native'
import * as helper from '../helpers.js'

const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React

let compliments = [
  "You're a genius.", "You rock!", "You did it!", "Amazing!", "Woohoo!", "Oh yeah!", "You're so smart!", "Success!", "You rock my socks.", "Killin' it!", "Hip hip, hooray!", "Crushing it!"
]

class _NextLevel extends React.Component {

  render() {
    const {level, closeModal, colorScheme, autoSolved, gameComplete, reset, score, timeLeft} = this.props

    let styles = StyleSheet.create({
      container: {
        flex: 1,
        minHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200,
        backgroundColor: 'rgba(' + colorScheme.toJS().background + ', 0.8)'
      },
      text: {
        fontFamily: 'Geo',
        color: '#aaaaaa'
      },
      announcement: {
        fontSize: 20,
        marginBottom: 30
      },
      points: {
        fontSize: 30,
        color: 'rgba(' + colorScheme.toJS().cell + ', 1)'
      },
      speedBonus: {
        fontSize: 30,
        color: 'rgba(' + colorScheme.toJS().cell + ', .5)'
      },
      continue: {
        fontSize: 16
      }
    })

    let announcement = compliments[helper.randomNum(0, compliments.length - 1)]
    let points = 50
    let speedBonus = helper.getPoints(level, timeLeft) - 50
    let levelDisplay = level

    if (autoSolved == true) {
      announcement = 'auto-solved!'
      points = 0
      speedBonus = 0
      levelDisplay = level + 1
    }

    if (gameComplete) {
      return (
        <TouchableOpacity onPress={() => reset()}>
          <View style={styles.container}>
            <Text style={[styles.text, styles.points]}>you are a champion.</Text>
            <Text style={[styles.text, styles.announcement]}>you beat the whole game!</Text>
            <Text style={[styles.text, styles.continue]}>tap to start over</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => closeModal()}>
          <View style={styles.container}>
            <Text style={[styles.text, styles.announcement]}>{announcement}</Text>
            <Text style={[styles.text, styles.points]}>+ {points} points</Text>
            <Text style={[styles.text, styles.speedBonus]}>+ {speedBonus} speed bonus</Text>
            <Text style={[styles.text, styles.announcement]}>{score + points + speedBonus} PTS &nbsp; | &nbsp; LEVEL {levelDisplay}</Text>
            <Text style={[styles.text, styles.continue]}>tap to continue</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
}


export default _NextLevel
