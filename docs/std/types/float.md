# Floating-Point Types

Floating-point types represent real numbers with fractional components.

**Module:** `Std`

## Summary

```rux
ToString(value: float32) -> String
ToString(value: float64) -> String

float32.ToString() -> String
float64.ToString() -> String

IsNan(value: float64) -> bool
IsInfinite(value: float64) -> bool
```

## Description

Rux provides two floating-point types:

| Type      | Size    |
| --------- | ------- |
| `float32` | 32 bits |
| `float64` | 64 bits |

Both types implement the `Display` interface and can be converted to strings using `ToString()`.

`float32` conversions are internally performed through `float64`.

---

# String Conversion

## ToString

### float32

```rux
ToString(value: float32) -> String
```

Converts a `float32` value into a string.

Internally, the value is converted to `float64` and formatted using the `float64` implementation.

---

### float64

```rux
ToString(value: float64) -> String
```

Converts a `float64` value into a string representation.

Special floating-point values are handled automatically:

| Value             | Result   |
| ----------------- | -------- |
| NaN               | `"NaN"`  |
| Positive Infinity | `"Inf"`  |
| Negative Infinity | `"-Inf"` |

### Example

```rux
let text = ToString(3.141592);
```

Result:

```text
3.141592
```

---

# Display Implementation

Both floating-point types implement the `Display` interface.

```rux
extend float32 : Display
extend float64 : Display
```

This allows floating-point values to be used with formatting and output functions.

### Example

```rux
PrintLine(3.14);
```

Output:

```text
3.140000
```

---

# Floating-Point Utilities

## IsNan

```rux
IsNan(value: float64) -> bool
```

Returns `true` if the value is NaN (Not a Number).

### Example

```rux
if IsNan(value) {

}
```

---

## IsInfinite

```rux
IsInfinite(value: float64) -> bool
```

Returns `true` if the value is positive or negative infinity.

### Example

```rux
if IsInfinite(value) {

}
```

---

# Formatting Behavior

## Fixed-Point Notation

Most values are formatted using fixed-point notation.

Example:

```rux
ToString(123.456);
```

Result:

```text
123.456000
```

The current implementation outputs six digits after the decimal point.

---

## Scientific Notation

Very large and very small values are automatically formatted using scientific notation.

Example:

```rux
ToString(1234567890123456.0);
```

Possible result:

```text
1.2345678901234567e+15
```

Example:

```rux
ToString(0.00001);
```

Possible result:

```text
1.0000000000000000e-05
```

---

# Examples

## float32

```rux
let value: float32 = 3.14f32;

PrintLine(value);
```

Output:

```text
3.140000
```

---

## float64

```rux
let value: float64 = 123.456;

PrintLine(value);
```

Output:

```text
123.456000
```

---

## NaN

```rux
PrintLine(ToString(0.0 / 0.0));
```

Output:

```text
NaN
```

---

## Infinity

```rux
PrintLine(ToString(1.0 / 0.0));
```

Output:

```text
Inf
```

---

# Notes

* `float32` uses the `float64` formatter internally.
* A new string is allocated for every conversion.
* Fixed-point formatting currently outputs six fractional digits.
* Scientific notation is used for extremely large or small values.
* Special values (`NaN`, `Inf`, `-Inf`) are supported.

---

# Current Limitations

* Formatting precision is currently fixed.
* Rounding control is not currently available.
* Custom formatting options are not currently supported.
* Scientific notation thresholds are implementation-defined.

Future versions may provide configurable floating-point formatting.
