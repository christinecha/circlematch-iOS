"use strict"

import React from 'react-native'

const {
  StyleSheet,
  View,
  TouchableOpacity
} = React

class Hamburger extends React.Component {

  render() {
    const {colorScheme, openMenu} = this.props

    let styles = StyleSheet.create ({
      container: {
        flex: 1,
        height: 30,
        width: 30,
        marginLeft: 330,
        marginTop: 30
      },
      bar: {
        backgroundColor: 'rgb(' + colorScheme.toJS().cell + ')',
        opacity: 0.8,
        height: 6,
        marginBottom: 4
      }
    })

    return (
      <TouchableOpacity
        onPress={() => openMenu()}>
        <View style={styles.container}>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
        </View>
      </TouchableOpacity>
    )
  }

}

export default Hamburger
