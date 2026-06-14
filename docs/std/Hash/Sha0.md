# SHA-0

**Module:** `Std::Hash::Sha0`

160-bit SHA-0 cryptographic hash.

## Summary

```rux
struct Sha0

Sha0.Hash(message: char8[]) -> String
```

## Constants

| Constant | Value |
|----------|-------|
| `BlockSize` | 64 |
| `DigestSize` | 20 |

## Description

SHA-0 is a 160-bit hash function published by NIST in 1993 as the first member of the Secure Hash Algorithm family. It uses a Merkle–Damgård construction processing 512-bit blocks through 80 rounds. SHA-0 is structurally identical to SHA-1 but omits a critical left rotate in the message expansion schedule, making it significantly weaker.

The `Hash` method takes a `char8[]` and returns a hex-encoded digest string.

## Example

```rux
import Std::Hash::Sha0;

func Main() {
    let digest = Sha0::Hash(c8"abc");
    PrintLine(digest);
    // 0164b8a914cd2a5e74c4f7ff082c4d97f1edf880
}
```

## Test Vectors

| Input | Expected Digest |
|-------|----------------|
| `c8""` | `f96cea198ad1dd5617ac084a3d92c6107708c0ef` |
| `c8"a"` | `37f297772fae4cb1ba39b6cf9cf0381180bd62f2` |
| `c8"abc"` | `0164b8a914cd2a5e74c4f7ff082c4d97f1edf880` |

## Safety

SHA-0 is cryptographically broken. Collision attacks exist with complexity far below the brute-force threshold. It was withdrawn shortly after publication and replaced by SHA-1 (which itself is now also broken).

Do not use SHA-0 for:
- Password hashing
- Digital signatures
- Certificate verification
- Any security-critical integrity check

Use is acceptable for:
- Legacy protocol compatibility
- Research and educational purposes
