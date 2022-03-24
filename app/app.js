'use strict'

const moeEvents = require('./events.js')

$(() => {
  $('#sign-up-form').on('submit', moeEvents.onSignUp)
  $('#sign-in-form').on('submit', moeEvents.onSignIn)
  $('#leave').on('click', moeEvents.onSignOut)
})
