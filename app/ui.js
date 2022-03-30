'use strict'
const store = require('./store.js')
// const moeEvents = require('./events.js')

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
  $('#auth-display').delay(3200).fadeOut(100)
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
  // $('#message').removeClass()
  // $('#message').addClass('success')
  $('form').trigger('reset')
  $('#sign-in-form, #sign-up-form').show()
  $('#message').delay(3200).fadeOut(100)
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
const winState = function (response) {
  store.game = response.game
  $('#Winner2').html('OH YEAH BAYBAY ' + store.userX + ' WINS!!!!')
}
const clearBoard = function (store, userX) {
  // set value to new nulls
  $('.box').text('(づ ◕‿◕ )づ')
  $('#Winner').text('Try to win I literally dare you, you will not win and honestly chieftain you just need to accept this...')
  $('#Winner').delay(3200).fadeOut(100)
  winState()
}
const onStartGameSuccess = function (response) {
  // storing user and game to use when update game. For token and game ID
  console.log(response)
  store.game = response.game
  $('Winner2').hide()
  clearBoard()
  $('Winner2').hide()
  // $('.box').on('click', moeEvents.onBoxClick())

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
