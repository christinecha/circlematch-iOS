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
    const { cellData, cellColors } = this.props
    let cellSize = 80
    let cellDataArray = cellData.split('')
    return cellDataArray.map((cell, i) => {
      return (
        <Cell
          opacity={cell / 7}
          color={cellColors}
          cellSize={cellSize}
          position={cell}
          borderWidth={5}
          index={i}
          key={i} />
      )
    })
  }

  render() {
    const { gridWidth, cellData, cellColors, animation, onCellResponderGrant, onCellResponderRelease } = this.props
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
    maxHeight: 200,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  grid: {
    width: 290,
    height: 290,
    backgroundColor: '#eee',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Grid
