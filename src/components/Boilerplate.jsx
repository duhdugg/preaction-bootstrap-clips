import React from 'react'

class BasicBoilerplate extends React.Component {
  get containerClassName() {
    return this.props.noContain ? '' : 'container'
  }

  get style() {
    let style = {
      jumbotron: {},
      header: {},
      main: {},
      footer: {
        marginTop: '1em'
      }
    }
    if (this.props.style) {
      Object.assign(style, this.props.style)
    }
    if (this.props.navBar) {
      // the header will need extra space if the navBar is fixed to the top
      if (this.props.navBar.props.fixedTo === 'top') {
        style.header.marginTop = '3.5em'
      }
    }
    return style
  }

  render() {
    return (
      <div>
        <div>{this.props.navBar}</div>
        <header style={this.style.header}>
          {this.props.jumbotron ? (
            <div className='jumbotron' style={this.style.jumbotron}>
              <div className={this.containerClassName}>
                {this.props.jumbotron}
              </div>
            </div>
          ) : (
            ''
          )}
          <div className={this.containerClassName}>
            <div>{this.props.header}</div>
          </div>
        </header>
        <main style={this.style.main}>
          <div className={this.containerClassName}>{this.props.children}</div>
        </main>
        <footer style={this.style.footer}>
          <div className={this.containerClassName}>{this.props.footer}</div>
        </footer>
      </div>
    )
  }
}

export default BasicBoilerplate
