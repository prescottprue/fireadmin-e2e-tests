const envs = {
  local: {
    hostingURL: 'http://localhost:3000',
  },
  stage: {
    hostingURL: 'https://fireadmin-stage.firebaseapp.com',
  }
};

let args = process.argv

function currentEnvFromArgs()  {
  const envArg = args.find((arg) => arg.includes('--env'))
  if (!envArg) {
    const fallbackEnv = process.env.TEST_ENV || 'stage'
    console.log(`Env not provided defaulting to ${fallbackEnv}`)
    const env = envs[fallbackEnv]
    return env || envs.stage
  }
  return envs[envArg.replace("--env=", '').replace("'", '')]
}

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
  env: currentEnvFromArgs()
};
