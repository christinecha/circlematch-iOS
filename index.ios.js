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
    animations: [],
    backgroundColor: '#f1f1f2',
    gameComplete: false,
    gridWidth: 3,
    cellData: '102345678',
    colorScheme: {
      name: 'day',
      cell: '0, 130, 180',
      background: '241, 241, 242'
    },
    level: 1,
    menuIsOpen: false,
    menuView: 'Main.js',
    modalIsOpen: false,
    autoSolved: false,
    score: 0,
    timeLeft: 60,
    timerIsRunning: false,
    tutorialIsOn: true,
    winningCombo: '012345678',
    winner: false
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
