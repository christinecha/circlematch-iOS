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
    const { cellSize, position, color, index, borderWidth } = this.props
    let borderColor = '#eeeeee'

    if (color == 'transparent') {
      borderColor = 'transparent'
    }

    const styles = StyleSheet.create({
      gridCell: {
        backgroundColor: color,
        borderColor: borderColor,
        margin: borderWidth,
        justifyContent: 'center',
        alignItems: 'center',
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
