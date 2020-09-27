// global test
import { getClassesForTheme } from '../getClassesForTheme.js'

test('getClassesForTheme()', () => {
  let result = getClassesForTheme('blue')
  expect(result.includes('bg-primary')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('primary')
  expect(result.includes('bg-primary')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('dark')
  expect(result.includes('bg-dark')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('grey')
  expect(result.includes('bg-secondary')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('gray')
  expect(result.includes('bg-secondary')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('green')
  expect(result.includes('bg-success')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('success')
  expect(result.includes('bg-success')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('light')
  expect(result.includes('bg-light')).toBe(true)
  expect(result.includes('text-dark')).toBe(true)

  result = getClassesForTheme('yellow')
  expect(result.includes('bg-warning')).toBe(true)
  expect(result.includes('text-dark')).toBe(true)

  result = getClassesForTheme('warning')
  expect(result.includes('bg-warning')).toBe(true)
  expect(result.includes('text-dark')).toBe(true)

  result = getClassesForTheme('red')
  expect(result.includes('bg-danger')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('danger')
  expect(result.includes('bg-danger')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('teal')
  expect(result.includes('bg-info')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('info')
  expect(result.includes('bg-info')).toBe(true)
  expect(result.includes('text-light')).toBe(true)

  result = getClassesForTheme('white')
  expect(result.includes('bg-white')).toBe(true)
  expect(result.includes('text-dark')).toBe(true)

  result = getClassesForTheme('transparent')
  expect(result.includes('bg-transparent')).toBe(true)
})
