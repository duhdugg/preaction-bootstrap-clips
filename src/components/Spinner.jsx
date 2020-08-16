import PropTypes from 'prop-types'
import React from 'react'

/**
 * > _Indicate the loading state of a component or page..._
 * > https://getbootstrap.com/docs/4.5/components/spinners/
 */
class Spinner extends React.Component {
  render() {
    return (
      <div
        className='spinner-container d-flex'
        style={{
          flexDirection: this.props.flexDirection
        }}>
        <div
          className={`spinner-${this.props.type}`}
          role='status'
          style={{
            width: `${this.props.size}rem`,
            height: `${this.props.size}rem`,
            marginLeft:
              this.props.flexDirection === 'column' ? 'auto' : undefined,
            marginRight:
              this.props.flexDirection === 'column' ? 'auto' : undefined
          }}></div>
        {this.props.children ? (
          <div
            className='spinner-children'
            style={{
              fontSize: `${this.props.fontSize}rem`,
              lineHeight:
                this.props.flexDirection === 'row'
                  ? `${this.props.size}rem`
                  : undefined,
              marginLeft:
                this.props.flexDirection === 'row' ? '0.5rem' : undefined,
              marginTop:
                this.props.flexDirection === 'column' ? '0.5rem' : undefined
            }}>
            {this.props.children}
          </div>
        ) : (
          <div className='sr-only'>Loading...</div>
        )}
      </div>
    )
  }
}

Spinner.propTypes = {
  children: PropTypes.node,
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
