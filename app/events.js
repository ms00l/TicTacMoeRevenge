'use strict'

const moeUi = require('./ui.js')
const moeApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields')
const store = require('./store.js')
// const addNestedValue = require('../lib/add-nested-value.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  moeApi
    .signUp(data)
    .then(() => moeUi.onSignUpSuccess())
    .catch(() => moeUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  moeApi
    .signIn(data)
    .then((response) => moeUi.onSignInSuccess(response))
    .catch(() => moeUi.onSignInFailure())
}

const onSignOut = function (event) {
  console.log('sign out ran')

  moeApi
    .signOut()
    .then((response) => moeUi.signOutSuccess(response))
    .catch(() => moeUi.signOutFailure)
}

const onNewGame = function () {
  moeApi
    .newGame()
    // .then(() => moeUi.newGameSuccess)
    .then((response) => {
      store.game = response.game.cells
    })
    .then(() => console.log(store))

  // $('#game').data({ cells: [1, 2, 3, , , , , ] })

  // .then((response) => store.response)

//   moeApi
//     .newGame
//     .then(() => moeUi.newGameSuccess)
//     .catch(() => moeUi.newGameFailure)
}
// let index =
// let value =
// let gameOver =

const onStartGame = function () {
  moeApi.startGame()
    .then((response) => moeUi.onStartGameSuccess(response))
    .catch(() => moeApi.onStartGameFailure())
}
const onUpdateGame = function () {
  moeApi.updateGame()
    .then((response) => moeUi.onSuccessUpdate(response))
}
// eslint-disable-next-line prefer-const
let gameOver = false
// gameOver = !gameOver
let userX = true
// eslint-disable-next-line prefer-const
let board = [null, null, null, null, null, null, null, null, null]
// const clearBoard = function () {
//   board.forEach(cellIndex => (cellIndex = null))
//   return board
// }

const onBoxClick = function () {
  const cellIndex = this.getAttribute('data-cell-index')
  if (board[cellIndex]) {
    return
  }
  console.log(cellIndex)
  if (userX) {
    $(this).text('x')
    board[cellIndex] = 'x'
  } else {
    $(this).text('o')
    board[cellIndex] = 'o'
  }
  userX = !userX
  console.log(board)
  if (board[0] === board[1] && board[1] === board[2] && board[1] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[3] === board[4] && board[4] === board[5] && board[4] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[0] === board[3] && board[3] === board[6] && board[6] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[1] === board[4] && board[4] === board[7] && board[1] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[2] === board[5] && board[5] === board[8] && board[2] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[2] === board[4] && board[4] === board[6] && board[6] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  if (board[1] !== null && board[2] !== null && board[3] !== null && board[4] !== null && board[5] !== null & board[6] !== null && board[7] !== null && board[8] !== null) {
    $('#Winner').text("It's a tie!")
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  moeApi.updateGame(cellIndex, board[cellIndex], gameOver)
    .then(() => moeApi.startGame())
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onBoxClick,
  onUpdateGame,
  onStartGame
}
