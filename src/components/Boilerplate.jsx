import PropTypes from 'prop-types'
import React from 'react'

/**
 * This provides a quick and easy page layout for your React app.
 * You will need to import Bootstrap CSS separately.
 */
function Boilerplate(props) {
  const containerClassName = props.noContain ? '' : 'container'
  const style = {
    jumbotron: {},
    header: {
      marginTop:
        props.navBar &&
        props.navBar.props.fixedTo === 'top' &&
        props.style.header &&
        props.style.header.marginTop === undefined
          ? '3.5em'
          : undefined
    },
    main: {},
    footer: {}
  }
  Object.assign(style, props.style)
  return (
    <div>
      <div>{props.navBar}</div>
      <header style={style.header}>
        {props.jumbotron && props.jumbotronPosition === 'above-header' ? (
          <div className='jumbotron' style={style.jumbotron}>
            <div className={containerClassName}>{props.jumbotron}</div>
          </div>
        ) : (
          ''
        )}
        <div className={containerClassName}>
          <div>{props.header}</div>
        </div>
        {props.jumbotron && props.jumbotronPosition === 'below-header' ? (
          <div className='jumbotron' style={style.jumbotron}>
            <div className={containerClassName}>{props.jumbotron}</div>
          </div>
        ) : (
          ''
        )}
      </header>
      <main style={style.main}>
        <div className={containerClassName}>{props.children}</div>
      </main>
      <footer style={style.footer}>
        <div className={containerClassName}>{props.footer}</div>
      </footer>
    </div>
  )
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
  /** controls where the jumbotron appears */
  jumbotronPosition: PropTypes.oneOf(['above-header', 'below-header']),
  /** this should be an instance of [`<NavBar>`](#navbar) */
  navBar: PropTypes.element,
  /** do not use the `container` className within the child `<div>` elements of `<main>`, `<header>`, and `<footer>` */
  noContain: PropTypes.bool,
  /** set the style of jumbotron, header, main, and footer elements separately */
  style: PropTypes.object
}

Boilerplate.defaultProps = {
  jumbotronPosition: 'above-header',
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
