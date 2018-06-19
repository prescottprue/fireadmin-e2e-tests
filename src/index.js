import Mocha from 'mocha'
import path from 'path'
import '../test/setup'

function runMocha() {
  // Add each .js file to the mocha instance
  // fs.readdirSync(testDir).filter(function(file){
  //     // Only keep the .js files
  //     return file.substr(-3) === '.js';
  //
  // }).forEach(function(file){
  //     mocha.addFile(
  //         path.join(testDir, file)
  //     );
  // });
  process.env.APP_ENV = 'stage'
  const mocha = new Mocha({
    useColors: true
  })
  mocha.addFile(path.join(__dirname, '../test/main/index.spec.js'))
  mocha.addFile(
    path.join(process.cwd(), 'node_modules', 'babel-core', 'register.js')
  )
  return new Promise((resolve, reject) => {
    const Runner = mocha.run(failures => {
      console.log('results:', failures)
      if (failures === 0) {
        console.log('no failures! tests pass!')
        resolve()
      } else {
        console.log('Error, tests failed!', failures)
        reject(failures)
      }
    })
    Runner.on('start', () => {
      console.log('test run started event')
    })
    Runner.on('test', () => {
      console.log('test start event')
    })
    Runner.on('test end', () => {
      console.log('test end event')
    })
  })
}

;(function() {
  runMocha()
    .then(() => {
      process.exitCode = 0
    })
    .catch((err) => {
      console.log('Hit an error, exiting:', err.message || err)
      process.exitCode = -1
    })
})()
