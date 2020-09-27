import PropTypes from 'prop-types'
import React from 'react'
import { getClassesForColumn } from '../lib/getClassesForColumn.js'
import { getClassesForTheme } from '../lib/getClassesForTheme.js'

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
    return style
  }
  const bodyTheme = getClassesForTheme(props.bodyTheme).join(' ')
  const cardTheme = getClassesForTheme(props.theme).join(' ')
  const headerTheme = getClassesForTheme(props.headerTheme).join(' ')
  const footerTheme = getClassesForTheme(props.footerTheme).join(' ')
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
    'teal',
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'white',
    'transparent'
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
  footerTheme: PropTypes.oneOf([
    'blue',
    'dark',
    'gray',
    'grey',
    'green',
    'light',
    'yellow',
    'red',
    'teal',
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'white',
    'transparent'
  ]),
  header: PropTypes.node,
  headerTheme: PropTypes.oneOf([
    'blue',
    'dark',
    'gray',
    'grey',
    'green',
    'light',
    'yellow',
    'red',
    'teal',
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'white',
    'transparent'
  ]),
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
    'teal',
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'white',
    'transparent'
  ]),
  /** when `column` is `true`, `width` can be 'auto', a number representing a fraction of 12, or an object representing values at specific breakpoints: xs, sm, md, lg, xl. The default is an object with sm: 'auto'.
   * see [getClassesForColumn](https://duhdugg.github.io/preaction-bootstrap-clips/#section-functions)
   */
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
