### Nav Examples

```jsx
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenu: [0],
      toggler: false
    }
  }

  setActiveMenu(menuIndex, subMenuIndex) {
    this.setState(state => {
      state.activeMenu = [menuIndex]
      if (subMenuIndex !== undefined) {
        state.activeMenu.push(subMenuIndex)
      }
      return state
    })
  }

  get menu() {
    return [
      {
        name: 'Home',
        active: this.state.activeMenu[0] === 0,
        href: '.',
        onClick: event => {
          event.preventDefault()
          this.setActiveMenu(0)
        }
      },
      {
        name: 'Test',
        active: this.state.activeMenu[0] === 1,
        onClick: event => {
          event.preventDefault()
          console.debug('Test')
          this.setActiveMenu(1)
        }
      },
      {
        name: 'Disabled',
        active: this.state.activeMenu[0] === 2,
        disabled: true
      },

      {
        name: 'Dropdown 1',
        active: this.state.activeMenu[0] === 3,
        onClick: event => {
          event.preventDefault()
        },
        subMenu: [
          {
            name: 'Item 1',
            active:
              this.state.activeMenu[0] === 3 && this.state.activeMenu[1] === 0,
            onClick: event => {
              event.preventDefault()
              this.setActiveMenu(3, 0)
            }
          },
          {
            name: 'Item 2',
            active:
              this.state.activeMenu[0] === 3 && this.state.activeMenu[1] === 1,
            onClick: event => {
              event.preventDefault()
              this.setActiveMenu(3, 1)
            }
          },
          {
            name: 'Item 3',
            active:
              this.state.activeMenu[0] === 3 && this.state.activeMenu[1] === 2,
            onClick: event => {
              event.preventDefault()
              this.setActiveMenu(3, 2)
            }
          }
        ]
      },
      {
        name: 'Dropdown 2',
        active: this.state.activeMenu[0] === 4,
        onClick: event => {
          event.preventDefault()
          this.setActiveMenu(4)
        },
        subMenu: [
          {
            name: 'Item 1',
            active:
              this.state.activeMenu[0] === 4 && this.state.activeMenu[1] === 0,
            onClick: event => {
              event.preventDefault()
              this.setActiveMenu(4, 0)
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
          li a.active { font-weight: bold; }
          `}
        </style>
        <Card header='Normal' column width={1}>
          <Nav menu={this.menu} />
        </Card>
        <Card header='Tabs' column width={1}>
          <Nav menu={this.menu} type='tabs' />
        </Card>
        <Card header='Pills' column width={1}>
          <Nav menu={this.menu} type='pills' />
        </Card>
        <Card header='Vertical' column width='auto'>
          <Nav align='vertical' menu={this.menu} />
        </Card>
        <Card header='Vertical Pills' column width='auto'>
          <Nav align='vertical' type='pills' menu={this.menu} />
        </Card>
      </div>
    )
  }
}
;<App />
```
