"use strict"

import React from 'react-native'

const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React

let menuOptions = [
  {name: 'auto-solve', view: ''},
  {name: 'start over', view: ''},
  {name: 'night mode', view: ''}
]

class _Menu extends React.Component {

  getMenuOptions() {
    return menuOptions.map((option, i) => {
      return (
        <TouchableOpacity key={i}>
          <View style={styles.option}>
            <Text style={styles.optionText}>{option.name}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }

  render() {
    const {level, closeMenu} = this.props

    return (
      <TouchableOpacity onPress={() => closeMenu()}>
        <View style={styles.container}>
          {this.getMenuOptions()}
          <Text>tap to resume game</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 300,
    backgroundColor: 'rgba(255,255,255,0.9)'
  },
  option: {
    flex: 1,
    padding: 10,
    width: 300,
    backgroundColor: '#002461',
    alignItems: 'center',
    marginBottom: 5
  },
  optionText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default _Menu
