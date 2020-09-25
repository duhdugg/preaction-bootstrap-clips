import PropTypes from 'prop-types'
import React from 'react'

/**
 * This provides a quick and easy page layout for your React app.
 * You will need to import Bootstrap CSS separately.
 */
function Boilerplate(props) {
  const classes = {
    jumbotron: `jumbotron ${
      props.noContain === true || (props.noContain && props.noContain.jumbotron)
        ? 'jumbotron-fluid'
        : ''
    }`,
    jumbotronContainer:
      props.noContain === true ||
      (props.noContain && props.noContain.jumbotronContainer)
        ? 'container-fluid'
        : 'container',
    headerContainer:
      props.noContain === true ||
      (props.noContain && props.noContain.headerContainer)
        ? 'container-fluid'
        : 'container',
    footerContainer:
      props.noContain === true ||
      (props.noContain && props.noContain.footerContainer)
        ? 'container-fluid'
        : 'container',
    mainContainer:
      props.noContain === true ||
      (props.noContain && props.noContain.mainContainer)
        ? 'container-fluid'
        : 'container'
  }
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
          <div className={classes.jumbotron} style={style.jumbotron}>
            <div className={classes.jumbotronContainer}>{props.jumbotron}</div>
          </div>
        ) : (
          ''
        )}
        <div className={classes.headerContainer}>
          <div>{props.header}</div>
        </div>
        {props.jumbotron && props.jumbotronPosition === 'below-header' ? (
          <div className={classes.jumbotron} style={style.jumbotron}>
            <div className={classes.jumbotronContainer}>{props.jumbotron}</div>
          </div>
        ) : (
          ''
        )}
      </header>
      <main style={style.main}>
        <div className={classes.mainContainer}>{props.children}</div>
      </main>
      <footer style={style.footer}>
        <div className={classes.footerContainer}>{props.footer}</div>
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
  /** controls whether `-fluid` container classes are used within
   * header, main, footer, and jumbotron.
   * This can be either a boolean value, or an object with the following
   * properties containing boolean values: jumbotron, jumbotronContainer,
   * headerContainer, footerContainer, mainContainer.
   */
  noContain: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /** set the style of jumbotron, header, main, and footer elements separately */
  style: PropTypes.object
}

Boilerplate.defaultProps = {
  jumbotronPosition: 'above-header',
  noContain: false,
  style: {
    jumbotron: {},
    header: {},
    main: {},
    footer: {}
  }
}

export { Boilerplate }
