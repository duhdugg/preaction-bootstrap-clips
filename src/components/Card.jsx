import PropTypes from 'prop-types'
import React from 'react'
import { getClassesForColumn } from '../lib/getClassesForColumn.js'

/**
 * > _Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options._
 * > https://getbootstrap.com/docs/4.5/components/card/
 */
function Card(props) {
  const getClassName = () => {
    let d = {
      card: '',
      header: '',
      body: '',
      footer: ''
    }
    if (props.className) {
      Object.assign(d, props.className)
    }
    return d
  }
  const getContainerClassName = () => {
    let classes = []
    if (props.contain) {
      classes.push('container')
    }
    if (props.column) {
      classes.push(...getClassesForColumn(props.width))
    }
    return classes.join(' ')
  }
  const getStyle = () => {
    const style = {
      card: {},
      container: {},
      footer: {},
      header: {},
      body: {}
    }
    Object.assign(style, JSON.parse(JSON.stringify(props.style)))
    if (props.footerBgColor) {
      style.footer.backgroundColor = props.footerBgColor
    }
    if (props.footerFontColor) {
      style.footer.color = props.footerFontColor
    }
    if (props.headerBgColor) {
      style.header.backgroundColor = props.headerBgColor
    }
    if (props.headerFontColor) {
      style.header.color = props.headerFontColor
    }
    return style
  }
  const getTheme = name => {
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
  const bodyTheme = getTheme(props.bodyTheme)
  const cardTheme = getTheme(props.theme)
  const headerTheme = getTheme(props.headerTheme)
  const footerTheme = getTheme(props.footerTheme)
  const className = getClassName()
  const style = getStyle()
  return (
    <div className={getContainerClassName()} style={style.container}>
      <div className={`card ${cardTheme} ${className.card}`} style={style.card}>
        {props.header ? (
          <div
            className={`card-header ${headerTheme} ${className.header}`}
            style={style.header}>
            {props.header}
          </div>
        ) : (
          ''
        )}
        <div
          className={`card-body ${bodyTheme} ${className.body}`}
          style={style.body}>
          {props.children}
        </div>
        {props.footer ? (
          <div
            className={`card-footer ${footerTheme} ${className.footer}`}
            style={style.footer}>
            {props.footer}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  bodyTheme: PropTypes.oneOf([
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
  footerTheme: PropTypes.oneOf([
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
