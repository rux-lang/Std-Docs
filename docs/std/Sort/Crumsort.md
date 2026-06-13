# Crumsort

**Module:** `Std::Sort`

An adaptive quicksort variant with median-of-three pivot selection.

## Summary

```rux
Crumsort(arr: *int, len: uint)
CrumsortUint64(arr: *uint64, len: uint)
```

Both variants implement the same algorithm. `Crumsort` operates on signed `int` arrays. `CrumsortUint64` operates on `uint64` arrays — use it when sorting unsigned 64-bit values (e.g. pointers, hashes, timestamps).

## Description

Crumsort is an adaptive sorting algorithm based on quicksort with Hoare-style partitioning. It uses median-of-three pivot selection and falls back to quadsort for sub-arrays of 64 elements or fewer.

The algorithm sorts in-place without allocating heap memory, making it suitable for large arrays where quadsort's merge buffer may be costly.

Crumsort is a hybrid unstable in-place quicksort/mergesort that outperforms pdqsort on most data distributions. Its branchless fulcrum partitioning scheme and median-of-n pivot selection give it exceptional performance on large arrays while using minimal auxiliary memory (512 elements of stack).

## Example

```rux
import Std::Sort;
import Std::Io::PrintLine;

func Main() {
    var arr: int[5] = [5, 3, 1, 4, 2];
    Sort::Crumsort(arr.data, 5u);
}
```

## Test Vectors

| Input | Length | Expected |
|-------|--------|----------|
| `[42]` | 1 | sorted |
| Reverse 0..99 | 100 | sorted |
| Random 100 | 100 | sorted |
| Reverse 0..199 | 200 | sorted |
| Reverse 0..64 | 65 | sorted |

## Credit

Based on [scandum/crumsort](https://github.com/scandum/crumsort).
