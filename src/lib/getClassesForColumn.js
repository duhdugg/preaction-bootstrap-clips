export default width => {
  width = width || { sm: 'auto' }
  let classes = []
  if (typeof (width) === 'object') {
    const handleColumnSizeObjects = (key) => {
      let value = width[key]
      let classPrefix = 'col'
      let className = ''
      if (key === 'xs') {
        if (value) {
          if (value === 'auto') {
            className = 'col'
          } else {
            className = `${classPrefix}-${Math.floor(Number(value) * 12)}`
          }
        }
      } else {
        classPrefix = `col-${key}`
        if (value) {
          if (value === 'auto') {
            className = `${classPrefix}-auto`
          } else {
            className = `${classPrefix}-${Math.floor(Number(value) * 12)}`
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
  } else {
    if (width === 'auto') {
      classes.push('col')
    } else {
      classes.push(`col-${Math.floor(Number(width) * 12)}`)
    }
  }
  return classes
}
