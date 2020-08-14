import PropTypes from 'prop-types'
import React from 'react'

/**
 * This provides a quick and easy page layout for your React app.
 * You will need to import Bootstrap CSS separately.
 */
class Boilerplate extends React.Component {
  get containerClassName() {
    return this.props.noContain ? '' : 'container'
  }

  get style() {
    let style = {
      jumbotron: {},
      header: {
        marginTop:
          this.props.navBar &&
          this.props.navBar.props.fixedTo === 'top' &&
          this.props.style.marginTop === undefined
            ? '3.5em'
            : undefined
      },
      main: {},
      footer: {}
    }
    if (this.props.style) {
      Object.assign(style, this.props.style)
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

Boilerplate.propTypes = {
  /** children will go inside the `<main>` element */
  children: PropTypes.node,
  /** will be rendered inside `<footer>` element */
  footer: PropTypes.node,
  /** will be rendered inside `<header>` element */
  header: PropTypes.node,
  /** > Lightweight, flexible component for showcasing hero unit style content.
   * https://getbootstrap.com/docs/4.5/components/jumbotron/
   */
  jumbotron: PropTypes.node,
  /** this should be an instance of [`<NavBar>`](#navbar) */
  navBar: PropTypes.element,
  /** do not use the `container` className within the child `<div>` elements of `<main>`, `<header>`, and `<footer>` */
  noContain: PropTypes.bool,
  /** set the style of jumbotron, header, main, and footer elements separately */
  style: PropTypes.object
}

Boilerplate.defaultProps = {
  noContain: false,
  /** set the styles of jumbotron, header, main, and footer separately */
  style: {
    jumbotron: {},
    header: {},
    main: {},
    footer: {}
  }
}

export { Boilerplate }
