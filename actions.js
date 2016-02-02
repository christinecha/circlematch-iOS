// import {moveCells} from './action_helpers/move_cells.js'
import * as helper from './helpers.js'
import {solutions} from './solutions.js'

export const SOLVE_PUZZLE = (cellData, level) => {
  // helper.solvePuzzle(gridWidth, cellData,winningCombo)
  return {
    type: 'SOLVE_PUZZLE',
    data: {
      winner: true,
      autoSolved: true,
      level: level - 1
    }
  }
}

export const MOVE_CELLS = (gridWidth, cellData, move, winningCombo) => {

  let cellDataArray = cellData.split('')
  let emptyCell = cellData.indexOf(0)
  // console.log('0 is at position ', emptyCell)
  let index = emptyCell - move

  if (helper.moveIsLegal(gridWidth, index, move)) {
    // console.log('move', move, 'is legal')
    cellDataArray[emptyCell] = cellData[index]
    cellDataArray[index] = 0
  } else {
    // console.log('move', move, 'is illegal')
  }
  // console.log(cellDataArray)


  const winner = () => {
    for (let i = 0; i < cellData.length; i++) {
      if (cellDataArray[i] != winningCombo[i]) {
        return false
      }
    }
    return true
  }

  return {
    type: 'MOVE_CELLS',
    data: {
      cellData: cellDataArray.join(''),
      winner: winner()
    }
  }}

export const TIMER = (timeLeft) => {
  if (timeLeft < 10) {
    timeLeft = '0' + timeLeft
  }
  return {
    type: 'TIMER',
    data: {
      timeLeft: timeLeft,
      timerIsRunning: true
    }
  }
}

export const SET_LEVEL = (level, gridWidth, score, timeLeft, autoSolved) => {
  // let newLevelData = solutions[level][newLevel]
  // console.log(newLevelData)
  let points = 0
  if (autoSolved == false) {
    points = helper.getPoints(level, timeLeft)
  }
  let newScore = score + points
  let newLevel = Math.floor(newScore / 1000) + 1

  let possibleLevels = solutions[level]
  // console.log(solutions)
  let newPuzzle = possibleLevels[helper.randomNum(0, possibleLevels.length - 1)]

  return {
    type: 'SET_LEVEL',
    data: {
      winner: false,
      level: newLevel,
      cellData: newPuzzle,
      autoSolved: false,
      timerIsRunning: false,
      timeLeft: 60,
      score: newScore
    }
  }
}

export const OPEN_MODAL = () => {
  return {
    type: 'OPEN_MODAL',
    data: {
      modalIsOpen: true
    }
  }
}

export const RANDOMIZE_COLORS = (colorScheme) => {

  let color = []
  for (let i = 0; i < 3; i++) {
     let random = Math.round(helper.randomNum(50, 230))
     color.push(random)
  }

  color = color.join(',')

  return {
    type: 'RANDOMIZE_COLORS',
    data: {
      colorScheme: {
        name: colorScheme.toJS().name,
        background: colorScheme.toJS().background,
        cell: color
      }
    }
  }
}

export const TOGGLE_BACKGROUND_COLOR = (colorScheme) => {

  let newName = colorScheme.toJS().name
  let newBackgroundColor = colorScheme.toJS().background
  let newCellColor = colorScheme.toJS().cell

  if (colorScheme.toJS().name == 'day') {
    newName = 'night'
    newBackgroundColor = '10,10,15'
  } else if (colorScheme.toJS().name == 'night') {
    newName = 'day'
    newBackgroundColor = '241,241,242'
  }

  return {
    type: 'TOGGLE_BACKGROUND_COLOR',
    data: {
      colorScheme: {
        name: newName,
        cell: newCellColor,
        background: newBackgroundColor
      }
    }
  }
}

export const CLOSE_MODAL = () => {
  return {
    type: 'CLOSE_MODAL',
    data: {
      modalIsOpen: false,
      timeLeft: 60
    }
  }
}

export const OPEN_MENU = () => {
  return {
    type: 'OPEN_MENU',
    data: {
      menuIsOpen: true,
      timerIsRunning: false
    }
  }
}

export const CLOSE_MENU = () => {
  return {
    type: 'CLOSE_MENU',
    data: {
      menuIsOpen: false,
      timerIsRunning: true
    }
  }
}
