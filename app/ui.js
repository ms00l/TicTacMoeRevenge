'use strict'
const store = require('./store.js')
const moeEvents = require('./events.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>lol hey hey</p>')
  $('#sign-up-form').hide()
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>yo you messed up chief</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>welcome my brethren</p>')
  $('form').trigger('reset')
  $('#sign-up-form, #sign-in-form').hide()
  $('#signout, #new, #game').show()
  // $('#game').on('click', moeApi.newGame)
  console.log(response)

  store.user = response.user
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>yeah no i dont got u on the list</p>')
}
const signOutSuccess = function () {
  $('#signout, #game, #new').hide()
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#sign-in-form, #sign-up-form').show()
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const onSuccessUpdate = function (response) {
  console.log(response)
  store.game = response.game
  // store.user = response.user
}
const clearBoard = function () {
  // set value to new nulls
  $('.box').text('(づ ◕‿◕ )づ')
}
const onStartGameSuccess = function (response) {
  // storing user and game to use when update game. For token and game ID
  console.log(response)
  store.game = response.game
  clearBoard()
  $('.box').on('click', moeEvents.onBoxClick())

  // store.user = response.user
}

const newGameSuccess = function () {
  // $('#game').off('click')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  signOutSuccess,
  signOutFailure,
  onSuccessUpdate,
  onStartGameSuccess,
  newGameSuccess
//   newGameSuccess
}
