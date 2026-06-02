# Exit

Terminates the current process with the specified exit code.

**Module:** `Std::System`

## Summary

```rux
import Std::System;
```

## Synopsis

```rux
Exit(code: uint32)
```

## Description

`Exit` immediately terminates the current process and returns the specified exit code to the operating system.

Execution does not continue after a call to `Exit`.

## Parameters

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| `code`    | Exit code returned to the operating system. |

## Example

```rux
import Std::System;

func Main() {
    Exit(0);
}
```

## Exit Codes

The meaning of exit codes is application-defined.

By convention:

| Code     | Meaning              |
| -------- | -------------------- |
| `0`      | Successful execution |
| Non-zero | An error occurred    |
