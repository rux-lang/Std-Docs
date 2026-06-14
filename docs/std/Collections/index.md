# Collections

Hash-based data structures for key-value and set storage.

**Modules:** `Std::HashMap`, `Std::HashSet`

## Import

```rux
import Std::HashMap;
import Std::HashSet;
```

## Description

The Collections modules provide open-addressing hash table implementations.

`Std::HashMap` maps integer keys to opaque pointer values with operations for insert, lookup, removal, and iteration over keys and values.

`Std::HashSet` stores unique integer keys with operations for insert, membership testing, removal, and iteration.

## Modules

| Module | Description |
| ------ | ----------- |
| [`HashMap`](HashMap.md) | Hash map from integer keys to opaque pointer values. |
| [`HashSet`](HashSet.md) | Hash set of unique integer keys. |
