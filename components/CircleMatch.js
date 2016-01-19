"use strict"

import React from 'react-native'
import {connect} from 'react-redux/native'
// import Modal from 'react-modal'
import Grid from './Grid.js'
// import Sidebar from './Sidebar.jsx'
// import Toolbar from './Toolbar.jsx'
// import _NextLevel from './_NextLevel.jsx'
import * as style from '../style.js'
// import * as action from '../actions.js'

const {
  StyleSheet,
  View,
  Text
} = React

class CircleMatch extends React.Component {
  render() {
    console.log('rendering CircleMatch')
    return (
      <View style={styles.container}>
        <Grid />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  return {
    animation: state.get('animation'),
    autoSolved: state.get('autoSolved'),
    cellColors: state.get('cellColors'),
    cellData: state.get('cellData'),
    gridWidth: state.get('gridWidth'),
    level: state.get('level'),
    modalIsOpen: state.get('modalIsOpen'),
    score: state.get('score'),
    timerIsRunning: state.get('timerIsRunning'),
    timeLeft: state.get('timeLeft'),
    winningCombo: state.get('winningCombo'),
    winner: state.get('winner')
  }
}

export const CircleMatchContainer = connect(mapStateToProps)(CircleMatch);
