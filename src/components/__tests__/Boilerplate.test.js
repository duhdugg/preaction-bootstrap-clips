/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Boilerplate } from '../Boilerplate.jsx'
import { NavBar } from '../NavBar.jsx'

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

test('Boilerplate jumbotron', () => {
  const result = render(
    <Boilerplate
      jumbotron={
        <div>
          <h1 className='display-4'>Jumbo Header</h1>
        </div>
      }
    />
  )
  expect(result.getByText('Jumbo Header')).toBeInTheDocument()
  expect(result.getByText('Jumbo Header')).toHaveClass('display-4')
  expect(
    result.container.querySelector('.jumbotron > .container')
  ).toBeInTheDocument()
  expect(result.container.querySelector('.jumbotron')).not.toHaveClass(
    'jumbotron-fluid'
  )
  expect(result.container.querySelector('.jumbotron > div')).not.toHaveClass(
    'container-fluid'
  )
})

test('Boilerplate jumbotronPosition', () => {
  const result = render(
    <Boilerplate
      jumbotron={
        <div>
          <h1 className='display-4'>Jumbo Header</h1>
        </div>
      }
      jumbotronPosition='below-header'
    />
  )
  expect(result.getByText('Jumbo Header')).toBeInTheDocument()
  expect(result.getByText('Jumbo Header')).toHaveClass('display-4')
  expect(
    result.container.querySelector('.jumbotron > .container')
  ).toBeInTheDocument()
})

test('Boilerplate navBar', () => {
  const result = render(
    <Boilerplate navBar={<NavBar menu={[]} fixedTo='top' />} />
  )
  expect(result.container.querySelector('.navbar')).toBeInTheDocument()
})

test('Boilerplate noContain: true', () => {
  const result = render(<Boilerplate noContain />)
  expect(result.container.querySelector('main > div')).toBeInTheDocument()
  expect(result.container.querySelector('main > div')).not.toHaveClass(
    'container'
  )
  expect(result.container.querySelector('main > div')).toHaveClass(
    'container-fluid'
  )
})

test('Boilerplate noContain: {jumbotron: true}', () => {
  const result = render(
    <Boilerplate jumbotron={<div>jumbo</div>} noContain={{ jumbotron: true }} />
  )
  expect(result.container.querySelector('main > div')).toBeInTheDocument()
  expect(result.container.querySelector('main > div')).toHaveClass('container')
  expect(result.container.querySelector('main > div')).not.toHaveClass(
    'container-fluid'
  )
  expect(result.container.querySelector('.jumbotron')).toHaveClass(
    'jumbotron-fluid'
  )
})

test('Boilerplate style', () => {
  const result = render(
    <Boilerplate
      jumbotron='test'
      style={{
        header: { backgroundColor: 'red' },
        main: { backgroundColor: 'green' },
        footer: { backgroundColor: 'blue' },
        jumbotron: { backgroundColor: '#ccc' }
      }}
    />
  )
  expect(result.container.querySelector('header')).toHaveStyle({
    backgroundColor: 'red'
  })
  expect(result.container.querySelector('main')).toHaveStyle({
    backgroundColor: 'green'
  })
  expect(result.container.querySelector('footer')).toHaveStyle({
    backgroundColor: 'blue'
  })
  expect(result.container.querySelector('.jumbotron')).toHaveStyle({
    backgroundColor: '#ccc'
  })
})
