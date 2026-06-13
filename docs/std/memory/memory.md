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

## Example

### Allocating an Integer Array

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

## Platform Notes

### Windows

Memory allocation is implemented using the process heap.

### macOS

macOS support is planned for a future release.

### Linux / BSD / Illumos

Memory allocation is implemented using anonymous memory mappings (`mmap` with `MAP_PRIVATE | MAP_ANONYMOUS`).

An 8-byte header preceding each returned pointer stores the allocation size, which is used by `Free` to determine the region length for `munmap`.

## Safety

The functions in this module operate on raw pointers.

The caller is responsible for:

- Freeing allocated memory.
- Avoiding buffer overflows.
- Avoiding use-after-free bugs.
- Ensuring valid pointer alignment where required.
- Ensuring copied regions are valid.

Incorrect usage may result in crashes or undefined behavior.
