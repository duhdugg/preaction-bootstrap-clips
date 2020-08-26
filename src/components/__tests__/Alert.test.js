/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Alert } from '../Alert.jsx'

test('Alert basic', () => {
  const result = render(<Alert>Hello World</Alert>)
  expect(result.container.firstChild).toBeInTheDocument()
  expect(result.container.firstChild).toBeVisible()
  expect(result.container.querySelector('.mb-3')).toBeInTheDocument()
  expect(result.getByText('Hello World')).toBeInTheDocument()
})

test('Alert column', () => {
  const result = render(<Alert column />)
  expect(result.container.querySelector('col'))
})

test('Alert contain', () => {
  const result = render(<Alert contain />)
  expect(result.container.querySelector('.container')).toBeInTheDocument()
})

test('Alert header', () => {
  const result = render(
    <Alert header={<div className='foobar'>Heads Up</div>} />
  )
  expect(result.getByText('Heads Up')).toBeInTheDocument()
  expect(result.getByText('Heads Up')).toBeVisible()
  expect(result.getByText('Heads Up')).toHaveClass('foobar')
})

test('Alert style', () => {
  const result = render(
    <Alert
      style={{ container: { padding: '2.25em' }, alert: { margin: '2.75em' } }}
    />
  )
  expect(result.container.firstChild).toHaveStyle({ padding: '2.25em' })
  expect(result.container.querySelector('.alert')).toHaveStyle({
    margin: '2.75em'
  })
})

test('Alert themes', () => {
  let result = render(<Alert theme='blue' />)
  expect(result.container.querySelector('.alert-primary')).toBeInTheDocument()

  result = render(<Alert theme='primary' />)
  expect(result.container.querySelector('.alert-primary')).toBeInTheDocument()

  result = render(<Alert theme='green' />)
  expect(result.container.querySelector('.alert-success')).toBeInTheDocument()

  result = render(<Alert theme='success' />)
  expect(result.container.querySelector('.alert-success')).toBeInTheDocument()

  result = render(<Alert theme='red' />)
  expect(result.container.querySelector('.alert-danger')).toBeInTheDocument()

  result = render(<Alert theme='error' />)
  expect(result.container.querySelector('.alert-danger')).toBeInTheDocument()

  result = render(<Alert theme='danger' />)
  expect(result.container.querySelector('.alert-danger')).toBeInTheDocument()

  result = render(<Alert theme='yellow' />)
  expect(result.container.querySelector('.alert-warning')).toBeInTheDocument()

  result = render(<Alert theme='orange' />)
  expect(result.container.querySelector('.alert-warning')).toBeInTheDocument()

  result = render(<Alert theme='warning' />)
  expect(result.container.querySelector('.alert-warning')).toBeInTheDocument()

  result = render(<Alert theme='dark' />)
  expect(result.container.querySelector('.alert-dark')).toBeInTheDocument()

  result = render(<Alert theme='secondary' />)
  expect(result.container.querySelector('.alert-secondary')).toBeInTheDocument()

  result = render(<Alert theme='gray' />)
  expect(result.container.querySelector('.alert-secondary')).toBeInTheDocument()

  result = render(<Alert theme='grey' />)
  expect(result.container.querySelector('.alert-secondary')).toBeInTheDocument()

  result = render(<Alert theme='light' />)
  expect(result.container.querySelector('.alert-light')).toBeInTheDocument()

  result = render(<Alert theme='info' />)
  expect(result.container.querySelector('.alert-info')).toBeInTheDocument()
})

test('Alert width', () => {
  let result = render(<Alert column width={1 / 2} />)
  expect(result.container.firstChild).toHaveClass('col-6')

  result = render(<Alert column width={{ md: 1 / 2 }} />)
  expect(result.container.firstChild).toHaveClass('col-md-6')
})
