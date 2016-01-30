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
    const {cellColors, randomizeColor} = this.props

    let menuOptions = [
      {name: 'auto-solve', action: ''},
      {name: 'start over', action: ''},
      {name: 'randomize color', action: () => randomizeColor()},
      {name: 'night mode', action: () => randomizeColor()}
    ]

    let styles = StyleSheet.create({
      option: {
        flex: 1,
        padding: 10,
        width: 300,
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: cellColors,
        borderRadius: 22
      },
      optionText: {
        fontSize: 20,
        color: '#fff'
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
    const {level, closeMenu} = this.props

    let styles = StyleSheet.create({
      container: {
        flex: 1,
        minHeight: 800,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 200,
        backgroundColor: 'rgba(255,255,255,0.9)'
      }
    })

    return (
      <TouchableOpacity onPress={() => closeMenu()}>
        <View style={styles.container}>
          {this.getMenuOptions()}
          <Text style={{marginTop: 30}}>tap to resume game</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default _Menu
