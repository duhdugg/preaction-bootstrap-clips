import React from 'react'
import NavItem from './NavItem.js'

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
              {this.props.menu.map((item, index) => (
                <NavItem name={item.name}
                  href={item.href}
                  component={item.component}
                  key={index}
                  active={item.active}
                  disabled={item.disabled}
                  onClick={item.onClick}
                  subMenu={item.subMenu}></NavItem>)
              )}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
