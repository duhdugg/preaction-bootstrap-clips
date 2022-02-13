import PropTypes from 'prop-types'
import React from 'react'
import { joinClassNames } from '../lib/joinClassNames.js'

const ssr = typeof window === 'undefined'
let Dropdown
if (!ssr) {
  Dropdown = window.bootstrap
    ? window.bootstrap.Dropdown
    : require('bootstrap/js/dist/dropdown.js')
}

/**
 * These are used as children of both [`<Nav>`](#nav) and [`<NavBar>`](#navbar) components
 */
function NavItem(props) {
  const linkId = React.useRef(
    `nav-link-id-${String(Math.random()).replace(/[^\d]/g, '')}`
  )

  const onClick = event => {
    if (props.onClick) {
      event.persist()
      props.onClick(event)
    } else if (props.href === undefined) {
      event.preventDefault()
    }
  }

  const itemOnClick = item => {
    return event => {
      if (item.onClick) {
        item.onClick(event)
      } else if (item.href === undefined) {
        event.preventDefault()
      }
    }
  }

  // dropdown workaround
  const liRef = React.useRef(null)
  const [firstToggle, setFirstToggle] = React.useState(false)
  React.useEffect(() => {
    if (props.subMenu && !firstToggle && !ssr) {
      const dt = liRef.current.querySelector('.dropdown-toggle')
      const dd =
        Dropdown.getInstance(dt) ||
        new Dropdown(dt, { autoClose: props.autoClose || true })
      dd.show()
      dd.hide()
      setFirstToggle(true)
    }
  }, [props, firstToggle, setFirstToggle])

  const classNames = {
    li: joinClassNames(
      'nav-item',
      props.subMenu ? 'dropdown' : '',
      props.className || ''
    ),
    a: joinClassNames(
      'nav-link',
      'show', // needed for dropdown workaround
      props.active ? 'active' : '',
      props.disabled ? 'disabled' : '',
      props.subMenu ? 'dropdown-toggle' : ''
    )
  }

  return (
    <li className={classNames.li} ref={liRef}>
      <Link
        href={props.href || ''}
        className={classNames.a}
        component={props.component}
        onClick={onClick}
        id={linkId.current}
        data-bs-auto-close={props.autoClose}
        data-bs-toggle={props.subMenu ? 'dropdown' : undefined}
        aria-expanded={props.subMenu ? 'false' : undefined}>
        {props.name}
      </Link>
      {props.subMenu ? (
        <div className='dropdown-menu' aria-labelledby={linkId.current}>
          {props.subMenu.map((item, index) => (
            <Link
              className={joinClassNames(
                'dropdown-item',
                item.active ? 'active' : '',
                item.className || ''
              )}
              component={item.component}
              exact={item.exact}
              href={item.href || ''}
              onClick={itemOnClick(item)}
              key={index}>
              {item.name}
            </Link>
          ))}
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

function Link(props) {
  return React.createElement(
    props.component || 'a',
    {
      href: props.component ? undefined : props.href || '',
      to: props.component ? props.href || '' : undefined,
      className: props.className,
      onClick: props.onClick,
      exact: props.exact,
      id: props.id,
      'data-bs-toggle': props['data-bs-toggle'],
      'data-bs-auto-close': props['data-bs-auto-close'],
      'aria-expanded': props['aria-expanded']
    },
    props.children
  )
}

Link.propTypes = {
  'aria-expanded': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  'data-bs-toggle': PropTypes.string,
  'data-bs-auto-close': PropTypes.string,
  exact: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
}

NavItem.propTypes = {
  /** controls whether the `active` className should be added to the link */
  active: PropTypes.bool,
  /** https://getbootstrap.com/docs/5.1/components/dropdowns/#auto-close-behavior */
  autoClose: PropTypes.oneOf(['true', 'false', 'inside', 'outside']),
  /** you can pass the `Link` component imported from [react-router-dom](https://www.npmjs.com/package/react-router-dom) here */
  component: PropTypes.elementType,
  /** additional className to append to the `.nav-item` element */
  className: PropTypes.string,
  /** controls whether the 'disabled' className should be added to the link */
  disabled: PropTypes.bool,
  /** in submenu item, this callback should handle toggling the parent menu. Typically, this is only used by `NavBar`. */
  disableToggler: PropTypes.func,
  href: PropTypes.string,
  /** this is whatever you want rendered within the link */
  name: PropTypes.node,
  /** callback function which accepts `event` argument */
  onClick: PropTypes.func,
  /** an array of objects representing `NavItem` props */
  subMenu: PropTypes.array
}

NavItem.defaultProps = {
  active: false,
  disabled: false
}

export { NavItem }
