"use strict"

import React from 'react-native'

const {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React

class _NextLevel extends React.Component {

  render() {
    const {level, closeModal, autoSolved} = this.props
    let announcement = 'you got it!'
    if (autoSolved == true) {
      announcement = 'auto-solved!'
    }

    return (
      <TouchableHighlight onPress={() => closeModal()}>
        <View style={styles.container}>
          <Text>{announcement}</Text>
          <View
            style={styles.button}
            onClick={closeModal}>
            <Text>tap to continue</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 300,
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  button: {

  }
})

export default _NextLevel
