/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavBar } from '../NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

test('NavBar basic', () => {
  const result = render(<NavBar menu={[]} />)
  expect(result.container.firstChild).toBeInTheDocument()
  expect(result.container.firstChild).toBeVisible()
  expect(result.container.querySelector('.container')).toBeInTheDocument()
})

test('NavBar brand', async () => {
  let x = 0
  const result = render(
    <NavBar
      menu={[]}
      brand={{
        link: true,
        href: 'about:blank',
        name: 'FooNav',
        onClick: event => {
          event.preventDefault()
          x++
        }
      }}
    />
  )
  expect(result.getByText('FooNav')).toBeInTheDocument()
  userEvent.click(result.getByText('FooNav'))
  await waitFor(() => expect(x).toBe(1))
})

test('NavBar fixedTo: top', async () => {
  const result = render(<NavBar menu={[]} fixedTo='top' />)
  expect(result.container.firstChild).toHaveClass('fixed-top')
})

test('NavBar fixedTo: bottom', async () => {
  const result = render(<NavBar menu={[]} fixedTo='bottom' />)
  expect(result.container.firstChild).toHaveClass('fixed-bottom')
})

test('NavBar menu', () => {
  const result = render(
    <NavBar
      menu={[
        { name: 'Alpha' },
        { name: 'Bravo' },
        { name: 'Charlie' },
        { name: 'Delta' }
      ]}
    />
  )
  expect(result.getAllByText('Alpha').length).toBe(2)
  expect(result.getAllByText('Bravo').length).toBe(2)
  expect(result.getAllByText('Charlie').length).toBe(2)
  expect(result.getAllByText('Delta').length).toBe(2)
})

test('NavBar noContain', () => {
  const result = render(<NavBar menu={[]} noContain />)
  expect(result.container.querySelector('.container')).not.toBeInTheDocument()
})

test('NavBar theme: dark', () => {
  const result = render(<NavBar menu={[]} theme='dark' />)
  expect(result.container.querySelector('.navbar')).toHaveClass('navbar-dark')
})

test('NavBar theme: light', () => {
  const result = render(<NavBar menu={[]} theme='light' />)
  expect(result.container.querySelector('.navbar')).toHaveClass('navbar-light')
})

test('NavBar togglerPosition: left', () => {
  const result = render(<NavBar menu={[]} togglerPosition='left' />)
  expect(
    result.container.querySelector(
      '.navbar .container .navbar-toggler:nth-child(1)'
    )
  ).toBeInTheDocument()
})

test('NavBar togglerPosition: right', () => {
  const result = render(<NavBar menu={[]} togglerPosition='right' />)
  expect(
    result.container.querySelector(
      '.navbar .container .navbar-toggler:nth-child(2)'
    )
  ).toBeInTheDocument()
})

test('NavBar toggleToggler()', async () => {
  const result = render(<NavBar menu={[]} />)
  userEvent.click(result.container.querySelector('.navbar-toggler'))
  await waitFor(() =>
    expect(result.container.querySelector('.navbar-nav')).toBeInTheDocument()
  )
})
