import PropTypes from 'prop-types'
import React from 'react'
import { getClassesForTheme } from '../lib/getClassesForTheme.js'

/**
 * > ...add dialogs to your site for lightboxes, user notifications, or completely custom content.
 * > https://getbootstrap.com/docs/4.5/components/modal/
 */
function Modal(props) {
  const close = () => {
    if (props.closeHandler) {
      props.closeHandler()
    }
  }

  const firstRender = React.useRef(true)
  const [opacity, setOpacity] = React.useState(0)
  const transitionDuration = 333

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      let bd = document.createElement('div')
      bd.className = 'modal-backdrop'
      bd.style.opacity = 0
      bd.style.transition = `opacity ${transitionDuration}ms linear`
      setTimeout(() => {
        bd.style.opacity = 0.63
      })
      document.body.appendChild(bd)
      document.body.style.overflow = 'hidden'
      setOpacity(1)
    }
    return function cleanup() {
      let bds = document.getElementsByClassName('modal-backdrop')
      for (let b = 0; b < bds.length; b++) {
        let bd = bds[b]
        bd.style.opacity = 0
        setTimeout(() => {
          document.body.removeChild(bd)
        }, transitionDuration)
      }
      setTimeout(() => {
        document.body.style.overflow = 'scroll'
      }, transitionDuration)
    }
  }, [setOpacity])

  const theme = getClassesForTheme(props.theme).join(' ')
  const headerTheme = getClassesForTheme(props.headerTheme).join(' ')
  const bodyTheme = getClassesForTheme(props.bodyTheme).join(' ')
  const footerTheme = getClassesForTheme(props.footerTheme).join(' ')
  let closeButtonTheme = ['white', 'light', 'warning', 'yellow'].includes(
    props.headerTheme
  )
    ? 'dark'
    : 'light'
  if ([undefined, 'transparent'].includes(props.headerTheme)) {
    closeButtonTheme = [
      'white',
      'light',
      'warning',
      'yellow',
      undefined
    ].includes(props.theme)
      ? 'dark'
      : 'light'
  }

  return (
    <div
      className='modal'
      role='dialog'
      tabIndex='-1'
      style={{
        display: 'block',
        overflowY: 'auto',
        opacity,
        transition: `opacity ${transitionDuration}ms linear`
      }}>
      <div className='modal-dialog modal-lg' role='document'>
        <div className={`modal-content ${theme} border-0`}>
          <div className={`modal-header ${headerTheme}`}>
            <h5 className='modal-title'>{props.title}</h5>
            {!props.hideCloseButton ? (
              <button
                type='button'
                className={`close text-${closeButtonTheme}`}
                onClick={close}
                title={props.closeButtonText}>
                &times;
              </button>
            ) : (
              ''
            )}
          </div>
          <div className={`modal-body ${bodyTheme}`}>{props.children}</div>
          <div className={`modal-footer ${footerTheme}`}>
            {props.footer || ''}
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  bodyTheme: PropTypes.oneOf([
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
  /** sets the close button's `title` attribute */
  closeButtonText: PropTypes.string,
  /** callback that handles the close button being clicked */
  closeHandler: PropTypes.func,
  children: PropTypes.node,
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
  /** set this to true if you want to hide the close button (at the top-right corner) */
  hideCloseButton: PropTypes.bool,
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
  theme: PropTypes.oneOf([
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
    'white'
  ]),
  title: PropTypes.node
}

Modal.defaultProps = {
  closeButtonText: 'Close',
  hideCloseButton: false
}

export { Modal }
