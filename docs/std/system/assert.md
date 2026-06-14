# Assert

Terminates the program if a condition evaluates to `false`.

**Module:** `Std`

## Summary

```rux
Assert(
    condition: bool,
    message: char8[],
    file: char8[] = #file,
    function: char8[] = #function,
    line: uint = #line,
    column: uint = #column
)
```

## Description

`Assert` verifies that a condition is true.

If the condition evaluates to `false`, an error message is printed containing:

* The assertion message
* Source file
* Line number
* Column number
* Function name

After printing the diagnostic information, the program exits with status code `2`.

This function is intended for validating assumptions and detecting programming errors during development.

## Parameters

| Parameter   | Description                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| `condition` | Expression that must evaluate to `true`.                                         |
| `message`   | Message displayed when the assertion fails.                                      |
| `file`      | Source file where the assertion occurred. Automatically provided by `#file`.     |
| `function`  | Function where the assertion occurred. Automatically provided by `#function`.    |
| `line`      | Source line where the assertion occurred. Automatically provided by `#line`.     |
| `column`    | Source column where the assertion occurred. Automatically provided by `#column`. |

## Example

```rux
import Std::Assert;
import Std::Io::Print;

func Main() {
    let value = 42;

    Assert(value > 0, "value must be positive");

    Print("Assertion passed");
}
```

Output:

```text
Assertion passed
```

## Failed Assertion Example

```rux
import Std::Assert;
import Std::Io::Print;

func Main() {
    let value = -1;

    Assert(value > 0, "value must be positive");
}
```

Output:

```text
Assertion failed: value must be positive
--> Main.rux:7:11
    in function Main
```

## Platform Notes

`Assert` is available on all supported platforms.

| Platform | Supported |
| -------- | --------- |
| Linux    | yes       |
| Windows  | yes       |
| macOS    | Planned   |
| BSD      | yes       |
| Illumos  | yes       |

## Exit Code

| Code | Meaning          |
| ---- | ---------------- |
| `2`  | Assertion failed |
