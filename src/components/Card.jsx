import PropTypes from 'prop-types'
import React from 'react'
import { getColumnClassNames } from '../lib/getColumnClassNames.js'
import { getGradientClassName } from '../lib/getGradientClassName.js'
import { getThemeClassName } from '../lib/getThemeClassName.js'
import { joinClassNames } from '../lib/joinClassNames.js'

/**
 * > _Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options._
 * > https://getbootstrap.com/docs/5.0/components/card/
 */
function Card(props) {
  const classNames = {
    container: joinClassNames(
      'pxn-card-container',
      props.className || '',
      props.contain ? 'container' : '',
      ...(props.column ? getColumnClassNames(props.width) : '')
    ),
    card: joinClassNames(
      'card',
      getThemeClassName(props.theme),
      getGradientClassName(props.gradient)
    ),
    header: joinClassNames(
      'card-header',
      getThemeClassName(props.headerTheme),
      getGradientClassName(props.headerGradient)
    ),
    body: joinClassNames(
      'card-body',
      getThemeClassName(props.bodyTheme),
      getGradientClassName(props.bodyGradient)
    ),
    footer: joinClassNames(
      'card-footer',
      getThemeClassName(props.footerTheme),
      getGradientClassName(props.footerGradient)
    )
  }
  return (
    <div className={classNames.container}>
      <div className={classNames.card}>
        {props.header ? (
          <div className={classNames.header}>{props.header}</div>
        ) : (
          ''
        )}
        <div className={classNames.body}>{props.children}</div>
        {props.footer ? (
          <div className={classNames.footer}>{props.footer}</div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  /** sets a `pxn-theme-` class on the `.card-body` element */
  bodyTheme: PropTypes.string,
  /** sets a background gradient on the `.card-body` element */
  bodyGradient: PropTypes.bool,
  children: PropTypes.node,
  /** this adds to the className of the `.pxn-card-container` element */
  className: PropTypes.string,
  /** set to true if the card is a child of a `.row` element */
  column: PropTypes.bool,
  /** setting to true will include the `.container` class to the outer `<div>`
   * [See: Bootstrap Docs > Layout > Containers](https://getbootstrap.com/docs/5.0/layout/containers/)
   * */
  contain: PropTypes.bool,
  footer: PropTypes.node,
  /** sets a `pxn-theme-` class on the `.card-footer` element */
  footerTheme: PropTypes.string,
  /** sets a background gradient on the `.card-footer` element */
  footerGradient: PropTypes.bool,
  /** sets a background gradient on the `.card` element */
  gradient: PropTypes.bool,
  header: PropTypes.node,
  /** sets a `pxn-theme-` class on the `.card-header` element */
  headerTheme: PropTypes.string,
  /** sets a background gradient on the `.card-header` element */
  headerGradient: PropTypes.bool,
  /** sets a `pxn-theme-` class on the `.card` element */
  theme: PropTypes.string,
  /** when `column` is `true`, `width` can be 'auto', a number representing a fraction of 12, or an object representing values at specific breakpoints: xs, sm, md, lg, xl, xxl. The default is an object with sm: 'auto'.
   * see [getColumnClassNames](https://duhdugg.github.io/preaction-bootstrap-clips/#section-functions)
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
  width: { sm: 'auto' }
}

export { Card }
