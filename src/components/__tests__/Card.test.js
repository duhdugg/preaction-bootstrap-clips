/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Card } from '../Card.jsx'

test('Card basic', () => {
  const result = render(<Card>Aloha</Card>)
  expect(result.container.firstChild).toBeInTheDocument()
  expect(result.container.firstChild).toBeVisible()
  expect(result.getByText('Aloha')).toBeInTheDocument()
  expect(result.container.querySelector('.card-header')).not.toBeInTheDocument()
  expect(result.container.querySelector('.card-footer')).not.toBeInTheDocument()
})

test('Card bodyTheme', () => {
  let result = render(<Card bodyTheme='blue' />)
  expect(result.container.querySelector('.card-body')).toHaveClass('bg-primary')
  expect(result.container.querySelector('.card-body')).toHaveClass('text-light')

  result = render(<Card bodyTheme='dark' />)
  expect(result.container.querySelector('.card-body')).toHaveClass('bg-dark')
  expect(result.container.querySelector('.card-body')).toHaveClass('text-light')

  result = render(<Card bodyTheme='gray' />)
  expect(result.container.querySelector('.card-body')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.card-body')).toHaveClass('text-light')

  result = render(<Card bodyTheme='grey' />)
  expect(result.container.querySelector('.card-body')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.card-body')).toHaveClass('text-light')

  result = render(<Card bodyTheme='green' />)
  expect(result.container.querySelector('.card-body')).toHaveClass('bg-success')
  expect(result.container.querySelector('.card-body')).toHaveClass('text-light')

  result = render(<Card bodyTheme='light' />)
  expect(result.container.querySelector('.card-body')).toHaveClass('bg-light')
  expect(result.container.querySelector('.card-body')).toHaveClass('text-dark')

  result = render(<Card bodyTheme='yellow' />)
  expect(result.container.querySelector('.card-body')).toHaveClass('bg-warning')
  expect(result.container.querySelector('.card-body')).toHaveClass('text-dark')

  result = render(<Card bodyTheme='red' />)
  expect(result.container.querySelector('.card-body')).toHaveClass('bg-danger')
  expect(result.container.querySelector('.card-body')).toHaveClass('text-light')

  result = render(<Card bodyTheme='teal' />)
  expect(result.container.querySelector('.card-body')).toHaveClass('bg-info')
  expect(result.container.querySelector('.card-body')).toHaveClass('text-light')
})

test('Card className', () => {
  let result = render(<Card className={{ card: 'foobar' }} />)
  expect(result.container.querySelector('.card')).toHaveClass('foobar')

  result = render(<Card className={{ header: 'foobar' }} header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass('foobar')

  result = render(<Card className={{ footer: 'foobar' }} footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass('foobar')
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

test('Card footerBgColor', () => {
  const result = render(<Card footer='foobar' footerBgColor='black' />)
  expect(result.container.querySelector('.card-footer')).toHaveStyle({
    backgroundColor: 'black'
  })
})

test('Card footerFontColor', () => {
  const result = render(<Card footer='foobar' footerFontColor='red' />)
  expect(result.container.querySelector('.card-footer')).toHaveStyle({
    color: 'red'
  })
})

test('Card footerTheme', () => {
  let result = render(<Card footerTheme='blue' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'bg-primary'
  )
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Card footerTheme='dark' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass('bg-dark')
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Card footerTheme='gray' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Card footerTheme='grey' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Card footerTheme='green' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'bg-success'
  )
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Card footerTheme='light' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass('bg-light')
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-dark'
  )

  result = render(<Card footerTheme='yellow' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'bg-warning'
  )
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-dark'
  )

  result = render(<Card footerTheme='red' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'bg-danger'
  )
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-light'
  )

  result = render(<Card footerTheme='teal' footer='test' />)
  expect(result.container.querySelector('.card-footer')).toHaveClass('bg-info')
  expect(result.container.querySelector('.card-footer')).toHaveClass(
    'text-light'
  )
})

test('Card header', () => {
  const result = render(
    <Card header={<h4 className='test-header'>Foobar</h4>} />
  )
  expect(result.container.querySelector('.card-header')).toBeInTheDocument()
  expect(result.getByText('Foobar')).toHaveClass('test-header')
})

test('Card headerBgColor', () => {
  const result = render(<Card header='foobar' headerBgColor='black' />)
  expect(result.container.querySelector('.card-header')).toHaveStyle({
    backgroundColor: 'black'
  })
})

test('Card headerFontColor', () => {
  const result = render(<Card header='foobar' headerFontColor='red' />)
  expect(result.container.querySelector('.card-header')).toHaveStyle({
    color: 'red'
  })
})

test('Card headerTheme', () => {
  let result = render(<Card headerTheme='blue' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'bg-primary'
  )
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-light'
  )

  result = render(<Card headerTheme='dark' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass('bg-dark')
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-light'
  )

  result = render(<Card headerTheme='gray' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-light'
  )

  result = render(<Card headerTheme='grey' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-light'
  )

  result = render(<Card headerTheme='green' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'bg-success'
  )
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-light'
  )

  result = render(<Card headerTheme='light' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass('bg-light')
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-dark'
  )

  result = render(<Card headerTheme='yellow' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'bg-warning'
  )
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-dark'
  )

  result = render(<Card headerTheme='red' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'bg-danger'
  )
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-light'
  )

  result = render(<Card headerTheme='teal' header='test' />)
  expect(result.container.querySelector('.card-header')).toHaveClass('bg-info')
  expect(result.container.querySelector('.card-header')).toHaveClass(
    'text-light'
  )
})

test('Card theme', () => {
  let result = render(<Card theme='blue' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-primary')
  expect(result.container.querySelector('.card')).toHaveClass('text-light')

  result = render(<Card theme='dark' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-dark')
  expect(result.container.querySelector('.card')).toHaveClass('text-light')

  result = render(<Card theme='gray' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-secondary')
  expect(result.container.querySelector('.card')).toHaveClass('text-light')

  result = render(<Card theme='grey' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-secondary')
  expect(result.container.querySelector('.card')).toHaveClass('text-light')

  result = render(<Card theme='green' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-success')
  expect(result.container.querySelector('.card')).toHaveClass('text-light')

  result = render(<Card theme='light' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-light')
  expect(result.container.querySelector('.card')).toHaveClass('text-dark')

  result = render(<Card theme='yellow' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-warning')
  expect(result.container.querySelector('.card')).toHaveClass('text-dark')

  result = render(<Card theme='red' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-danger')
  expect(result.container.querySelector('.card')).toHaveClass('text-light')

  result = render(<Card theme='teal' />)
  expect(result.container.querySelector('.card')).toHaveClass('bg-info')
  expect(result.container.querySelector('.card')).toHaveClass('text-light')
})

test('Card width', () => {
  let result = render(<Card column width={{ lg: 3 / 4 }} />)
  expect(result.container.firstChild).toHaveClass('col-lg-9')
})
