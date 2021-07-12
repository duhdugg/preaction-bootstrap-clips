import PropTypes from 'prop-types'
import React from 'react'
import { getGradientClassName } from '../lib/getGradientClassName.js'
import { getThemeClassName } from '../lib/getThemeClassName.js'
import { joinClassNames } from '../lib/joinClassNames.js'
import '../style/preaction.scss'

/**
 * This provides a quick and easy page layout for your React app.
 * You will need to import Bootstrap CSS separately.
 */
function Boilerplate(props) {
  const classNames = {
    boilerplate: joinClassNames(
      'pxn-boilerplate',
      props.navBar && props.navBar.props && props.navBar.props.fixedTo === 'top'
        ? 'pxn-has-topfixed-navbar'
        : ''
    ),
    hero: joinClassNames(
      'pxn-hero',
      getThemeClassName(props.heroTheme),
      getGradientClassName(props.heroGradient)
    ),
    header: joinClassNames(
      getThemeClassName(props.headerTheme),
      getGradientClassName(props.headerGradient)
    ),
    main: joinClassNames(
      getThemeClassName(props.mainTheme),
      getGradientClassName(props.mainGradient)
    ),
    footer: joinClassNames(
      getThemeClassName(props.footerTheme),
      getGradientClassName(props.footerGradient)
    ),
    heroContainer:
      props.fluid === true || (props.fluid && props.fluid.heroContainer)
        ? 'container-fluid'
        : 'container',
    headerContainer:
      props.fluid === true || (props.fluid && props.fluid.headerContainer)
        ? 'container-fluid'
        : 'container',
    footerContainer:
      props.fluid === true || (props.fluid && props.fluid.footerContainer)
        ? 'container-fluid'
        : 'container',
    mainContainer:
      props.fluid === true || (props.fluid && props.fluid.mainContainer)
        ? 'container-fluid'
        : 'container'
  }
  return (
    <div className={classNames.boilerplate}>
      <div className='pxn-navbar-container'>{props.navBar}</div>
      <header className={classNames.header}>
        {props.hero && props.heroPosition === 'above-header' ? (
          <div className={classNames.hero}>
            <div className={classNames.heroContainer}>{props.hero}</div>
          </div>
        ) : (
          ''
        )}
        <div className={classNames.headerContainer}>
          <div>{props.header}</div>
        </div>
        {props.hero && props.heroPosition === 'below-header' ? (
          <div className={classNames.hero}>
            <div className={classNames.heroContainer}>{props.hero}</div>
          </div>
        ) : (
          ''
        )}
      </header>
      <main className={classNames.main}>
        <div className={classNames.mainContainer}>{props.children}</div>
      </main>
      <footer className={classNames.footer}>
        <div className={classNames.footerContainer}>{props.footer}</div>
      </footer>
    </div>
  )
}

Boilerplate.propTypes = {
  /** children will go inside the `<main>` element */
  children: PropTypes.node,
  /** will be rendered inside `<footer>` element */
  footer: PropTypes.node,
  /** sets a `pxn-theme-` class on the footer element */
  footerTheme: PropTypes.string,
  /** sets a background gradient on the footer element */
  footerGradient: PropTypes.bool,
  /** will be rendered inside `<header>` element */
  header: PropTypes.node,
  /** sets a `pxn-theme-` class on the header element */
  headerTheme: PropTypes.string,
  /** sets a background gradient on the header element */
  headerGradient: PropTypes.bool,
  /** > Lightweight, flexible component for showcasing hero unit style content. */
  hero: PropTypes.node,
  /** sets a background gradient on the hero element */
  heroGradient: PropTypes.bool,
  /** sets a `pxn-theme-` class on the hero element */
  heroTheme: PropTypes.string,
  /** controls where the hero appears */
  heroPosition: PropTypes.oneOf(['above-header', 'below-header']),
  /** sets a background gradient on the main element */
  mainGradient: PropTypes.bool,
  /** sets a `pxn-theme-` class on the main element */
  mainTheme: PropTypes.string,
  /** this should be an instance of [`<NavBar>`](#navbar) */
  navBar: PropTypes.element,
  /** controls whether `-fluid` container classNames are used within
   * header, main, footer, and hero.
   * This can be either a boolean value, or an object with the following
   * properties containing boolean values: heroContainer,
   * headerContainer, footerContainer, mainContainer.
   */
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
}

Boilerplate.defaultProps = {
  heroPosition: 'above-header',
  fluid: false
}

export { Boilerplate }
