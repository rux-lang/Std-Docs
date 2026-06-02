# IO

Console output utilities.

**Module:** `Std::Io`

## Summary

```rux
Print(...)
PrintLine(...)
```

## Description

The `Std::Io` module provides console output functionality for strings, primitive types, and formatted text.

All supported primitive types can be printed directly. Internally, values are converted to strings before being written to the console.

The module supports:

- Primitive numeric types
- Boolean types
- Character types
- Strings
- Formatted output using `Display`

---

# Print

Writes a value to standard output without appending a newline.

## Overloads

### Primitive Types

```rux
Print(value: int8)
Print(value: int16)
Print(value: int32)
Print(value: int64)

Print(value: uint8)
Print(value: uint16)
Print(value: uint32)
Print(value: uint64)

Print(value: float32)
Print(value: float64)

Print(value: bool8)
Print(value: bool16)
Print(value: bool32)
Print(value: bool)

Print(value: char8)
Print(value: char16)
Print(value: char32)
Print(value: char)
```

### Strings

```rux
Print(string: *const char8, length: uint)
Print(string: *const char16, length: uint)

Print(string: char8[])
Print(string: char16[])

Print(string: String)
```

### Formatted Output

```rux
Print(
    format: char8[],
    args: Display...
)
```

Formats the arguments using `Format()` and writes the result to standard output.

### Example

```rux
Print(
    "Hello, {}!",
    String::From("Alex")
);
```

Output:

```text
Hello, Alex!
```

---

# PrintLine

Writes a value to standard output and appends a newline.

## Overloads

### Newline Only

```rux
PrintLine()
```

Writes a line terminator.

### Primitive Types

```rux
PrintLine(value: int8)
PrintLine(value: int16)
PrintLine(value: int32)
PrintLine(value: int64)

PrintLine(value: uint8)
PrintLine(value: uint16)
PrintLine(value: uint32)
PrintLine(value: uint64)

PrintLine(value: float32)
PrintLine(value: float64)

PrintLine(value: bool8)
PrintLine(value: bool16)
PrintLine(value: bool32)
PrintLine(value: bool)

PrintLine(value: char8)
PrintLine(value: char16)
PrintLine(value: char32)
PrintLine(value: char)
```

### Strings

```rux
PrintLine(string: *const char8, length: uint)
PrintLine(string: *const char16, length: uint)

PrintLine(string: char8[])
PrintLine(string: char16[])

PrintLine(string: String)
```

### Formatted Output

```rux
PrintLine(
    format: char8[],
    args: Display...
)
```

Formats the arguments using `Format()`, writes the result, and appends a newline.

### Example

```rux
PrintLine(
    "{} scored {} points",
    playerName,
    score
);
```

Output:

```text
Alex scored 42 points
```

---

# Examples

## Printing Strings

```rux
Print("Hello");
Print(" ");
Print("World");
```

Output:

```text
Hello World
```

---

## Printing With Newlines

```rux
PrintLine("Hello");
PrintLine("World");
```

Output:

```text
Hello
World
```

---

## Printing Numbers

```rux
PrintLine(42);
PrintLine(3.14);
```

Output:

```text
42
3.14
```

---

## Printing Booleans

```rux
PrintLine(true);
PrintLine(false);
```

Output:

```text
true
false
```

---

## Formatted Output

```rux
let name = String::From("Alex");

PrintLine(
    "Hello, {}!",
    name
);
```

Output:

```text
Hello, Alex!
```

---

# Notes

- Primitive values are converted to strings automatically.
- Formatted output uses `Format()`.
- Values supplied to formatted output must implement `Display`.
- `Print()` does not append a newline.
- `PrintLine()` always appends a newline.

---

# Platform Notes

## Linux

- UTF-8 text is written directly to standard output.
- Output is performed using operating system write calls.

## Windows

- UTF-8 text is converted to UTF-16 before being written to the console.
- UTF-16 output is written using the Windows console API.

### Output Length Limit

Strings longer than 4096 characters currently cause a fatal error when printed. Attempting to print a longer UTF-8 string will terminate the program with:

```text
Fatal("string is too long to print")
```

This limitation applies to:

```rux
Print(...)
PrintLine(...)
```

when the underlying string exceeds 4096 characters.

---

# Current Limitations

- BSD support is not yet implemented.
- Illumos support is not yet implemented.
- macOS support is not yet implemented.

These platforms currently contain placeholder implementations.
