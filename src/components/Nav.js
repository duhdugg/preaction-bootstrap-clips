import React from 'react'
import NavItem from './NavItem.js'

class Nav extends React.Component {
  render () {
    let classes = ['nav']

    if (this.props.align === 'center') {
      classes.push('justify-content-center')
    } else if (this.props.align === 'right') {
      classes.push('justify-content-end')
    } else if (this.props.align === 'vertical') {
      classes.push('flex-column')
    }

    if (this.props.type === 'pills') {
      classes.push('nav-pills')
    } else if (this.props.type === 'tabs') {
      classes.push('nav-tabs')
    }

    if (this.props.collapsible) {
      classes.push('flex-column flex-md-row')
    }

    if (this.props.fill) {
      classes.push('nav-fill')
    }

    if (this.props.justify) {
      classes.push('nav-justified')
    }

    if (this.props.className) {
      classes.push(this.props.className)
    }

    let className = classes.join(' ')

    return (
      <ul className={className}>
        {this.props.menu.map((item, index) => (
          <NavItem
            name={item.name}
            href={item.href}
            component={item.component}
            key={index}
            active={item.active}
            disabled={item.disabled}
            exact={item.exact || false}
            onClick={item.onClick}
            subMenu={item.subMenu}
          />
        ))}
      </ul>
    )
  }
}

export default Nav
