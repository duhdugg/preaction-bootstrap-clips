import PropTypes from 'prop-types'
import React from 'react'
import '../stylesheets/modal.css'

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

  React.useEffect(() => {
    let bd = document.createElement('div')
    bd.className = 'modal-backdrop'
    document.body.appendChild(bd)
    document.body.style.overflow = 'hidden'
    return function cleanup() {
      let bds = document.getElementsByClassName('modal-backdrop')
      for (let b = 0; b < bds.length; b++) {
        let bd = bds[b]
        document.body.removeChild(bd)
      }
      document.body.style.overflow = 'scroll'
    }
  })

  return (
    <div
      className='modal'
      role='dialog'
      tabIndex='-1'
      style={{
        display: 'block',
        overflowY: 'auto'
      }}>
      <div className='modal-dialog modal-lg' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{props.title}</h5>
            {!props.hideCloseButton ? (
              <button
                type='button'
                className='close'
                onClick={close}
                title={props.closeButtonText}>
                &times;
              </button>
            ) : (
              ''
            )}
          </div>
          <div className='modal-body'>{props.children}</div>
          <div className='modal-footer'>{props.footer || ''}</div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  /** sets the close button's `title` attribute */
  closeButtonText: PropTypes.string,
  /** callback that handles the close button being clicked */
  closeHandler: PropTypes.func,
  children: PropTypes.node,
  footer: PropTypes.node,
  /** set this to true if you want to hide the close button (at the top-right corner) */
  hideCloseButton: PropTypes.bool,
  title: PropTypes.node
}

Modal.defaultProps = {
  closeButtonText: 'Close',
  hideCloseButton: false
}

export { Modal }
