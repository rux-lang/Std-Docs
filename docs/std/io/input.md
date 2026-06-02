# ReadLine

Reads a line of text from standard input.

**Module:** `Std::Io`

## Summary

```rux
ReadLine() -> String
```

## Description

`ReadLine` reads a line of UTF-8 text from standard input and returns it as a `String`.

Trailing line terminators are automatically removed before the result is returned.

If an error occurs or end-of-file (EOF) is reached, an empty string is returned.

---

# Function

## ReadLine

```rux
ReadLine() -> String
```

Reads a line from standard input.

### Return Value

Returns a `String` containing the characters read from standard input.

Returns an empty string when:

- End-of-file (EOF) is reached.
- An input error occurs.
- The input line contains only a line terminator.

### Example

```rux
import Std::Io;

func Main() {

    Print("Enter your name: ");

    let name = ReadLine();

    PrintLine(
        "Hello, {}!",
        name
    );
}
```

Input:

```text
Alex
```

Output:

```text
Enter your name: Hello, Alex!
```

---

# Line Terminators

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

# Empty Input

If the user presses Enter without typing any characters:

Input:

```text

```

Returned value:

```rux
String::New()
```

### Example

```rux
let text = ReadLine();

if text.IsEmpty() {
    PrintLine("No input");
}
```

---

# Memory Management

The returned string owns its character buffer.

Memory is dynamically allocated before the string is returned.

### Example

```rux
let text = ReadLine();
```

The returned string remains valid after the function returns.

---

# Notes

- Input is read as UTF-8 text.
- Line terminators are removed automatically.
- A new string is allocated for every successful call.
- An empty string may indicate EOF, an input error, or an empty line.

---

# Platform Notes

## Linux

- Input is read from standard input using operating system read calls.
- UTF-8 input is returned directly.

## Windows

- Input is read from the standard input handle using the Windows file API.
- UTF-8 input is returned directly.

---

# Current Limitations

- Maximum input length is currently 4096 bytes.
- Input longer than 4096 bytes is truncated.
- BSD support is not yet implemented.
- Illumos support is not yet implemented.
- macOS support is not yet implemented.

These platforms currently contain placeholder implementations.

---

# Example: Simple Prompt

```rux
import Std::Io;

func Main() {

    Print("Username: ");
    let username = ReadLine();

    Print("Password: ");
    let password = ReadLine();

    PrintLine(
        "Welcome, {}!",
        username
    );
}
```