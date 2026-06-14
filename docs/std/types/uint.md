# Unsigned Integer Types

Unsigned integer types represent non-negative whole numbers.

**Module:** `Std`

## Summary

```rux
ToString(value: uint8) -> String
ToString(value: uint16) -> String
ToString(value: uint32) -> String
ToString(value: uint64) -> String

uint8.ToString() -> String
uint16.ToString() -> String
uint32.ToString() -> String
uint64.ToString() -> String
```

## Description

Rux provides multiple unsigned integer types:

| Type     | Size    | Range                           |
| -------- | ------- | ------------------------------- |
| `uint8`  | 8 bits  | 0 to 255                        |
| `uint16` | 16 bits | 0 to 65,535                     |
| `uint32` | 32 bits | 0 to 4,294,967,295              |
| `uint64` | 64 bits | 0 to 18,446,744,073,709,551,615 |

All unsigned integer types implement the `Display` interface.

---

## String Conversion

### ToString

#### uint8

```rux
ToString(value: uint8) -> String
```

Converts a `uint8` value into its decimal string representation.

Internally, the value is converted to `uint64` and formatted using the `uint64` implementation.

---

#### uint16

```rux
ToString(value: uint16) -> String
```

Converts a `uint16` value into its decimal string representation.

Internally, the value is converted to `uint64` and formatted using the `uint64` implementation.

---

#### uint32

```rux
ToString(value: uint32) -> String
```

Converts a `uint32` value into its decimal string representation.

Internally, the value is converted to `uint64` and formatted using the `uint64` implementation.

---

#### uint64

```rux
ToString(value: uint64) -> String
```

Converts a `uint64` value into its decimal string representation.

#### Examples

```rux
ToString(42u64);
```

Result:

```text
42
```

```rux
ToString(0u64);
```

Result:

```text
0
```

---

## Display Implementation

All unsigned integer types implement the `Display` interface.

```rux
extend uint8  : Display
extend uint16 : Display
extend uint32 : Display
extend uint64 : Display
```

This allows unsigned integer values to be used with formatting and output functions.

#### Example

```rux
PrintLine(255u8);
```

Output:

```text
255
```

---

## Formatting

Unsigned integer values can be used with `Format()`.

#### Example

```rux
let score: uint32 = 9001;

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

## Notes

* All conversions produce decimal output.
* Unsigned integers cannot represent negative values.
* Zero is represented as `"0"`.
* `uint8`, `uint16`, and `uint32` use the `uint64` formatter internally.
* A new string is allocated for each conversion.

---
