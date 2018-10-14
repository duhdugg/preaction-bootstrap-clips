import React from 'react'

class NavItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { submenuActive: false }
  }

  render () {
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
        this.setState(state => {
          state.subMenuActive = !state.subMenuActive
          return state
        })
      }
    }
    return (
      <li className={className}>
        <a className={aClassName}
          href={href}
          onClick={onClick}
        >{this.props.name}</a>
        {this.props.subMenu ? <div className={`dropdown-menu ${this.state.subMenuActive ? 'show' : ''}`}>
          {this.props.subMenu.map((item, index) => (
            <DropdownItem name={item.name}
              active={item.active}
              href={item.href}
              onClick={item.onClick}
              key={index}
            ></DropdownItem>
          ))}
        </div> : ''}
      </li>
    )
  }
}

function DropdownItem (item) {
  return (
    <a className={`dropdown-item ${item.active ? 'active' : ''}`}
      onClick={item.onClick}
      href={item.href || ''}
    >{item.name}</a>
  )
}

export default NavItem
