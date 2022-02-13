# Preaction Boostrap Clips

This is a small library of React components targeting Bootstrap v5. The primary intention of this project is to reduce the markup needed for commonly-used elements.

Components provided by this library include:

- Alert
- Boilerplate
- Card
- Modal
- Nav
- NavBar
- Spinner
- Table

## Quick Start

The full documentation can be found in the [styleguide](https://duhdugg.github.io/preaction-bootstrap-clips/v5/index.html) with live, editable examples.

### Installation

`npm install --save-dev @preaction/bootstrap-clips`

Important: `bootstrap` is a peerDependency of this library, and `@popperjs/core` is a peerDependency of bootstrap. You will need to install these in your project as well.

`npm install --save-dev bootstrap @popperjs/core`

### Usage

```jsx
// bootstrap as a peerDependency means you need to import bootstrap CSS yourself.
// This gives you the flexibility to choose a different build or theme, if you wish.
import 'bootstrap/dist/css/bootstrap.min.css'

// library css needs to be imported separately after bootstrap
import '@preaction/bootstrap-clips/dist/preaction-bootstrap-clips.css'

// component imports must be named, to allow shaking unused components from your bundle
import { Boilerplate, Card } from '@preaction/bootstrap-clips'

// this is an example of how your application may choose to use a simple template,
// using fractions to determine the width of cards in a row at different breakpoints
// see the full documentation for more examples
function App() {
  const cardWidths = { md: 1 / 2, lg: 1 / 3, xl: 1 / 4, xxl: 1 / 6 }
  return (
    <Boilerplate footer='Copyright (c) 2018-2021 Doug Elkin. All rights reserved.'>
      <div className='row'>
        <Card header='Alpha' headerTheme='green' column width={cardWidths}>
          <p>Greetings, Earthlings!</p>
        </Card>
        <Card header='Bravo' headerTheme='blue' column width={cardWidths}>
          <p>Howdy, Partner!</p>
        </Card>
        <Card header='Charlie' headerTheme='yellow' column width={cardWidths}>
          <p>Hey, Stranger!</p>
        </Card>
        <Card header='Delta' headerTheme='red' column width={cardWidths}>
          <p>Yo, Punk!</p>
        </Card>
      </div>
    </Boilerplate>
  )
}
```

### License

> Copyright (c) 2018-2021 Doug Elkin
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
