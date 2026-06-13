# Overview

Low-level operating system functionality.

## Import

```rux
import Std::Exit;
import Std::Assert;
import Std::Fatal;
```

## Description

The System category groups functions that provide access to low-level operating system functionality. `Exit`, `Assert`, and `Fatal` live in the root `Std` module.

Functions within this module interact directly with the underlying platform and are intended for tasks that require operating system integration. Implementations may vary between supported platforms such as Linux and Windows.

Many functions in this module expose behavior that affects the entire process, including process termination and other system-level operations.

## Platform Support

The System category provides platform-specific implementations where necessary.

| Platform | Supported |
| -------- | --------- |
| Linux    |  yes      |
| Windows  |  yes      |
| macOS    | Planned   |
| BSD      |  yes      |
| Illumos  |  yes      |

## Functions

| Function              | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| [`Assert`](assert.md) | Terminates the program if a condition evaluates to `false`.   |
| [`Exit`](exit.md)     | Terminates the current process with a specified exit code.    |
| [`Fatal`](fatal.md)   | Prints an error message and terminates the process.           |

## Notes

* Functions in this module may have platform-specific behavior.
* Some operations may immediately terminate the current process.
* Additional system-related functionality may be added in future releases of the standard library.
