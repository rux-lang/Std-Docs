# Fatal

Terminates the program immediately with a fatal error message.

## Summary

```rux
Fatal(
    message: char8[],
    file: char8[] = #file,
    function: char8[] = #function,
    line: uint = #line,
    column: uint = #column
)
```

## Description

`Fatal` reports an unrecoverable error and immediately terminates program execution.

The function prints a diagnostic message containing:

* The supplied error message
* Source file
* Line number
* Column number
* Function name

After printing the diagnostic information, the program exits with status code `1`.

Unlike `Assert`, `Fatal` always terminates the program and does not require a condition.

## Parameters

| Parameter  | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| `message`  | Description of the fatal error.                                              |
| `file`     | Source file where the error occurred. Automatically provided by `#file`.     |
| `function` | Function where the error occurred. Automatically provided by `#function`.    |
| `line`     | Source line where the error occurred. Automatically provided by `#line`.     |
| `column`   | Source column where the error occurred. Automatically provided by `#column`. |

## Example

```rux
import Std::Fatal;

func Main() {
    Fatal("Configuration file is missing");
}
```

Output:

```text
Fatal error: Configuration file is missing
--> Main.rux:4:10
    in function Main
```

## Exit Code

| Code | Meaning     |
| ---- | ----------- |
| `1`  | Fatal error |
