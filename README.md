# cerebral-modules-react

Render cerebral-modules when using cerebral-react.

## Rendering Your App

From your main.js

```js
// import your cerebral controller
import controller from './controller';

// import you app modules
import external form 'external-node-module';
import home from './modules/home';
import notFound from './modules/notFound';

// init the modules
import setupModules from 'cerebral-modules';
const chains = setupModules(controller, [ external, home, notFound ]);

// use the chains to setup your routing here
// chains.moduleName.chainName

// render the app
import renderApp from 'cerebral-modules-react';
renderApp(controller);
```

## Contribute

Fork repo

* `npm install`
* `npm run dev` runs dev mode which watches for changes and auto lints, tests and builds
* `npm test` runs the tests
* `npm run lint` lints the code
* `npm run build` compiles es6 to es5
