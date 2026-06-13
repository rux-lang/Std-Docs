# BLAKE3

**Module:** `Std::Hash::Blake3`

256-bit BLAKE3 cryptographic hash.

## Summary

```rux
struct Blake3

Blake3.Hash(message: char8[]) -> String
```

## Constants

| Constant | Value |
|----------|-------|
| `BlockSize` | 64 |
| `DigestSize` | 32 |

## Description

BLAKE3 is a 256-bit hash function designed in 2020 as the successor to BLAKE2. It uses a Merkle tree construction enabling parallel hashing of large inputs, with a base compression function derived from BLAKE2s (the 32-bit word variant). The algorithm applies 7 rounds of the G-function and supports incremental updates, keyed hashing, and extendable output (XOF).

BLAKE3 is cryptographically secure and significantly outperforms SHA-2 and BLAKE2 on multi-threaded platforms and large inputs.

The `Hash` method takes a `char8[]` and returns a hex-encoded digest string.

## Example

```rux
import Std::Hash::Blake3;

func Main() {
    let digest = Blake3::Hash(c8"abc");
    PrintLine(digest);
    // 6437b3ac38465133ffb63b75273a8db548c558465d79db03fd359c6cd5bd9d85
}
```

## Test Vectors

| Input | Expected Digest |
|-------|----------------|
| `c8""` | `af1349b9f5f9a1a6a0404dea36dcc9499bcb25c9adc112b7cc9a93cae41f3262` |
| `c8"abc"` | `6437b3ac38465133ffb63b75273a8db548c558465d79db03fd359c6cd5bd9d85` |
| `c8"Hello, World!"` | `288a86a79f20a3d6dccdca7713beaed178798296bdfa7913fa2a62d9727bf8f8` |
