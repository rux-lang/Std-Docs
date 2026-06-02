# Memory

Low-level memory management and memory manipulation utilities.

**Module:** `Std::Memory`

## Summary

```rux
Alloc(size: uint) -> *opaque
Realloc(ptr: *opaque, size: uint) -> *opaque
Free(ptr: *opaque)

Set(ptr: *opaque, size: uint, value: int32)
Zero(ptr: *opaque, size: uint)

Compare(
    lhs: *const opaque,
    rhs: *const opaque,
    length: uint
) -> uint

Copy(
    dest: *opaque,
    src: *const opaque,
    length: uint
)
```

## Description

The `Std::Memory` module provides low-level memory allocation and manipulation functionality.

These functions operate on raw memory and are intended for implementing containers, strings, allocators, and other systems-level components.

Improper use can result in memory corruption, leaks, or undefined behavior.

---

# Allocation

## Alloc

```rux
Alloc(size: uint) -> *opaque
```

Allocates a block of memory.

### Parameters

| Parameter | Description |
|-----------|-------------|
| `size` | Number of bytes to allocate. |

### Return Value

Returns a pointer to the allocated memory block.

Returns `null` if allocation fails.

### Example

```rux
let ptr = Alloc(256);
```

---

## Realloc

```rux
Realloc(ptr: *opaque, size: uint) -> *opaque
```

Resizes a previously allocated memory block.

### Parameters

| Parameter | Description |
|-----------|-------------|
| `ptr` | Existing memory block. |
| `size` | New size in bytes. |

### Return Value

Returns a pointer to the resized memory block.

### Notes

- Existing contents are preserved up to the smaller of the old and new sizes.
- Passing `null` behaves like `Alloc()`.
- Passing `0` frees the memory and returns `null`.

### Example

```rux
ptr = Realloc(ptr, 512);
```

---

## Free

```rux
Free(ptr: *opaque)
```

Releases memory previously allocated by `Alloc()` or `Realloc()`.

### Example

```rux
Free(ptr);
```

### Notes

- Passing `null` is allowed.
- Accessing memory after it has been freed is undefined behavior.

---

# Memory Initialization

## Set

```rux
Set(
    ptr: *opaque,
    size: uint,
    value: int32
)
```

Fills a block of memory with the specified byte value.

### Example

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

### Example

```rux
Zero(buffer, 128);
```

---

# Memory Comparison

## Compare

```rux
Compare(
    lhs: *const opaque,
    rhs: *const opaque,
    length: uint
) -> uint
```

Compares two memory regions.

### Parameters

| Parameter | Description |
|-----------|-------------|
| `lhs` | First memory block. |
| `rhs` | Second memory block. |
| `length` | Number of bytes to compare. |

### Return Value

Returns a platform-dependent comparison result.

### Platform Differences

Current implementations do not return the same value on all platforms.

#### Linux

Returns:

- The index of the first differing byte.
- `length` if all bytes are equal.

Examples:

```text
Equal memory:
Compare(...) == length

First mismatch at byte 5:
Compare(...) == 5
```

#### Windows

Returns:

- The number of matching bytes.

Examples:

```text
Equal memory:
Compare(...) == length

First mismatch at byte 5:
Compare(...) == 5
```

### Example

```rux
let result = Compare(
    bufferA,
    bufferB,
    64
);
```

### Notes

Use this function only to determine whether memory regions differ, not to interpret ordering semantics.

Because the return values have different meanings across platforms, portable code should only rely on the following guarantee:

```text
Compare(lhs, rhs, length) == length
```

This indicates that all compared bytes are equal.

Code should not rely on any other specific return value.

---

# Memory Copy

## Copy

```rux
Copy(
    dest: *opaque,
    src: *const opaque,
    length: uint
)
```

Copies bytes from one memory location to another.

### Parameters

| Parameter | Description |
|-----------|-------------|
| `dest` | Destination memory block. |
| `src` | Source memory block. |
| `length` | Number of bytes to copy. |

### Example

```rux
Copy(
    destination,
    source,
    256
);
```

### Notes

Source and destination memory regions must be valid for at least `length` bytes.

---

# Example

## Allocating an Integer Array

```rux
import Std::Memory;

func Main() {

    let ptr = Alloc(
        10 * sizeof<int32>
    ) as *int32;

    Zero(
        ptr,
        10 * sizeof<int32>
    );

    Free(ptr);
}
```

---

# Platform Notes

## Windows

Memory allocation is implemented using the process heap.

## Linux

Memory allocation is implemented using anonymous memory mappings.

---

# Safety

The functions in this module operate on raw pointers.

The caller is responsible for:

- Freeing allocated memory.
- Avoiding buffer overflows.
- Avoiding use-after-free bugs.
- Ensuring valid pointer alignment where required.
- Ensuring copied regions are valid.

Incorrect usage may result in crashes or undefined behavior.

---

# Current Limitations

- BSD support is not yet implemented.
- Illumos support is not yet implemented.
- macOS support is not yet implemented.

These platforms currently contain placeholder implementations.
