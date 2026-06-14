# StringBuilder

Efficiently constructs strings through incremental appends.

**Module:** `Std`

## Summary

```rux
struct StringBuilder {
    data: *char8;
    length: uint;
    capacity: uint;
}

StringBuilder::New()
StringBuilder::WithCapacity(capacity: uint)

Capacity() -> uint
Length() -> uint
IsEmpty() -> bool8

Reserve(additional: uint)
Shrink()
Clear()

Append(c: char8)
Append(str: char8[])
Append(str: String)

ToString() -> String
IntoString() -> String
```

## Description

`StringBuilder` is a mutable string construction utility designed for efficiently building large strings.

Unlike repeatedly concatenating `String` values, which may require allocating and copying memory for every operation, `StringBuilder` maintains an expandable internal buffer and grows it as needed.

This makes it ideal for:

- Generating text
- Building formatted output
- Constructing large strings
- Repeated append operations

---

## Structure

### StringBuilder

```rux
struct StringBuilder {
    data: *char8;
    length: uint;
    capacity: uint;
}
```

| Field | Description |
|---------|-------------|
| `data` | Pointer to the internal character buffer. |
| `length` | Number of bytes currently stored. |
| `capacity` | Total allocated buffer size. |

---

## Construction

### New

```rux
StringBuilder::New() -> StringBuilder
```

Creates an empty string builder.

#### Example

```rux
let builder = StringBuilder::New();
```

---

### WithCapacity

```rux
StringBuilder::WithCapacity(capacity: uint) -> StringBuilder
```

Creates a string builder with a preallocated buffer.

Preallocating capacity can reduce memory reallocations when the final size is known.

#### Example

```rux
let builder = StringBuilder::WithCapacity(1024);
```

---

## Capacity Management

### Capacity

```rux
Capacity() -> uint
```

Returns the current buffer capacity.

#### Example

```rux
Print(Format("{}", builder.Capacity()));
```

---

### Reserve

```rux
Reserve(additional: uint)
```

Ensures sufficient capacity exists for additional bytes.

The buffer grows automatically when required.

#### Example

```rux
builder.Reserve(512);
```

---

### Shrink

```rux
Shrink()
```

Reduces the internal buffer size to exactly match the current length.

This can be used to release unused memory.

#### Example

```rux
builder.Shrink();
```

---

## Appending

### Append Character

```rux
Append(c: char8)
```

Appends a single character.

#### Example

```rux
builder.Append('A');
```

---

### Append Slice

```rux
Append(str: char8[])
```

Appends a character slice.

#### Example

```rux
builder.Append("Hello");
```

---

### Append String

```rux
Append(str: String)
```

Appends a `String`.

#### Example

```rux
let name = String::From("Alex");

builder.Append(name);
```

---

## Conversion

### ToString

```rux
ToString() -> String
```

Creates a new `String` containing a copy of the builder contents.

The builder remains unchanged.

#### Example

```rux
let text = builder.ToString();
```

#### Notes

- Allocates new memory.
- Copies all stored characters.
- The builder can continue to be used afterwards.

---

### IntoString

```rux
IntoString() -> String
```

Transfers ownership of the internal buffer into a `String`.

After the conversion, the builder becomes empty.

#### Example

```rux
let text = builder.IntoString();
```

#### Notes

- Does not copy the character data.
- More efficient than `ToString()`.
- Resets the builder to an empty state.

---

## Information

### Length

```rux
Length() -> uint
```

Returns the current number of bytes stored.

#### Example

```rux
let len = builder.Length();
```

---

### IsEmpty

```rux
IsEmpty() -> bool8
```

Returns `true` if the builder contains no characters.

#### Example

```rux
if builder.IsEmpty() {
    Print("empty");
}
```

---

## Modification

### Clear

```rux
Clear()
```

Removes all contents from the builder.

The allocated buffer remains available for future use.

#### Example

```rux
builder.Clear();
```

#### Notes

- Does not free memory.
- Sets the length to zero.
- Existing capacity is preserved.

---

## Example

```rux
import Std::StringBuilder;
import Std::Io::Print;

func Main() {
    let builder = StringBuilder::New();

    builder.Append("Hello");
    builder.Append(' ');
    builder.Append("World");

    let text = builder.IntoString();

    Print(text);
}
```

Output:

```text
Hello World
```

---

## Capacity Growth

`StringBuilder` automatically grows its internal buffer when additional space is required.

The capacity is increased geometrically (typically doubled), reducing the number of memory allocations required during repeated append operations.

Example growth pattern:

```text
16 → 32 → 64 → 128 → 256 → ...
```

This strategy provides efficient amortized append performance.

---

## Choosing Between ToString and IntoString

|     Method     | Copies Data | Builder Remains Usable |
|----------------|-------------|------------------------|
| `ToString()`   |     Yes     |          Yes           |
| `IntoString()` |     No      |          No            |

Use `ToString()` when the builder must continue being used.

Use `IntoString()` when the builder is no longer needed and maximum efficiency is desired.
