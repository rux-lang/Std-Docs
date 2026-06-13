# Sort

Adaptive sorting algorithms for integer arrays.

**Module:** `Std::Sort`

## Import

```rux
import Std::Sort;
```

## Description

The `Std::Sort` module provides four comparison-based sorting algorithms for integer arrays:

| Function | Algorithm | Strategy |
|----------|-----------|----------|
| [`Sort`](Sort.md) | Auto | Dispatches quadsort (≤128) or crumsort (>128) |
| [`Quadsort`](Quadsort.md) | Quadsort | Branchless quad-swap + merge network |
| [`Piposort`](Piposort.md) | Piposort | Pipelined odd-even merge sort |
| [`Crumsort`](Crumsort.md) | Crumsort | Adaptive quicksort with median-of-three pivot |

Each algorithm is available with both `int` and `uint64` element types (e.g. `Quadsort`, `QuadsortUint64`).

## Credit

These sorting algorithm implementations are based on the work of [scandum](https://github.com/scandum).
