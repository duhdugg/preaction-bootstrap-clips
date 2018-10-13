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

  getArray (length) {
    let array = []
    while (array.length < length) {
      array.push(+new Date() + ':' + Math.random())
    }
    return array
  }

  render () {
    return (
      <div className="app">
        <Boilerplate
          jumbotron={<h1 className='display-4'>Preaction Boostrap Clips</h1>}
          header={<h2 className='subtitle'>Stop Repeating Yourself</h2>}
          navBar={this.navBar}
          footer='2018 &copy; Doug Elkin'
        >
          <div className='row'>
            {this.getArray(11).map(id => (<Card column width='auto' style={{ container: { minWidth: '10em' } }} key={id}><blockquote className='blockquote'>"Here is my card."</blockquote></Card>))}
          </div>
          <div className='row'>
            <Card
              header='Here is a themed card with a header'
              column
              theme='dark'
            ></Card>
            <Card
              header='This one has a red head'
              column
              headerTheme='red'
            ></Card>
            <Card
              header='This one has a blue head'
              headerTheme='blue'
              column
            ><h4 className='display-4'>Woo!</h4></Card>
            <Card
              header='This one has a green head'
              headerTheme='green'
              column
            ></Card>
          </div>
          <div className='row'>
            <Card
              header='This one has a yellow head'
              headerTheme='yellow'
              theme='dark'
              column
            >And a dark body and border!</Card>
            <Card
              header='This one is light'
              theme='light'
              width='auto'
              column
            >And automatically grows in width.</Card>
            <Card
              column
              theme='red'
              width={{ sm: 1 / 6 }}
            ><p>Choo choo!</p><p>Choo choo!</p></Card>
          </div>
        </Boilerplate>
      </div>
    )
  }
}

export default App
