'use strict'

const moeUi = require('./ui.js')
const moeApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields')
const store = require('./store.js')
const addNestedValue = require('../lib/add-nested-value.js')

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
// const newGame = function (event)

// const onNewGame = function (event)
//     event.newGame
const onNewGame = function () {
  moeApi
    .newGame()
    .then(() => moeUi.newGameSuccess)
    .then((response) => {
      store.game = response.game.cells
    })
    .then(() => console.log(store))

  // .then((response) => store.response)

//   moeApi
//     .newGame
//     .then(() => moeUi.newGameSuccess)
//     .catch(() => moeUi.newGameFailure)
}

let userX = true
const onBoxClick = function () {
  if (userX) {
    $(this).text('x')
  } else { $(this).text('o') }
  userX = !userX
}
// const something = function () {

// }
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onBoxClick
}
