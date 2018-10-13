import React from 'react'

function NavItem (item) {
  return (
    <li className={`nav-item ${item.active ? 'active' : ''}`} key={item.name}>
      <a className={`nav-link ${item.disabled ? 'disabled' : ''}`} href={item.href || ''} onClick={item.onClick}>{item.name}</a>
    </li>
  )
}

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navBar: {
        toggler: false
      }
    }
  }

  get expandClass () {
    return this.props.expandClass || 'navbar-expand-md'
  }

  get fixedClass () {
    let value = ''
    if (this.props.fixedTo) {
      value = `fixed-${this.props.fixedTo}`
    }
    return value
  }

  get togglerPosition () {
    return this.props.togglerPosition || 'right'
  }

  toggleToggler () {
    this.setState(state => {
      state.toggler = !this.state.toggler
      return state
    })
  }

  render () {
    let toggleButton = () => (<button className='navbar-toggler' type='button' onClick={this.toggleToggler.bind(this)}>
      <span className='navbar-toggler-icon'></span>
    </button>)
    return (
      <nav className={`navbar ${this.fixedClass} ${this.expandClass} ${this.props.theme ? `navbar-${this.props.theme} bg-${this.props.theme}` : ''}`}
        style={this.style}>
        <div className={this.props.noContain ? '' : 'container'}>
          {this.togglerPosition === 'left' ? toggleButton() : ''}
          { this.props.brand
            ? <a className={`navbar-brand ${this.props.brand.link ? '' : 'mb-0 h1'}`} href={this.props.brand.href || ''}
              onClick={this.props.brand.onClick}>{this.props.brand.name}</a>
            : ''
          }
          {this.togglerPosition === 'right' ? toggleButton() : ''}
          <div className={`navbar-collapse ${this.state.toggler ? '' : 'collapse'}`}>
            <ul className='navbar-nav mr-auto'>
              {this.props.menu.map(item => NavItem(item))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
