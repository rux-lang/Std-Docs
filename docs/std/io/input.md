# Input

Reads a line of text from standard input.

**Module:** `Std::Io`

## Summary

```rux
import Std::Io::{ ReadLine, PrintLine };
import Std::Display;

func Main() -> int {
    PrintLine("Enter your name:");

    let name = ReadLine();

    PrintLine("Hello, {}!", name);

    return 0;
}
```

## Description

`ReadLine` reads a line of UTF-8 text from standard input and returns it as a `String`.

Trailing line terminators are automatically removed before the result is returned.

If an error occurs or end-of-file (EOF) is reached, an empty string is returned.

---

## Line Terminators

`ReadLine()` automatically removes trailing line terminators.

The following sequences are recognized:

```text
\n
\r\n
```

Example:

Input:

```text
Hello World\n
```

Returned string:

```text
Hello World
```

---

## Empty Input

If the user presses Enter without typing any characters:

Input:

```text

```

Returned value:

```rux
String::New()
```

#### Example

```rux
let text = ReadLine();

if text.IsEmpty() {
    PrintLine("No input");
}
```

---

## Memory Management

The returned string owns its character buffer.

Memory is dynamically allocated before the string is returned.

#### Example

```rux
let text = ReadLine();
```

The returned string remains valid after the function returns.

---

## Notes

- Input is read as UTF-8 text.
- Line terminators are removed automatically.
- A new string is allocated for every successful call.
- An empty string may indicate EOF, an input error, or an empty line.

---

## Platform Notes

### Linux / BSD / Illumos

- Input is read from standard input using the `read` syscall (4096-byte buffer).
- Linux: `SYS_READ = 0` (negative errno).
- BSD / Illumos: `SYS_READ = 3` (positive errno).
- Trailing `\n` and `\r` are stripped from the returned string.

### Windows

- Input is read from the standard input handle using the Windows file API.
- UTF-8 input is returned directly.

---
