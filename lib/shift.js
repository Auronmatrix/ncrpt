const alfa = 'abcdefghijklmnopqrstuvwxyz'.split('')
const utils = require('./utils')

module.exports = (shiftBy) => {
  const shift = (index) => (index + shiftBy) % 26
  const decode = (prev, char) => {
    const index = alfa.indexOf(char.toLowerCase())
    const isUpper = utils.isUpperCase(char)
    const sub = index > -1 ? alfa[shift(index)] : char
    return prev + (isUpper ? sub.toUpperCase() : sub)
  }
  return (cipher) => cipher.split('').reduce(decode, '')
}
