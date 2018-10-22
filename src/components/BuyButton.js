import React from 'react'
import 'animate.css/animate.min.css'

class BuyButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  get backgroundColorRgb () {
    const def = [95, 239, 95]
    let value = def
    if (this.state.warm) {
      value[1] = 255
    } else if (this.state.flash) {
      value = [0, 255, 0]
    }
    return value
  }

  get borderColorRgba () {
    const def = [0, 0, 0, 0]
    let value = def
    if (this.state.warm) {
      value[3] = 0.25
    } else if (this.state.flash) {
      value = [64, 255, 64, 0.5]
    }
    return value
  }

  get boxShadowRgba () {
    const def = [0, 255, 0, 0]
    let value = def
    if (this.state.warm) {
      value[3] = 0.5
    } else if (this.state.flash) {
      value[3] = 1
    }
    return value
  }

  get colorRgb () {
    const def = [0, 0, 0]
    let value = def
    if (this.state.warm) {
      value[1] = 128
    } else if (this.state.flash) {
      value[1] = 185
    }
    return value
  }

  warm () {
    this.setState(state => {
      state.warm = true
      return state
    })
    setTimeout(() => {
      this.unwarm()
    }, 400)
  }

  unwarm () {
    this.setState(state => {
      state.warm = false
      return state
    })
  }

  rubberBand () {
    this.setState({ rubberBand: true, pulse: false, flash: true })
    setTimeout(() => {
      this.setState(state => {
        state.rubberBand = false
        return state
      })
    }, 800)
    setTimeout(() => {
      this.setState(state => {
        state.flash = false
        return state
      })
    }, 400)
  }

  pulse () {
    this.setState({ pulse: true })
    this.warm()
    setTimeout(() => {
      this.setState(state => {
        state.pulse = false
        return state
      })
    }, 800)
  }
  onClick (event) {
    event.preventDefault()
    this.rubberBand()
    if (this.props.onClick) {
      event.persist()
      setTimeout(() => {
        this.props.onClick(event)
      }, 300)
    }
  }
  onMouseEnter (event) {
    this.pulse()
  }
  render () {
    return (
      <button
        type="button"
        className={`btn btn-success animated fast ${
          this.state.rubberBand ? 'rubberBand' : ''
        } ${this.state.pulse ? 'pulse' : ''}`}
        style={{
          padding: '0.75rem 1.25rem',
          fontSize: '2.3rem',
          lineHeight: 1.5,
          borderRadius: '0.3rem',
          border: '0.08125em solid transparent',
          backgroundImage: 'radial-gradient(#ffffff20, #00000030)',
          backgroundColor: `rgb(${this.backgroundColorRgb.join(',')})`,
          borderColor: `rgba(${this.borderColorRgba.join(',')})`,
          color: `rgb(${this.colorRgb.join(',')})`,
          boxShadow: `0 0 0 0.2rem rgba(${this.boxShadowRgba.join(',')})`,
          transition: 'all 400ms ease-out'
        }}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onClick={this.onClick.bind(this)}
      >
        {this.props.children}
      </button>
    )
  }
}

export default BuyButton
