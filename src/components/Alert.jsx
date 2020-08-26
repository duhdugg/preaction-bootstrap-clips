import PropTypes from 'prop-types'
import React from 'react'
import { getClassesForColumn } from '../lib/getClassesForColumn.js'

/**
 * > _Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages._
 * > https://getbootstrap.com/docs/4.5/components/alerts/
 */
class Alert extends React.Component {
  get className() {
    return `alert alert-${this.theme}`
  }

  get containerClassName() {
    let classes = ['mb-3']
    if (this.props.contain) {
      classes.push('container')
    }
    if (this.props.column) {
      classes.push(...getClassesForColumn(this.props.width))
    }
    return classes.join(' ')
  }

  get theme() {
    let theme
    switch (this.props.theme) {
      case 'blue':
      case 'primary':
        theme = 'primary'
        break
      case 'green':
      case 'success':
        theme = 'success'
        break
      case 'red':
      case 'error':
      case 'danger':
        theme = 'danger'
        break
      case 'yellow':
      case 'orange':
      case 'warning':
        theme = 'warning'
        break
      case 'dark':
        theme = 'dark'
        break
      case 'secondary':
      case 'gray':
      case 'grey':
        theme = 'secondary'
        break
      case 'light':
        theme = 'light'
        break
      case 'info':
      default:
        theme = 'info'
        break
    }
    return theme
  }

  get style() {
    let style = {
      alert: {},
      container: {}
    }
    Object.assign(style, JSON.parse(JSON.stringify(this.props.style)))
    return style
  }

  render() {
    return (
      <div className={this.containerClassName} style={this.style.container}>
        <div className={this.className} style={this.style.alert}>
          {this.props.header ? (
            <div>
              <h4 className='alert-heading'>{this.props.header}</h4>
              <hr />
            </div>
          ) : (
            ''
          )}
          {this.props.children}
        </div>
      </div>
    )
  }
}

Alert.propTypes = {
  children: PropTypes.node,
  /** set to true if the alert is a child of a `.row` element */
  column: PropTypes.bool,
  /** setting to true will include the `.container` class to the outer `<div>`
   * [See: Bootstrap Docs > Layout > Overview > Containers](https://getbootstrap.com/docs/4.5/layout/overview/#containers)
   * */
  contain: PropTypes.bool,
  /** will render an an alert heading with this prop as its contents **/
  header: PropTypes.node,
  /** set the style of the inner container and alert `<div>` elements separately */
  style: PropTypes.object,
  theme: PropTypes.oneOf([
    'blue',
    'primary',
    'green',
    'success',
    'red',
    'error',
    'danger',
    'yellow',
    'orange',
    'warning',
    'dark',
    'secondary',
    'gray',
    'grey',
    'light',
    'info'
  ]),
  /** @see width props */
  width: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ])
}

Alert.defaultProps = {
  column: false,
  contain: false,
  style: { alert: {}, container: {} },
  theme: 'info',
  width: { sm: 'auto' }
}

export { Alert }
