# SHA-1

**Module:** `Std::Hash::Sha1`

160-bit SHA-1 cryptographic hash.

## Summary

```rux
struct Sha1

Sha1.Hash(message: char8[]) -> String
```

## Constants

| Constant | Value |
|----------|-------|
| `BlockSize` | 64 |
| `DigestSize` | 20 |

## Description

SHA-1 is a 160-bit hash function published by NIST in 1995 as a replacement to SHA-0. It uses a Merkle–Damgård construction processing 512-bit blocks through 80 rounds. The key difference from SHA-0 is a single left rotate added to the message expansion schedule, which fixed SHA-0's critical weakness.

The `Hash` method takes a `char8[]` and returns a hex-encoded digest string.

## Example

```rux
import Std::Hash::Sha1;

func Main() {
    let digest = Sha1::Hash(c8"abc");
    PrintLine(digest);
    // a9993e364706816aba3e25717850c26c9cd0d89d
}
```

## Test Vectors

| Input | Expected Digest |
|-------|----------------|
| `c8""` | `da39a3ee5e6b4b0d3255bfef95601890afd80709` |
| `c8"abc"` | `a9993e364706816aba3e25717850c26c9cd0d89d` |
| `c8"message digest"` | `c12252ceda8be8994d5fa0290a47231c1d16aae3` |
| `c8"Hello, World!"` | `0a0a9f2a6772942557ab5355d76af442f8f65e01` |

## Safety

SHA-1 is cryptographically broken. The SHAttered attack (2017) demonstrated a practical collision attack with a cost of approximately 110,000 GPU years. Since 2024, chosen-prefix collision attacks have become practical, and SHA-1 is no longer considered safe for any collision-resistant use case.

Do not use SHA-1 for:
- Password hashing
- Digital signatures
- Certificate verification
- Any security-critical integrity check

Use is acceptable for:
- Legacy protocol compatibility (e.g., Git object hashes)
- Non-cryptographic checksums
- Hash table keys (where collisions are tolerable)
