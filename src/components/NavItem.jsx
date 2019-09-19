import React from 'react'
import 'animate.css/animate.min.css'

class NavItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showSubmenu: false }
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
      }
      if (this.props.subMenu) {
        event.preventDefault()
        this.setState(
          state => {
            state.subMenuActive = !state.subMenuActive
            return state
          },
          () => {
            if (this.state.showSubmenu) {
              setTimeout(() => {
                this.setState(
                  state => {
                    state.showSubmenu = false
                    return state
                  },
                  () => {}
                )
              }, 333)
              if (this.props.resizeForSubmenu) {
                this.props.resizeForSubmenu(this.props.index, false)
              }
            } else {
              this.setState(
                state => {
                  state.showSubmenu = true
                  return state
                },
                () => {
                  if (this.props.resizeForSubmenu) {
                    this.props.resizeForSubmenu(
                      this.props.index,
                      this.state.showSubmenu
                    )
                  }
                }
              )
            }
          }
        )
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
          <div
            className={`dropdown-menu animated faster ${
              this.state.showSubmenu ? 'show' : ''
            } ${this.state.subMenuActive ? 'fadeIn' : 'fadeOut'}`}>
            {this.props.subMenu.map((item, index) => (
              <Link
                className={`dropdown-item ${item.active ? 'active' : ''}`}
                component={item.component}
                exact={item.exact}
                href={item.href || ''}
                onClick={item.onClick}
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

export default NavItem
