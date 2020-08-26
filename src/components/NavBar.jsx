import PropTypes from 'prop-types'
import React from 'react'
import { NavItem } from './NavItem.jsx'

/**
 * > _Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more..._
 * > https://getbootstrap.com/docs/4.5/components/navbar/
 */
class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shownSubmenuItems: [],
      toggler: false,
      height: 0
    }
  }

  disableToggler() {
    this.setState({ toggler: false }, this.setSize)
  }

  get fixedClass() {
    let value = ''
    if (this.props.fixedTo) {
      value = `fixed-${this.props.fixedTo}`
    }
    return value
  }

  setSize() {
    this.setState(state => {
      state.height = state.toggler && this.props.menu ? '100vh' : 0
      return state
    })
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
          {this.props.togglerPosition === 'left' ? toggleButton() : ''}
          <div>
            {this.props.brand ? (
              <a
                className={`navbar-brand ${
                  this.props.brand.link ? '' : 'mb-0 h1'
                }`}
                href={this.props.brand.href || ''}
                onClick={event => {
                  this.disableToggler()
                  event.persist()
                  if (this.props.brand.onClick) {
                    this.props.brand.onClick(event)
                  }
                }}>
                {this.props.brand.name}
              </a>
            ) : (
              ''
            )}
          </div>
          {this.props.togglerPosition === 'right' ? toggleButton() : ''}
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
                  disableToggler={
                    item.toggleParent === false
                      ? undefined
                      : this.disableToggler.bind(this)
                  }
                  toggleParent={item.toggleParent}
                />
              ))}
            </ul>
          </div>
          <div className='navbar-collapse d-md-none'>
            <ul
              className={`navbar-nav d-md-none animate__animated animate__faster ${
                this.state.toggler
                  ? 'animate__bounceInDown'
                  : 'animate__bounceOutUp'
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
                  disableToggler={
                    item.toggleParent === false
                      ? undefined
                      : this.disableToggler.bind(this)
                  }
                  toggleParent={item.toggleParent}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

NavBar.propTypes = {
  /** object with the following keys: `link`, `href`, `name`, and `onClick`.  */
  brand: PropTypes.object,
  /** controls if the navbar is fixed to either the top or bottom of the window */
  fixedTo: PropTypes.oneOf(['top', 'bottom']),
  /** an array of objects representing [`<NavItem>`](#navitem) props */
  menu: PropTypes.array.isRequired,
  /** controls whether the nav should be in a `div.container` */
  noContain: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
  /** where to put the hamburger menu */
  togglerPosition: PropTypes.oneOf(['left', 'right'])
}

NavBar.defaultProps = {
  noContain: false,
  togglerPosition: 'right'
}

export { NavBar }
