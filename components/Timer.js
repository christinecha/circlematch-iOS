import React from 'react-native'
import Cell from './Cell.js'
import * as helper from '../helpers.js'

const {
  View,
  Text,
  StyleSheet
} = React

class Timer extends React.Component {

  render() {
    const { colorScheme, level, score, timeLeft } = this.props

    let opacity = (timeLeft / 60)
    console.log(timeLeft)

    let styles = StyleSheet.create({
      container: {
        flex: 1,
        maxHeight: 40
      },
      timer: {
        flex: 1,
        width: timeLeft * 4.1,
        maxHeight: 5,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 2.5,
        backgroundColor: 'rgba(' + colorScheme.toJS().cell + ',' + opacity + ')'
      }
    })

    return (
      <View style={styles.container}>
        <View style={styles.timer}></View>
      </View>
    )
  }
}


export default Timer
