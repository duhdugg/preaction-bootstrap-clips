/**
 * @function
 *
 * @param {string} str
 * @returns {string} `pxn-theme-${str}`
 *
 */
function getThemeClassName(str) {
  if (!str || typeof str !== 'string') {
    return ''
  }
  // sanitize argument to prevent className injection
  const theme = str
    .replace(/\s/g, ',')
    .split(',')
    .filter(t => !!t.length)[0]
  return theme ? `pxn-theme-${theme}` : ''
}
export { getThemeClassName }
