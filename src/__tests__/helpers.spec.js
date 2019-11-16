import { roundNdecimals } from '../helpers'

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
