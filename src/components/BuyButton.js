import React from 'react'
import 'animate.css/animate.min.css'

class BuyButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
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
          backgroundImage: 'radial-gradient(#ffffff40, #00000048)',
          backgroundColor: this.state.flash
            ? '#4dd'
            : this.state.warm
              ? '#a28'
              : '#0c0',
          borderColor: this.state.flash
            ? '#8ff'
            : this.state.warm
              ? '#d4d'
              : '#4d4',
          color: this.state.flash ? '#fef' : this.state.warm ? '#ecc' : '#fff',
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
