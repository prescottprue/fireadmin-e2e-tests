# Fireadmin End To End Tests

> End to End tests for Fireadmin features

## Setup

Set `TEST_EMAIL` and `TEST_PASSWORD` environment variables

### Run Tests

Tests are run on a hosted environment. That means that if you intend to test locally you must have a server running which is hosting Fireadmin.

### Local

Make sure you have [Fireadmin](https://github.com/prescottprue/fireadmin) running on `localhost:3000` by calling `npm start` within your local `fireadmin` folder

```bash
npm run test:local
```

To see the window which is running the tests, switch `nightmare.show` to `true` within `config.js`.

### Deployed

```bash
npm run test:stage
```
