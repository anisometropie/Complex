const roundNdecimals = dec => num => {
  const pow = 10 ** dec
  return Math.round(num * pow) / pow
}

const distance = (a, b) => Math.abs(b - a)

const areClose = (a, b, numDigits) => distance(a, b) < 10 ** -numDigits / 2

module.exports = { roundNdecimals, distance, areClose }
