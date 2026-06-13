# HashSet

**Module:** `Std::HashSet`

An open-addressing hash set of unique integer keys.

## Summary

```rux
struct HashSet {
    data: *uint8;
    cap: uint;
    count: uint;
}

func Init(setPtr: *HashSet)
func InitWithCap(setPtr: *HashSet, capacity: uint)

extend HashSet {
    func Insert(self, key: int)
    func Contains(self, key: int) -> bool
    func Remove(self, key: int) -> bool
    func Clear(self)
    func Free(self)
    func Len(self) -> uint
    func Cap(self) -> uint
    func Keys(self) -> *int
}
```

## Description

HashSet is an open-addressing hash set using linear probing. Keys are signed `int` values. The set automatically resizes when the load factor exceeds ⅞.

The hash function uses a splitmix64-derived mixing step for good distribution.

## Initialization

A set must be initialized before use. Use `Init` for the default capacity (16) or `InitWithCap` for a custom minimum capacity. Sets should be freed with `Free` when no longer needed.

```rux
import Std::HashSet;

func Main() {
    var set: HashSet;
    HashSet::Init(&set);
    set.Insert(42);
    set.Free();
}
```

## Functions

### Insert

```rux
func Insert(self, key: int)
```

Inserts `key` into the set. Duplicate insertions are idempotent. Triggers a resize if the load factor exceeds ⅞.

### Contains

```rux
func Contains(self, key: int) -> bool
```

Returns `true` if `key` exists in the set.

#### Example

```rux
var set: HashSet;
HashSet::Init(&set);
set.Insert(42);
var found = set.Contains(42); // true
```

### Remove

```rux
func Remove(self, key: int) -> bool
```

Removes `key` from the set. Rehashes subsequent entries in the same probe chain to maintain correctness. Returns `true` if the key was found.

### Clear

```rux
func Clear(self)
```

Removes all entries without deallocating the backing array — capacity is preserved.

### Free

```rux
func Free(self)
```

Frees the backing array and resets the set to zero capacity.

### Keys

```rux
func Keys(self) -> *int
```

Returns a heap-allocated array of all keys. The caller must free it with `Std::Memory::Free`. Returns `null` if the set is empty.

## Example

```rux
import Std::HashSet;

func Main() {
    var set: HashSet;
    HashSet::Init(&set);

    set.Insert(10);
    set.Insert(20);
    set.Insert(30);

    var found = set.Contains(20); // true
    var missing = set.Contains(99); // false

    set.Remove(10);
    // set.Len() == 2

    set.Free();
}
```
