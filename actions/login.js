import Nightmare from 'nightmare'
import config from '../config'
import querySelectors from '../querySelectors/login'

Nightmare.action('login', function(done) {
  this.log(`Logging in with email: ${config.email}`)
    .goto(config.env.hostingURL)
    .wait(querySelectors.signIn)
    .click(querySelectors.signIn) // click signup
    .wait(querySelectors.googleAuthButton)
    .click(querySelectors.googleAuthButton) // click google auth button
    .wait(2000)
    .wait(querySelectors.emailField)
    .insert(querySelectors.emailField, config.email)
    .wait(2000)
    .wait(querySelectors.nextButton)
    .click(querySelectors.nextButton)
    .wait(2000)
    .wait(querySelectors.passwordField)
    .insert(querySelectors.passwordField, config.password)
    .wait(2000)
    .wait(querySelectors.passwordNextButton)
    .click(querySelectors.passwordNextButton)
    .log('Log in complete.')
    .then(done)
})
