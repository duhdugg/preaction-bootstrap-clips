/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from '../Modal.jsx'

test('Modal basic', () => {
  const result = render(<Modal>Woot</Modal>)
  expect(result.getByText('Woot')).toBeInTheDocument()
  expect(result.getByText('Woot')).toBeVisible()
})

test('Modal closeButtonText', () => {
  const result = render(<Modal closeButtonText='Nope Out' />)
  expect(result.getByTitle('Nope Out')).toBeInTheDocument()
  expect(
    result.container.querySelector('.modal-header button.close')
  ).toBeInTheDocument()
})

test('Modal closeHandler', () => {
  let x = 0
  const func = () => x++
  const result = render(<Modal closeHandler={func} />)
  userEvent.click(result.getByTitle('Close'))
  waitFor(() => expect(x).toBe(1))
})

test('Modal footer', () => {
  const result = render(
    <Modal
      footer={
        <div className='btn-group'>
          <button type='button' className='btn btn-default'>
            Close
          </button>
        </div>
      }
    />
  )
  expect(
    result.container.querySelector(
      '.modal-footer .btn-group button.btn.btn-default'
    )
  ).toBeInTheDocument()
})

test('Modal hideCloseButton', () => {
  const result = render(<Modal hideCloseButton />)
  expect(
    result.container.querySelector('.modal-header button.close')
  ).not.toBeInTheDocument()
})

test('Modal title', () => {
  const result = render(
    <Modal title={<div className='custom-title'>Foobar</div>} />
  )
  expect(result.getByText('Foobar')).toBeInTheDocument()
  expect(result.getByText('Foobar')).toHaveClass('custom-title')
})
