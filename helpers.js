"use strict"

export const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min
}

export const moveCode = (gridWidth, Xdiff, Ydiff) => {
  if (Math.abs(Xdiff) > 10 && Math.abs(Xdiff) > Math.abs(Ydiff)) {
    if (Xdiff < 0) {
      return -1
    } else {
      return 1
    }
  } else if (Math.abs(Ydiff) > 10){
    if (Ydiff < 0) {
      return -(gridWidth)
    } else {
      return gridWidth
    }
  } else {
    return 0
  }
}

export const moveIsLegal = (gridWidth, index, move) => {
  if (index < 0 || index > 8) {
    return false
  }
  let numOfCells = gridWidth * gridWidth
  let firstOfRows = []
  let lastOfRows = []
  for (let i = 0; i < gridWidth; i++) {
    firstOfRows.push(gridWidth * i)
    lastOfRows.push((gridWidth * i) - 1)
  }

  if (index + move < numOfCells && index + move >= 0){
    if (lastOfRows.indexOf(index) >= 0 && move == 1) {
      return false
    } else if (firstOfRows.indexOf(index) >= 0 && move == -1) {
      return false
    } else {
      return true
    }
  }
}

export const getPoints = (level, timeLeft) => {
  let points = 50

  if (timeLeft <= 60 && timeLeft > 55) {
    points += (100 * level)
  } else if (timeLeft < 56 && timeLeft > 50) {
    points += (50 * level)
  } else if (timeLeft < 51 && timeLeft > 40) {
    points += (30 * level)
  } else if (timeLeft < 41 && timeLeft > 30) {
    points += (20 * level)
  } else if (timeLeft < 31 && timeLeft > 15) {
    points += (10 * level)
  } else if (timeLeft < 16 && timeLeft > 0) {
    points += (5 * level)
  }

  return points
}





//
