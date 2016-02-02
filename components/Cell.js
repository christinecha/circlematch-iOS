"use strict"

import React from 'react-native'
import * as action from '../actions.js'

const {
  StyleSheet,
  View,
  Text
} = React

class Cell extends React.Component {


  render() {
    const { animation, cellSize, position, color, index, borderWidth, opacity } = this.props
    let borderColor = '#eeeeee'

    if (color == 'transparent') {
      borderColor = 'transparent'
    }

    const styles = StyleSheet.create({
      gridCell: {
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
      <View style={styles.gridCell}>
      </View>
    )
  }
}

export default Cell
