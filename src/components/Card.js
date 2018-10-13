import React from 'react'

class Card extends React.Component {
  get className () {
    let d = {
      card: '',
      header: '',
      body: ''
    }
    if (this.props.className) {
      Object.assign(d, this.props.className)
    }
    return d
  }

  get bodyTheme () {
    return this.getTheme(this.props.bodyTheme)
  }

  get cardTheme () {
    return this.getTheme(this.props.theme)
  }

  get headerTheme () {
    return this.getTheme(this.props.headerTheme)
  }

  getTheme (name) {
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
        theme = 'bg-secondary text-dark'
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

  get style () {
    let style = {
      card: {},
      header: {},
      body: {}
    }
    if (this.props.style) {
      Object.assign(style, this.props.style)
    }
    if (this.props.headerBgColor) {
      style.header.backgroundColor = this.props.headerBgColor
    }
    if (this.props.headerFontColor) {
      style.header.color = this.props.headerFontColor
    }
    return style
  }

  render () {
    return (
      <div className={`card ${this.cardTheme} ${this.className.card}`} style={this.style.card} >
        {this.props.header
          ? <div className={`card-header ${this.headerTheme} ${this.className.header}`} style={this.style.header}>{this.props.header}</div>
          : ''}
        <div className={`card-body ${this.bodyTheme} ${this.className.body}`} style={this.style.body}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Card
