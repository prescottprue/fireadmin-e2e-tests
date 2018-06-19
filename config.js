export default {
  email: process.env.TEST_EMAIL,
  password: process.env.TEST_PASSWORD,
  nightmare: {
    switches: {
      'remote-debugging-port': 5858
    },
    show: false,
    appLoadTime: 18000,
    waitTimeout: 90000,
    width: 700,
    height: 700,
    logging: true // This will print all console messages and errors to the console, as well as print
    // all messages that are passed through the custom Nightmare.log(message) method.
  },
  env: {
    hostingURL: 'http://localhost:3000'
  }
};
