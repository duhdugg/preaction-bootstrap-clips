# Preaction Boostrap Clips

This is a small library of React components targeting Bootstrap v4. The primary intention of this project is to reduce the markup needed for commonly used elements such as alerts, cards, navigation menus, top-level boilerplates, and more.

It is under active development and the full scope of this project is pending determination.

### Features

- alerts
- boilerplate template

  - example:

  ```jsx
  import React from 'react'
  import { Boilerplate, NavBar } from '@preaction/bootstrap-clips'

  class App extends React.Component {
    render() {
      return (
        <Boilerplate
          jumbotron={<h1 className='display-4'>Hello World!</h1>}
          header='wazzup'
          footer={<p>Copyright &copy; Acme, Inc. All rights reserved.</p>}
          style={{
            header: { marginBottom: '2em' },
            jumbotron: { backgroundColor: '#446', color: '#ddf' },
            footer: { marginTop: '2em', color: '#999' }
          }}>
          <p className='lead'>This is where your main contents go.</p>
        </Boilerplate>
      )
    }
  }

  export default App
  ```

- cards
- navigation (navbar or nav) with simple menu data structure

  - example:

  ```jsx
  import React from 'react'
  import { Boilerplate, NavBar } from '@preaction/bootstrap-clips'
  import 'bootstrap/dist/css/bootstrap.min.css'
  // import { NavLink as Link } from 'react-router-dom' // see below

  class App extends React.Component {
    get navBar() {
      return (
        <NavBar
          theme='dark'
          menu={[
            {
              name: 'Home',
              href: '/',
              active: true
            },
            {
              name: 'Admin',
              href: '/admin'
              // component: Link // this is how you would make it work with react-router
            },
            {
              name: 'Disabled',
              href: '.',
              onClick: event => {
                event.preventDefault()
              },
              disabled: true
            },
            {
              name: 'Dropdown',
              subMenu: [
                {
                  name: 'Item 1',
                  onClick: event => {
                    event.preventDefault()
                    console.debug(event)
                  }
                },
                { name: 'Item 2', active: true },
                { name: 'Item 3' }
              ]
            }
          ]}
        />
      )
    }

    render() {
      return (
        <Boilerplate navBar={this.navBar}>
          <h1 className='display-4 mt-3'>Hello World</h1>
        </Boilerplate>
      )
    }
  }

  export default App
  ```

- containerization utility props

  - examples:

  ```jsx
  import React from 'react'
  import { Card, Boilerplate, Alert } from '@preaction/boostrap-clips'
  import 'bootstrap/dist/css/bootstrap.min.css'

  /*
  // The default behavior for containerization
  // depends on the component being used
  // These may be considered opinionated defaults
  */

  /*
  // Boilerplate puts elements in
  // header, main, and footer inside of
  // a <div className='container' /> by default
  // use noContain to remove the containerization
  */
  const example = () => (<Boilerplate noContain>
      /*
      // the card and alert elements
      // do not contain by default
      // but you can use the contain props
      // to enable the containerization
      */
      <Card contain header='Hello world'>
        How goes it?
      </Card>
      <Alert theme='error' header='Error'>
      lost contact
      </Alert>
    </div>
  </Boilerplate>)

  export default example
  ```

* utlity props to handle columns and widths by sane ratio definitions

  - examples:

    ```jsx
    import React from 'react'
    import { Boilerplate } from '@preaction/bootstrap-clips'
    import 'bootstrap/dist/css/bootstrap.min.css'

    // automatic sizing columns
    // collapse by default at xs breakpoint
    const example1 = () => (
      <div className='row'>
        <Card column>contents</Card>
        <Card column>contents</Card>
        <Card column>contents</Card>
      </div>
    )
    const example2 = () => (
      // automatic equally-spaced per row columns
      <div className='row'>
        <Card column width='auto'>
          contents
        </Card>
        <Card column width='auto'>
          contents
        </Card>
        <Card column width='auto'>
          contents
        </Card>
      </div>
    )

    const example3 = () => (
      /*
        // we can specify width as ratios
        // the default behavior here is to
        // set the className to
        // 'col-sm-N' where N is
        // the multiple of your ratio to 12,
        // rounded down to the nearest integer
        / The following should result in 3 rows
        */
      <div className='row'>
        <Card column width={1}>
          contents
        </Card>
        <Card column width={1 / 3}>
          contents
        </Card>
        <Card column width={2 / 3}>
          contents
        </Card>
        <Card column width={1 / 4}>
          contents
        </Card>
        <Card column width={1 / 2}>
          contents
        </Card>
        <Card column width={1 / 4}>
          contents
        </Card>
      </div>
    )

    // here is the same but where they all collapse on smaller than sm viewports
    const example4 = () => (
      <div className='row'>
        <Card column width={{ sm: 1 }}>
          contents
        </Card>
        <Card column width={{ sm: 1 / 3 }}>
          contents
        </Card>
        <Card column width={{ sm: 2 / 3 }}>
          contents
        </Card>
        <Card column width={{ sm: 1 / 4 }}>
          contents
        </Card>
        <Card column width={{ sm: 1 / 2 }}>
          contents
        </Card>
        <Card column width={{ sm: 1 / 4 }}>
          contents
        </Card>
      </div>
    )

    /*
      // we can also get more creative
      // in our responsive design by specifying
      // breakpoints in our width
      // and it's much easier to read than the slew
      // of bootstrap utility classes
      // which are added for you
      */
    const example5Width = {
      xs: 1, // this is the same as default for xs
      sm: 1 / 2, // 2 per row at sm
      md: 1 / 3, // 3 per row at md
      lg: 1 / 4, // 4 per row at lg
      xl: 'auto' // as many as can comfortably fit in xl
    }
    let getArrayOfLength = length => {
      let a = []
      while (a.length < length) {
        a.push('contents')
      }
      return a
    }
    const example5 = () => (
      <div className='row'>
        {getArrayOfLength(13).map((contents, index) => (
          <Card
            column
            width={example5Width}
            key={index}
            header={`#${index + 1}`}>
            {contents}
          </Card>
        ))}
      </div>
    )

    export { example1, example2, example3, example4, example5 }
    ```

### More examples

See [src/App.jsx](https://github.com/duhdugg/preaction-bootstrap-clips/blob/master/src/App.jsx)
