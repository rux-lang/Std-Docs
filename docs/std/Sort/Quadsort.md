# Quadsort

**Module:** `Std::Sort`

A branchless stable comparison sort based on quad-swap and merge.

## Summary

```rux
Quadsort(arr: *int, len: uint)
QuadsortUint64(arr: *uint64, len: uint)
```

Both variants implement the same algorithm. `Quadsort` operates on signed `int` arrays. `QuadsortUint64` operates on `uint64` arrays — use it when sorting unsigned 64-bit values (e.g. pointers, hashes, timestamps).

## Description

Quadsort is a branchless, stable sorting algorithm that sorts arrays by performing quad-swaps on groups of four elements, then merging them in a power-of-two merge network. It avoids the traditional merge sort's worst-case overhead by detecting runs and skipping redundant merges.

The algorithm performs well on small arrays (where it acts as an insertion sort replacement) and maintains good performance on larger arrays through its adaptive merge network.

Quadsort is faster than quicksort on most data distributions. Its branchless parity merge eliminates branch mispredictions, and its adaptive run detection allows it to sort already-ordered data using only `n` comparisons instead of `n log n`.

## Example

```rux
import Std::Sort;
import Std::Io::PrintLine;

func Main() {
    var arr: int[5] = [5, 3, 1, 4, 2];
    Sort::Quadsort(arr.data, 5u);
}
```

## Test Vectors

| Input | Length | Expected |
|-------|--------|----------|
| `[2, 1]` | 2 | sorted |
| `[5, 3, 1, 4, 2]` | 5 | sorted |
| Reverse 0..99 | 100 | sorted |
| Random 100 | 100 | sorted |
| Already sorted 0..99 | 100 | still sorted |
| All equal (42 × 80) | 80 | sorted |

## Credit

Based on [scandum/quadsort](https://github.com/scandum/quadsort).
