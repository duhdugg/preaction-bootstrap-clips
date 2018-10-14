import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Boilerplate from './components/Boilerplate.js'
import NavBar from './components/NavBar.js'
import Card from './components/Card.js'
import Alert from './components/Alert.js'

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

  get randomTheme () {
    let themes = ['blue', 'green', 'yellow', 'red', 'dark', 'light']
    return themes[Math.floor(Math.random() * themes.length)]
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
          <Card
            header='Cards'
            headerTheme='yellow'
            style={{ header: { fontWeight: 'bold' } }}
          >
            <div className='row'>
              {this.getArray(11).map(id => (<Card column width='auto' theme={this.randomTheme} style={{ container: { minWidth: '10em' } }} key={id}><blockquote className='blockquote'>"Here is my card."</blockquote></Card>))}
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
                width={{ sm: 2 / 3, md: 1 / 4 }}
              ><p>Choo choo!</p><p>Choo choo!</p></Card>
            </div>
          </Card>
          <Card
            header='Alerts'
            headerTheme='green'
          >
            <Alert>info / default</Alert>
            <Alert theme='primary'>primary</Alert>
            <Alert theme='success'>success</Alert>
            <Alert theme='warning'>warning</Alert>
            <Alert theme='danger'>danger</Alert>
            <Alert theme='dark'>dark</Alert>
            <Alert theme='secondary'>secondary</Alert>
            <Alert theme='light'>light</Alert>
            <Card
              header='as columns...'
              headerTheme='dark'
            >
              <div className='row'>
                {this.getArray(11).map((id, index) => (<Alert column width={{ sm: 1 / 3, md: 1 / 4, lg: 1 / 6 }} theme={this.randomTheme} key={id}>Alert</Alert>))}
              </div>
            </Card>
          </Card>
        </Boilerplate>
      </div>
    )
  }
}

export default App
