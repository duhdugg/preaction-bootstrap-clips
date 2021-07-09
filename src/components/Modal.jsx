import PropTypes from 'prop-types'
import React from 'react'
import { getGradientClassName } from '../lib/getGradientClassName.js'
import { getThemeClassName } from '../lib/getThemeClassName.js'
import { joinClassNames } from '../lib/joinClassNames.js'

const ssr = typeof window === 'undefined'
let BSModal
if (!ssr) {
  BSModal = require('bootstrap/js/dist/modal.js')
}

const sizes = ['sm', 'lg', 'xl']
const fullscreenOptions = [false, true, 'sm', 'md', 'lg', 'xl', 'xxl']

const darkThemes = [
  'blue',
  'danger',
  'dark',
  'gray',
  'gray-dark',
  'indigo',
  'orange',
  'pink',
  'primary',
  'purple',
  'red',
  'secondary',
  'success'
]

/**
 * > ...add dialogs to your site for lightboxes, user notifications, or completely custom content.
 * > https://getbootstrap.com/docs/5.0/components/modal/
 */
function Modal(props) {
  const size = sizes.includes(props.size) ? `modal-${props.size}` : ''
  const fullscreen = fullscreenOptions.includes(props.fullscreen)
    ? props.fullscreen === true
      ? 'modal-fullscreen'
      : `modal-fullscreen-${props.fullscreen}-down`
    : ''
  const classNames = {
    modal: joinClassNames('pxn-modal', 'modal', 'fade', props.className),
    dialog: joinClassNames('modal-dialog', size, fullscreen),
    header: joinClassNames(
      'modal-header',
      getThemeClassName(props.headerTheme),
      getGradientClassName(props.headerGradient)
    ),
    content: joinClassNames(
      'modal-content',
      'border-0',
      getThemeClassName(props.theme),
      getGradientClassName(props.gradient)
    ),
    body: joinClassNames(
      'modal-body',
      getThemeClassName(props.bodyTheme),
      getGradientClassName(props.bodyGradient)
    ),
    footer: joinClassNames(
      'modal-footer',
      getThemeClassName(props.footerTheme),
      getGradientClassName(props.footerGradient)
    ),
    closeBtn: joinClassNames(
      'btn-close',
      darkThemes.includes(props.headerTheme) || darkThemes.includes(props.theme)
        ? 'btn-close-white'
        : ''
    )
  }

  const thisModal = React.useRef(null)
  const [bsModal, setBsModal] = React.useState(undefined)

  React.useEffect(() => {
    if (thisModal && thisModal.current && !bsModal && !ssr) {
      const m = new BSModal(thisModal.current, {
        backdrop: props.closeOnBackdropClick ? true : 'static',
        keyboard: props.closeOnEscape,
        focus: props.focusOnInit
      })
      thisModal.current.addEventListener('hidden.bs.modal', () => {
        if (props.setShow) {
          props.setShow(false)
        }
      })
      setBsModal(m)
      if (props.show) {
        m.show()
      }
    }
  }, [thisModal, setBsModal, bsModal, props])

  React.useEffect(() => {
    if (props.show && bsModal) {
      bsModal.show()
    } else if (bsModal) {
      bsModal.hide()
    }
  }, [props, bsModal])

  const close = () => {
    if (bsModal) {
      bsModal.hide()
    }
  }

  return (
    <div
      className={classNames.modal}
      role='dialog'
      tabIndex='-1'
      ref={thisModal}>
      <div className={classNames.dialog} role='document'>
        <div className={classNames.content}>
          <div className={classNames.header}>
            <h5 className='modal-title'>{props.title}</h5>
            {!props.hideCloseButton ? (
              <button
                type='button'
                className={classNames.closeBtn}
                onClick={close}
                title={props.closeButtonText}></button>
            ) : (
              ''
            )}
          </div>
          <div className={classNames.body}>{props.children}</div>
          <div className={classNames.footer}>{props.footer || ''}</div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  /** sets a background gradient on the `.modal-body` element */
  bodyGradient: PropTypes.bool,
  bodyTheme: PropTypes.string,
  /** adds to the className of the `.pxn-modal` element */
  className: PropTypes.string,
  /** sets the close button's `title` attribute */
  closeButtonText: PropTypes.string,
  /** closes the modal when the backdrop is clicked */
  closeOnBackdropClick: PropTypes.bool,
  /** closes the modal when escape key is pressed */
  closeOnEscape: PropTypes.bool,
  children: PropTypes.node,
  /** puts the focus on the modal when initialized */
  focusOnInit: PropTypes.bool,
  footer: PropTypes.node,
  /** sets a background gradient on the `.modal-footer` element */
  footerGradient: PropTypes.bool,
  footerTheme: PropTypes.string,
  fullscreen: PropTypes.oneOf(fullscreenOptions),
  gradient: PropTypes.bool,
  /** set this to true if you want to hide the close button (at the top-right corner) */
  hideCloseButton: PropTypes.bool,
  /** sets a background gradient on the `.modal-header` element */
  headerGradient: PropTypes.bool,
  headerTheme: PropTypes.string,
  setShow: PropTypes.func,
  size: PropTypes.oneOf(sizes),
  show: PropTypes.bool,
  /** sets a background gradient on the `.modal-content` element */
  theme: PropTypes.string,
  title: PropTypes.node
}

Modal.defaultProps = {
  className: '',
  closeButtonText: 'Close',
  closeOnBackdropClick: true,
  closeOnEscape: true,
  focusOnInit: true,
  fullscreen: false,
  hideCloseButton: false,
  show: false
}

export { Modal }
