import React from 'react-native'
import Cell from './Cell.js'

const {
  View,
  Text,
  StyleSheet
} = React

class InfoBar extends React.Component {

  render() {
    const { gridWidth, colorScheme, score, winner } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.scoreboard}>
          <Text style={styles.score}>score: {score}</Text>
        </View>
        <View style={styles.level}>
          <Text>LEVEL {this.props.level}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: 150
  },
  scoreboard: {
    padding: 5,
    backgroundColor: '#cdcdcd',
    width: 290,
    alignItems: 'center'
  },
  score: {
    fontSize: 22,
    color: '#ffffff',
    fontFamily: 'Helvetica',
  },
  level: {
    width: 290,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 5
  },
  levelInfo: {
    width: 230,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  solveButton: {
    backgroundColor: '#eeeeee',
    padding: 5,
    width: 120,
    margin: 10
  }
})

export default InfoBar
