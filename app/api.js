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

// const index0 = function () {
//   return $.ajax({
//     method: 'PATCH',
//     url: 'https://tic-tac-toe-api-development.herokuapp.com/games/:id',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//     data.cell
//     data.value
//   })
// }

// const newGame = function () {
//     return $.ajax({
//         method: 'POST'
//         url: ''
//     })
// }
const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

// const indexGames = function () {
//   return $.ajax({
//     method: 'GET',
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
  newGame
//   indexGames,
//   showGame
}
