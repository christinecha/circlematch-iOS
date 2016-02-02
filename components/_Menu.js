"use strict"

import React from 'react-native'

const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React

class _Menu extends React.Component {

  getMenuOptions() {
    const {colorScheme, autoSolve, randomizeColor, toggleBackgroundColor} = this.props

    let colorMode = colorScheme.toJS().name
    if (colorMode == 'day') {
      colorMode = 'night'
    } else if (colorMode == 'night') {
      colorMode = 'day'
    }

    let menuOptions = [
      {name: 'auto-solve', action: () => autoSolve()},
      {name: 'start over', action: () => randomizeColor()},
      {name: 'randomize color', action: () => randomizeColor()},
      {name: colorMode + ' mode', action: () => toggleBackgroundColor()}
    ]

    let styles = StyleSheet.create({
      option: {
        flex: 1,
        padding: 10,
        width: 300,
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: 'rgb(' + colorScheme.toJS().cell + ')',
        borderRadius: 22
      },
      optionText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Geo'
      }
    })

    return menuOptions.map((option, i) => {
      return (
        <TouchableOpacity key={i} onPress={option.action}>
          <View style={styles.option}>
            <Text style={styles.optionText}>{option.name}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }

  render() {
    const {colorScheme, closeMenu, level, score} = this.props

    let styles = StyleSheet.create({
      container: {
        flex: 1,
        minHeight: 800,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 200,
        backgroundColor: 'rgba(' + colorScheme.toJS().background + ', .8)'
      },
      text: {
        fontFamily: 'Geo',
        fontSize: 16,
        color: '#888888'
      },
      gameInfo: {
        marginBottom: 20
      },
      continue: {
        marginTop: 30
      }
    })

    return (
      <TouchableOpacity onPress={() => closeMenu()}>
        <View style={styles.container}>
          <Text style={[styles.text, styles.gameInfo]}>{score} PTS &nbsp; | &nbsp; LEVEL {level}</Text>
          {this.getMenuOptions()}
          <Text style={[styles.text, styles.continue]}>tap to resume game</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default _Menu
