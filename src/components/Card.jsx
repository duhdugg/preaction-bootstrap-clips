import PropTypes from 'prop-types'
import React from 'react'
import { getClassesForColumn } from '../lib/getClassesForColumn.js'

/**
 * > _Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options._
 * > https://getbootstrap.com/docs/4.5/components/card/
 */
class Card extends React.Component {
  get className() {
    let d = {
      card: '',
      header: '',
      body: ''
    }
    if (this.props.className) {
      Object.assign(d, this.props.className)
    }
    return d
  }

  get containerClassName() {
    let classes = []
    if (this.props.contain) {
      classes.push('container')
    }
    if (this.props.column) {
      classes.push(...getClassesForColumn(this.props.width))
    }
    return classes.join(' ')
  }

  get bodyTheme() {
    return this.getTheme(this.props.bodyTheme)
  }

  get cardTheme() {
    return this.getTheme(this.props.theme)
  }

  get footerTheme() {
    return this.getTheme(this.props.footerTheme)
  }

  get headerTheme() {
    return this.getTheme(this.props.headerTheme)
  }

  getTheme(name) {
    let theme = ''
    switch (name) {
      case 'blue':
        theme = 'bg-primary text-light'
        break
      case 'dark':
        theme = 'bg-dark text-light'
        break
      case 'gray':
      case 'grey':
        theme = 'bg-secondary text-light'
        break
      case 'green':
        theme = 'bg-success text-light'
        break
      case 'light':
        theme = 'bg-light text-dark'
        break
      case 'yellow':
        theme = 'bg-warning text-dark'
        break
      case 'red':
        theme = 'bg-danger text-light'
        break
      case 'teal':
        theme = 'bg-info text-light'
        break
      default:
        break
    }
    return theme
  }

  get style() {
    let style = {
      card: {},
      container: {},
      footer: {},
      header: {},
      body: {}
    }
    if (this.props.style) {
      Object.assign(style, JSON.parse(JSON.stringify(this.props.style)))
    }
    if (this.props.footerBgColor) {
      style.footer.backgroundColor = this.props.footerBgColor
    }
    if (this.props.footerFontColor) {
      style.footer.color = this.props.footerFontColor
    }
    if (this.props.headerBgColor) {
      style.header.backgroundColor = this.props.headerBgColor
    }
    if (this.props.headerFontColor) {
      style.header.color = this.props.headerFontColor
    }
    return style
  }

  render() {
    return (
      <div className={this.containerClassName} style={this.style.container}>
        <div
          className={`card ${this.cardTheme} ${this.className.card}`}
          style={this.style.card}>
          {this.props.header ? (
            <div
              className={`card-header ${this.headerTheme} ${this.className.header}`}
              style={this.style.header}>
              {this.props.header}
            </div>
          ) : (
            ''
          )}
          <div
            className={`card-body ${this.bodyTheme} ${this.className.body}`}
            style={this.style.body}>
            {this.props.children}
          </div>
          {this.props.footer ? (
            <div
              className={`card-footer ${this.footerTheme} ${this.className.footer}`}
              style={this.style.footer}>
              {this.props.footer}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  /** @see theme props */
  bodyTheme: PropTypes.string,
  children: PropTypes.node,
  /** this adds to the className of the inner card div */
  className: PropTypes.object,
  column: PropTypes.bool,
  /** setting to true will include the `.container` class to the outer `<div>`
   * [See: Bootstrap Docs > Layout > Overview > Containers](https://getbootstrap.com/docs/4.5/layout/overview/#containers)
   * */
  contain: PropTypes.bool,
  footer: PropTypes.node,
  footerBgColor: PropTypes.string,
  footerFontColor: PropTypes.string,
  footerTheme: PropTypes.string,
  header: PropTypes.node,
  headerBgColor: PropTypes.string,
  headerFontColor: PropTypes.string,
  headerTheme: PropTypes.string,
  /** set the style of the card, container, footer, header, and body separately */
  style: PropTypes.object,
  theme: PropTypes.oneOf([
    'blue',
    'dark',
    'gray',
    'grey',
    'green',
    'light',
    'yellow',
    'red',
    'teal'
  ]),
  width: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ])
}

Card.defaultProps = {
  column: false,
  contain: false,
  style: {
    card: {},
    container: {},
    footer: {},
    header: {},
    body: {}
  },
  width: { sm: 'auto' }
}

export { Card }
