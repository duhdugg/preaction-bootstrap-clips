import PropTypes from 'prop-types'
import React from 'react'
import { getColumnClassNames } from '../lib/getColumnClassNames.js'
import { getGradientClassName } from '../lib/getGradientClassName.js'
import { joinClassNames } from '../lib/joinClassNames.js'

/**
 * > _Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages._
 * > https://getbootstrap.com/docs/5.0/components/alerts/
 */
function Alert(props) {
  const classNames = {
    container: joinClassNames(
      'pxn-alert-container',
      props.className,
      props.contain ? 'container' : '',
      ...(props.column ? getColumnClassNames(props.width) : [])
    ),
    alert: joinClassNames(
      'alert',
      `alert-${props.theme}`,
      getGradientClassName(props.gradient)
    )
  }
  return (
    <div className={classNames.container}>
      <div className={classNames.alert}>
        {props.header ? (
          <div>
            <h4 className='alert-heading'>{props.header}</h4>
            <hr />
          </div>
        ) : (
          ''
        )}
        {props.children}
      </div>
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.node,
  /** adds to the className of the `.pxn-alert-container` element */
  className: PropTypes.string,
  /** set to true if the alert is a child of a `.row` element */
  column: PropTypes.bool,
  /** setting to true will include the `.container` class to the outer `<div>`
   * [See: Bootstrap Docs > Layout > Containers](https://getbootstrap.com/docs/5.0/layout/containers/)
   * */
  contain: PropTypes.bool,
  gradient: PropTypes.bool,
  header: PropTypes.node,
  theme: PropTypes.oneOf([
    'primary',
    'success',
    'danger',
    'warning',
    'dark',
    'secondary',
    'light',
    'info'
  ]),
  /** when `column` is `true`, `width` can be 'auto', a number representing a fraction of 12, or an object representing values at specific breakpoints: xs, sm, md, lg, xl, xxl. The default is an object with sm: 'auto'.
   * see [getColumnClassNames](https://duhdugg.github.io/preaction-bootstrap-clips/#section-functions)
   */
  width: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ])
}

Alert.defaultProps = {
  column: false,
  contain: false,
  gradient: false,
  theme: 'info',
  width: { sm: 'auto' }
}

export { Alert }
