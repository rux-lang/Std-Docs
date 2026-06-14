# Sort (Auto)

**Module:** `Std::Sort`

Automatically selects the best sorting algorithm based on array size.

## Summary

```rux
Sort(arr: *int, len: uint)
SortUint64(arr: *uint64, len: uint)
```

Both variants implement the same dispatcher. `Sort` operates on signed `int` arrays. `SortUint64` operates on `uint64` arrays — use it when sorting unsigned 64-bit values (e.g. pointers, hashes, timestamps).

## Description

The `Sort` function is a dispatcher that automatically selects the appropriate sorting algorithm based on input size:

| Size | Algorithm |
|------|-----------|
| ≤ 128 | Quadsort |
| > 128 | Crumsort |

This provides good performance across all input sizes without requiring the caller to choose an algorithm.

## Example

```rux
import Std::Sort;
import Std::Io::PrintLine;

func Main() {
    var arr: int[5] = [5, 3, 1, 4, 2];
    Sort::Sort(arr.data, 5u);
}
```

## Test Vectors

| Input | Length | Expected |
|-------|--------|----------|
| Reverse 0..299 | 300 | sorted |
| Random 300 | 300 | sorted |
| Reverse 0..127 | 128 (boundary) | sorted |
| Reverse 0..128 | 129 (past boundary) | sorted |

## Credit

The `Sort` dispatcher selects between the algorithms from [scandum](https://github.com/scandum) based on input size.
