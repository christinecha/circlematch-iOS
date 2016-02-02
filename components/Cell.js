"use strict"

import React from 'react-native'
import * as action from '../actions.js'

const {
  StyleSheet,
  View,
  Text,
  Animated
} = React

let lastIndex = ''
let lastAnimation = ''

class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      translateX: new Animated.Value(0),
      translateY: new Animated.Value(0)
    }
  }

  componentDidUpdate() {
    const { animation, index } = this.props

    let originX = 0
    let originY = 0

    if (animation && (animation != lastAnimation || index != lastIndex) ) {
      console.log(animation, lastAnimation)
      if (Math.abs(animation) == 1) {
        originX = -60 * animation
      } else if (Math.abs(animation) == 3) {
        originY = -60 * (animation / 3)
      }

      this.state.translateX.setValue(originX)
      this.state.translateY.setValue(originY)
      Animated.parallel([
        Animated.spring(this.state.translateX, {
          toValue: 0,
          friction: 7,
        }),
        Animated.spring(this.state.translateY, {
          toValue: 0,
          friction: 7,
        })
      ]).start()

      lastAnimation = animation
      lastIndex = index
    }

  }

  render() {
    const { animation, cellSize, position, color, index, borderWidth, opacity } = this.props

    let borderColor = '#eeeeee'

    if (color == 'transparent') {
      borderColor = 'transparent'
    }

    let styles = StyleSheet.create({
      gridCell: {
        transform: [                        // `transform` is an ordered array
          {translateX: this.state.translateX},
          {translateY: this.state.translateY}
        ],
        backgroundColor: 'rgb(' + color + ')',
        borderColor: borderColor,
        margin: borderWidth,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: opacity,
        minWidth: cellSize,
        minHeight: cellSize,
        maxHeight: cellSize,
        borderRadius: cellSize/2,
      },
      innerCell: {
        fontSize: 20,
        margin: 12
      }
    })

    return (
      <Animated.View style={styles.gridCell}>
      </Animated.View>
    )
  }
}

export default Cell
