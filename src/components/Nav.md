### Nav Examples

```jsx
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggler: false
    }
  }

  get menu() {
    return [
      {
        name: 'Home',
        href: '.',
        onClick: event => {
          event.preventDefault()
        }
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
        active: true,
        onClick: event => {
          event.preventDefault()
          console.debug('dropdown 1', event)
        },
        subMenu: [
          {
            name: 'Item 1',
            onClick: event => {
              event.preventDefault()
              console.debug('dropdown 1 > item 1', event)
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
      },
      {
        name: 'Dropdown 3',
        autoClose: 'outside',
        subMenu: [
          {
            name: (
              <span>
                {this.state.toggler ? <FaToggleOn /> : <FaToggleOff />}
                <span style={{ marginLeft: '0.3333em' }}>Toggler</span>
              </span>
            ),
            onClick: this.toggleToggler.bind(this)
          }
        ]
      }
    ]
  }

  toggleToggler(event) {
    event.preventDefault()
    this.setState(state => {
      state.toggler = !state.toggler
      return state
    })
  }

  render() {
    return (
      <div className='row nav-examples'>
        <style>
          {`
          .nav-examples .card { margin-bottom: 1em; }
          `}
        </style>
        <Card header='Normal' column width={1}>
          <Nav menu={this.menu} />
        </Card>
        <Card header='Centered' column width={1}>
          <Nav menu={this.menu} align='center' />
        </Card>
        <Card header='Right' column width={1}>
          <Nav menu={this.menu} align='right' />
        </Card>
        <Card header='Pills' column width={1}>
          <Nav menu={this.menu} type='pills' />
        </Card>
        <Card header='Collapsible Pills' column width={1}>
          <Nav collapsible type='pills' menu={this.menu} />
        </Card>
        <Card header='Vertical' column width='auto'>
          <Nav align='vertical' menu={this.menu} />
        </Card>
        <Card header='Vertical Pills' column width='auto'>
          <Nav align='vertical' type='pills' menu={this.menu} />
        </Card>
        <Card header='Tabs' column width={1}>
          <Nav type='tabs' menu={this.menu} />
        </Card>
      </div>
    )
  }
}
;<App />
```
