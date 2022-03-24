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
  console.log(data)

  moeApi
    .signIn(data)
    .then((response) => moeUi.onSignInSuccess(response))
    .catch(() => moeUi.onSignInFailure())
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  moeApi
    .signOut()
    .then(moeUi.signOutSuccess)
    .catch(moeUi.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
