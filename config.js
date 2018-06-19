const envs = {
  local: {
    hostingURL: 'http://localhost:3000',
  },
  stage: {
    hostingURL: 'https://fireadmin-stage.firebaseapp.com',
  }
};

export default {
  email: process.env.TEST_EMAIL,
  password: process.env.TEST_PASSWORD,
  nightmare: {
    switches: {
      'remote-debugging-port': 5858
    },
    show: false,
    width: 700,
    height: 700,
    logging: true // This will print all console messages and errors to the console, as well as print
    // all messages that are passed through the custom Nightmare.log(message) method.
  },
  env: envs[process.env.APP_ENV] || envs.local
};
