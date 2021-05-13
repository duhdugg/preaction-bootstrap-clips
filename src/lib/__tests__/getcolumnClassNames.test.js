// global test
import { getColumnClassNames } from '../getColumnClassNames.js'

test('getColumnClassNames()', () => {
  const result = getColumnClassNames()
  expect(result.length).toBe(1)
  expect(result[0]).toBe('col-sm-auto')
})

test(`getColumnClassNames('auto')`, () => {
  const result = getColumnClassNames('auto')
  expect(result.length).toBe(1)
  expect(result[0]).toBe('col')
})

for (let x = 1; x <= 12; x++) {
  test(`getColumnClassNames(${x} / 12)`, () => {
    const result = getColumnClassNames(x / 12)
    expect(result.length).toBe(1)
    expect(result[0]).toBe(`col-${x}`)
  })
}

const args = {
  xs: 1,
  sm: 11 / 12,
  md: 5 / 6,
  lg: 2 / 3,
  xl: 1 / 2,
  xxl: 1 / 3
}
test(`getColumnClassNames(${JSON.stringify(args)})`, () => {
  const result = getColumnClassNames(args)
  expect(result.length).toBe(6)
  expect(result[0]).toBe('col-12')
  expect(result[1]).toBe('col-sm-11')
  expect(result[2]).toBe('col-md-10')
  expect(result[3]).toBe('col-lg-8')
  expect(result[4]).toBe('col-xl-6')
  expect(result[5]).toBe('col-xxl-4')
})

const args2 = {
  xs: 'auto',
  md: 1 / 2
}
test(`getColumnClassNames(${JSON.stringify(args2)})`, () => {
  const result = getColumnClassNames(args2)
  expect(result.length).toBe(2)
  expect(result[0]).toBe('col')
  expect(result[1]).toBe('col-md-6')
})
