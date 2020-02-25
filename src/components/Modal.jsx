import PropTypes from 'prop-types'
import React from 'react'
import '../stylesheets/modal.css'

class Modal extends React.Component {
  render() {
    return (
      <div
        className='modal'
        style={{
          display: 'block',
          overflowY: 'auto'
        }}>
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>{this.props.children}</div>
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
  children: PropTypes.node
}

export default Modal
