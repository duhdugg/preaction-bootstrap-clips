/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from './App.jsx'

test('renders without crashing', () => {
  const div = document.createElement('div')
  const result = render(<App />, div)
  expect(result).toBeTruthy()
})
