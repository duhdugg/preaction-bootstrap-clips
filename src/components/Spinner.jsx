import PropTypes from 'prop-types'
import React from 'react'
import { joinClassNames } from '../lib/joinClassNames.js'

/**
 * > _Indicate the loading state of a component or page..._
 * > https://getbootstrap.com/docs/5.1/components/spinners/
 */
function Spinner(props) {
  return (
    <div
      className={joinClassNames(
        'pxn-spinner-container',
        'd-flex',
        props.className || ''
      )}
      style={{
        flexDirection: props.flexDirection
      }}>
      <div
        className={`spinner-${props.type}`}
        role='status'
        style={{
          width: `${props.size}rem`,
          height: `${props.size}rem`,
          marginLeft: props.flexDirection === 'column' ? 'auto' : undefined,
          marginRight: props.flexDirection === 'column' ? 'auto' : undefined
        }}></div>
      {props.children ? (
        <div
          className='spinner-children'
          style={{
            fontSize: `${props.fontSize}rem`,
            lineHeight:
              props.flexDirection === 'row' ? `${props.size}rem` : undefined,
            marginLeft: props.flexDirection === 'row' ? '0.5rem' : undefined,
            marginTop: props.flexDirection === 'column' ? '0.5rem' : undefined
          }}>
          {props.children}
        </div>
      ) : (
        <div className='visually-hidden'>Loading...</div>
      )}
    </div>
  )
}

Spinner.propTypes = {
  children: PropTypes.node,
  /** adds to the className of the `.pxn-spinner-container' class */
  className: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column', 'row']),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['border', 'grow'])
}

Spinner.defaultProps = {
  fontSize: 1.333,
  flexDirection: 'row',
  size: 2,
  type: 'border'
}

export { Spinner }
