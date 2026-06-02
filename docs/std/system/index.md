# System

Low-level operating system functionality.

**Module:** `Std::System`

## Import

```rux
import Std::System;
```

## Description

The `Std::System` module provides access to low-level operating system functionality.

Functions within this module interact directly with the underlying platform and are intended for tasks that require operating system integration. Implementations may vary between supported platforms such as Linux and Windows.

Many functions in this module expose behavior that affects the entire process, including process termination and other system-level operations.

## Platform Support

The `Std::System` module provides platform-specific implementations where necessary.

| Platform | Supported |
| -------- | --------- |
| Linux    |  yes      |
| Windows  |  yes      |
| macOS    | Planned   |
| BSD      | Planned   |
| Illumos  | Planned   |

## Functions

| Function          | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| [`Exit`](exit.md) | Terminates the current process with a specified exit code. |

## Notes

* Functions in this module may have platform-specific behavior.
* Some operations may immediately terminate the current process.
* Additional system-related functionality may be added in future releases of the standard library.
