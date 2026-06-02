# Boolean Types

Boolean types represent logical truth values.

**Module:** `Std`

## Summary

```rux
ToString(value: bool8) -> String
ToString(value: bool16) -> String
ToString(value: bool32) -> String

bool8.ToString() -> String
bool16.ToString() -> String
bool32.ToString() -> String
```

## Description

Rux provides multiple boolean types with different storage sizes:

| Type     | Size    |
| -------- | ------- |
| `bool8`  | 8 bits  |
| `bool16` | 16 bits |
| `bool32` | 32 bits |

All boolean types represent the same logical values:

```rux
true
false
```

The primary difference between them is storage size.

All boolean types implement the `Display` interface and can be used with formatting and output functions.

---

# String Conversion

## ToString

### bool8

```rux
ToString(value: bool8) -> String
```

### bool16

```rux
ToString(value: bool16) -> String
```

### bool32

```rux
ToString(value: bool32) -> String
```

Converts a boolean value into its string representation.

### Return Values

| Boolean Value | Result    |
| ------------- | --------- |
| `true`        | `"true"`  |
| `false`       | `"false"` |

### Example

```rux
let text = ToString(true);
```

Result:

```text
true
```

---

# Display Implementation

All boolean types implement the `Display` interface.

```rux
extend bool8 : Display
extend bool16 : Display
extend bool32 : Display
```

This allows boolean values to be used with APIs accepting `Display`.

### Example

```rux
PrintLine(true);
```

Output:

```text
true
```

---

# Formatting

Boolean values can be used with `Format()`.

### Example

```rux
let text = Format(
    "Enabled: {}",
    true
);
```

Result:

```text
Enabled: true
```

---

# Examples

## bool8

```rux
let value: bool8 = true;

PrintLine(value);
```

Output:

```text
true
```

---

## bool16

```rux
let value: bool16 = false;

PrintLine(value);
```

Output:

```text
false
```

---

## bool32

```rux
let value: bool32 = true;

PrintLine(value);
```

Output:

```text
true
```

---

# Notes

* All boolean types behave identically.
* The only difference between `bool8`, `bool16`, and `bool32` is storage size.
* String conversions always produce lowercase output.
* A new string is allocated for each conversion.
