"use strict"

import React from 'react-native'
import Timer from './Timer.js'

const {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} = React

class MenuButton extends React.Component {

  render() {
    const { colorScheme, level, openMenu, score, timeLeft } = this.props

    let opacity = (timeLeft / 60)
    console.log(timeLeft)

    let styles = StyleSheet.create ({
      container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 90,
        height: 130,
        width: 300
      },
      menuButton: {
        width: 20,
        height: 20,
        marginBottom: 10
      },
      timer: {
        flex: 1,
        width: timeLeft * 4.1,
        maxHeight: 5,
        borderRadius: 2.5,
        backgroundColor: 'rgba(' + colorScheme.toJS().cell + ',' + opacity + ')'
      }
    })

    return (
      <TouchableOpacity
        onPress={() => openMenu()}>
        <View style={styles.container}>
          <Image
            style={styles.menuButton}
            source={require('../assets/caret.png')} />
          <View style={styles.timer}></View>
        </View>
      </TouchableOpacity>
    )
  }

}

export default MenuButton
