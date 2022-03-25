'use strict'

const moeEvents = require('./events.js')

$(() => {
  $('#sign-up-form').on('submit', moeEvents.onSignUp)
  $('#sign-in-form').on('submit', moeEvents.onSignIn)
  $('#leave').on('click', moeEvents.onSignOut)
  $('#signout, #new, #game').hide()
  $('#new').on('click', moeEvents.onNewGame)
  $('#1').on('click', moeEvents.onBoxClick)
  $('#2').on('click', moeEvents.onBoxClick)
  $('#3').on('click', moeEvents.onBoxClick)
  $('#4').on('click', moeEvents.onBoxClick)
  $('#5').on('click', moeEvents.onBoxClick)
  $('#6').on('click', moeEvents.onBoxClick)
  $('#7').on('click', moeEvents.onBoxClick)
  $('#8').on('click', moeEvents.onBoxClick)
  $('#9').on('click', moeEvents.onBoxClick)
})
