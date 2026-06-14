# Hex

**Module:** `Std::Hex`

Encodes and decodes binary data to and from hexadecimal (base-16) text.

## Summary

```rux
Encode(bytes: char8[]) -> String
EncodeBytes(bytes: *const char8, length: uint) -> String

Decode(hex: char8[]) -> String
DecodeBytes(hex: *const char8, length: uint) -> String
```

## Description

The Hex module implements hexadecimal encoding and decoding using lowercase hex digits (`0-9`, `a-f`). Both lowercase and uppercase hex input are accepted for decoding.

`Encode` and `EncodeBytes` convert binary data to a lowercase hex string. `Decode` and `DecodeBytes` convert a hex string back to binary. Input must have an even length; odd-length inputs trigger a fatal error.

## Functions

### Encode

```rux
func Encode(bytes: char8[]) -> String
```

Encodes the byte array `bytes` into a lowercase hex string.

#### Example

```rux
import Std::Hex;

func Main() {
    let encoded = Hex::Encode(c8"hello");
    PrintLine(encoded);
    // 68656c6c6f
}
```

---

### EncodeBytes

```rux
func EncodeBytes(bytes: *const char8, length: uint) -> String
```

Encodes `length` bytes at `bytes` into a lowercase hex string.

#### Example

```rux
import Std::Hex;

func Main() {
    var data: char8[5] = c8"hello";
    let encoded = Hex::EncodeBytes(data.data, 5u);
    PrintLine(encoded);
    // 68656c6c6f
}
```

---

### Decode

```rux
func Decode(hex: char8[]) -> String
```

Decodes a hex string into the original bytes. Accepts uppercase and lowercase hex digits. Triggers a fatal error if the input has an odd length or contains invalid characters.

#### Example

```rux
import Std::Hex;

func Main() {
    let decoded = Hex::Decode(c8"68656c6c6f");
    PrintLine(decoded);
    // hello
}
```

---

### DecodeBytes

```rux
func DecodeBytes(hex: *const char8, length: uint) -> String
```

Decodes a hex string of `length` bytes. Accepts uppercase and lowercase hex digits. Triggers a fatal error if the input has an odd length or contains invalid characters.

---

## Test Vectors

### Encoding

| Input | Hex |
|-------|-----|
| `"hello"` | `"68656c6c6f"` |

### Decoding

| Hex | Decoded |
|-----|---------|
| `"dffd6021bb2bd5b0"` | (8 raw bytes) |
| `"DFFD6021BB2BD5B0"` | (same bytes, uppercase accepted) |
| `"001122aAbBcC"` | (mixed case accepted) |
| `"68656c6c6f"` | `"hello"` |
| `"ff00"` | `\xff\x00` |
| `""` | `""` |
