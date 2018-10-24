import React from 'react'
import '../stylesheets/spin.css'
import spinner from '../vectors/spinner.svg'

class Spinner extends React.Component {
  get containerStyle () {
    return {
      margin: 'auto'
    }
  }
  get fontSize () {
    return Number(this.props.fontSize) || 0.8
  }
  get imageStyle () {
    return {
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
  get size () {
    return Number(this.props.size) || 1
  }
  get spinnerContainerStyle () {
    return {
      display: 'block',
      width: this.getEmSize(1),
      height: this.getEmSize(1),
      margin: this.props.overlay ? 'auto' : undefined
    }
  }
  get spinnerStyle () {
    return {
      display: 'block',
      width: '100%',
      height: '100%',
      animation: 'spin 1s ease-in-out infinite'
    }
  }
  get textStyle () {
    return {
      display: 'block',
      fontSize: this.fontSize + 'em'
    }
  }
  get topStyle () {
    let style = {}
    if (this.props.overlay) {
      Object.assign(style, {
        backgroundColor: '#ffffff88',
        display: 'flex',
        height: '100%',
        left: 0,
        opacity: 0.85,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 9999
      })
    } else {
      style.display = 'inline-block'
    }
    return style
  }
  getEmSize (multipler) {
    return `${this.size * multipler}rem`
  }
  render () {
    return (
      <span style={this.topStyle}>
        <span style={this.containerStyle}>
          <span style={this.spinnerContainerStyle}>
            <span style={this.spinnerStyle}>
              <img
                src={spinner}
                style={this.imageStyle}
                width="100%"
                height="100%"
              />
            </span>
          </span>
          <span style={this.textStyle}>{this.props.text}</span>
        </span>
      </span>
    )
  }
}

export default Spinner
