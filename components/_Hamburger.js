"use strict"

import React from 'react-native'

const {
  StyleSheet,
  View
} = React

class Hamburger extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar}></View>
        <View style={styles.bar}></View>
        <View style={styles.bar}></View>
      </View>
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
