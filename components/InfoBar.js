import React from 'react-native'
import Cell from './Cell.js'

const {
  View,
  Text,
  StyleSheet
} = React

class InfoBar extends React.Component {

  getCells() {
    const { gridWidth, winningCombo, cellColors } = this.props
    let cellSize = 30
    let winningComboArray = winningCombo.split('')
    return winningComboArray.map((cell, i) => {
      return (
        <Cell
          opacity={cell / 7}
          color={"#000000"}
          cellSize={cellSize}
          position={cell}
          borderWidth={3}
          index={i}
          key={i} />
      )
    })
  }

  render() {
    const { gridWidth, cellData, cellColors, score, winner } = this.props
    let gridSize = (gridWidth * 30)
    let styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        maxHeight: 250
      },
      scoreboard: {
        padding: 5,
        backgroundColor: '#55bbc8',
        width: 230,
        alignItems: 'center'
      },
      score: {
        fontSize: 22,
        color: '#ffffff',
      },
      level: {
        width: 230,
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        padding: 5
      },
      levelInfo: {
        width: 230,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#eeeeee'
      },
      solveButton: {
        backgroundColor: '#eeeeee',
        padding: 5,
        width: 120,
        margin: 10
      },
      grid: {
        backgroundColor: '#eeeeee',
        width: gridSize + 30,
        height: gridSize + 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })
    return (
      <View style={styles.container}>
        <View style={styles.scoreboard}>
          <Text style={styles.score}>score: {score}</Text>
        </View>
        <View style={styles.level}>
          <Text>LEVEL {this.props.level}</Text>
        </View>
        <View style={styles.levelInfo}>
          <Text>YOUR GOAL</Text>
          <View style={styles.grid}>
            {this.getCells()}
          </View>
          <View
            style={styles.solveButton}
            onClick={() => this.props.onSolveButtonClick}>
            <Text>SOLVE</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default InfoBar
