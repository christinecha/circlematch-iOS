// import {moveCells} from './action_helpers/move_cells.js'
import * as helper from './helpers.js'
import * as solutions from './solutions.json'

export const SOLVE_PUZZLE = (gridWidth, cellData, winningCombo, level) => {
  helper.solvePuzzle(gridWidth, cellData,winningCombo)
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
  let possibleLevels = solutions[level]
  let newLevel = Object.keys(possibleLevels)[helper.randomNum(0, Object.keys(possibleLevels).length - 1)]
  let newLevelData = solutions[level][newLevel]
  // console.log(newLevelData)
  let points = 0
  if (autoSolved == false) {
    points+= 50
    if (timeLeft < 60 && timeLeft > 45) {
      points = 50 * gridWidth
    } else if (timeLeft < 46 && timeLeft > 30) {
      points = 30 * gridWidth
    } else if (timeLeft < 31 && timeLeft > 15) {
      points = 20 * gridWidth
    } else if (timeLeft < 16 && timeLeft > 0) {
      points = 10 * gridWidth
    }
  }
  let newScore = score + points
  // console.log(newScore)

  return {
    type: 'SET_LEVEL',
    data: {
      winner: false,
      level: level,
      cellData: newLevel,
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

export const RANDOMIZE_COLORS = (gridWidth) => {
  let characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let numOfColors = (gridWidth * gridWidth) - 1
  let colorScheme = ['transparent']
  for (let i = 0; i < numOfColors; i++) {
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
       let random = Math.round(Math.random() * (characters.length - 1))
       hexCode += characters[random]
    }
    colorScheme.push(hexCode)
  }
  return {
    type: 'RANDOMIZE_COLORS',
    data: {
      cellColors: colorScheme
    }
  }
}

export const RESIZE_GRID = (gridWidth) => {
  let numOfCells = gridWidth * gridWidth
  let cellData = []
  let cellColors = ['transparent', '#a86ed4', '#d3b8bc', '#ffa56c', '#ffe273', '#b1c559', '#ed92a3', '#55bbc8', '#5585c6', '#8a6439', '#899089', '#ff683d', '#95287e', '#589542', '#ed60a3', '#55748e', '#d6e2c6']
  let animation = []
  for (let i = 0; i < numOfCells; i++) {
    cellData.push(i)
    animation.push('')
  }
  return {
    type: 'RESIZE_GRID',
    data: {
      cellData: cellData,
      cellColors: cellColors,
      gridWidth: gridWidth,
      winner: false,
      timeLeft: 0
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
