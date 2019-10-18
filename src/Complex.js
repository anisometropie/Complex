class Complex {
  constructor(a = 0, b = 0) {
    this.real = a
    this.imaginary = b
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
    return new Complex(a.real + b.real, a.imaginary + b.imaginary)
  }

  add(z) {
    if (typeof z === 'number') {
      this.real += z
    } else if (z instanceof Complex) {
      this.real += z.real
      this.imaginary += z.imaginary
    }
  }

  multiply(z) {
    if (typeof z === 'number') {
      this.set(this.real * z, this.imaginary * z)
    } else if (z instanceof Complex) {
      const real = this.real * z.real - this.imaginary * z.imaginary
      const imaginary = this.real * z.imaginary + this.imaginary * z.real
      this.set(real, imaginary)
    }
  }

  rotate(angle) {
    const a = Math.cos(angle)
    const b = Math.sin(angle)
    const z = new Complex(a, b)
    this.multiply(z)
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
}

export default Complex
