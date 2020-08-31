import PropTypes from 'prop-types'
import React from 'react'
import { NavItem } from './NavItem.jsx'

/**
 * > _Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more..._
 * > https://getbootstrap.com/docs/4.5/components/navbar/
 */
function NavBar(props) {
  const [state, setState] = React.useState({ toggler: false, height: 0 })

  const disableToggler = () => {
    setState({ toggler: false, height: 0 })
  }

  const getFixedClass = () => {
    let value = ''
    if (props.fixedTo) {
      value = `fixed-${props.fixedTo}`
    }
    return value
  }

  const toggleToggler = () => {
    setState({
      toggler: !state.toggler,
      height: !state.toggler ? '100vh' : 0
    })
  }

  const toggleButton = () => (
    <button className='navbar-toggler' type='button' onClick={toggleToggler}>
      <span className='navbar-toggler-icon' />
    </button>
  )

  return (
    <nav
      className={`navbar ${getFixedClass()} navbar-expand-md ${
        props.theme ? `navbar-${props.theme} bg-${props.theme}` : ''
      }`}>
      <div
        className={
          props.noContain
            ? 'd-flex justify-content-between w-100 flex-wrap'
            : 'container'
        }>
        {props.togglerPosition === 'left' ? toggleButton() : ''}
        <div>
          {props.brand ? (
            <a
              className={`navbar-brand ${props.brand.link ? '' : 'mb-0 h1'}`}
              href={props.brand.href || ''}
              onClick={event => {
                disableToggler()
                event.persist()
                if (props.brand.onClick) {
                  props.brand.onClick(event)
                }
              }}>
              {props.brand.name}
            </a>
          ) : (
            ''
          )}
        </div>
        {props.togglerPosition === 'right' ? toggleButton() : ''}
        <div className='navbar-collapse d-none d-md-flex'>
          <ul className='navbar-nav'>
            {props.menu.map((item, index) => (
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
                  item.toggleParent === false ? undefined : disableToggler
                }
                toggleParent={item.toggleParent}
              />
            ))}
          </ul>
        </div>
        <div className='navbar-collapse d-md-none'>
          <ul
            className={`navbar-nav d-md-none animate__animated animate__faster ${
              state.toggler ? 'animate__bounceInDown' : 'animate__bounceOutUp'
            }`}
            style={{
              height: state.height,
              transition: `height 500ms ${
                state.toggler ? 'ease-out' : 'ease-in'
              }`
            }}>
            {props.menu.map((item, index) => (
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
                  item.toggleParent === false ? undefined : disableToggler
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
