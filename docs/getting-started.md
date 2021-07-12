### Install

#### yarn:

`yarn add --dev @preaction/bootstrap-clips`

#### npm:

`npm install --save-dev @preaction/bootstrap-clips`

#### Peer Dependencies

Important: `bootstrap` is a peerDependency of this library, and `@popperjs/core` is a peerDependency of bootstrap. You will need to install these in your project as well.

### Import

This library uses named exports only. To help keep the size of your application's JavaScript bundle to a minimum, you should only import the components you are using.

#### ES Module

`import { Alert, Boilerplate, Card, Modal, Nav, NavBar, Spinner } from '@preaction/bootstrap-clips'`

CSS needs to be imported separately.

First bootstrap:

`import 'bootstrap/dist/css/bootstrap.min.css'`

and then the Bootstrap Clips CSS:

`import '@preaction/bootstrap-clips/dist/preaction-bootstrap-clips.css'`

#### CommonJS Module

`const { Alert, Boilerplate, Card, Modal, Nav, NavBar, Spinner } = require('@preaction/bootstrap-clips')`

#### UMD/IIFE

See [Preaction UMD Example](https://duhdugg.github.io/preaction-umd-examples/) to see how this library and others may be loaded from CDN to build a no-JSX React app.
