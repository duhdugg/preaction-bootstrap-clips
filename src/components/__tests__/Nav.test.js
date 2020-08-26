/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Nav } from '../Nav.jsx'

test('Nav basic', () => {
  const result = render(<Nav menu={[]} />)
  expect(result.container.firstChild).toBeInTheDocument()
  expect(result.container.firstChild).toBeVisible()
})

test('Nav align', () => {
  let result = render(<Nav menu={[]} align='center' />)
  expect(result.container.firstChild).toHaveClass('justify-content-center')

  result = render(<Nav menu={[]} align='right' />)
  expect(result.container.firstChild).toHaveClass('justify-content-end')

  result = render(<Nav menu={[]} align='vertical' />)
  expect(result.container.firstChild).toHaveClass('flex-column')
})

test('Nav className', () => {
  const result = render(<Nav menu={[]} className={'foo-nav'} />)
  expect(result.container.firstChild).toHaveClass('foo-nav')
})

test('Nav collapsible', () => {
  const result = render(<Nav menu={[]} collapsible />)
  expect(result.container.firstChild).toHaveClass('flex-column')
  expect(result.container.firstChild).toHaveClass('flex-md-row')
})

test('Nav fill', () => {
  const result = render(<Nav menu={[]} fill />)
  expect(result.container.firstChild).toHaveClass('nav-fill')
})

test('Nav justify', () => {
  const result = render(<Nav menu={[]} justify />)
  expect(result.container.firstChild).toHaveClass('nav-justified')
})

test('Nav menu', () => {
  let result = render(
    <Nav
      menu={[
        { name: 'Alpha' },
        { name: 'Bravo' },
        { name: 'Charlie' },
        { name: 'Delta' }
      ]}
    />
  )
  expect(result.getByText('Alpha')).toBeInTheDocument()
  expect(result.getByText('Bravo')).toBeInTheDocument()
  expect(result.getByText('Charlie')).toBeInTheDocument()
  expect(result.getByText('Delta')).toBeInTheDocument()
})

test('Nav type: pills', () => {
  const result = render(<Nav menu={[]} type='pills' />)
  expect(result.container.firstChild).toHaveClass('nav-pills')
})

test('Nav type: tabs', () => {
  const result = render(<Nav menu={[]} type='tabs' />)
  expect(result.container.firstChild).toHaveClass('nav-tabs')
})
