/**
 * @function
 *
 * @returns {string} arguments joined by space
 *
 */
function joinClassNames() {
  const classes = []
  for (let className of arguments) {
    classes.push(className)
  }
  return classes.join(' ')
}
export { joinClassNames }
