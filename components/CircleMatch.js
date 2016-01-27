"use strict"

import React from 'react-native'
import {connect} from 'react-redux/native'
// import Modal from 'react-modal'
import Grid from './Grid.js'
import InfoBar from './InfoBar.js'
// import Toolbar from './Toolbar.jsx'
import _NextLevel from './_NextLevel.js'
import * as style from '../style.js'
import * as action from '../actions.js'
import * as helper from '../helpers.js'

const {
  StyleSheet,
  Modal,
  View,
  Text
} = React

let originalX = 0
let originalY = 0

class CircleMatch extends React.Component {

  componentDidUpdate() {
    const { dispatch, autoSolved, winner, level, modalIsOpen, gridWidth, timeLeft, timerIsRunning, score } = this.props
    if (winner == true) {
      dispatch(action.SET_LEVEL(level + 1, gridWidth, score, timeLeft, autoSolved))
      dispatch(action.OPEN_MODAL())
    }
  }

  closeModal() {
    const { dispatch } = this.props
    dispatch(action.CLOSE_MODAL())
  }

  handleSwipeGrant(evt) {
    originalX = evt.nativeEvent.pageX
    originalY = evt.nativeEvent.pageY
  }

  handleSwipeRelease(evt) {
    const { dispatch, cellData, gridWidth, translations, winner, winningCombo } = this.props
    let Xdiff = evt.nativeEvent.pageX - originalX
    let Ydiff = evt.nativeEvent.pageY - originalY
    let move = helper.moveCode(gridWidth, Xdiff, Ydiff)
    dispatch(action.MOVE_CELLS(gridWidth, cellData.toJS(), move, winningCombo.toJS()))
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

    console.log('winner is ', winner)

    return (
      <View style={styles.container}>
        <Modal
          transparent={true}
          visible={modalIsOpen} >
          <_NextLevel
            level={level}
            autoSolved={autoSolved}
            closeModal={() => this.closeModal()} />
        </Modal>
        <Grid
          gridWidth={gridWidth}
          cellData={cellData}
          cellColors={cellColors}
          translations={translations}
          onCellResponderGrant={(evt) => this.handleSwipeGrant(evt)}
          onCellResponderRelease={(evt) => this.handleSwipeRelease(evt)} />
        <InfoBar
          gridWidth={gridWidth}
          cellColors={cellColors}
          level={level}
          winningCombo={winningCombo}
          score={score}
          onSolveButtonClick = {() => this.solvePuzzle()} />
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
  }
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
