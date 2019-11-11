import Complex from '../Complex'

const { PI } = Math

describe('Complex class', () => {
  describe('constructor', () => {
    it('should create object with real and imaginary properties', () => {
      const z = new Complex()
      expect(z).toBeInstanceOf(Complex)
      expect(z).toHaveProperty('real')
      expect(z).toHaveProperty('imaginary')
    })
    it('should create object with given real and imaginary parts', () => {
      const z = new Complex(39, 40)
      expect(z.real).toEqual(39)
      expect(z.imaginary).toEqual(40)
    })
    it('should create object given only a real part', () => {
      const z = new Complex(4)
      expect(z.real).toEqual(4)
      expect(z.imaginary).toEqual(0)
    })
    it('should create object given a Complex number object', () => {
      const z = new Complex(39, 40)
      const ζ = new Complex(z)
      expect(ζ.real).toEqual(39)
      expect(ζ.imaginary).toEqual(40)
    })
  })
  describe('fromAngle static method', () => {
    it('should create a 1 from an modulus and an argument ', () => {
      const z = Complex.fromAngle(1, 0)
      expect(z.real).toBeCloseTo(1)
      expect(z.imaginary).toBeCloseTo(0)
    })
  })
  describe('clone method', () => {
    it('should create a new complex with the same real and imaginary parts', () => {
      const z = new Complex(1, 2)
      const clone = z.clone()
      expect(clone).toBeInstanceOf(Complex)
      expect(clone.real).toEqual(1)
      expect(clone.imaginary).toEqual(2)
    })
  })
  describe('set method', () => {
    it('should set the number to a given value', () => {
      const z = new Complex()
      z.set(1, 100)
      expect(z.real).toEqual(1)
      expect(z.imaginary).toEqual(100)
    })
  })
  describe('static sum method', () => {
    it('should sum two complex numbers', () => {
      const a = new Complex(1, 2)
      const b = new Complex(3, 5)
      const z = Complex.sum(a, b)
      expect(z.real).toEqual(4)
      expect(z.imaginary).toEqual(7)
    })
    it('should sum complex and real', () => {
      const a = new Complex(1, 2)
      const b = 7
      const z = Complex.sum(a, b)
      expect(z.real).toEqual(8)
      expect(z.imaginary).toEqual(2)
    })
    it('should sum real and complex', () => {
      const a = -1
      const b = new Complex(5, 3)
      const z = Complex.sum(a, b)
      expect(z.real).toEqual(4)
      expect(z.imaginary).toEqual(3)
    })
    it('should sum real and real', () => {
      const a = 3
      const b = 31
      const z = Complex.sum(a, b)
      expect(z.real).toEqual(34)
      expect(z.imaginary).toEqual(0)
    })
  })
  describe('add method', () => {
    it('should add a complex number to the complex number', () => {
      const a = new Complex(1, 2)
      const b = new Complex(3, 5)
      a.add(b)
      expect(a.real).toEqual(4)
      expect(a.imaginary).toEqual(7)
    })
    it('should add a real number to the complex number', () => {
      const a = new Complex(1, 2)
      const b = 18.55
      a.add(b)
      expect(a.real).toEqual(19.55)
      expect(a.imaginary).toEqual(2)
    })
  })

  describe('static multiply method', () => {
    it('should multiply two complex numbers', () => {
      const z1 = new Complex(1, 4)
      const z2 = new Complex(2, 3)
      const result = Complex.multiply(z1, z2)
      expect(result.real).toEqual(-10)
      expect(result.imaginary).toEqual(11)
    })
    it('should multiply a complex with a real', () => {
      const z = new Complex(1, 4)
      const x = 3
      const result = Complex.multiply(z, x)
      expect(result.real).toEqual(3)
      expect(result.imaginary).toEqual(12)
    })
    it('should multiply a real with a complex', () => {
      const z = new Complex(3, 7)
      const x = 2
      const result = Complex.multiply(x, z)
      expect(result.real).toEqual(6)
      expect(result.imaginary).toEqual(14)
    })
    it('should multiply a real with a real', () => {
      const x = 2
      const y = 14
      const result = Complex.multiply(x, y)
      expect(result.real).toEqual(28)
      expect(result.imaginary).toEqual(0)
    })
  })

  describe('multiplyBy method', () => {
    it('should multiply the complex with another complex', () => {
      const z1 = new Complex(1, 4)
      const z2 = new Complex(2, 3)
      z1.multiplyBy(z2)
      expect(z1.real).toEqual(-10)
      expect(z1.imaginary).toEqual(11)
    })
    it('should multiply the complex with a number', () => {
      const z = new Complex(1, 4)
      const x = 3
      z.multiplyBy(x)
      expect(z.real).toEqual(3)
      expect(z.imaginary).toEqual(12)
    })
  })
  describe('rotate method', () => {
    test('#1', () => {
      const z = new Complex(1, 0)
      z.rotate(PI / 2)
      expect(z.real).toBeCloseTo(0)
      expect(z.imaginary).toBeCloseTo(1)
    })
    test('#1', () => {
      const z = Complex.fromAngle(1, PI / 6)
      z.rotate(PI / 2)
      expect(z.modulus).toBeCloseTo(1)
      expect(z.argument).toBeCloseTo(PI / 2 + PI / 6)
    })
  })
  describe('modulus getter', () => {
    it('should return modulus', () => {
      const z = new Complex(4, 0)
      expect(z.modulus).toBeCloseTo(4)
    })
    it('should return modulus', () => {
      const z = new Complex(4, 3)
      expect(z.modulus).toBeCloseTo(5)
    })
    it('should return modulus', () => {
      const z = new Complex(4, 7)
      expect(z.modulus).toBeCloseTo(8.06)
    })
  })
  describe('argument getter', () => {
    it('should return argument', () => {
      const z = new Complex(1, 1)
      expect(z.argument).toBeCloseTo(PI / 4)
    })
  })
  describe('modulus setter', () => {
    describe('with a positive modulus', () => {
      test('#1', () => {
        const z = new Complex(1, 0)
        z.modulus = 2
        expect(z.modulus).toBeCloseTo(2)
        expect(z.real).toBeCloseTo(2)
        expect(z.imaginary).toBeCloseTo(0)
      })
      test('#2', () => {
        const z = new Complex(3, 2)
        z.modulus = 2
        expect(z.modulus).toBeCloseTo(2)
        expect(z.real).toBeCloseTo(1.66)
        expect(z.imaginary).toBeCloseTo(1.11)
      })
    })
    describe('with a negative modulus, it should rotate by π and use minus given value', () => {
      test('#1', () => {
        const z = new Complex(1, 0)
        z.modulus = -3
        expect(z.modulus).toBeCloseTo(3)
        expect(z.real).toBeCloseTo(-3)
        expect(z.imaginary).toBeCloseTo(0)
      })
      test('#2', () => {
        const z = new Complex(0, 1)
        z.modulus = -5
        expect(z.modulus).toBeCloseTo(5)
        expect(z.real).toBeCloseTo(0)
        expect(z.imaginary).toBeCloseTo(-5)
      })
      test('#3', () => {
        const z = Complex.fromAngle(1, PI / 4)
        z.modulus = -1
        expect(z.modulus).toBeCloseTo(1)
        expect(z.argument).toBeCloseTo((-PI * 3) / 4)
      })
      test('#4', () => {
        const z = Complex.fromAngle(1, PI / 2)
        z.modulus = -1
        expect(z.modulus).toBeCloseTo(1)
        expect(z.argument).toBeCloseTo(-PI / 2)
      })
    })
  })
  describe('argument setter', () => {
    test('#1', () => {
      const z = Complex.fromAngle(1, 2)
      z.argument = 0
      expect(z.modulus).toBeCloseTo(1)
      expect(z.argument).toBeCloseTo(0)
    })
  })
  describe('static exp', () => {
    test('exp(i+i) = 1.47 + 2.29i', () => {
      const z = new Complex(1, 1)
      const expZ = Complex.exp(z)
      expect(expZ.real).toBeCloseTo(1.47)
      expect(expZ.imaginary).toBeCloseTo(2.29)
    })
    test('exp(3-i) = 10.85 - 16.90i', () => {
      const z = new Complex(3, -1)
      const expZ = Complex.exp(z)
      expect(expZ.real).toBeCloseTo(10.85)
      expect(expZ.imaginary).toBeCloseTo(-16.9)
    })
  })
  describe('static square', () => {
    test('(1+i) ^ 2 = 2i', () => {
      const z = new Complex(1, 1)
      const expZ = Complex.square(z)
      expect(expZ.real).toBeCloseTo(0)
      expect(expZ.imaginary).toBeCloseTo(2)
    })
    test('(3-i)^2 = 8-6i', () => {
      const z = new Complex(3, -1)
      const expZ = Complex.square(z)
      expect(expZ.real).toBeCloseTo(8)
      expect(expZ.imaginary).toBeCloseTo(-6)
    })
  })
  describe('toString', () => {
    it('should display just the real part if imaginary is zero', () => {
      const z = new Complex(3.34, 0)
      expect(z.toString()).toEqual('3.34')
    })
    it('should display just the imaginary part if real is zero', () => {
      const z = new Complex(0, 3.34)
      expect(z.toString()).toEqual('3.34i')
    })
    it('should display the whole number', () => {
      const z = new Complex(3.34, 7.25)
      expect(z.toString()).toEqual('3.34 + 7.25i')
    })
  })
})
