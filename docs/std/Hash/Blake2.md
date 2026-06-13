# BLAKE2

**Module:** `Std::Hash::Blake2`

512-bit BLAKE2 cryptographic hash.

## Summary

```rux
struct Blake2

Blake2.Hash(message: char8[]) -> String
```

## Constants

| Constant | Value |
|----------|-------|
| `BlockSize` | 128 |
| `DigestSize` | 64 |

## Description

BLAKE2 is a 512-bit hash function designed in 2012 as a faster alternative to SHA-3. It is based on the ChaCha stream cipher, using a HAIFA construction (a variant of Merkle–Damgård with randomized hashing). The compression function applies 12 rounds of the G-function, which mixes 64-bit words through addition, XOR, and rotation operations.

BLAKE2 is cryptographically secure and offers better performance than SHA-2 on most platforms.

The `Hash` method takes a `char8[]` and returns a hex-encoded digest string.

## Example

```rux
import Std::Hash::Blake2;

func Main() {
    let digest = Blake2::Hash(c8"abc");
    PrintLine(digest);
    // ba80a53f981c4d0d6a2797b69f12f6e94c212f14685ac4b74b12bb6fdbffa2d17d87c5392aab792dc252d5de4533cc9518d38aa8dbf1925ab92386edd4009923
}
```

## Test Vectors

| Input | Expected Digest |
|-------|----------------|
| `c8""` | `786a02f742015903c6c6fd852552d272912f4740e15847618a86e217f71f5419d25e1031afee585313896444934eb04b903a685b1448b755d56f701afe9be2ce` |
| `c8"abc"` | `ba80a53f981c4d0d6a2797b69f12f6e94c212f14685ac4b74b12bb6fdbffa2d17d87c5392aab792dc252d5de4533cc9518d38aa8dbf1925ab92386edd4009923` |
| `c8"message digest"` | `3c26ce487b1c0f062363afa3c675ebdbf5f4ef9bdc022cfbef91e3111cdc283840d8331fc30a8a0906cff4bcdbcd230c61aaec60fdfad457ed96b709a382359a` |
| `c8"Hello, World!"` | `7dfdb888af71eae0e6a6b751e8e3413d767ef4fa52a7993daa9ef097f7aa3d949199c113caa37c94f80cf3b22f7d9d6e4f5def4ff927830cffe4857c34be3d89` |
