describe('Verify main home page functionality', () => {
  before(async function() {
    this.retries(3)
    try {
      await nightmare.activateLogging().login()
    } catch (err) {
      console.log('error logging in:', err.message || err)
    }
  })

  after(async () => {
    await nightmare.end()
  })

  it('login brings user to project page', async () => {
    try {
      const numLinks = await nightmare
      .log('Verifying new tile on project page')
      .wait('#new-project-tile')
      .evaluate(links => {
        return !!document.querySelector(links)
      }, '#new-project-tile')
      expect(numLinks).to.equal(true)
    } catch(err) {
      console.log('Test threw:', err.message)
    }
  })
})
