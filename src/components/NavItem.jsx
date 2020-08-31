import PropTypes from 'prop-types'
import React from 'react'

/**
 * These are used as children of both [`<Nav>`](#nav) and [`<NavBar>`](#navbar) components
 */
function NavItem(props) {
  const disableParentToggler = () => {
    if (props.disableToggler) {
      props.disableToggler()
    }
  }

  const classes = ['nav-item']
  if (props.subMenu) {
    classes.push('dropdown')
  }
  const className = classes.join(' ')

  const aClasses = ['nav-link']
  if (props.active) {
    aClasses.push('active')
  }
  if (props.disabled) {
    aClasses.push('disabled')
  }
  if (props.subMenu) {
    aClasses.push('dropdown-toggle')
  }
  const aClassName = aClasses.join(' ')

  const href = props.href || ''

  const onClick = event => {
    if (props.onClick) {
      event.persist()
      props.onClick(event)
    } else if (props.href === undefined) {
      event.preventDefault()
    }
    if (!props.subMenu && props.toggleParent !== false) {
      disableParentToggler()
    }
  }

  const itemOnClick = item => {
    return event => {
      if (item.onClick) {
        item.onClick(event)
      } else if (item.href === undefined) {
        event.preventDefault()
      }
      if (item.toggleParent !== false) {
        disableParentToggler()
      }
    }
  }

  return (
    <li className={className}>
      <Link
        href={href}
        className={aClassName}
        component={props.component}
        onClick={onClick}>
        {props.name}
      </Link>
      {props.subMenu ? (
        <div className='dropdown-menu animate__animated animate__faster animate__fadeIn'>
          {props.subMenu.map((item, index) => (
            <Link
              className={`dropdown-item ${item.active ? 'active' : ''}`}
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
      exact: props.exact
    },
    props.children
  )
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  exact: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func
}

NavItem.propTypes = {
  /** controls whether the `active` className should be added to the link */
  active: PropTypes.bool,
  /** you can pass the `Link` component imported from [react-router-dom](https://www.npmjs.com/package/react-router-dom) here */
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  /** in submenu item, this callback should handle toggling the parent menu. Typically, this is only used by `NavBar`. */
  disableToggler: PropTypes.func,
  href: PropTypes.string,
  /** this is whatever you want rendered within the link */
  name: PropTypes.node,
  /** callback function which accepts `event` argument */
  onClick: PropTypes.func,
  /** an array of objects representing `NavItem` props */
  subMenu: PropTypes.array,
  /** in submenu items, this can be set explicitly to false to disable toggling the parent item. Typically, this is only used by `NavBar`. */
  toggleParent: PropTypes.bool
}

NavItem.defaultProps = {
  active: false,
  disabled: false
}

export { NavItem }
