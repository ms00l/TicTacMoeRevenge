'use strict'
const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const index0 = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: 'https://tic-tac-toe-api-development.herokuapp.com/games/:id',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: store.game.cell.index,
//           value: store.game.cell.value
//         },
//         over: false
//       }
//     }
//   })
// }

// const newGame = function () {
//     return $.ajax({
//         method: 'POST'
//         url: ''
//     })
// }
const newGame = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

// const logCellIndex = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.game._id,
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: 0,
//           value: 'x'
//         },
//         over: false
//       }
//     }
//   })
// }
const updateGame = function (cellIndex, userX, gameOver) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: userX
        },
        over: gameOver
      }
    }
  })
}

const startGame = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}
// const updateGame = function () {
//   return $.ajax({
//     method: 'PATCH',
//     url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data
//   })
// }

// const showGame = function (data) {
//   console.log(data)
//   return $.ajax({
//     method: 'GET',
//     url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  // logCellIndex,
  updateGame,
  startGame
  // index0
//   indexGames,
//   showGame
}
