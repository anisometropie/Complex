import { round2decimals } from './helpers'

class Complex {
  constructor(a = 0, b = 0) {
    if (a instanceof Complex) {
      this.real = a.real
      this.imaginary = a.imaginary
    } else {
      this.real = a
      this.imaginary = b
    }
  }

  static fromAngle(modulus, argument) {
    return new Complex(
      modulus * Math.cos(argument),
      modulus * Math.sin(argument)
    )
  }

  clone() {
    const clone = new Complex(this.real, this.imaginary)
    return clone
  }

  set(a, b) {
    this.real = a
    this.imaginary = b
  }

  static sum(a, b) {
    const α = new Complex(a)
    const β = new Complex(b)
    return new Complex(α.real + β.real, α.imaginary + β.imaginary)
  }

  add(z) {
    const result = Complex.sum(this, z)
    this.set(result.real, result.imaginary)
  }

  static multiply(z1, z2) {
    const ζ1 = new Complex(z1)
    const ζ2 = new Complex(z2)
    const real = ζ1.real * ζ2.real - ζ1.imaginary * ζ2.imaginary
    const imaginary = ζ1.real * ζ2.imaginary + ζ1.imaginary * ζ2.real
    return new Complex(real, imaginary)
  }

  multiplyBy(z) {
    const result = Complex.multiply(this, z)
    this.set(result.real, result.imaginary)
  }

  rotate(angle) {
    const a = Math.cos(angle)
    const b = Math.sin(angle)
    const z = new Complex(a, b)
    this.multiplyBy(z)
  }

  get modulus() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2)
  }

  get argument() {
    return Math.atan2(this.imaginary, this.real)
  }

  set modulus(ρ) {
    if (ρ < 0) {
      this.rotate(Math.PI)
      this.set(-ρ * Math.cos(this.argument), -ρ * Math.sin(this.argument))
    } else {
      this.set(ρ * Math.cos(this.argument), ρ * Math.sin(this.argument))
    }
  }

  set argument(θ) {
    this.set(this.modulus * Math.cos(θ), this.modulus * Math.sin(θ))
  }

  static exp(z) {
    const real = Math.exp(z.real) * Math.cos(z.imaginary)
    const imaginary = Math.exp(z.real) * Math.sin(z.imaginary)
    return new Complex(real, imaginary)
  }

  static square(z) {
    const real = z.real ** 2 - z.imaginary ** 2
    const imaginary = 2 * z.real * z.imaginary
    return new Complex(real, imaginary)
  }

  toString() {
    const real = this.real === 0 ? '' : round2decimals(this.real)
    const imaginary = this.imaginary === 0 ? '' : round2decimals(this.imaginary)
    const plusSign = real === '' || imaginary === '' ? '' : ' + '
    return this.imaginary === 0 ? real : `${real}${plusSign}${imaginary}i`
  }
}

export default Complex
