"use strict"

import React from 'react-native'
import Cell from './Cell.js'

const {
  StyleSheet,
  View,
  Text
} = React


class Grid extends React.Component {

  getCells() {
    const { animations, cellData, colorScheme } = this.props
    let cellSize = 80
    let cellDataArray = cellData.split('')
    let opacityScale = 7.5

    return cellDataArray.map((cell, i) => {

      let cellAnimation = ''
      if (animations.toJS()[cell]) {
        cellAnimation = animations.toJS()[cell]
      }

      return (
        <Cell
          animation={cellAnimation}
          opacity={cell / 8}
          color={colorScheme.toJS().cell}
          cellSize={cellSize}
          position={cell}
          borderWidth={5}
          index={i}
          key={i} />
      )
    })
  }

  render() {
    const { gridWidth, cellData, colorScheme, animation, onCellResponderGrant, onCellResponderRelease } = this.props
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={(evt) => true}
        onResponderGrant={(evt) => onCellResponderGrant(evt)}
        onResponderRelease={(evt) => onCellResponderRelease(evt)}
        onResponderTerminationRequest={(evt) => true}
      >
        <View style={styles.grid}>
          {this.getCells()}
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    maxHeight: 300,
    alignItems: 'center'
  },
  grid: {
    width: 290,
    height: 290,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Grid
