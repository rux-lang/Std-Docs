# Memory Operations

## Set

```rux
Set(
    ptr: *opaque,
    size: uint,
    value: int32
)
```

Fills a block of memory with the specified byte value.

#### Example

```rux
Set(buffer, 128, 0xFF);
```

---

## Zero

```rux
Zero(
    ptr: *opaque,
    size: uint
)
```

Fills a block of memory with zeros.

#### Example

```rux
Zero(buffer, 128);
```

---

## Compare

```rux
Compare(
    lhs: *const opaque,
    rhs: *const opaque,
    length: uint
) -> uint
```

Compares two memory regions.

#### Parameters

| Parameter | Description |
|-----------|-------------|
| `lhs` | First memory block. |
| `rhs` | Second memory block. |
| `length` | Number of bytes to compare. |

#### Return Value

Returns a platform-dependent comparison result.

#### Platform Differences

| Platform | Return Value | Implementation |
|----------|-------------|----------------|
| Linux / BSD / Illumos / macOS | Index of the first differing byte (`length` if equal) | Byte-by-byte comparison loop |
| Windows | Number of matching bytes (`length` if equal) | `RtlCompareMemory` |

Both conventions yield the same numeric value at a given mismatch position.

#### Example

```rux
let result = Compare(
    bufferA,
    bufferB,
    64
);
```

#### Notes

Use this function only to determine whether memory regions differ, not to interpret ordering semantics.

Because the return values have different meanings across platforms, portable code should only rely on the following guarantee:

```text
Compare(lhs, rhs, length) == length
```

This indicates that all compared bytes are equal.

Code should not rely on any other specific return value.

---

## Copy

```rux
Copy(
    dest: *opaque,
    src: *const opaque,
    length: uint
)
```

Copies bytes from one memory location to another.

#### Parameters

| Parameter | Description |
|-----------|-------------|
| `dest` | Destination memory block. |
| `src` | Source memory block. |
| `length` | Number of bytes to copy. |

#### Example

```rux
Copy(
    destination,
    source,
    256
);
```

#### Notes

Source and destination memory regions must be valid for at least `length` bytes.
