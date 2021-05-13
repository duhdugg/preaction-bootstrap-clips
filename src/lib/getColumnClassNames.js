/**
 * @function
 *
 * @param width can be 'auto', a number representing a fraction of 12, or an object representing values at specific breakpoints: xs, sm, md, lg, xl, xxl. The default is an object with `sm: 'auto'`.
 * @returns {array} an array of className strings
 *
 * @example
 * const width = {
 *   md: 5 / 6,
 *   lg: 2 / 3,
 *   xl: 1 / 2,
 *   xxl: 1 / 3
 * }
 * const columnClassNames = getColumnClassNames(width)
 * ;<div className='row'>
 *    <div className={columnClassNames.join(' ')} style={{border: '1px solid black'}}>
 *      <p>width: <code>{JSON.stringify(width)}</code></p>
 *      <p>returns: <code>{JSON.stringify(columnClassNames)}</code></p>
 *    </div>
 *  </div>
 */
const getColumnClassNames = width => {
  width = width || { sm: 'auto' }
  const classes = []
  const getSizeNum = value => {
    // return a floored number appropriate for the number of total columns
    const columns = 12
    return Math.floor(Number(value) * columns)
  }
  if (typeof width === 'object') {
    const handleColumnSizeObjects = key => {
      let value = width[key]
      let classPrefix = 'col'
      let className = ''
      if (key === 'xs') {
        // there are no size utility classes for extra small (xs) viewports
        // defined widths take the form of 'col-${N}'
        // automatic behavior is simply 'col'
        if (value) {
          if (value === 'auto') {
            className = 'col'
          } else {
            className = `${classPrefix}-${getSizeNum(value)}`
          }
        }
      } else {
        // for all other sizes
        // defined widths take the form of `col-${size}-${N}`
        // automatic behaviors is `col-${size}-auto`
        classPrefix = `col-${key}`
        if (value) {
          if (value === 'auto') {
            className = `${classPrefix}-auto`
          } else {
            className = `${classPrefix}-${getSizeNum(value)}`
          }
        }
      }
      if (className) {
        classes.push(className)
      }
    }
    handleColumnSizeObjects('xs')
    handleColumnSizeObjects('sm')
    handleColumnSizeObjects('md')
    handleColumnSizeObjects('lg')
    handleColumnSizeObjects('xl')
    handleColumnSizeObjects('xxl')
  } else {
    // specified width is not an object
    if (width === 'auto') {
      classes.push('col')
    } else {
      classes.push(`col-${getSizeNum(width)}`)
    }
  }
  return classes
}

export { getColumnClassNames }
