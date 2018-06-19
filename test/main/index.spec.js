describe('Core Functionality', () => {
  before(async function() {
    await nightmare.activateLogging().login()
  })

  after(async () => {
    await nightmare.end()
  })

  describe('Projects Page', () => {
    it('successful login brings user to projects page with visible new project tile', async () => {
      const newProjectTileSelector = '#new-project-tile'
      const numLinks = await nightmare
        .log('Verifying new tile on project page')
        .wait(newProjectTileSelector)
        .evaluate(tileSelector => {
          return !!document.querySelector(tileSelector)
        }, newProjectTileSelector)

      // Confirm that new project tile exists
      expect(numLinks).to.equal(true)
    })
  })
})
