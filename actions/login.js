import Nightmare from 'nightmare'
import config from '../config'
import querySelectors from '../querySelectors/login'

Nightmare.action('login', function(done) {
  this.log(`Logging in to ${config.env.hostingURL} with email: ${config.email}`)
    .goto(config.env.hostingURL)
    .log(`Waiting for signup link`)
    .wait(querySelectors.signUp)
    .click(querySelectors.signUp) // click signup
    .wait(querySelectors.googleAuthButton)
    .click(querySelectors.googleAuthButton) // click google auth button
    .log(`Clicked auth button waiting for email field`)
    .wait(2000)
    .wait(querySelectors.emailField)
    .insert(querySelectors.emailField, config.email)
    .log(`Email entered`)
    .wait(2000)
    .wait(querySelectors.nextButton)
    .click(querySelectors.nextButton)
    .wait(2000)
    .wait(querySelectors.passwordField)
    .insert(querySelectors.passwordField, config.password)
    .log(`password entered`)
    .wait(2000)
    .wait(querySelectors.passwordNextButton)
    .click(querySelectors.passwordNextButton)
    .log('Log in complete. Intiating wait for specified app load time.')
    .then(done)
})
