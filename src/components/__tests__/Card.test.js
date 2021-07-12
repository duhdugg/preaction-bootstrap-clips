import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Card } from '../Card.jsx'

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

test('Card basic', () => {
  const result = render(<Card>Aloha</Card>)
  expect(result.container.firstChild).toBeInTheDocument()
  expect(result.container.firstChild).toBeVisible()
  expect(result.getByText('Aloha')).toBeInTheDocument()
  expect(result.container.querySelector('.card-header')).not.toBeInTheDocument()
  expect(result.container.querySelector('.card-footer')).not.toBeInTheDocument()
})

test('Card bodyTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Card bodyTheme={theme} />)
    expect(result.container.querySelector('.card-body')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Card bodyGradient', () => {
  const result = render(<Card theme='dark' bodyGradient />)
  expect(result.container.querySelector('.card-body')).toHaveClass(
    'bg-gradient'
  )
})

test('Card className', () => {
  let result = render(<Card className='foobar' />)
  expect(result.container.querySelector('.pxn-card-container')).toHaveClass(
    'foobar'
  )
})

test('Card column', () => {
  let result = render(<Card column />)
  expect(result.container.firstChild).toHaveClass('col-sm-auto')
})

test('Card contain', () => {
  let result = render(<Card contain />)
  expect(result.container.firstChild).toHaveClass('container')
})

test('Card header', () => {
  const result = render(
    <Card header={<h2 className='test-header'>Test Header</h2>}></Card>
  )
  expect(
    result.container.querySelector('.card-header h2.test-header')
  ).toBeInTheDocument()
  expect(result.getByText('Test Header')).toBeInTheDocument()
})

test('Card footer', () => {
  const result = render(<Card footer='foobar' />)
  expect(result.container.querySelector('.card-footer')).toBeInTheDocument()
  expect(result.getByText('foobar')).toHaveClass('card-footer')
})

test('Card footerGradient', () => {
  const result = render(<Card theme='dark' footer='test' footerGradient />)
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'bg-gradient'
  )
})

test('Card footerTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Card footer='test' footerTheme={theme} />)
    expect(result.container.querySelector('.card-footer')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Card header', () => {
  const result = render(
    <Card header={<h4 className='test-header'>Foobar</h4>} />
  )
  expect(result.container.querySelector('.card-header')).toBeInTheDocument()
  expect(result.getByText('Foobar')).toHaveClass('test-header')
})

test('Card headerGradient', () => {
  const result = render(<Card theme='dark' header='test' headerGradient />)
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'bg-gradient'
  )
})

test('Card headerTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Card header='test' headerTheme={theme} />)
    expect(result.container.querySelector('.card-header')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Card theme', () => {
  let result
  for (const theme of themes) {
    result = render(<Card theme={theme} />)
    expect(result.container.querySelector('.card')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Card gradient', () => {
  const result = render(<Card theme='dark' gradient />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-gradient')
})

test('Card width', () => {
  let result = render(<Card column width={{ lg: 3 / 4 }} />)
  expect(result.container.firstChild).toHaveClass('col-lg-9')
})
