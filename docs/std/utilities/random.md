# Random

Pseudo-random number generation utilities.

**Module:** `Std::Random`

## Summary

```rux
RandomInt8(min: int8, max: int8, seed: uint64) -> int8
RandomInt16(min: int16, max: int16, seed: uint64) -> int16
RandomInt32(min: int32, max: int32, seed: uint64) -> int32
RandomInt64(min: int64, max: int64, seed: uint64) -> int64
RandomInt(min: int, max: int, seed: uint64) -> int

RandomUInt8(min: uint8, max: uint8, seed: uint64) -> uint8
RandomUInt16(min: uint16, max: uint16, seed: uint64) -> uint16
RandomUInt32(min: uint32, max: uint32, seed: uint64) -> uint32
RandomUInt64(min: uint64, max: uint64, seed: uint64) -> uint64
RandomUInt(min: uint, max: uint, seed: uint64) -> uint

RandomFloat32(min: float32, max: float32, seed: uint64) -> float32
RandomFloat64(min: float64, max: float64, seed: uint64) -> float64

RandomBool(seed: uint64) -> bool
```

## Description

The `Std::Random` module provides deterministic pseudo-random number generation functions for integer, floating-point, and boolean values.

All functions require an explicit seed value.

Using the same seed will always produce the same result.

---

# Integer Random Numbers

## RandomInt8

```rux
RandomInt8(min: int8, max: int8, seed: uint64) -> int8
```

Returns a pseudo-random `int8` value in the range `[min, max)`

---

## RandomInt16

```rux
RandomInt16(min: int16, max: int16, seed: uint64) -> int16
```

Returns a pseudo-random `int16` value in the range `[min, max)`

---

## RandomInt32

```rux
RandomInt32(min: int32, max: int32, seed: uint64) -> int32
```

Returns a pseudo-random `int32` value in the range `[min, max)`

---

## RandomInt64

```rux
RandomInt64(min: int64, max: int64, seed: uint64) -> int64
```

Returns a pseudo-random `int64` value in the range `[min, max)`

---

## RandomInt

```rux
RandomInt(min: int, max: int, seed: uint64) -> int
```

Returns a pseudo-random platform-sized integer in the range:

```text
[min, max)
```

---

# Unsigned Integer Random Numbers

## RandomUInt8

```rux
RandomUInt8(min: uint8, max: uint8, seed: uint64) -> uint8
```

Returns a pseudo-random `uint8` value in the range `[min, max)`

---

## RandomUInt16

```rux
RandomUInt16(min: uint16, max: uint16, seed: uint64) -> uint16
```

Returns a pseudo-random `uint16` value in the range `[min, max)`

---

## RandomUInt32

```rux
RandomUInt32(min: uint32, max: uint32, seed: uint64) -> uint32
```

Returns a pseudo-random `uint32` value in the range `[min, max)`

---

## RandomUInt64

```rux
RandomUInt64(min: uint64, max: uint64, seed: uint64) -> uint64
```

Returns a pseudo-random `uint64` value in the range `[min, max)`

---

## RandomUInt

```rux
RandomUInt(min: uint, max: uint, seed: uint64) -> uint
```

Returns a pseudo-random platform-sized unsigned integer in the range:

```text
[min, max)
```

---

# Floating-Point Random Numbers

## RandomFloat32

```rux
RandomFloat32(min: float32, max: float32, seed: uint64) -> float32
```

Returns a pseudo-random `float32` value between `min` and `max`.

### Example

```rux
let value = RandomFloat32(0.0f32, 1.0f32, seed);
```

---

## RandomFloat64

```rux
RandomFloat64(min: float64, max: float64, seed: uint64) -> float64
```

Returns a pseudo-random `float64` value between `min` and `max`.

### Example

```rux
let value = RandomFloat64(0.0, 1.0, seed);
```

---

# Boolean Random Numbers

## RandomBool

```rux
RandomBool(seed: uint64) -> bool
```

Returns either `true` or `false`.

### Example

```rux
if RandomBool(seed) {
    Print("Heads");
} else {
    Print("Tails");
}
```

---

# Examples

## Random Integer

```rux
import Std::Random;

let value = RandomInt(1, 101, 12345);
```

Possible result:

```text
42
```

---

## Random Floating-Point Number

```rux
import Std::Random;

let value = RandomFloat64(
    0.0,
    100.0,
    12345
);
```

Possible result:

```text
73.28
```

---

## Random Boolean

```rux
let result = RandomBool(12345);
```

Possible result:

```text
true
```

---

# Errors

All range-based functions require:

```text
min < max
```

If `min >= max`, the function terminates the program with:

```text
Fatal("min must be less than max")
```

---

# Notes

- All functions are deterministic.
- The same seed always produces the same result.
- Different seeds generally produce different results.
- Integer functions generate values in the range `[min, max)`.
- Floating-point functions generate values between `min` and `max`.
- `RandomBool()` uses the least significant bit of the generated value.
- `RandomSeed()` is **planned** for as soon as **0.1.7** to make the library more convinient to use

---

# Implementation Notes

The module currently uses an internal Xorshift-style pseudo-random number generator.

This generator is:

- Fast
- Deterministic
- Suitable for simulations, testing, and games

It is **not** cryptographically secure and should not be used for:

- Password generation
- Cryptographic keys
- Security-sensitive randomness
- Authentication tokens

For security-sensitive applications, use a cryptographically secure random source instead.