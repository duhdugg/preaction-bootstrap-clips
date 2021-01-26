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

test('Boilerplate headerTheme', () => {
  let result = render(<Boilerplate header='test' headerTheme='blue' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-primary')
  expect(result.container.querySelector('header')).toHaveClass('text-light')

  result = render(<Boilerplate header='test' headerTheme='dark' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-dark')
  expect(result.container.querySelector('header')).toHaveClass('text-light')

  result = render(<Boilerplate header='test' headerTheme='gray' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-secondary')
  expect(result.container.querySelector('header')).toHaveClass('text-light')

  result = render(<Boilerplate header='test' headerTheme='grey' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-secondary')
  expect(result.container.querySelector('header')).toHaveClass('text-light')

  result = render(<Boilerplate header='test' headerTheme='green' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-success')
  expect(result.container.querySelector('header')).toHaveClass('text-light')

  result = render(<Boilerplate header='test' headerTheme='light' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-light')
  expect(result.container.querySelector('header')).toHaveClass('text-dark')

  result = render(<Boilerplate header='test' headerTheme='yellow' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-warning')
  expect(result.container.querySelector('header')).toHaveClass('text-dark')

  result = render(<Boilerplate header='test' headerTheme='red' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-danger')
  expect(result.container.querySelector('header')).toHaveClass('text-light')

  result = render(<Boilerplate header='test' headerTheme='teal' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-info')
  expect(result.container.querySelector('header')).toHaveClass('text-light')

  result = render(<Boilerplate header='test' headerTheme='white' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-white')
  expect(result.container.querySelector('header')).toHaveClass('text-dark')

  result = render(<Boilerplate header='test' headerTheme='transparent' />)
  expect(result.container.querySelector('header')).toHaveClass('bg-transparent')
})

test('Boilerplate footerTheme', () => {
  let result = render(<Boilerplate footer='test' footerTheme='blue' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-primary')
  expect(result.container.querySelector('footer')).toHaveClass('text-light')

  result = render(<Boilerplate footer='test' footerTheme='dark' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-dark')
  expect(result.container.querySelector('footer')).toHaveClass('text-light')

  result = render(<Boilerplate footer='test' footerTheme='gray' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-secondary')
  expect(result.container.querySelector('footer')).toHaveClass('text-light')

  result = render(<Boilerplate footer='test' footerTheme='grey' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-secondary')
  expect(result.container.querySelector('footer')).toHaveClass('text-light')

  result = render(<Boilerplate footer='test' footerTheme='green' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-success')
  expect(result.container.querySelector('footer')).toHaveClass('text-light')

  result = render(<Boilerplate footer='test' footerTheme='light' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-light')
  expect(result.container.querySelector('footer')).toHaveClass('text-dark')

  result = render(<Boilerplate footer='test' footerTheme='yellow' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-warning')
  expect(result.container.querySelector('footer')).toHaveClass('text-dark')

  result = render(<Boilerplate footer='test' footerTheme='red' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-danger')
  expect(result.container.querySelector('footer')).toHaveClass('text-light')

  result = render(<Boilerplate footer='test' footerTheme='teal' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-info')
  expect(result.container.querySelector('footer')).toHaveClass('text-light')

  result = render(<Boilerplate footer='test' footerTheme='white' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-white')
  expect(result.container.querySelector('footer')).toHaveClass('text-dark')

  result = render(<Boilerplate footer='test' footerTheme='transparent' />)
  expect(result.container.querySelector('footer')).toHaveClass('bg-transparent')
})

test('Boilerplate jumbotronTheme', () => {
  let result = render(<Boilerplate jumbotron='test' jumbotronTheme='blue' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass('bg-primary')
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-light')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='dark' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass('bg-dark')
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-light')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='gray' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-light')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='grey' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass(
    'bg-secondary'
  )
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-light')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='green' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass('bg-success')
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-light')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='light' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass('bg-light')
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-dark')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='yellow' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass('bg-warning')
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-dark')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='red' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass('bg-danger')
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-light')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='teal' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass('bg-info')
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-light')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='white' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass('bg-white')
  expect(result.container.querySelector('.jumbotron')).toHaveClass('text-dark')

  result = render(<Boilerplate jumbotron='test' jumbotronTheme='transparent' />)
  expect(result.container.querySelector('.jumbotron')).toHaveClass(
    'bg-transparent'
  )
})
