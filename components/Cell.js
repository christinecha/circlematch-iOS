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
    const { cellSize, position, color, index, borderWidth, translateX, translateY, onCellResponderGrant, onCellResponderMove, onCellResponderRelease } = this.props
    let borderColor = '#eeeeee'

    if (color == 'transparent') {
      borderColor = 'transparent'
    }

    const styles = StyleSheet.create({
      gridCell: {
        backgroundColor: color,
        borderColor: borderColor,
        borderWidth: borderWidth,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: cellSize,
        minHeight: cellSize,
        maxHeight: cellSize,
        transform: [{translateX: translateX}, {translateY: translateY}],
        borderRadius: cellSize/2,
      },
      innerCell: {
        fontSize: 20,
        margin: 12
      }
    })

    return (
      <View
        style={styles.gridCell}
        onStartShouldSetResponder={(evt) => true}
        onResponderGrant={(evt) => onCellResponderGrant(evt, index)}
        onResponderMove={(evt) => onCellResponderMove(evt, index)}
        onResponderRelease={(evt) => onCellResponderRelease(evt, index)} >
        <Text>
          {position}
        </Text>
      </View>
    )
  }
}

export default Cell
