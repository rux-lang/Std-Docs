# Encoding

Binary-to-text encoding and decoding utilities.

**Modules:** `Std::Base64`, `Std::Hex`

## Import

```rux
import Std::Base64;
import Std::Hex;
```

## Description

The Encoding modules provide conversion between binary data and text representations.

`Std::Base64` encodes and decodes data using the Base64 scheme, suitable for transmitting binary data over text-based protocols.

`Std::Hex` encodes and decodes data using hexadecimal (base-16) representation, commonly used for debugging, hashes, and low-level data inspection.

## Modules

| Module | Description |
| ------ | ----------- |
|[`Base64`](Base64.md) | Encodes and decodes binary data to and from Base64 text. |
|[`Hex`](Hex.md)| Encodes and decodes binary data to and from hexadecimal text. |
