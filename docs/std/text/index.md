# Text

String handling, formatting, and display utilities.

## Import

```rux
import Std;
```

## Description

String is a dynamically-sized UTF-8 byte string with methods for manipulation, search, and case conversion. `StringBuilder` enables efficient incremental string construction.

`Format` creates strings from templates with placeholder substitution. Types that implement the `Display` interface can be used with format strings and output functions.

## Types

| Type | Description |
| ---- | ----------- |
| [`String`](string.md) | A dynamically-sized UTF-8 byte string. |
| [`StringBuilder`](stringbuilder.md) | Efficiently constructs strings through incremental appends. |

## Functions

| Function | Description |
| -------- | ----------- |
| [`Format`](format.md) | Formats values into a string using replacement fields. |

## Interfaces

| Interface | Description |
| --------- | ----------- |
| [`Display`](display.md) | Interface for types that can be converted to a string representation. |
