# cerebral-modules-react

Render cerebral-modules when using cerebral-react.

## Install

```
npm install cerebral-modules-react
```

## Rendering Your App

From your main.js

```js
// import your cerebral controller
import controller from './controller';

// import you app modules
import external form 'external-node-module';
import home from './modules/home';
import notFound from './modules/notFound';
const modules = [ external, home, notFound ];

// init the modules
import setupModules from 'cerebral-modules';
const chains = setupModules(controller, modules);

// use the chains to setup your routing here
// chains.moduleName.chainName

// render the app
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'cerebral-react';
import moduleSwitch from 'cerebral-modules-react';
import App from './components/app';
const root = document.body.appendChild(document.createElement('div'));
const ModuleSwitch = moduleSwitch({
  modules, // mandadory - list of modules, should be the same as given to setupModules()
  props: { // optional  - props that will be forwarded to the module's component
    Container: App
  }
});
ReactDOM.render(<Container controller={controller} app={ModuleSwitch}/>, root);
```

The `moduleSwitch` factory produces a ModuleSwitch component that could alternatively be embeded in a root App component.

## Contribute

Fork repo

* `npm install`
* `npm run dev` runs dev mode which watches for changes and auto lints, tests and builds
* `npm test` runs the tests
* `npm run lint` lints the code
* `npm run build` compiles es6 to es5
