"use strict"

import React from 'react-native'

const {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} = React

class MenuButton extends React.Component {

  render() {
    const {colorScheme, openMenu} = this.props

    let styles = StyleSheet.create ({
      container: {
        flex: 1,
        paddingTop: 40,
        marginTop: 50
      },
      menuButton: {
        width: 20,
        height: 20
      }
    })

    return (
      <TouchableOpacity
        onPress={() => openMenu()}>
        <View style={styles.container}>
          <Image
            style={styles.menuButton}
            source={require('../assets/caret.png')} />
        </View>
      </TouchableOpacity>
    )
  }

}

export default MenuButton
