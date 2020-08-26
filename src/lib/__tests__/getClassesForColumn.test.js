// global test
import { getClassesForColumn } from '../getClassesForColumn.js'

test('getClassesForColumn()', () => {
  const result = getClassesForColumn()
  expect(result.length).toBe(1)
  expect(result[0]).toBe('col-sm-auto')
})

test(`getClassesForColumn('auto')`, () => {
  const result = getClassesForColumn('auto')
  expect(result.length).toBe(1)
  expect(result[0]).toBe('col')
})

for (let x = 1; x <= 12; x++) {
  test(`getClassesForColumn(${x} / 12)`, () => {
    const result = getClassesForColumn(x / 12)
    expect(result.length).toBe(1)
    expect(result[0]).toBe(`col-${x}`)
  })
}

const args = {
  xs: 1,
  sm: 11 / 12,
  md: 5 / 6,
  lg: 2 / 3,
  xl: 1 / 2
}
test(`getClassesForColumn(${JSON.stringify(args)})`, () => {
  const result = getClassesForColumn(args)
  expect(result.length).toBe(5)
  expect(result[0]).toBe('col-12')
  expect(result[1]).toBe('col-sm-11')
  expect(result[2]).toBe('col-md-10')
  expect(result[3]).toBe('col-lg-8')
  expect(result[4]).toBe('col-xl-6')
})
