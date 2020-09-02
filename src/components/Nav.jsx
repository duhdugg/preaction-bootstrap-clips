import PropTypes from 'prop-types'
import React from 'react'
import { NavItem } from './NavItem.jsx'
import '../stylesheets/nav.css'

/**
 * https://getbootstrap.com/docs/4.5/components/navs/
 */
function Nav(props) {
  let classes = ['nav']

  if (props.align === 'center') {
    classes.push('justify-content-center')
  } else if (props.align === 'right') {
    classes.push('justify-content-end')
  } else if (props.align === 'vertical') {
    classes.push('flex-column')
  }

  if (props.type === 'pills') {
    classes.push('nav-pills')
  } else if (props.type === 'tabs') {
    classes.push('nav-tabs')
  }

  if (props.collapsible) {
    classes.push('flex-column flex-md-row')
  }

  if (props.fill) {
    classes.push('nav-fill')
  }

  if (props.justify) {
    classes.push('nav-justified')
  }

  if (props.className) {
    classes.push(props.className)
  }

  let className = classes.join(' ')

  return (
    <ul className={className}>
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
        />
      ))}
    </ul>
  )
}

Nav.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', 'vertical']),
  /** additional className to append to `<ul>` element */
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
