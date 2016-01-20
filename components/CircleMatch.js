"use strict"

import React from 'react-native'
import {connect} from 'react-redux/native'
// import Modal from 'react-modal'
import Grid from './Grid.js'
// import Sidebar from './Sidebar.jsx'
// import Toolbar from './Toolbar.jsx'
// import _NextLevel from './_NextLevel.jsx'
import * as style from '../style.js'
import * as action from '../actions.js'

const {
  StyleSheet,
  View,
  Text
} = React

let originalX = 0
let originalY = 0

class CircleMatch extends React.Component {

  handleCellResponderGrant(evt, index) {
    originalX = evt.nativeEvent.pageX
    originalY = evt.nativeEvent.pageY
  }

  handleCellResponderMove(evt, index) {
    const { dispatch, cellData, translations } = this.props
    if (cellData.toJS()[index - 1] == 0 || cellData.toJS()[index + 1] == 0) {
      let newX = evt.nativeEvent.pageX - originalX
      dispatch(action.DRAG_CELL(index, translations, newX, 0))
    } else if (cellData.toJS()[index - 3] == 0 || cellData.toJS()[index + 3] == 0) {
      let newY = evt.nativeEvent.pageY - originalY
      dispatch(action.DRAG_CELL(index, translations, 0, newY))
    }
  }

  handleCellResponderRelease(evt, index) {
    const { dispatch, cellData, gridWidth, translations, winningCombo } = this.props
    dispatch(action.MOVE_CELLS(gridWidth, cellData.toJS(), index, translations.toJS(), winningCombo))
    dispatch(action.DRAG_CELL(index, translations, 0, 0))
    originalX = 0
    originalY = 0
  }

  render() {

    const {
      autoSolved,
      cellColors,
      cellData,
      gridWidth,
      level,
      modalIsOpen,
      score,
      timerIsRunning,
      timeLeft,
      translations,
      winner,
      winningCombo
    } = this.props
    return (
      <View style={styles.container}>
        <Grid
          gridWidth={gridWidth}
          cellData={cellData}
          cellColors={cellColors}
          translations={translations}
          onCellResponderGrant={(evt, index) => this.handleCellResponderGrant(evt, index)}
          onCellResponderMove={(evt, index) => this.handleCellResponderMove(evt, index)}
          onCellResponderRelease={(evt, index) => this.handleCellResponderRelease(evt, index)} />
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
    autoSolved: state.get('autoSolved'),
    cellColors: state.get('cellColors'),
    cellData: state.get('cellData'),
    gridWidth: state.get('gridWidth'),
    level: state.get('level'),
    modalIsOpen: state.get('modalIsOpen'),
    score: state.get('score'),
    timerIsRunning: state.get('timerIsRunning'),
    timeLeft: state.get('timeLeft'),
    translations: state.get('translations'),
    winningCombo: state.get('winningCombo'),
    winner: state.get('winner')
  }
}

export const CircleMatchContainer = connect(mapStateToProps)(CircleMatch);
