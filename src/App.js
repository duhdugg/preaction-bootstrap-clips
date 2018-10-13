import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Boilerplate from './components/Boilerplate.js'
import NavBar from './components/NavBar.js'
import Card from './components/Card.js'

class App extends React.Component {
  get navBar () {
    return (
      <NavBar
        fixedTo='top'
        theme='dark'
        path={window.location.path}
        menu={[
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
          }
        ]}
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

  render () {
    const cardClassName = { card: 'mt-3' }
    return (
      <div className="app">
        <Boilerplate
          jumbotron={<h1 className='display-4'>Preaction Boostrap Clips</h1>}
          header={<h2 className='subtitle'>Stop Repeating Yourself</h2>}
          navBar={this.navBar}
          footer='2018 &copy; Doug Elkin'
        >
          <Card className={cardClassName}>here is a card</Card>
          <Card className={cardClassName}
            header='Here is a themed card with a header'
            theme='dark'
          ></Card>
          <Card className={cardClassName}
            header='This one has a red head'
            headerTheme='red'
          ></Card>
          <Card className={cardClassName}
            header='This one has a blue head'
            headerTheme='blue'
          ></Card>
          <Card className={cardClassName}
            header='This one has a green head'
            headerTheme='green'
          ></Card>
          <Card className={cardClassName}
            header='This one has a yellow head'
            headerTheme='yellow'
            theme='dark'
          >And a dark body and border!</Card>
          <Card className={cardClassName}
            header='This one is light'
            theme='light'
          ></Card>
        </Boilerplate>
      </div>
    )
  }
}

export default App
