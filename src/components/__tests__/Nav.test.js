/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
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
  let value = ''
  const result = render(
    <Nav
      menu={[
        {
          active: true,
          className: 'nav-alpha',
          name: 'Alpha',
          onClick: e => {
            e.preventDefault()
            value = 'alpha'
          }
        },
        { name: 'Bravo' },
        { name: 'Charlie', className: 'nav-charlie', disabled: true },
        {
          className: 'nav-delta',
          name: 'Delta',
          subMenu: [
            {
              className: 'nav-delta-i',
              name: 'Delta I',
              onClick: e => {
                e.preventDefault()
                value = 'delta-i'
              }
            }
          ]
        }
      ]}
    />
  )
  expect(result.getByText('Alpha')).toBeInTheDocument()
  expect(result.getByText('Bravo')).toBeInTheDocument()
  expect(result.getByText('Charlie')).toBeInTheDocument()
  expect(result.getByText('Delta')).toBeInTheDocument()
  expect(
    result.container.querySelector('.nav-alpha .active')
  ).toBeInTheDocument()
  expect(
    result.container.querySelector('.nav-charlie .disabled')
  ).toBeInTheDocument()
  expect(result.container.querySelector('.nav-delta')).toBeInTheDocument()
  expect(result.container.querySelector('.nav-delta')).toBeInTheDocument()
  expect(result.container.querySelector('.nav-delta-i')).toBeInTheDocument()
  userEvent.click(result.getByText('Alpha'))
  expect(value).toBe('alpha')
  userEvent.click(result.getByText('Delta I'))
  expect(value).toBe('delta-i')
})

test('Nav type: pills', () => {
  const result = render(<Nav menu={[]} type='pills' />)
  expect(result.container.firstChild).toHaveClass('nav-pills')
})

test('Nav type: tabs', () => {
  const result = render(<Nav menu={[]} type='tabs' />)
  expect(result.container.firstChild).toHaveClass('nav-tabs')
})
