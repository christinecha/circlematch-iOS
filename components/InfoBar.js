import React from 'react-native'
import Cell from './Cell.js'
import * as helper from '../helpers.js'

const {
  View,
  Text,
  StyleSheet
} = React

class InfoBar extends React.Component {

  render() {
    const { gridWidth, colorScheme, level, score, timeLeft, winner } = this.props

    let opacity = (timeLeft / 60)
    let speedBonus = helper.getPoints(level, timeLeft) - 50

    let altStyles = StyleSheet.create({
      speedBonus: {
        flex: 1,
        width: timeLeft * 5,
        maxHeight: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(' + colorScheme.toJS().cell + ',' + opacity + ')'
      },
      speedBonusText: {
        fontFamily: 'Geo',
        fontSize: 14,
        color: '#aaaaaa'
      }
    })

    return (
      <View style={styles.container}>
        <View style={styles.scoreboard}>
          <Text style={styles.score}>score: {score}</Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.levelText}>LEVEL &nbsp; {level}</Text>
        </View>
        <View style={altStyles.speedBonus}></View>
        <Text style={altStyles.speedBonusText}>SPEED BONUS +{speedBonus}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 150
  },
  scoreboard: {
    padding: 5,
    width: 290,
    alignItems: 'center'
  },
  score: {
    fontSize: 24,
    color: '#aaaaaa',
    fontFamily: 'Geo',
  },
  level: {
    width: 290,
    alignItems: 'center',
    padding: 5
  },
  levelText: {
    fontSize: 18,
    fontFamily: 'Geo',
    color: '#888888'
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
