const { roundNdecimals, distance, areClose } = require('../helpers')

describe('round2decimals', () => {
  describe('2 decimals', () => {
    const round2 = roundNdecimals(2)
    it('should round to 2 decimals', () => {
      expect(round2(0.01)).toEqual(0.01)
      expect(round2(1.49121212)).toEqual(1.49)
      expect(round2(1.49821212)).toEqual(1.5)
      expect(round2(-1.49121212)).toEqual(-1.49)
    })
  })
  describe('3 decimals', () => {
    const round3 = roundNdecimals(3)
    it('should round to 3 decimals', () => {
      expect(round3(0.01)).toEqual(0.01)
      expect(round3(1.49121212)).toEqual(1.491)
      expect(round3(1.49821212)).toEqual(1.498)
      expect(round3(-1.49121212)).toEqual(-1.491)
    })
  })
})

describe('distance', () => {
  it('should return distance between 2 real numbers', () => {
    expect(distance(0, 1)).toEqual(1)
    expect(distance(0, 2)).toEqual(2)
    expect(distance(2, 0)).toEqual(2)
    expect(distance(2, -2)).toEqual(4)
    expect(distance(-2, 2)).toEqual(4)
    expect(distance(-2, -4)).toEqual(2)
    expect(distance(-4, -2)).toEqual(2)
  })
})
describe('areClose', () => {
  it('should return true if numbers are close by 10 ** -digits/2', () => {
    expect(areClose(0.01, 0.02, 1)).toBe(true)
    expect(areClose(0.01, 0.02, 2)).toBe(false)
    expect(areClose(0.001, 0.0014, 3)).toBe(true)
    expect(areClose(0.001, 0.0015, 3)).toBe(false)
  })
})
