# Character Types

Character types represent individual Unicode code points.

**Module:** `Std`

## Summary

```rux
ToString(value: char8) -> String
ToString(value: char16) -> String
ToString(value: char32) -> String

char8.ToString() -> String
char16.ToString() -> String
char32.ToString() -> String
```

## Description

Rux provides multiple character types with different storage sizes:

| Type     | Size    | Unicode Range      |
| -------- | ------- | ------------------ |
| `char8`  | 8 bits  | U+0000 - U+00FF    |
| `char16` | 16 bits | U+0000 - U+FFFF    |
| `char32` | 32 bits | Full Unicode range |

All character types implement the `Display` interface.

String conversion functions encode characters as UTF-8 and return the result as a `String`.

---

# String Conversion

## ToString

### char8

```rux
ToString(value: char8) -> String
```

Converts a single-byte character into a `String`.

### char16

```rux
ToString(value: char16) -> String
```

Converts a UTF-16 code point into a UTF-8 encoded `String`.

### char32

```rux
ToString(value: char32) -> String
```

Converts a UTF-32 code point into a UTF-8 encoded `String`.

### Return Value

Returns a UTF-8 encoded `String` containing the specified character.

---

# UTF-8 Encoding

The resulting string length depends on the Unicode code point.

| Unicode Range      | UTF-8 Length |
| ------------------ | ------------ |
| U+0000 - U+007F    | 1 byte       |
| U+0080 - U+07FF    | 2 bytes      |
| U+0800 - U+FFFF    | 3 bytes      |
| U+10000 - U+10FFFF | 4 bytes      |

---

# Display Implementation

All character types implement the `Display` interface.

```rux
extend char8 : Display
extend char16 : Display
extend char32 : Display
```

This allows characters to be used with formatting and output APIs.

---

# Examples

## char8

```rux
let c: char8 = 'A';

PrintLine(c);
```

Output:

```text
A
```

---

## char16

```rux
let c: char16 = 'Ω';

PrintLine(c);
```

Output:

```text
Ω
```

---

## char32

```rux
let c: char32 = '😀';

PrintLine(c);
```

Output:

```text
😀
```

---

# Formatting

Character values can be used with `Format()`.

### Example

```rux
let text = Format(
    "Character: {}",
    'A'
);
```

Result:

```text
Character: A
```

---

# Notes

* All conversions return UTF-8 encoded strings.
* `char8` always produces a one-byte string.
* `char16` may produce a one-, two-, or three-byte UTF-8 sequence.
* `char32` may produce a one-, two-, three-, or four-byte UTF-8 sequence.
* A new string is allocated for each conversion.

---

# Current Limitations

## char16

The current implementation encodes the character value directly as a Unicode code point.

UTF-16 surrogate pairs are not currently supported.

Characters outside the Basic Multilingual Plane (BMP) therefore require `char32`.
