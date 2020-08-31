import PropTypes from 'prop-types'
import React from 'react'

/**
 * Self-explanatory.
 */
function AnimatedButton(props) {
  const [flash, setFlash] = React.useState(false)
  const [pulse, setPulse] = React.useState(false)
  const [rubberBand, setRubberBand] = React.useState(false)
  const [warm, setWarm] = React.useState(false)
  const getBackgroundColorRgb = () => {
    const def = [95, 239, 95]
    let value = def
    if (warm) {
      value[1] = 255
    } else if (flash) {
      value = [64, 255, 64]
    }
    return value
  }
  const getBorderColorRgba = () => {
    const def = [0, 0, 0, 0]
    let value = def
    if (warm) {
      value[0] = 64
      value[3] = 0.125
    } else if (flash) {
      value = [64, 255, 64, 0.5]
    }
    return value
  }
  const getBoxShadowRgba = () => {
    const def = [0, 255, 0, 0]
    let value = def
    if (warm) {
      value[0] = 64
      value[3] = 0.5
    } else if (flash) {
      value[0] = 128
      value[3] = 1
    }
    return value
  }
  const getColorRgb = () => {
    const def = [0, 0, 40]
    let value = def
    if (warm) {
      value[0] = 32
      value[1] = 64
    } else if (flash) {
      value[0] = 64
      value[1] = 128
    }
    return value
  }
  const animatePulse = () => {
    setPulse(true)
    animateWarm()
    setTimeout(() => {
      setPulse(false)
    }, 800)
  }
  const animateRubberBand = () => {
    setRubberBand(true)
    setPulse(false)
    setFlash(true)
    setTimeout(() => {
      setRubberBand(false)
    }, 800)
    setTimeout(() => {
      setFlash(false)
    }, 400)
  }
  const animateWarm = () => {
    setWarm(true)
    setTimeout(() => {
      setWarm(false)
    }, 400)
  }
  const onClick = event => {
    event.preventDefault()
    animateRubberBand()
    if (props.onClick) {
      event.persist()
      setTimeout(() => {
        props.onClick(event)
      }, 300)
    }
  }
  return (
    <button
      type={props.type || 'button'}
      disabled={props.disabled || false}
      className={`btn btn-success animate__animated animate__fast ${
        rubberBand ? 'animate__rubberBand' : ''
      } ${pulse ? 'animate__pulse' : ''}`}
      style={{
        padding: '0.75rem 1.25rem',
        fontSize: '2.3rem',
        lineHeight: 1.5,
        borderRadius: '0.3rem',
        border: '0.08125em solid transparent',
        backgroundImage: 'radial-gradient(#eeeeff20, #00004040)',
        backgroundColor: `rgb(${getBackgroundColorRgb().join(',')})`,
        borderColor: `rgba(${getBorderColorRgba().join(',')})`,
        color: `rgb(${getColorRgb().join(',')})`,
        boxShadow: `0 0 0 0.2rem rgba(${getBoxShadowRgba().join(',')})`,
        transition: 'all 400ms ease-out'
      }}
      onMouseEnter={animatePulse}
      onClick={onClick}>
      {props.children}
    </button>
  )
}

AnimatedButton.defaultProps = {
  disabled: false,
  type: 'button'
}

AnimatedButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  /** callback which accepts an `event` argument */
  onClick: PropTypes.func,
  /** button or submit */
  type: PropTypes.string
}

export { AnimatedButton }
