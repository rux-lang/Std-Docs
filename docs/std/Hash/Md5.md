# MD5

**Module:** `Std::Hash::Md5`

128-bit MD5 cryptographic hash.

## Summary

```rux
struct Md5

Md5.Hash(message: char8[]) -> String
```

## Constants

| Constant | Value |
|----------|-------|
| `BlockSize` | 64 |
| `DigestSize` | 16 |

## Description

MD5 is a 128-bit hash function designed by Ronald Rivest in 1991. It uses a Merkle–Damgård construction with a Davies–Meyer compression function, processing 512-bit message blocks through 64 rounds of bitwise operations, modular addition, and non-linear functions (F, G, H, I).

The `Hash` method takes a `char8[]` and returns a hex-encoded digest string.

## Example

```rux
import Std::Hash::Md5;

func Main() {
    let digest = Md5::Hash(c8"abc");
    PrintLine(digest);
    // 900150983cd24fb0d6963f7d28e17f72
}
```

## Test Vectors

| Input | Expected Digest |
|-------|----------------|
| `c8""` | `d41d8cd98f00b204e9800998ecf8427e` |
| `c8"abc"` | `900150983cd24fb0d6963f7d28e17f72` |
| `c8"message digest"` | `f96b697d7cb7938d525a2f31aaf161d0` |
| `c8"Hello, World!"` | `65a8e27d8879283831b664bd8b7f0ad4` |

## Safety

MD5 is cryptographically broken and unsuitable for security purposes. Collision attacks are trivial — a single collision can be generated in under a second on modern hardware.

Do not use MD5 for:
- Password hashing
- Digital signatures
- Certificate verification
- Any security-critical integrity check

Use is acceptable for:
- Non-cryptographic checksums
- Legacy protocol compatibility
- Hash table keys (where collisions are tolerable)
