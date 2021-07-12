import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Boilerplate } from '../Boilerplate.jsx'
import { NavBar } from '../NavBar.jsx'

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

test('Boilerplate basic', () => {
  const result = render(<Boilerplate>Greetings</Boilerplate>)
  expect(result.container.firstChild).toBeInTheDocument()
  expect(result.container.firstChild).toBeVisible()
  expect(result.container.querySelector('.jumbotron')).not.toBeInTheDocument()
  expect(result.container.querySelector('main > div')).toHaveClass('container')
  expect(result.container.querySelector('header > div')).toHaveClass(
    'container'
  )
  expect(result.container.querySelector('footer > div')).toHaveClass(
    'container'
  )
  expect(result.container.querySelector('main > div')).not.toHaveClass(
    'container-fluid'
  )
  expect(result.container.querySelector('header > div')).not.toHaveClass(
    'container-fluid'
  )
  expect(result.container.querySelector('footer > div')).not.toHaveClass(
    'container-fluid'
  )
})

test('Boilerplate footer', () => {
  const text = 'Copyright (c) 2020 Doug Elkin. All rights reserved.'
  const result = render(
    <Boilerplate footer={<div className='copyright'>{text}</div>} />
  )
  expect(result.getByText(text)).toBeInTheDocument()
  expect(result.getByText(text)).toHaveClass('copyright')
})

test('Boilerplate header', () => {
  const result = render(
    <Boilerplate header={<div className='header-text'>Foo Bar 2020</div>} />
  )
  expect(result.getByText('Foo Bar 2020')).toBeInTheDocument()
  expect(result.getByText('Foo Bar 2020')).toHaveClass('header-text')
})

test('Boilerplate hero', () => {
  const result = render(
    <Boilerplate
      hero={
        <div>
          <h1 className='display-4'>Hero Header</h1>
        </div>
      }
    />
  )
  expect(result.getByText('Hero Header')).toBeInTheDocument()
  expect(result.getByText('Hero Header')).toHaveClass('display-4')
  expect(
    result.container.querySelector('.pxn-hero > .container')
  ).toBeInTheDocument()
  expect(result.container.querySelector('.pxn-hero > div')).not.toHaveClass(
    'container-fluid'
  )
})

test('Boilerplate heroGradient', () => {
  const result = render(
    <Boilerplate
      hero={
        <div>
          <h1 className='display-4'>Hero Header</h1>
        </div>
      }
      heroGradient
    />
  )
  expect(result.container.querySelector('.pxn-hero')).toHaveClass('bg-gradient')
})

test('Boilerplate heroPosition', () => {
  const result = render(
    <Boilerplate
      hero={
        <div>
          <h1 className='display-4'>Jumbo Header</h1>
        </div>
      }
      heroPosition='below-header'
    />
  )
  expect(result.getByText('Jumbo Header')).toBeInTheDocument()
  expect(result.getByText('Jumbo Header')).toHaveClass('display-4')
  expect(
    result.container.querySelector('.pxn-hero > .container')
  ).toBeInTheDocument()
})

test('Boilerplate navBar', () => {
  const result = render(
    <Boilerplate navBar={<NavBar menu={[]} fixedTo='top' />} />
  )
  expect(result.container.querySelector('.navbar')).toBeInTheDocument()
})

test('Boilerplate fluid: true', () => {
  const result = render(<Boilerplate fluid />)
  expect(result.container.querySelector('main > div')).toBeInTheDocument()
  expect(result.container.querySelector('main > div')).not.toHaveClass(
    'container'
  )
  expect(result.container.querySelector('main > div')).toHaveClass(
    'container-fluid'
  )
})

test('Boilerplate fluid: {heroContainer: true}', () => {
  const result = render(
    <Boilerplate hero={<div>hero</div>} fluid={{ heroContainer: true }} />
  )
  expect(result.container.querySelector('main > div')).toBeInTheDocument()
  expect(result.container.querySelector('main > div')).toHaveClass('container')
  expect(result.container.querySelector('main > div')).not.toHaveClass(
    'container-fluid'
  )
  expect(result.container.querySelector('.pxn-hero > div')).toHaveClass(
    'container-fluid'
  )
})

test('Boilerplate headerGradient', () => {
  const result = render(
    <Boilerplate header={<div>header</div>} headerGradient />
  )
  expect(result.container.querySelector('header')).toHaveClass('bg-gradient')
})

test('Boilerplate headerTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Boilerplate header='test' headerTheme={theme} />)
    expect(result.container.querySelector('header')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Boilerplate footerGradient', () => {
  const result = render(
    <Boilerplate footer={<div>footer</div>} footerGradient />
  )
  expect(result.container.querySelector('footer')).toHaveClass('bg-gradient')
})

test('Boilerplate footerTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Boilerplate footer='test' footerTheme={theme} />)
    expect(result.container.querySelector('footer')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Boilerplate heroTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Boilerplate hero='test' heroTheme={theme} />)
    expect(result.container.querySelector('.pxn-hero')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Boilerplate mainTheme', () => {
  let result
  for (const theme of themes) {
    result = render(<Boilerplate mainTheme={theme} />)
    expect(result.container.querySelector('main')).toHaveClass(
      `pxn-theme-${theme}`
    )
  }
})

test('Boilerplate mainGradient', () => {
  const result = render(<Boilerplate mainGradient />)
  expect(result.container.querySelector('main')).toHaveClass('bg-gradient')
})
