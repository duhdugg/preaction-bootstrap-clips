import PropTypes from 'prop-types'
import React from 'react'
import { getClassesForTheme } from '../lib/getClassesForTheme.js'

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
    } ${getClassesForTheme(props.jumbotronTheme).join(' ')}`,
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
  const style = Object.assign(
    { jumbotron: {}, header: {}, main: {}, footer: {} },
    JSON.parse(JSON.stringify(props.style))
  )
  if (props.navBar && props.navBar.props.fixedTo === 'top') {
    if (style.header.paddingTop === undefined) {
      style.header.paddingTop = '3.5em'
    }
  }
  if (style.jumbotron.marginBottom === undefined) {
    style.jumbotron.marginBottom = 0
  }
  return (
    <div>
      <div>{props.navBar}</div>
      <header
        style={style.header}
        className={getClassesForTheme(props.headerTheme).join(' ')}>
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
      <main
        style={style.main}
        className={getClassesForTheme(props.mainTheme).join(' ')}>
        <div className={classes.mainContainer}>{props.children}</div>
      </main>
      <footer
        style={style.footer}
        className={getClassesForTheme(props.footerTheme).join(' ')}>
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
  footerTheme: PropTypes.oneOf([
    'blue',
    'dark',
    'gray',
    'grey',
    'green',
    'light',
    'yellow',
    'red',
    'teal',
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'white',
    'transparent'
  ]),
  /** will be rendered inside `<header>` element */
  header: PropTypes.node,
  headerTheme: PropTypes.oneOf([
    'blue',
    'dark',
    'gray',
    'grey',
    'green',
    'light',
    'yellow',
    'red',
    'teal',
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'white',
    'transparent'
  ]),
  /** > Lightweight, flexible component for showcasing hero unit style content.
   * https://getbootstrap.com/docs/4.5/components/jumbotron/
   */
  jumbotron: PropTypes.node,
  jumbotronTheme: PropTypes.oneOf([
    'blue',
    'dark',
    'gray',
    'grey',
    'green',
    'light',
    'yellow',
    'red',
    'teal',
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'white',
    'transparent'
  ]),
  /** controls where the jumbotron appears */
  jumbotronPosition: PropTypes.oneOf(['above-header', 'below-header']),
  mainTheme: PropTypes.oneOf([
    'blue',
    'dark',
    'gray',
    'grey',
    'green',
    'light',
    'yellow',
    'red',
    'teal',
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'white',
    'transparent'
  ]),
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
