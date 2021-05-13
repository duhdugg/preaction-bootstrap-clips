/**
 * @function
 *
 * @returns {string} 'bg-gradient' if bool, else empty
 *
 */
const getGradientClassName = bool => (!!bool ? 'bg-gradient' : '')
export { getGradientClassName }
