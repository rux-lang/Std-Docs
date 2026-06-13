# UUID

**Module:** `Std::UUID`

Universally Unique Identifier generation, parsing, and validation.

## Summary

```rux
UuidV4() -> String
UuidV4Bytes() -> String
UuidNil() -> String
UuidToString(bytes: *const uint8, length: uint) -> String
UuidParse(str: char8[]) -> String
UuidParse(str: *const char8, length: uint) -> String
IsValidUuid(str: char8[]) -> bool
IsValidUuid(str: *const char8, length: uint) -> bool
```

## Description

The UUID module generates version 4 (random) UUIDs using a xorshift PRNG seeded from `TickMs`. It also provides parsing, validation, and conversion between binary and string representations.

UUIDs are 128-bit identifiers formatted as 36-character strings: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.

## Functions

### UuidV4

```rux
func UuidV4() -> String
```

Generates a random version 4 UUID as a 36-character string. The version nibble (position 14) is always `4`, and the variant nibble (position 19) is set according to RFC 4122.

#### Example

```rux
import Std::UUID;

func Main() {
    let uuid = UUID::UuidV4();
    PrintLine(uuid);
    // e.g. "550e8400-e29b-41d4-a716-446655440000"
}
```

---

### UuidV4Bytes

```rux
func UuidV4Bytes() -> String
```

Generates a random version 4 UUID as 16 raw bytes (not hex-encoded). The returned `String` has `length == 16`.

#### Example

```rux
import Std::UUID;

func Main() {
    let bytes = UUID::UuidV4Bytes();
    // bytes.length == 16
}
```

---

### UuidNil

```rux
func UuidNil() -> String
```

Returns the nil UUID: `"00000000-0000-0000-0000-000000000000"`.

---

### UuidToString

```rux
func UuidToString(bytes: *const uint8, length: uint) -> String
```

Converts 16 binary bytes into a 36-character UUID string. Returns an empty string if `length < 16`.

---

### UuidParse

```rux
func UuidParse(str: char8[]) -> String
func UuidParse(str: *const char8, length: uint) -> String
```

Parses a 36-character UUID string into 16 raw bytes. Triggers a fatal error if the input is not exactly 36 characters or contains invalid characters.

#### Example

```rux
import Std::UUID;

func Main() {
    var buf: char8[36] = c8"550e8400-e29b-41d4-a716-446655440000";
    let bytes = UUID::UuidParse(buf.data, 36u);
    // bytes.length == 16
}
```

---

### IsValidUuid

```rux
func IsValidUuid(str: char8[]) -> bool
func IsValidUuid(str: *const char8, length: uint) -> bool
```

Validates whether a string is a properly formatted UUID. Returns `true` if the string is exactly 36 characters with hyphens at positions 8, 13, 18, and 23, and hex digits elsewhere.

#### Example

```rux
import Std::UUID;

func Main() {
    var buf: char8[36] = c8"550e8400-e29b-41d4-a716-446655440000";
    let valid = UUID::IsValidUuid(buf.data, 36u); // true
}
```

---

## Example

```rux
import Std::UUID;

func Main() {
    let uuid = UUID::UuidV4();
    let valid = UUID::IsValidUuid(uuid.data, uuid.length);
    // valid == true

    var buf: char8[36] = c8"550e8400-e29b-41d4-a716-446655440000";
    let bytes = UUID::UuidParse(buf.data, 36u);
    let restored = UUID::UuidToString(bytes.data as *const uint8, bytes.length);
    // restored == "550e8400-e29b-41d4-a716-446655440000"
}
```

## Test Vectors

| Function | Input | Expected |
|----------|-------|----------|
| `UuidNil` | — | `"00000000-0000-0000-0000-000000000000"` |
| `IsValidUuid` | `"00000000-0000-0000-0000-000000000000"` | `true` |
| `UuidV4` | — | valid UUIDv4 (version nibble `4`, variant `8/b`) |
| `UuidParse` + `UuidToString` | `"550e8400-e29b-41d4-a716-446655440000"` | roundtrip match |
