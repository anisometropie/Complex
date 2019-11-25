## Description

a simple complex number library

## Examples

```js
import Complex from 'simple-complex'

//constructor
const z = new Complex(2, 3) // 2 + 3i
const ζ = new Complex(z)

// create a number from modulus & argument
const z = Complex.fromAngle(2, Math.PI) // -2

// clone
const z = new Complex(1, 1)
const ζ = z.clone()

// set value
const z = new Complex()
z.set(2, 3)

// static sum
const z = new Complex(4, 3)
const ζ = new Complex(1, 2)
const sum = Complex.sum(z, ζ)

// add
const z = new Complex(0, 0)
const ζ = new Complex(1, 2)
z.add(ζ)

// static multiply
const z = new Complex(1, 3)
const ζ = new Complex(-4, 2)
const result = Complex.multiply(z, ζ)

// multiplyBy
const z = new Complex(1, 3)
const ζ = new Complex(-4, 2)
z.multiplyBy(ζ)

// rotate
const z = new Complex(1, 0)
z.rotate(Math.PI / 2) // i
z.rotate(Math.PI / 2) // -1
z.rotate(Math.PI / 2) // -i
z.rotate(Math.PI / 2) // 1

// getters and setters
const ζ = new Complex(2, 2)
const { argument, modulus } = ζ

const z = new Complex(0, 0)
z.modulus = 10
z.argument = Math.PI / 2

// some functions
const z = new Complex(1, 3)
const exponential = Complex.exp(z)
const square = Complex.square(z)

// toString
const z = Complex.fromAngle(2, 0)
const value = z.toString() // '2'
```
