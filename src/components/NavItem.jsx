import PropTypes from 'prop-types'
import React from 'react'
import 'animate.css/animate.min.css'

class NavItem extends React.Component {
  disableParentToggler() {
    if (this.props.disableToggler) {
      console.debug(this.props.toggleParent)
      this.props.disableToggler()
    }
  }

  render() {
    let classes = ['nav-item']
    if (this.props.subMenu) {
      classes.push('dropdown')
    }
    let className = classes.join(' ')

    let aClasses = ['nav-link']
    if (this.props.active) {
      aClasses.push('active')
    }
    if (this.props.disabled) {
      aClasses.push('disabled')
    }
    if (this.props.subMenu) {
      aClasses.push('dropdown-toggle')
    }
    let aClassName = aClasses.join(' ')

    let href = this.props.href || ''

    let onClick = event => {
      if (this.props.onClick) {
        event.persist()
        this.props.onClick(event)
      } else if (this.props.href === undefined) {
        event.preventDefault()
      }
      if (!this.props.subMenu && this.props.toggleParent !== false) {
        this.disableParentToggler()
      }
    }

    let itemOnClick = item => {
      return event => {
        if (item.onClick) {
          item.onClick(event)
        } else if (item.href === undefined) {
          event.preventDefault()
        }
        if (item.toggleParent !== false) {
          this.disableParentToggler()
        }
      }
    }

    return (
      <li className={className}>
        <Link
          href={href}
          className={aClassName}
          component={this.props.component}
          onClick={onClick}>
          {this.props.name}
        </Link>
        {this.props.subMenu ? (
          <div className='dropdown-menu animate__animated animate__faster animate__fadeIn'>
            {this.props.subMenu.map((item, index) => (
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
  component: PropTypes.element,
  exact: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func
}

NavItem.propTypes = {
  active: PropTypes.bool,
  component: PropTypes.element,
  disabled: PropTypes.bool,
  disableToggler: PropTypes.func,
  href: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.node,
  onClick: PropTypes.func,
  resizeForSubmenu: PropTypes.func,
  subMenu: PropTypes.array,
  toggleParent: PropTypes.bool
}

export default NavItem
