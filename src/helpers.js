const roundNdecimals = dec => num => {
  const pow = 10 ** dec
  return Math.round(num * pow) / pow
}

module.exports = { roundNdecimals }
