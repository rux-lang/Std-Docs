# String

A dynamically-sized UTF-8 byte string type.

**Module:** `Std`

## Summary

```rux
struct String {
    data: *char8;
    length: uint;
}

String::New()
String::From(str: *const char8, length: uint)
String::From(slice: char8[])

Clone() -> String

operator +(other: String) -> String
operator +(slice: char8[]) -> String

ToString() -> String

Data() -> *char8
Length() -> uint
IsEmpty() -> bool8

ToUpper() -> String
ToLower() -> String
Capitalize() -> String
TitleCase() -> String
Trim() -> String

StartsWith(prefix: String) -> bool
EndsWith(suffix: String) -> bool

Split(delimiter: char8) -> StringArray

Repeat(count: uint) -> String

ToUpperInPlace()
ToLowerInPlace()
CapitalizeInPlace()
TrimInPlace()
TitleCaseInPlace()
```

## Description

`String` represents a sequence of bytes stored in dynamically allocated memory.

Strings are immutable by convention, although some methods provide in-place modification of the underlying data.

`String` implements the `Display` interface.

## Structures

### String

```rux
struct String {
    data: *char8;
    length: uint;
}
```

| Field | Description |
|---------|-------------|
| `data` | Pointer to the character buffer. |
| `length` | Number of bytes in the string. |

### StringArray

```rux
struct StringArray {
    data: *String;
    length: uint;
}
```

| Field | Description |
|---------|-------------|
| `data` | Pointer to the array of strings. |
| `length` | Number of strings in the array. |

---

# Construction

## New

```rux
String::New() -> String
```

Creates an empty string.

### Example

```rux
let str = String::New();
```

---

## From

### From Pointer

```rux
String::From(str: *const char8, length: uint) -> String
```

Creates a string by copying raw character data.

### Example

```rux
let str = String::From(ptr, length);
```

### From Slice

```rux
String::From(slice: char8[]) -> String
```

Creates a string by copying a character slice.

### Example

```rux
let str = String::From("Hello");
```

---

## Clone

```rux
Clone() -> String
```

Returns a copy of the string.

### Example

```rux
let copy = original.Clone();
```

---

# Operators

## Concatenation

### String + String

```rux
stringA + stringB
```

Returns a new string containing both strings concatenated together.

### Example

```rux
let result = hello + world;
```

### String + char8[ ]

```rux
string + slice
```

Returns a new string containing the string followed by the character slice.

### Example

```rux
let result = str + " World";
```

---

# Accessors

## Data

```rux
Data() -> *char8
```

Returns a pointer to the underlying character buffer.

---

## Length

```rux
Length() -> uint
```

Returns the number of bytes stored in the string.

---

## IsEmpty

```rux
IsEmpty() -> bool8
```

Returns `true` if the string length is zero.

### Example

```rux
if str.IsEmpty() {
    Print("empty");
}
```

---

# Case Conversion

## ToUpper

```rux
ToUpper() -> String
```

Returns a new uppercase string.

### Example

```rux
let upper = str.ToUpper();
```

---

## ToLower

```rux
ToLower() -> String
```

Returns a new lowercase string.

---

## Capitalize

```rux
Capitalize() -> String
```

Returns a new string with the first character uppercase and the remaining characters lowercase.

### Example

```rux
let result = str.Capitalize();
```

---

## TitleCase

```rux
TitleCase() -> String
```

Returns a new string with the first letter of each word capitalized.

### Example

```rux
let result = str.TitleCase();
```

---

# Whitespace

## Trim

```rux
Trim() -> String
```

Returns a copy of the string with leading and trailing whitespace removed.

Whitespace characters recognized:

- Space (`' '`)
- Tab (`'\t'`)
- Newline (`'\n'`)
- Carriage return (`'\r'`)

### Example

```rux
let result = str.Trim();
```

---

# Search

## StartsWith

```rux
StartsWith(prefix: String) -> bool
```

Returns `true` if the string begins with the specified prefix.

### Example

```rux
if str.StartsWith(String::From("Hello")) {
    
}
```

---

## EndsWith

```rux
EndsWith(suffix: String) -> bool
```

Returns `true` if the string ends with the specified suffix.

### Example

```rux
if str.EndsWith(String::From(".txt")) {
}
```

---

# Splitting

## Split

```rux
Split(delimiter: char8) -> StringArray
```

Splits the string into multiple substrings separated by the specified delimiter.

### Example

```rux
let tokens = str.Split(',');
```

### Result

```text
"a,b,c"

↓

["a", "b", "c"]
```


### Notes

- The returned strings reference the original string's data.
- No character data is copied.
- The original string must remain valid while the returned `StringArray` is in use.

---

# Repetition

## Repeat

```rux
Repeat(count: uint) -> String
```

Returns a new string containing the original string repeated `count` times.

Internally, `Repeat` uses `StringBuilder` to efficiently construct the resulting string, reducing unnecessary memory allocations and copies.

### Example

```rux
let result = String::From("Hi").Repeat(3);
```

Result:

```text
HiHiHi
```

Result:

```text
HiHiHi
```

---

# In-Place Operations

These functions modify the existing string buffer directly.

## ToUpperInPlace

```rux
ToUpperInPlace()
```

Converts all characters to uppercase.

---

## ToLowerInPlace

```rux
ToLowerInPlace()
```

Converts all characters to lowercase.

---

## CapitalizeInPlace

```rux
CapitalizeInPlace()
```

Capitalizes the first character and lowercases the remaining characters.

---

## TrimInPlace

```rux
TrimInPlace()
```

Removes leading and trailing whitespace from the existing buffer.

---

## TitleCaseInPlace

```rux
TitleCaseInPlace()
```

Capitalizes the first letter of each word directly in the existing buffer.

## ToString

```rux
ToString() -> String
```

Returns the string itself.

This method exists to satisfy the `Display` interface.

---

# Display Implementation

`String` implements the `Display` interface.

```rux
extend String : Display {
    func ToString(self) -> String {
        return *self;
    }
}
```

Calling `ToString` on a `String` returns the string itself.
More info about the `Display` in [Display.md](display.md)

## Example

```rux
let str = String::From("Hello");

let text = str.ToString();
```
