/* global test */
import React from 'react'
import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AnimatedButton } from '../AnimatedButton.jsx'

test('AnimatedButton basic', () => {
  const result = render(<AnimatedButton>Howdy Planet</AnimatedButton>)
  expect(result.container.firstChild).toBeInTheDocument()
  expect(result.container.firstChild).toBeVisible()
  expect(result.getByText('Howdy Planet')).toBeInTheDocument()
  expect(result.container.querySelector('button')).toBeEnabled()
})

test('AnimatedButton disabled', () => {
  const result = render(<AnimatedButton disabled />)
  expect(result.container.querySelector('button')).toBeDisabled()
})

test('AnimatedButton onClick', async () => {
  let x = 0
  const clickHandler = () => {
    x++
  }
  const result = render(<AnimatedButton onClick={clickHandler} />)
  userEvent.click(result.container.querySelector('button'))
  await waitFor(() => expect(x).toBe(1))
})

test('AnimatedButton type', () => {
  const result = render(<AnimatedButton type='submit' />)
  expect(result.container.querySelector('button')).toHaveAttribute(
    'type',
    'submit'
  )
})
