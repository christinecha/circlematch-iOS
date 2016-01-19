"use strict"

import React from 'react-native'

const {
  StyleSheet,
  View,
  Text
} = React

class Grid extends React.Component {

  // getCells() {
  //   const { cellData, cellColors, animation } = this.props
  //   let cellSize = (60) + 'px'
  //   return cellData.toJS().map((cell, i) => {
  //     return (
  //       <Cell
  //       color={cellColors.toJS()[cell]}
  //       cellSize={cellSize}
  //       position={cell}
  //       borderWidth='5px'
  //       key={i}
  //       animation={animation.toJS()[i]} />
  //     )
  //   })
  // }

  render() {
    // const { gridWidth, cellData, cellColors, animation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          circlematch
        </Text>
        <View style={styles.grid}>
          <Text>grid goes here</Text>
        </View>
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
  grid: {
    width: 200,
    height: 200,
    backgroundColor: '#eee',
    padding: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Grid
