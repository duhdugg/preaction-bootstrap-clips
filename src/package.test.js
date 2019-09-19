/* global it */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { Boilerplate } from '../dist/preaction-bootstrap-clips.min.js'
import assert from 'assert'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('imports as an es module', () => {
  assert(Boilerplate !== undefined)
})
