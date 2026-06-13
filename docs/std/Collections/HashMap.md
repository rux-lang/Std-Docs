# HashMap

**Module:** `Std::HashMap`

An open-addressing hash map from integer keys to opaque pointer values.

## Summary

```rux
struct HashMap {
    data: *uint8;
    cap: uint;
    count: uint;
}

func Init(mapPtr: *HashMap)
func InitWithCap(mapPtr: *HashMap, capacity: uint)

extend HashMap {
    func Len(self) -> uint
    func Cap(self) -> uint
    func Set(self, key: int, value: *opaque)
    func Get(self, key: int) -> *opaque
    func Contains(self, key: int) -> bool
    func Remove(self, key: int) -> bool
    func Clear(self)
    func Free(self)
    func Keys(self) -> *int
    func Values(self) -> **opaque
}
```

## Description

HashMap is an open-addressing hash table using linear probing. Keys are signed `int` values, values are `*opaque` pointers. The map automatically resizes when the load factor exceeds ⅞.

The hash function uses a splitmix64-derived mixing step for good distribution.

## Initialization

A map must be initialized before use. Use `Init` for the default capacity (16) or `InitWithCap` for a custom minimum capacity. Maps should be freed with `Free` when no longer needed.

```rux
import Std::HashMap;

func Main() {
    var map: HashMap;
    HashMap::Init(&map);
    map.Set(1, 42 as *opaque);
    map.Free();
}
```

## Functions

### Set

```rux
func Set(self, key: int, value: *opaque)
```

Inserts or updates the value for `key`. Triggers a resize if the load factor exceeds ⅞.

### Get

```rux
func Get(self, key: int) -> *opaque
```

Returns the value for `key`, or `null` if not found.

#### Example

```rux
var map: HashMap;
HashMap::Init(&map);
map.Set(1, 42 as *opaque);
var val = map.Get(1); // 42 as *opaque
```

### Contains

```rux
func Contains(self, key: int) -> bool
```

Returns `true` if `key` exists in the map.

### Remove

```rux
func Remove(self, key: int) -> bool
```

Removes `key` from the map. Rehashes subsequent entries in the same probe chain to maintain correctness. Returns `true` if the key was found.

### Clear

```rux
func Clear(self)
```

Removes all entries without deallocating the backing array — capacity is preserved.

### Free

```rux
func Free(self)
```

Frees the backing array and resets the map to zero capacity.

### Keys

```rux
func Keys(self) -> *int
```

Returns a heap-allocated array of all keys. The caller must free it with `Std::Memory::Free`. Returns `null` if the map is empty.

### Values

```rux
func Values(self) -> **opaque
```

Returns a heap-allocated array of all values. The caller must free it with `Std::Memory::Free`. Returns `null` if the map is empty.

## Example

```rux
import Std::HashMap;

func Main() {
    var map: HashMap;
    HashMap::Init(&map);

    map.Set(10, "ten" as *opaque);
    map.Set(20, "twenty" as *opaque);

    var val = map.Get(10);
    // val points to "ten"

    map.Remove(20);
    // map.Len() == 1

    map.Free();
}
```
