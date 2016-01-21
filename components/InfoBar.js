import React from 'react-native'
import Cell from './Cell.js'

const {
  View,
  Text,
  StyleSheet
} = React

class InfoBar extends React.Component {

  getCells() {
    const { gridWidth, winningCombo, cellColors, translations } = this.props
    let cellSize = 30
    return winningCombo.toJS().map((cell, i) => {
      return (
        <Cell
          color={cellColors.toJS()[cell]}
          cellSize={cellSize}
          position={cell}
          borderWidth={3}
          index={i}
          key={i}
          translateX={0}
          translateY={0} />
      )
    })
  }

  render() {
    const { gridWidth, cellData, cellColors, score, winner } = this.props
    let gridSize = (gridWidth * 30)
    let styles = StyleSheet.create({
      container: {
        flex: 1
      },
      scoreboard: {
        padding: 5,
        backgroundColor: '#55bbc8',
        width: 134,
        marginLeft: 20,
      },
      score: {
        fontSize: 22,
        color: '#ffffff',
      },
      levelInfo: {
        marginLeft: 20,
        width: 140,
        flex: 1,
        borderWidth: 3,
        borderColor: '#eeeeee'
      },
      level: {
        backgroundColor: '#eeeeee',
        padding: 5,
        marginBottom: 10
      },
      solveButton: {
        backgroundColor: '#eeeeee',
        padding: 5,
        width: 120,
        margin: 10
      },
      grid: {
        backgroundColor: '#eeeeee',
        width: gridSize + 10,
        height: gridSize + 10,
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
