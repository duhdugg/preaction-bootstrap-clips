import PropTypes from 'prop-types'
import React from 'react'
import { NavItem } from './NavItem.jsx'
import { joinClassNames } from '../lib/joinClassNames.js'

/**
 * https://getbootstrap.com/docs/5.1/components/navs-tabs/
 */
function Nav(props) {
  const className = joinClassNames(
    'nav',
    props.align === 'center' ? 'justify-content-center' : '',
    props.align === 'right' ? 'justify-content-end' : '',
    props.align === 'vertical' ? 'flex-column' : '',
    props.type === 'pills' ? 'nav-pills' : '',
    props.type === 'tabs' ? 'nav-tabs' : '',
    props.collapsible ? 'flex-column flex-md-row' : '',
    props.fill ? 'nav-fill' : '',
    props.justify ? 'nav-justified' : '',
    props.className || ''
  )

  return (
    <ul className={className}>
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
  )
}

Nav.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', 'vertical']),
  /** additional className to append to the `.nav` element */
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  /** controls whether to add the `nav-fill` className */
  fill: PropTypes.bool,
  /** controls whether to add the `nav-justified` to className */
  justify: PropTypes.bool,
  /** an array of objects representing [`<NavItem>`](#navitem) props */
  menu: PropTypes.array.isRequired,
  /** controls whether to add `nav-pills` or `nav-tabs` to className */
  type: PropTypes.oneOf(['basic', 'pills', 'tabs'])
}

Nav.defaultProps = {
  align: 'left',
  collapsible: false,
  fill: false,
  justify: false,
  type: 'basic'
}

export { Nav }
