"use strict"

import React from 'react-native'
import * as helper from '../helpers.js'

const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React

let styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150
  },
  text: {
    fontFamily: 'Geo',
    color: '#aaaaaa'
  },
  large: {
    fontSize: 20
  },
  timer: {
    marginTop: -20
  },
  menu: {
    marginTop: -180
  }
})

let steps = [
  {
    messages: ['swipe to move circles', 'hint: swipe right once to win this round!'],
    styles: [[styles.text, styles.large], styles.text]
  },
  {
    messages: ['to win, organize the circles like this', 'from lightest to darkest, left to right'],
    styles: [[styles.text, styles.large], styles.text]
  },
  {
    messages: ['in night mode', 'it\'s the opposite (dark to light)'],
    styles: [[styles.text, styles.large], styles.text]
  },
  {
    messages: ['this is the menu button', 'customize colors, toggle night/day mode, reset, etc.'],
    styles: [[styles.text, styles.large, styles.menu], styles.text]
  },
  {
    messages: ['^ this is a 1-minute timer ^', 'solve before it disappears to get bonus points'],
    styles: [[styles.text, styles.large, styles.timer], styles.text]
  },
  {
    messages: ['all clear?', 'let\'s play!'],
    styles: [[styles.text, styles.large], styles.text]
  },
]

class _Tutorial extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0
    }
  }

  nextStep() {
    const { endTutorial, moveCells, reset, toggleBackgroundColor } = this.props
    if (this.state.currentStep < steps.length - 1) {
      this.setState({
        currentStep: this.state.currentStep + 1
      })
    } else {
      endTutorial()
      reset()
    }

    if (this.state.currentStep == 1) {
      moveCells(1)
    } else if (this.state.currentStep == 2) {
      toggleBackgroundColor()
    }
  }

  displayStep() {
    console.log(steps[this.state.currentStep])
    return (
      <View style={styles.container}>
        <Text style={steps[this.state.currentStep].styles[0]}>{steps[this.state.currentStep].messages[0]}</Text>
        <Text style={steps[this.state.currentStep].styles[1]}>{steps[this.state.currentStep].messages[1]}</Text>
      </View>
    )
  }

  render() {
    const {level, closeModal, colorScheme, autoSolved, score, timeLeft} = this.props

    return (
      <TouchableOpacity onPress={() => this.nextStep()}>
        {this.displayStep()}
        <View style={styles.container}>
          <Text style={styles.text}>tap to continue</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


export default _Tutorial
