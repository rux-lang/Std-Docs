# Integer Types

Signed integer types represent whole numbers that may be positive, negative, or zero.

**Module:** `Std`

## Summary

```rux
ToString(value: int8) -> String
ToString(value: int16) -> String
ToString(value: int32) -> String
ToString(value: int64) -> String

int8.ToString() -> String
int16.ToString() -> String
int32.ToString() -> String
int64.ToString() -> String
```

## Description

Rux provides multiple signed integer types:

| Type    | Size    | Range                                                   |
| ------- | ------- | ------------------------------------------------------- |
| `int8`  | 8 bits  | -128 to 127                                             |
| `int16` | 16 bits | -32,768 to 32,767                                       |
| `int32` | 32 bits | -2,147,483,648 to 2,147,483,647                         |
| `int64` | 64 bits | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |

All integer types implement the `Display` interface.

---

# String Conversion

## ToString

### int8

```rux
ToString(value: int8) -> String
```

Converts an `int8` value into its decimal string representation.

Internally, the value is converted to `int64` and formatted using the `int64` implementation.

---

### int16

```rux
ToString(value: int16) -> String
```

Converts an `int16` value into its decimal string representation.

Internally, the value is converted to `int64` and formatted using the `int64` implementation.

---

### int32

```rux
ToString(value: int32) -> String
```

Converts an `int32` value into its decimal string representation.

Internally, the value is converted to `int64` and formatted using the `int64` implementation.

---

### int64

```rux
ToString(value: int64) -> String
```

Converts an `int64` value into its decimal string representation.

### Examples

```rux
ToString(42);
```

Result:

```text
42
```

```rux
ToString(-123);
```

Result:

```text
-123
```

```rux
ToString(0);
```

Result:

```text
0
```

---

# Display Implementation

All signed integer types implement the `Display` interface.

```rux
extend int8  : Display
extend int16 : Display
extend int32 : Display
extend int64 : Display
```

This allows integer values to be used with formatting and output functions.

### Example

```rux
PrintLine(42);
```

Output:

```text
42
```

---

# Formatting

Integer values can be used with `Format()`.

### Example

```rux
let score: int32 = 9001;

let text = Format(
    "Score: {}",
    score
);
```

Result:

```text
Score: 9001
```

---

# Examples

## int8

```rux
let value: int8 = -10;

PrintLine(value);
```

Output:

```text
-10
```

---

## int16

```rux
let value: int16 = 2048;

PrintLine(value);
```

Output:

```text
2048
```

---

## int32

```rux
let value: int32 = -123456;

PrintLine(value);
```

Output:

```text
-123456
```

---

## int64

```rux
let value: int64 = 9223372036854775807;

PrintLine(value);
```

Output:

```text
9223372036854775807
```

---

# Notes

* All conversions produce decimal output.
* Negative numbers are prefixed with `-`.
* Zero is represented as `"0"`.
* `int8`, `int16`, and `int32` use the `int64` formatter internally.
* A new string is allocated for each conversion.

---

# Current Limitations

* Only decimal formatting is currently supported.
* Hexadecimal, binary, and octal formatting are not currently available.
* Width, padding, alignment, and sign formatting options are not currently supported.

Future versions may add additional integer formatting capabilities.
