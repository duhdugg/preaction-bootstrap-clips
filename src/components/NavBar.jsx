import React from 'react'
import NavItem from './NavItem.jsx'
import 'animate.css/animate.min.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shownSubmenuItems: [],
      toggler: false,
      height: 0
    }
  }

  get fixedClass() {
    let value = ''
    if (this.props.fixedTo) {
      value = `fixed-${this.props.fixedTo}`
    }
    return value
  }

  get togglerPosition() {
    return this.props.togglerPosition || 'right'
  }

  setSize() {
    let height =
      this.state.toggler && this.props.menu ? this.props.menu.length * 2.5 : 0
    let hasActiveSubmenu = false
    let x = 0
    while (x < (this.props.menu || []).length) {
      let item = this.props.menu[x]
      if (this.state.shownSubmenuItems[x] && this.state.toggler) {
        height += (item.subMenu || []).length * 2.5
        hasActiveSubmenu = true
      }
      x++
    }
    height += hasActiveSubmenu ? 1 : 0
    height = `${height}em`
    this.setState(state => {
      state.height = height
      return state
    })
  }

  resizeForSubmenu(index = 0, showSubmenu = false) {
    this.setState(state => {
      state.shownSubmenuItems[index] = showSubmenu
      return state
    }, this.setSize)
  }

  toggleToggler() {
    this.setState(state => {
      state.toggler = !state.toggler
      return state
    }, this.setSize)
  }

  render() {
    let toggleButton = () => (
      <button
        className='navbar-toggler'
        type='button'
        onClick={this.toggleToggler.bind(this)}>
        <span className='navbar-toggler-icon' />
      </button>
    )
    return (
      <nav
        className={`navbar ${this.fixedClass} navbar-expand-md ${
          this.props.theme
            ? `navbar-${this.props.theme} bg-${this.props.theme}`
            : ''
        }`}
        style={this.style}>
        <div
          className={
            this.props.noContain
              ? 'd-flex justify-content-between w-100 flex-wrap'
              : 'container'
          }>
          {this.togglerPosition === 'left' ? toggleButton() : ''}
          <div>
            {this.props.brand ? (
              <a
                className={`navbar-brand ${
                  this.props.brand.link ? '' : 'mb-0 h1'
                }`}
                href={this.props.brand.href || ''}
                onClick={this.props.brand.onClick}>
                {this.props.brand.name}
              </a>
            ) : (
              ''
            )}
          </div>
          {this.togglerPosition === 'right' ? toggleButton() : ''}
          <div className='navbar-collapse d-none d-md-flex'>
            <ul className='navbar-nav'>
              {this.props.menu.map((item, index) => (
                <NavItem
                  name={item.name}
                  href={item.href}
                  component={item.component}
                  key={index}
                  active={item.active}
                  disabled={item.disabled}
                  exact={item.exact}
                  onClick={item.onClick}
                  subMenu={item.subMenu}
                />
              ))}
            </ul>
          </div>
          <div className='navbar-collapse d-md-none d-md-none'>
            <ul
              className={`navbar-nav d-md-none animated faster ${
                this.state.toggler ? 'bounceInDown' : 'bounceOutUp'
              }`}
              style={{
                height: this.state.height,
                transition: `height 500ms ${
                  this.state.toggler ? 'ease-out' : 'ease-in'
                }`
              }}>
              {this.props.menu.map((item, index) => (
                <NavItem
                  name={item.name}
                  href={item.href}
                  component={item.component}
                  key={index}
                  index={index}
                  active={item.active}
                  disabled={item.disabled}
                  exact={item.exact}
                  onClick={item.onClick}
                  subMenu={item.subMenu}
                  resizeForSubmenu={this.resizeForSubmenu.bind(this)}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar