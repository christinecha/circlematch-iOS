"use strict"

import React from 'react-native'
import * as action from '../actions.js'

const {
  StyleSheet,
  View,
  Text
} = React

class Cell extends React.Component {

  handleResponderGrant(evt) {
    console.log('responder granted')
  }

  handleResponderMove(evt) {
    console.log('responder moved', evt.nativeEvent.locationX)
    // const { dispatch, index, translations, translateX, translateY } = this.props
    // console.log(index)
    // dispatch(action.DRAG_CELL(index, translations, translateX, translateY))
  }

  render() {
    console.log('rendering Cell')
    const { cellSize, position, color, key, borderWidth, translateX, translateY } = this.props
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
        onResponderGrant={(evt) => this.handleResponderGrant(evt)}
        onResponderMove={(evt) => this.handleResponderMove(evt)} >
        <Text>
          {position}
        </Text>
      </View>
    )
  }
}

export default Cell
