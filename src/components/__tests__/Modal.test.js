import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
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
  expect(x).toBe(1)
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

test('Modal theme', () => {
  let result = render(<Modal theme='blue' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-primary'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-light'
  )

  result = render(<Modal theme='dark' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-dark'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-light'
  )

  result = render(<Modal theme='gray' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-light'
  )

  result = render(<Modal theme='grey' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-light'
  )

  result = render(<Modal theme='green' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-success'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-light'
  )

  result = render(<Modal theme='light' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-light'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-dark'
  )

  result = render(<Modal theme='yellow' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-warning'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-dark'
  )

  result = render(<Modal theme='red' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-danger'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-light'
  )

  result = render(<Modal theme='teal' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-info'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-light'
  )

  result = render(<Modal theme='white' />)
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-white'
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'text-dark'
  )
})

test('Modal headerTheme', () => {
  let result = render(<Modal headerTheme='blue' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-primary'
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-light'
  )

  result = render(<Modal headerTheme='dark' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass('bg-dark')
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-light'
  )

  result = render(<Modal headerTheme='gray' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-light'
  )

  result = render(<Modal headerTheme='grey' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-light'
  )

  result = render(<Modal headerTheme='green' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-success'
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-light'
  )

  result = render(<Modal headerTheme='light' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-light'
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-dark'
  )

  result = render(<Modal headerTheme='yellow' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-warning'
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-dark'
  )

  result = render(<Modal headerTheme='red' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-danger'
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-light'
  )

  result = render(<Modal headerTheme='teal' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass('bg-info')
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-light'
  )

  result = render(<Modal headerTheme='white' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-white'
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'text-dark'
  )

  result = render(<Modal headerTheme='transparent' />)
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-transparent'
  )
})

test('Modal bodyTheme', () => {
  let result = render(<Modal bodyTheme='blue' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'bg-primary'
  )
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'text-light'
  )

  result = render(<Modal bodyTheme='dark' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass('bg-dark')
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'text-light'
  )

  result = render(<Modal bodyTheme='gray' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'text-light'
  )

  result = render(<Modal bodyTheme='grey' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'text-light'
  )

  result = render(<Modal bodyTheme='green' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'bg-success'
  )
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'text-light'
  )

  result = render(<Modal bodyTheme='light' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass('bg-light')
  expect(result.container.querySelector('.modal-body')).toHaveClass('text-dark')

  result = render(<Modal bodyTheme='yellow' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'bg-warning'
  )
  expect(result.container.querySelector('.modal-body')).toHaveClass('text-dark')

  result = render(<Modal bodyTheme='red' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass('bg-danger')
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'text-light'
  )

  result = render(<Modal bodyTheme='teal' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass('bg-info')
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'text-light'
  )

  result = render(<Modal bodyTheme='white' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass('bg-white')
  expect(result.container.querySelector('.modal-body')).toHaveClass('text-dark')

  result = render(<Modal bodyTheme='transparent' />)
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'bg-transparent'
  )
})

test('Modal footerTheme', () => {
  let result = render(<Modal footerTheme='blue' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-primary'
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Modal footerTheme='dark' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass('bg-dark')
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Modal footerTheme='gray' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Modal footerTheme='grey' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Modal footerTheme='green' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-success'
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Modal footerTheme='light' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-light'
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-dark'
  )

  result = render(<Modal footerTheme='yellow' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-warning'
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-dark'
  )

  result = render(<Modal footerTheme='red' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-danger'
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Modal footerTheme='teal' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass('bg-info')
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Modal footerTheme='white' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-white'
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'text-dark'
  )

  result = render(<Modal footerTheme='transparent' />)
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-transparent'
  )
})
