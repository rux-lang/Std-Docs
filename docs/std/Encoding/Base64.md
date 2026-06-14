# Base64

**Module:** `Std::Base64`

Encodes and decodes binary data to and from Base64 text.

## Summary

```rux
EncodeBase64(data: *const char8, length: uint) -> String
DecodeBase64(data: *const char8, length: uint) -> String
```

## Description

The Base64 module implements standard Base64 encoding and decoding (RFC 4648) using the `+` and `/` characters with `=` padding.

`EncodeBase64` encodes a byte buffer into a Base64 string. `DecodeBase64` decodes a Base64 string back into the original bytes.

## Functions

> **Note:** A `char8[]` convenience wrapper is planned for a future release.

### EncodeBase64

```rux
func EncodeBase64(data: *const char8, length: uint) -> String
```

Encodes `length` bytes at `data` into a Base64-encoded string.

#### Example

```rux
import Std::Base64;

func Main() {
    var data: char8[6] = c8"foobar";
    let encoded = Base64::EncodeBase64(data.data, 6u);
    PrintLine(encoded);
    // Zm9vYmFy
}
```

---

### DecodeBase64

```rux
func DecodeBase64(data: *const char8, length: uint) -> String
```

Decodes a Base64 string of `length` bytes back into the original binary data. Input must have a length that is a multiple of 4. Invalid characters trigger a fatal error.

#### Example

```rux
import Std::Base64;

func Main() {
    var b64: char8[8] = c8"Zm9vYmFy";
    let decoded = Base64::DecodeBase64(b64.data, 8u);
    // decoded contains raw bytes — printing directly
    // only produces readable output for text data
    PrintLine(decoded);
    // foobar
}
```

---

## Test Vectors

### Encoding

| Input | Length | Base64 |
|-------|--------|--------|
| `""` | 0 | `""` |
| `"f"` | 1 | `"Zg=="` |
| `"fo"` | 2 | `"Zm8="` |
| `"foo"` | 3 | `"Zm9v"` |
| `"foob"` | 4 | `"Zm9vYg=="` |
| `"fooba"` | 5 | `"Zm9vYmE="` |
| `"foobar"` | 6 | `"Zm9vYmFy"` |
| `"Hello, World!"` | 13 | `"SGVsbG8sIFdvcmxkIQ=="` |
| `\x00\x00\x00` | 3 | `"AAAA"` |

### Decoding

| Base64 | Decoded |
|--------|---------|
| `"Zg=="` | `"f"` |
| `"Zm9v"` | `"foo"` |
| `"SGVsbG8sIFdvcmxkIQ=="` | `"Hello, World!"` |
