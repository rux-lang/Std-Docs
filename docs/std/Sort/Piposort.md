# Piposort

**Module:** `Std::Sort`

A pipelined odd-even merge sort.

## Summary

```rux
Piposort(arr: *int, len: uint)
PiposortUint64(arr: *uint64, len: uint)
```

Both variants implement the same algorithm. `Piposort` operates on signed `int` arrays. `PiposortUint64` operates on `uint64` arrays — use it when sorting unsigned 64-bit values (e.g. pointers, hashes, timestamps).

## Description

Piposort (pipeline odd-even sort) is a comparison-based sorting algorithm that recursively divides the array into four quarters, sorts each with piposort, then merges using a pipelined odd-even merge network. For arrays of 7 elements or fewer, it falls back to an odd-even transposition sort.

The algorithm uses a temporary swap buffer allocated on the heap. If allocation fails, piposort falls back to quadsort.

Piposort is a simplified quadsort with a much smaller code footprint while still being very fast. It is one of the fastest sorts for random data and is ideal for porting or understanding branchless merge sort concepts.

## Example

```rux
import Std::Sort;
import Std::Io::PrintLine;

func Main() {
    var arr: int[5] = [5, 3, 1, 4, 2];
    Sort::Piposort(arr.data, 5u);
}
```

## Test Vectors

| Input | Length | Expected |
|-------|--------|----------|
| `[42]` | 1 | sorted |
| Reverse 0..99 | 100 | sorted |
| Random 100 | 100 | sorted |
| Already sorted 0..99 | 100 | still sorted |

## Credit

Based on [scandum/piposort](https://github.com/scandum/piposort).
