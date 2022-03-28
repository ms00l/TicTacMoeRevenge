'use strict'

const moeEvents = require('./events.js')

$(() => {
  $('#game').hide()
  $('#sign-up-form').on('submit', moeEvents.onSignUp)
  $('#sign-in-form').on('submit', moeEvents.onSignIn)
  $('#leave').on('click', moeEvents.onSignOut)
  $('#signout, #new').hide()
  $('#new').on('click', moeEvents.onStartGame)
  // $('.cell').on('click', function () { console.log(this.getAttribute('data-cell-index')) })
  $('.box').on('click', moeEvents.onBoxClick)
})
