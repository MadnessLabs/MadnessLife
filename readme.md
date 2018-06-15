# Madness Labs PWA

This is the website PWA for Madness Labs software engineering company.

# Terminology

- **API**: Google Cloud Functions, code lives in functions
- **app**: StencilJS app, code lives in src

# Getting Started

When you first pull down the repo run the following to get the dependencies installed and open the app in the browser with live reloading.

```bash
npm install
npm start
```

If you wish to work on the API then run the following command:

```bash
cd functions
npm install
npm run serve
```

# Working

When you want to work on the front-end run the following command to have it open a livereloading browser instance.

```bash
npm start
```

When you want to work on the back-end run the following command to have it emulate cloud functions on your local machine. (NOTE: Triggers that have to do with Auth, Firestore, and other watchers will only run on a server. HTTP(S) functions will run locally)

```bash
npm run api
```

# Build Commands

```bash
npm run android
```

Runs a build with the dev environment with our custom cordova flag on the stencil compiler and then runs the app via Cordova

[Read More about Cordova...](https://cordova.apache.org/docs/en/3.0.0/guide/overview/index.html)

---

```bash
npm run api
```

Runs npm run serve command in functions directory to start the firebase back-end server locally.

[Read More about Firebase Functions Emulator...](https://firebase.google.com/docs/functions/local-emulator)

---

```bash
npm run api:test
```

Runs Jest test suite on the API
[Read More about Jest...](https://facebook.github.io/jest/)

---

```bash
npm run api:test:watch
```

Runs Jest test suite on the API with livereloading / watcher
[Read More about Jest...](https://facebook.github.io/jest/)

---

```bash
npm run build
```

Runs a stencil build with no environment

[Read More about StencilJS...](https://stenciljs.com)

---

```bash
npm run build:app
```

Runs a build with the dev environment with our custom cordova flag on the stencil compiler and then builds an android App via Cordova

[Read More about Cordova...](https://cordova.apache.org/docs/en/3.0.0/guide/overview/index.html)

---

```bash
npm run build:prerender
```

Runs a stencil build with no environment and the prerender flag

[Read More about StencilJS Prerendering...](https://stenciljs.com/docs/prerendering)

---

```bash
npm run build:stats
```

Runs a stencil build with no environment and the stats flag

[Read More about StencilJS...](https://stenciljs.com)

---

```bash
npm run deploy:api
```

Lints the API files and auto-fixes what it can, then it runs the test suites, and finally deploys to firebase

[Read More about Firebase Deploy...](https://firebase.google.com/docs/hosting/deploying)

---

```bash
npm run deploy:api:live
```

Lints the API files and auto-fixes what it can, then it runs the test suites, and finally deploys to live firebase

[Read More about Firebase Deploy...](https://firebase.google.com/docs/hosting/deploying)

---

```bash
npm run deploy:app
```

Lints the app files and auto-fixes what it can, then it runs a build for the dev environment, and finally deploys to firebase

[Read More about Firebase Deploy...](https://firebase.google.com/docs/hosting/deploying)

---

```bash
npm run deploy:app:live
```

Lints the app files and auto-fixes what it can, then it runs a build for the dev environment, and finally deploys to live firebase

[Read More about Firebase Deploy...](https://firebase.google.com/docs/hosting/deploying)

---

```bash
npm run deploy:docs
```

Builds docs for API with APIDoc and app with TypeDoc and then deploys to firebase

---

```bash
npm run dev
```

Runs local build and serves it in browser with livesyncing via BrowserSync

[Read More about BrowserSync...](https://browsersync.io/)

---

```bash
npm run dev:android
```

Runs local build and serves it in mobile device with livereloading

---

```bash
npm run docs
```

Builds docs for API with APIDoc and app with TypeDoc

---

```bash
npm run docs:api
```

Builds docs for API with APIDoc
[Read More about APIDoc...](http://apidocjs.com/)

---

```bash
npm run docs:app
```

Builds docs for app with TypeDoc
[Read More about TypeDoc...](http://typedoc.org/guides/doccomments/)

---

```bash
npm run env
```

Copy over proper front-end environment config into src/global/environment.ts

---

```bash
npm run git:prepush
```

Commands that Husky runs before pushing to GIT remote. Currently runs linting and a build. (NOTE: Should consider running tests in here as well)
[Read More about Husky...](https://github.com/typicode/husky)

---

```bash
npm run lint
```

Runs linting on both the API and the app using TSLint
[Read More about TSLint...](https://palantir.github.io/tslint)

---

```bash
npm run lint:fix
```

Runs linting on both the API and the app using TSLint and auto-fixes anything that it can
[Read More about TSLint...](https://palantir.github.io/tslint)

---

```bash
npm run lint:api
```

Runs linting on the API using TSLint
[Read More about TSLint...](https://palantir.github.io/tslint)

---

```bash
npm run lint:api:fix
```

Runs linting on the API using TSLint and auto-fixes anything that it can
[Read More about TSLint...](https://palantir.github.io/tslint)

---

```bash
npm run lint:app
```

Runs linting on the app using TSLint
[Read More about TSLint...](https://palantir.github.io/tslint)

---

```bash
npm run lint:app:fix
```

Runs linting on the app using TSLint and auto-fixes anything that it can
[Read More about TSLint...](https://palantir.github.io/tslint)

---

```bash
npm run serve
```

Alias for npm run sync

---

```bash
npm run start
```

Alias for npm run dev

---

```bash
npm run sync
```

Runs the livereloading server via BrowserSync without running a build or watching for changes.
[Read More about BrowserSync...](https://browsersync.io/)

---

```bash
npm run test
```

Runs Jest test suite on the app
[Read More about Jest...](https://facebook.github.io/jest/)

---

```bash
npm run test:watch
```

Runs Jest test suite on the app with livereloading / watcher
[Read More about Jest...](https://facebook.github.io/jest/)

---

```bash
npm run test:api
```

Alias for npm run api:test

---

```bash
npm run test:api:watch
```

Alias for npm run api:test:watch
