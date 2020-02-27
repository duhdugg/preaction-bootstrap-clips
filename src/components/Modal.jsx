import PropTypes from 'prop-types'
import React from 'react'
import '../stylesheets/modal.css'
import { MdClose } from 'react-icons/md'

class Modal extends React.Component {
  close() {
    if (this.props.closeHandler) {
      this.props.closeHandler()
    }
  }

  get closeButtonText() {
    return this.props.closeButtonText ? this.props.closeButtonText : 'Close'
  }

  get show() {
    return {
      closeButton: !this.props.hideCloseButton
    }
  }

  render() {
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
              <h5 className='modal-title'>{this.props.title}</h5>
              {this.show.closeButton ? (
                <button
                  type='button'
                  className='close'
                  onClick={this.close.bind(this)}
                  title={this.closeButtonText}>
                  <MdClose />
                </button>
              ) : (
                ''
              )}
            </div>
            <div className='modal-body'>{this.props.children}</div>
            <div className='modal-footer'>{this.props.footer || ''}</div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let bd = document.createElement('div')
    bd.className = 'modal-backdrop'
    document.body.appendChild(bd)
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    let bds = document.getElementsByClassName('modal-backdrop')
    for (let b = 0; b < bds.length; b++) {
      let bd = bds[b]
      document.body.removeChild(bd)
    }
    document.body.style.overflow = 'scroll'
  }
}

Modal.propTypes = {
  closeButtonText: PropTypes.string,
  closeHandler: PropTypes.func,
  children: PropTypes.node,
  footer: PropTypes.node,
  hideCloseButton: PropTypes.bool,
  title: PropTypes.node
}

export default Modal
