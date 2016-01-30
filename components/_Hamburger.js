"use strict"

import React from 'react-native'

const {
  StyleSheet,
  View,
  TouchableOpacity
} = React

class Hamburger extends React.Component {

  render() {
    const {openMenu} = this.props

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

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    height: 30,
    width: 30,
    marginLeft: 350,
    marginTop: 30
  },
  bar: {
    backgroundColor: '#ccc',
    height: 6,
    marginBottom: 4
  }
})

export default Hamburger
