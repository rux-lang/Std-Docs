# Hash

Cryptographic hash function implementations.

**Modules:** `Std::Hash`

## Import

```rux
import Std::Hash::Sha256;
```

## Description

The Hash modules provide cryptographic hash function implementations. Each module exposes a struct type (e.g., `Sha256`) with a `Hash` method that takes a byte array and returns a hex-encoded digest string.

## Modules

| Module | Description |
| ------ | ----------- |
| [`Md5`](Md5.md) | 128-bit MD5 hash. |
| [`Sha0`](Sha0.md) | 160-bit SHA-0 hash. |
| [`Sha1`](Sha1.md) | 160-bit SHA-1 hash. |
| [`Sha256`](Sha256.md) | 256-bit SHA-256 hash. |
| [`Sha512`](Sha512.md) | 512-bit SHA-512 hash. |
| [`Blake2`](Blake2.md) | 512-bit BLAKE2 cryptographic hash. |
| [`Blake3`](Blake3.md) | 256-bit BLAKE3 cryptographic hash. |

## Notes

- BLAKE1 and SHA3 modules are planned for a future release.
