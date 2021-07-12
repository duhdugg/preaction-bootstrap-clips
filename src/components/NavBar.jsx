import PropTypes from 'prop-types'
import React from 'react'
import { NavItem } from './NavItem.jsx'
import { joinClassNames } from '../lib/joinClassNames.js'

const ssr = typeof window === 'undefined'
if (!ssr) {
  require('bootstrap/js/dist/collapse.js')
}

/**
 * > _Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more..._
 * > https://getbootstrap.com/docs/5.0/components/navbar/
 */
function NavBar(props) {
  const collapseId = React.useRef(
    `navbar-collapse-${String(Math.random()).replace(/[^\d]/g, '')}`
  )

  const toggleButton = (
    <button
      className='navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target={`#${collapseId.current}`}
      aria-controls={collapseId.current}
      aria-expanded='false'
      aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon' />
    </button>
  )

  const darkOrLight = [
    'cyan',
    'info',
    'light',
    'teal',
    'transparent',
    'warning',
    'white',
    'yellow'
  ].includes(props.theme)
    ? 'light'
    : 'dark'

  // sanitize theme to prevent className injection
  const theme = (props.theme || '')
    .replace(/\s/g, ',')
    .split(',')
    .filter(t => !!t.length)[0]

  // sanitize fixedTo to prevent className injection
  const fixedTo = (props.fixedTo || '')
    .replace(/\s/g, ',')
    .split(',')
    .filter(t => !!t.length)[0]

  const classNames = {
    navbar: joinClassNames(
      'navbar',
      props.fixedTo ? `fixed-${fixedTo}` : '',
      'navbar-expand-md',
      props.theme ? `navbar-${darkOrLight} bg-${theme}` : ''
    ),
    container: props.fluid ? 'container-fluid' : 'container',
    brand: joinClassNames(
      'navbar-brand',
      props.brand && props.brand.link ? '' : 'mb-0 h1'
    )
  }

  return (
    <nav className={classNames.navbar}>
      <div className={classNames.container}>
        {props.togglerPosition === 'left' ? toggleButton : ''}
        <div>
          {props.brand ? (
            <a
              className={classNames.brand}
              href={props.brand.href || ''}
              onClick={props.brand.onClick}>
              {props.brand.name}
            </a>
          ) : (
            ''
          )}
        </div>
        {props.togglerPosition === 'right' ? toggleButton : ''}
        <div className='collapse navbar-collapse' id={collapseId.current}>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {props.menu.map((item, index) => (
              <NavItem
                name={item.name}
                href={item.href}
                className={item.className}
                component={item.component}
                key={index}
                active={item.active}
                disabled={item.disabled}
                exact={item.exact}
                onClick={item.onClick}
                subMenu={item.subMenu}
                autoClose={item.autoClose}
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
  /** controls whether the `-fluid` container container className is used` */
  fluid: PropTypes.bool,
  /** an array of objects representing [`<NavItem>`](#navitem) props */
  menu: PropTypes.array.isRequired,
  /** sets .`bg-` className */
  theme: PropTypes.string,
  /** where to put the hamburger menu */
  togglerPosition: PropTypes.oneOf(['left', 'right'])
}

NavBar.defaultProps = {
  fluid: false,
  togglerPosition: 'right'
}

export { NavBar }
