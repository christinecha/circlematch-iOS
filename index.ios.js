'use strict'

import React from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux/native'
import { CircleMatchContainer } from './components/CircleMatch.js'
import reducer from './reducer.js'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React

const store = createStore(reducer)

store.dispatch({
  type: 'SET_INITIAL_STATE',
  data: {
    gridWidth: 3,
    cellData: '102345678',
    translations: [{translateX:0, translateY:0},{translateX:0, translateY:0},{translateX:0, translateY:0},{translateX:0, translateY:0},{translateX:0, translateY:0},{translateX:0, translateY:0},{translateX:0, translateY:0},{translateX:0, translateY:0},{translateX:0, translateY:0}],
    cellColors: ['transparent', '#a86ed4', '#d3b8bc', '#ffa56c', '#ffe273', '#b1c559', '#ed92a3', '#55bbc8', '#5585c6', '#8a6439', '#899089', '#ff683d', '#95287e', '#589542', '#ed60a3', '#55748e', '#d6e2c6'],
    level: 1,
    winningCombo: '012345678',
    winner: false,
    modalIsOpen: false,
    autoSolved: false,
    timeLeft: 60,
    timerIsRunning: false,
    score: 0
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

class App extends React.Component {
  render() {
    console.log('rendering App')
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          name: 'CircleMatch',
          component: CircleMatchContainer
        }}
        renderScene={(route, navigator) => {
          console.log(route, navigator);
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
      />
    )
  }
}

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}

AppRegistry.registerComponent(
  'circlematch_native',
  () => AppContainer
)
