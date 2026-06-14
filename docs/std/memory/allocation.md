# Allocation

## Alloc

```rux
Alloc(size: uint) -> *opaque
```

Allocates a block of memory.

#### Parameters

| Parameter | Description |
|-----------|-------------|
| `size` | Number of bytes to allocate. |

#### Return Value

Returns a pointer to the allocated memory block.

Returns `null` if allocation fails.

#### Example

```rux
let ptr = Alloc(256);
```

---

## Realloc

```rux
Realloc(ptr: *opaque, size: uint) -> *opaque
```

Resizes a previously allocated memory block.

#### Parameters

| Parameter | Description |
|-----------|-------------|
| `ptr` | Existing memory block. |
| `size` | New size in bytes. |

#### Return Value

Returns a pointer to the resized memory block.

#### Notes

- Existing contents are preserved up to the smaller of the old and new sizes.
- Passing `null` behaves like `Alloc()`.
- Passing `0` frees the memory and returns `null`.

#### Example

```rux
ptr = Realloc(ptr, 512);
```

---

## Free

```rux
Free(ptr: *opaque)
```

Releases memory previously allocated by `Alloc()` or `Realloc()`.

#### Example

```rux
Free(ptr);
```

#### Notes

- Passing `null` is allowed.
- Accessing memory after it has been freed is undefined behavior.
