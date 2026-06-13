# Standard Library

The Rux standard library is a collection of modules shipped with every Rux installation.

**Module:** `Std`

---

## Modules

| Module | Description |
| --- | --- |
| [Types](types/index.md) | Primitive type string conversion utilities (`Bool`, `Char`, `Float`, `Int`, `UInt`). |
| [Text](text/index.md) | Strings, formatting, and display infrastructure (in `Std`). |
| [IO](io/index.md) | Console input and output. |
| [Encoding](Encoding/index.md) | Base64 and hex encoding utilities. |
| [UUID](UUID/index.md) | UUID generation, parsing, and validation. |
| [HashMap](Collections/index.md) | Hash map from integer keys to opaque values. |
| [HashSet](Collections/index.md) | Hash set of unique integer keys. |
| [Sort](Sort/index.md) | Adaptive sorting algorithms for integer arrays. |
| [Hash](Hash/index.md) | Cryptographic hash functions (MD5, SHA-0/1/256/512, BLAKE2/3). |
| [Utilities](utilities/index.md) | Math, random number generation, and time. |
| [Memory](memory/memory.md) | Memory allocation and management. |
| [System](system/index.md) | OS interfaces, process control, and diagnostics. |

---

## Import

Each module can be imported individually:

```rux
import Std::Io;
import Std::Math;
import Std::UUID;
import Std::Sort;
import Std::Hash::Sha256;
```

Or import specific items:

```rux
import Std::Io::PrintLine;
import Std::Memory::Alloc;
import Std::UUID::UuidV4;
```
