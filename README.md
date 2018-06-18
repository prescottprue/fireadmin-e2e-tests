# Fireadmin End To End Tests

> End to End tests for Fireadmin features

## Setup

Add `./config.js` that looks similar to the following:

```js
const envs = {
  local: {
    hostingURL: 'http://localhost:3000',
  }
};

let args = process.argv

function currentEnvFromArgs()  {
  const envArg = args.find((arg) => arg.includes('--env'))
  if (!envArg) {
    console.log('Please provide env')
    process.exit(1)
  }
  return envs[envArg.replace("--env=", '').replace("'", '')]
}

export default {
  email: '<- test email here ->',
  password: '<- test password here ->',
  nightmare: {
  	switches: {
	    'remote-debugging-port': 5858
  	},
    show: true,
    width: 700,
    height: 700,
    logging: true // This will print all console messages and errors to the console, as well as print
    // all messages that are passed through the custom Nightmare.log(message) method.
  },
  env: currentEnvFromArgs()
};
```

### Run Tests

Tests are run on a hosted environment. That means that if you intend to test locally you must have a server running which is hosting Fireadmin.

### Local

Make sure you have [Fireadmin](https://github.com/prescottprue/fireadmin) running on `localhost:3000` by calling `npm start` within your local `fireadmin` folder

```bash
npm run test:local
```

### Deployed
```bash
npm run test:stage
```
