/**
 * @function
 *
 * @param {string} name can be: blue, primary, dark, gray, grey, secondary, green, success, light, yellow, warning, red, danger, teal, info, white, transparent
 * @returns {array} an array of className strings
 *
 * @example
 * const name = 'primary'
 * const columnClassNames = getClassesForTheme(name)
 * ;<div className={columnClassNames.join(' ')}>
 *    <p>name: <code className='text-light'>{JSON.stringify(name)}</code></p>
 *    <p>returns: <code className='text-light'>{JSON.stringify(columnClassNames)}</code></p>
 *  </div>
 */
const getClassesForTheme = name => {
  let classes = ''
  switch (name) {
    case 'blue':
    case 'primary':
      classes = 'bg-primary text-light'
      break
    case 'dark':
      classes = 'bg-dark text-light'
      break
    case 'gray':
    case 'grey':
    case 'secondary':
      classes = 'bg-secondary text-light'
      break
    case 'green':
    case 'success':
      classes = 'bg-success text-light'
      break
    case 'light':
      classes = 'bg-light text-dark'
      break
    case 'yellow':
    case 'warning':
      classes = 'bg-warning text-dark'
      break
    case 'red':
    case 'danger':
      classes = 'bg-danger text-light'
      break
    case 'teal':
    case 'info':
      classes = 'bg-info text-light'
      break
    case 'white':
      classes = 'bg-white text-dark'
      break
    case 'transparent':
      classes = 'bg-transparent'
      break
    default:
      break
  }
  return classes.split(' ')
}

export { getClassesForTheme }
