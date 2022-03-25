'use strict'
const store = require('./store.js')

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

const newGameSuccess = function () {
  $('#game').off('click')
}

// const onIndexGamesSuccess = function (response) {
//   let gamesHtml = ''

//   response.game.forEach((game) => {
//     gamesHtml += `
//                       <div>
//                         <h4>${games.title}</h4>
//                         <p>${book.author}</p>
//                         <p>Review: 5 Stars</p>
//                         <form class="update-book-list" type="submit"data-id=${book._id}>
//                         <input name="book[title]" type="text" placeholder="whats it called">
//                         <input name="book[author]" type="text" placeholder="who wrote it">
//                         <button type="submit">reset that book oooooo</button>
//                         </form>
//                         <button class="delete-book-button" type="submit"data-id=${book._id}>nah i dont like it</button>
//                       </div>
//                     `
//   })

//   $('#show-books').html(gamesHtml)
// }

// const onIndexBooksFailure = function () {
//   $('#error-message').text('There was an error')
// }

// const onShowBookSuccess = function (response) {
//   const bookHtml = `
//                       <div>
//                         <h4>${response.book.title}</h4>
//                         <p>${response.book.author}</p>
//                         <p>Review: 10 Stars</p>
//                       </div>
//                     `
//   $('#show-books').html(bookHtml)
// }

// const onShowBookFailure = function () {
//   $('#error-message').text('Failure while trying to show book')
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess
}
