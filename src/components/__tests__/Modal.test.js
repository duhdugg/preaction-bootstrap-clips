import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Modal } from '../Modal.jsx'

const mock = () => {}
const themes = [
  'blue',
  'cyan',
  'danger',
  'dark',
  'gray',
  'gray-dark',
  'green',
  'indigo',
  'info',
  'light',
  'orange',
  'pink',
  'primary',
  'purple',
  'red',
  'secondary',
  'success',
  'teal',
  'transparent',
  'warning',
  'white',
  'yellow'
]

test('Modal basic', () => {
  const result = render(
    <Modal show setShow={mock}>
      Woot
    </Modal>
  )
  expect(result.getByText('Woot')).toBeInTheDocument()
  expect(result.getByText('Woot')).toBeVisible()
})

test('Modal closeButtonText', () => {
  const result = render(
    <Modal show setShow={mock} closeButtonText='Nope Out' />
  )
  expect(result.getByTitle('Nope Out')).toBeInTheDocument()
  expect(
    result.container.querySelector('.modal-header button.btn-close')
  ).toBeInTheDocument()
})

test('Modal footer', () => {
  const result = render(
    <Modal
      show
      setShow={mock}
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

test('Modal fullscreen', () => {
  const result = render(
    <Modal show setShow={mock} fullscreen>
      Woot
    </Modal>
  )
  expect(result.container.querySelector('.modal-dialog')).toHaveClass(
    'modal-fullscreen'
  )
})

test('Modal hideCloseButton', () => {
  const result = render(<Modal show setShow={mock} hideCloseButton />)
  expect(
    result.container.querySelector('.modal-header button.close')
  ).not.toBeInTheDocument()
})

test('Modal size', () => {
  const result = render(
    <Modal show setShow={mock} size='lg'>
      Woot
    </Modal>
  )
  expect(result.container.querySelector('.modal-dialog')).toHaveClass(
    'modal-lg'
  )
})

test('Modal title', () => {
  const result = render(
    <Modal
      show
      setShow={mock}
      title={<div className='custom-title'>Foobar</div>}
    />
  )
  expect(result.getByText('Foobar')).toBeInTheDocument()
  expect(result.getByText('Foobar')).toHaveClass('custom-title')
})

test('Modal theme', () => {
  let result
  for (const theme of themes) {
    result = render(<Modal show setShow={mock} theme={theme} />)
    expect(result.container.querySelector('.modal-content')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Modal gradient', () => {
  const result = render(
    <Modal show setShow={mock} gradient>
      Woot
    </Modal>
  )
  expect(result.container.querySelector('.modal-content')).toHaveClass(
    'bg-gradient'
  )
})

test('Modal headerGradient', () => {
  const result = render(
    <Modal show setShow={mock} headerGradient header='test'>
      Woot
    </Modal>
  )
  expect(result.container.querySelector('.modal-header')).toHaveClass(
    'bg-gradient'
  )
})

test('Modal headerTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Modal show setShow={mock} headerTheme={theme} />)
    expect(result.container.querySelector('.modal-header')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Modal bodyTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Modal show setShow={mock} bodyTheme={theme} />)
    expect(result.container.querySelector('.modal-body')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Modal bodyGradient', () => {
  const result = render(
    <Modal show setShow={mock} bodyGradient>
      Woot
    </Modal>
  )
  expect(result.container.querySelector('.modal-body')).toHaveClass(
    'bg-gradient'
  )
})

test('Modal footerGradient', () => {
  const result = render(
    <Modal show setShow={mock} footerGradient footer='test'>
      Woot
    </Modal>
  )
  expect(result.container.querySelector('.modal-footer')).toHaveClass(
    'bg-gradient'
  )
})

test('Modal footerTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Modal show setShow={mock} footerTheme={theme} />)
    expect(result.container.querySelector('.modal-footer')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})
