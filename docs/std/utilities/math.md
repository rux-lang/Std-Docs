# Math

Mathematical constants and functions.

**Module:** `Std::Math`

## Constants

```rux
const Pi: float64 = 3.14159265358979323846;
const E: float64 = 2.71828182845904523536;
```

**Status:** Constants are declared but not yet usable — the ELF linker does not support external symbol references to module-level constants.

---

## Functions

### Add

```rux
func Add(x: int, y: int) -> int
```

Returns the sum of `x` and `y`.

#### Example

```rux
import Std::Math;

func Main() {
    let result = Math::Add(10, 20);
    Print(result); // 30
}
```

---

## Planned

The following functions are declared but not yet implemented:

| Function | Description |
|----------|-------------|
| `Sin(x: float64) -> float64` | Sine of `x` (radians). |
| `Sin(x: float32) -> float32` | Sine of `x` (radians). |
| `Cos(x: float64) -> float64` | Cosine of `x` (radians). |
| `Cos(x: float32) -> float32` | Cosine of `x` (radians). |
| `Tan(x: float64) -> float64` | Tangent of `x` (radians). |
| `Tan(x: float32) -> float32` | Tangent of `x` (radians). |
| `Sqrt(x: float64) -> float64` | Square root of `x`. |
| `Sqrt(x: float32) -> float32` | Square root of `x`. |
| `Pow(base, exponent: float64) -> float64` | Raises `base` to `exponent`. |
| `Pow(base, exponent: float32) -> float32` | Raises `base` to `exponent`. |
| `Abs(x: float64) -> float64` | Absolute value of `x`. |
| `Abs(x: float32) -> float32` | Absolute value of `x`. |
| `Floor(x: float64) -> float64` | Round down. |
| `Floor(x: float32) -> float32` | Round down. |
| `Ceil(x: float64) -> float64` | Round up. |
| `Ceil(x: float32) -> float32` | Round up. |
| `Round(x: float64) -> float64` | Round to nearest integer. |
| `Round(x: float32) -> float32` | Round to nearest integer. |
