"use strict"

// {"806547231":{"moveCount":31,"solution":["846507231","846057231","846257031","846257301","846207351","846270351","846271350","846271305","846201375","846021375","046821375","406821375","460821375","461820375","461802375","461082375","461382075","461382705","461302785","401362785","041362785","341062785","341602785","301642785","310642785","312640785","312645780","312645708","312645078","312045678","012345678"],"lastMove":3,"expanded":true},"876041253":{"moveCount":31,"solution":["876241053","876241503","876201543","876021543","076821543","706821543","726801543","726810543","720816543","702816543","712806543","712846503","712846053","712046853","012746853","102746853","142706853","142760853","142763850","142763805","142763085","142063785","142603785","142630785","142635780","142635708","142635078","142035678","142305678","102345678","012345678"],"lastMove":3,"expanded":true}}

let ref = new Firebase("https://circlematch.firebaseio.com/")

// ref.orderByChild('moveCount').equalTo(2).on('child_added', (snapshot) => {
//   // possibleLevels.push(snapshot.key())
//   console.log(snapshot.key())
//   // let solution = solvePuzzle()
// })

let gridWidth = 3
let originalState = '012345678'
let numOfCells = gridWidth * gridWidth

let movesDictionary = [
  [-1, -3],
  [-1, 1, -3],
  [1, -3],
  [-3, 3, -1],
  [1, -1, 3, -3],
  [-3, 3, 1],
  [3, -1],
  [3, 1, -1],
  [1, 3]
]

let solutions = {}
let longestSolutions = {}
let finishedFindingAllSolutions = false
solutions[originalState] = { moveCount: 0, solution: [] }

const allPossibleMoves = (state, lastMove) => {
  let index = state.indexOf('0')
  let movesArray = movesDictionary[index].slice()
  let lastMoveIndex = movesArray.indexOf(-(lastMove))
  if (lastMoveIndex >= 0) {
    movesArray.splice(lastMoveIndex, 1)
  }
  return movesArray
}

const nextState = (state, move) => {
  let emptyCellId = state.indexOf('0')
  let movingCell = parseInt(emptyCellId) - move
  let newState = state.split('')
  newState[emptyCellId] = state[movingCell]
  newState[movingCell] = '0'
  newState = newState.join('')
  return newState
}

const calculateNextPossibleStates = (state) => {
  let possibleMoves = allPossibleMoves(state, solutions[state].lastMove)
  for (let i = 0; i < possibleMoves.length; i++) {
    let newState = nextState(state, possibleMoves[i])
    let prevSolution = solutions[state].solution
    let solution = [state]

    for (let i = 0; i < prevSolution.length; i++) {
      solution.push(prevSolution[i])
    }

    if (!solutions[newState]) {
      let newStateObj = {
        moveCount: solutions[state].moveCount + 1,
        solution: solution,
        lastMove: possibleMoves[i]
      }

      solutions[newState] = newStateObj

      if (newStateObj.moveCount >= 31) {
        longestSolutions[newState] = newStateObj
      }
      // console.log(state, '--->', newState, ' after move: ', possibleMoves[i])
      // ref.child(newState).set(newStateObj)
    } else {
      // already added to tree
    }
  }
  solutions[state].expanded = true
}


while (Object.keys(solutions).length < 200 && finishedFindingAllSolutions == false) {

  let numOfSolutions = Object.keys(solutions).length

  for (let i in solutions) {
    if (!solutions[i].expanded) {
      calculateNextPossibleStates(i)
      solutions[i].expanded = true
    }
  }

  if (numOfSolutions == Object.keys(solutions).length) {
    finishedFindingAllSolutions = true
    console.log('done')
  } else {
    console.log('still more to find. found ' + Object.keys(solutions).length + ' so far.')
  }

}
console.log('stopped')
// clearInterval(timer)
