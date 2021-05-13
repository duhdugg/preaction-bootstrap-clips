import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Spinner } from '../Spinner.jsx'

test('Spinner basic', () => {
  const result = render(<Spinner />)
  expect(result.container.firstChild).toBeInTheDocument()
  expect(result.container.firstChild).toBeVisible()
})

test('Spinner children', () => {
  const result = render(
    <Spinner>
      <span className='test-foo'>hold up</span>
    </Spinner>
  )
  expect(result.getByText('hold up')).toBeInTheDocument()
  expect(result.getByText('hold up')).toHaveClass('test-foo')
})

test('Spinner flexDirection: column', () => {
  const result = render(<Spinner flexDirection='column'>hold up</Spinner>)
  expect(result.container.querySelector('.pxn-spinner-container')).toHaveStyle({
    flexDirection: 'column'
  })
})

test('Spinner flexDirection: row', () => {
  const result = render(<Spinner flexDirection='row'>hold up</Spinner>)
  expect(result.container.querySelector('.pxn-spinner-container')).toHaveStyle({
    flexDirection: 'row'
  })
})

test('Spinner fontSize', () => {
  const result = render(<Spinner fontSize='2'>hold up</Spinner>)
  expect(result.container.querySelector('.spinner-children')).toHaveStyle({
    fontSize: '2rem'
  })
})

test('Spinner size', () => {
  const result = render(<Spinner size='3' />)
  expect(result.getByRole('status')).toHaveStyle({
    width: '3rem',
    height: '3rem'
  })
})

test('Spinner type: border', () => {
  const result = render(<Spinner type='border' />)
  expect(result.getByRole('status')).toHaveClass('spinner-border')
})

test('Spinner type: grow', () => {
  const result = render(<Spinner type='grow' />)
  expect(result.getByRole('status')).toHaveClass('spinner-grow')
})
