import React from 'react'
import getClassesForColumn from '../lib/getClassesForColumn.js'

class Alert extends React.Component {
  get className () {
    return `alert alert-${this.theme}`
  }

  get containerClassName () {
    let classes = ['mb-3']
    if (this.props.contain) {
      classes.push('container')
    }
    if (this.props.column) {
      classes.push(...getClassesForColumn(this.props.width))
    }
    return classes.join(' ')
  }

  get theme () {
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

  get style () {
    let style = {
      alert: {},
      container: {}
    }
    if (this.props.style) {
      Object.assign(style, JSON.parse(JSON.stringify(this.props.style)))
    }
    return style
  }

  render () {
    return (
      <div className={this.containerClassName} style={this.style.container}>
        <div className={this.className} style={this.style.alert}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Alert
