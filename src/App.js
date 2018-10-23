import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Boilerplate from './components/Boilerplate.js'
import Nav from './components/Nav.js'
import NavBar from './components/NavBar.js'
import Card from './components/Card.js'
import Alert from './components/Alert.js'
import BuyButton from './components/BuyButton.js'

class App extends React.Component {
  get menu () {
    return [
      {
        name: 'Home',
        href: '.',
        active: true
      },
      {
        name: 'Test',
        href: '.',
        onClick: event => {
          event.preventDefault()
          console.debug('Test')
        }
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
        name: 'Dropdown 1',
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
      },
      {
        name: 'Dropdown 2',
        subMenu: [
          {
            name: 'Item 1',
            onClick: event => {
              event.preventDefault()
            }
          }
        ]
      }
    ]
  }
  get navBar () {
    return (
      <NavBar
        noAnimation
        fixedTo="top"
        theme="dark"
        menu={this.menu}
        brand={{
          name: <em>Preaction</em>,
          href: '.',
          onClick: event => {
            event.preventDefault()
            console.debug('Preaction')
          }
        }}
      />
    )
  }

  getArray (length) {
    let array = []
    while (array.length < length) {
      array.push(+new Date() + ':' + Math.random())
    }
    return array
  }

  get randomTheme () {
    let themes = ['blue', 'green', 'yellow', 'red', 'dark', 'light']
    return themes[Math.floor(Math.random() * themes.length)]
  }

  render () {
    return (
      <div className="app">
        <Boilerplate
          jumbotron={<h1 className="display-4">Preaction Boostrap Clips</h1>}
          header={<h2 className="subtitle">Examples</h2>}
          navBar={this.navBar}
          footer="2018 &copy; Doug Elkin"
        >
          <Card header="Navs">
            <div className="row">
              <Card header="Normal" column width={1}>
                <Nav menu={this.menu} />
              </Card>
              <Card header="Centered" column width={1}>
                <Nav menu={this.menu} align="center" />
              </Card>
              <Card header="Right" column width={1}>
                <Nav menu={this.menu} align="right" />
              </Card>
              <Card header="Pills" column width={1}>
                <Nav menu={this.menu} type="pills" />
              </Card>
              <Card header="Collapsible Pills" column width={1}>
                <Nav collapsible type="pills" menu={this.menu} />
              </Card>
              <Card header="Vertical" column width="auto">
                <Nav align="vertical" menu={this.menu} />
              </Card>
              <Card header="Vertical Pills" column width="auto">
                <Nav align="vertical" type="pills" menu={this.menu} />
              </Card>
              <Card header="Tabs" column width={1}>
                <Nav type="tabs" menu={this.menu} />
              </Card>
              <Card header="Filled Pills" column width={1}>
                <Nav fill menu={this.menu} />
              </Card>
              <Card header="Justified Pills" column width={1}>
                <Nav justify menu={this.menu} />
              </Card>
              <Card header="Justified Filled Pills" column width={1}>
                <Nav fill justify menu={this.menu} />
              </Card>
            </div>
          </Card>
          <Card
            header="Cards"
            headerTheme="yellow"
            style={{ header: { fontWeight: 'bold' } }}
          >
            <div className="row">
              {this.getArray(11).map((id, index) => (
                <Card
                  key={index}
                  column
                  width="auto"
                  theme={this.randomTheme}
                  style={{ container: { minWidth: '10em' } }}
                >
                  <blockquote className="blockquote">
                    "Here is my card."
                  </blockquote>
                </Card>
              ))}
            </div>
            <div className="row">
              <Card
                header="Here is a themed card with a header"
                column
                theme="dark"
              />
              <Card header="This one has a red head" column headerTheme="red" />
              <Card header="This one has a blue head" headerTheme="blue" column>
                <h4 className="display-4">Woo!</h4>
              </Card>
              <Card
                header="This one has a green head"
                headerTheme="green"
                column
              />
            </div>
            <div className="row">
              <Card
                header="This one has a yellow head"
                headerTheme="yellow"
                theme="dark"
                column
              >
                And a dark body and border!
              </Card>
              <Card
                header="This one is light"
                theme="light"
                width="auto"
                column
              >
                And automatically grows in width.
              </Card>
              <Card
                column
                footerTheme="dark"
                bodyTheme="red"
                width={{ sm: 2 / 3, md: 1 / 4 }}
                footer="has a footer"
              >
                <p>and this one</p>
              </Card>
            </div>
          </Card>
          <Card header="Alerts" headerTheme="green">
            <Alert>info / default</Alert>
            <Alert theme="primary">primary</Alert>
            <Alert theme="success" header="Success!">
              with header
            </Alert>
            <Alert theme="warning" header={<em>Warning!</em>} />
            <Alert theme="danger" header="Error">
              You've been doing it wrong.
            </Alert>
            <Alert theme="dark">dark</Alert>
            <Alert theme="light">light</Alert>
            <Alert theme="secondary">secondary</Alert>
            <Alert theme="light" header="light">
              with header
            </Alert>
            <Card header="as columns..." headerTheme="dark">
              <div className="row">
                {this.getArray(11).map((id, index) => (
                  <Alert
                    key={index}
                    column
                    width={{
                      sm: 1 / 3,
                      md: 1 / 4,
                      lg: 1 / 6
                    }}
                    theme={this.randomTheme}
                  >
                    Alert
                  </Alert>
                ))}
              </div>
            </Card>
          </Card>
          <Card header="Buy Button" headerTheme="dark">
            <BuyButton
              onClick={event => {
                console.debug('test')
              }}
            >
              🛒 Checkout
            </BuyButton>
          </Card>
        </Boilerplate>
      </div>
    )
  }
}

export default App
