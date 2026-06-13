# IO

Console input and output utilities.

**Module:** `Std::Io`

## Import

```rux
import Std::Io;
```

## Description

The `Std::Io` module provides console input and output functionality.

Output is handled by `Print` and `PrintLine`, which support primitive types, strings, and formatted output via the `Display` interface.

Input is handled by `ReadLine`, which reads a line of UTF-8 text from standard input.

## Functions

| Function | Description |
| -------- | ----------- |
| [`Print`](print.md) | Writes a value to standard output without appending a newline. |
| [`PrintLine`](print.md#printline) | Writes a value to standard output and appends a newline. |
| [`ReadLine`](input.md) | Reads a line of UTF-8 text from standard input. |
