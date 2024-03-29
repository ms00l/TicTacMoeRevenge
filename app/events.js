'use strict'

const moeUi = require('./ui.js')
const moeApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields')
const store = require('./store.js')

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

const onUpdateGame = function () {
  moeApi.updateGame()
    .then((response) => moeUi.onSuccessUpdate(response))
}

let gameOver = false
let userX = true
const onBoxClick = function () {
  const cellIndex = this.getAttribute('data-cell-index')
  if (store.game.cells[cellIndex]) {
    return
  }
  console.log(cellIndex)
  if (userX) {
    // $(this).text('x')
    $(this).html(
      $('<img>', { class: 'moe1', src: 'https://i.imgur.com/hW7oOpu.png' })
    )
    store.game.cells[cellIndex] = 'x'
  } else {
    // $(this).text('o')
    $(this).html(
      $('<img>', { class: 'moe2', src: 'https://i.imgur.com/sNCv7wd.png' })
    )
    store.game.cells[cellIndex] = 'o'
  }
  userX = !userX
  console.log(store.game.cells)

  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[1] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  }
  if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[4] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  }
  if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  }
  if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  }
  if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[6] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  }
  if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  }
  if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  }
  if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  }
  if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[6] !== '') {
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('.milkies').text('HOLY MOELY ' + store.game.cells[cellIndex] + ' YOU WON')
  } // this next tie is broken X diagonal from top left down counts as a tie?
  if (store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' & store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    $('#Winner').text("It's a tie!")
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
  }
  moeApi.updateGame(cellIndex, store.game.cells[cellIndex], gameOver)
  // .then((response) => moeUi.winState(response))
}
const onStartGame = function () {
  console.log('#######################', store.user)
  gameOver = false
  userX = true

  moeApi.startGame().then((response) => moeUi.onStartGameSuccess(response))
  console.log('started new game ###############')
  $('.box').on('click', onBoxClick)
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
