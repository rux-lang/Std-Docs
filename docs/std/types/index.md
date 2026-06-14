# Types

Primitive type string conversion utilities.

## Import

```rux
import Std;
```

## Description

The `Std` module provides string conversion functions for all primitive types.

Each type provides a `ToString` function that returns a string representation of the value. All primitive types implement the `Display` interface, making them usable with formatting and output functions.

## Types

| Type | Description |
| ---- | ----------- |
| [`Bool`](bool.md) | Boolean types (`bool8`, `bool16`, `bool32`). |
| [`Char`](char.md) | Character types (`char8`, `char16`, `char32`). |
| [`Float`](float.md) | Floating-point types (`float32`, `float64`). |
| [`Int`](int.md) | Signed integer types (`int8`, `int16`, `int32`, `int64`). |
| [`UInt`](uint.md) | Unsigned integer types (`uint8`, `uint16`, `uint32`, `uint64`). |
