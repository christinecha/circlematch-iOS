"use strict"

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
let finishedFindingAllSolutions = false
solutions[originalState] = { moveCount: 0 }

const allPossibleMoves = (state, lastMove) => {
  let index = state.indexOf('0')
  let movesArray = movesDictionary[index].slice()
  let lastMoveIndex = movesArray.indexOf(lastMove)
  if (lastMoveIndex >= 0) {
    movesArray.splice(lastMoveIndex, 1)
  }
  return movesArray
}

const calculateNextPossibleStates = (state) => {
  let possibleMoves = allPossibleMoves(state, solutions[state].lastMove)
  let emptyCellId = state.indexOf('0')
  for (let i = 0; i < possibleMoves.length; i++) {
    let move = possibleMoves[i]
    let movingCell = parseInt(emptyCellId) - move

    let newState = state.split('')
    newState[emptyCellId] = state[movingCell]
    newState[movingCell] = '0'
    newState = newState.join('')

    if (!solutions[newState]) {
      let newStateObj = {
        moveCount: solutions[state].moveCount + 1,
        lastState: state,
        lastMove: move
      }

      solutions[newState] = newStateObj
      // console.log(newState)
      // ref.child(newState).set(newStateObj)
    } else {
      // already added to tree
    }
  }
  solutions[state].checked = true
}


while (Object.keys(solutions).length < 100000 && finishedFindingAllSolutions == false) {

  let numOfSolutions = Object.keys(solutions).length

  for (let i in solutions) {
    if (!solutions[i].checked) {
      calculateNextPossibleStates(i)
      solutions[i].checked = true
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
