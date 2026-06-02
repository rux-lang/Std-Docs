# Display

Interface for types that can be converted to a string representation.

**Module:** `Std`

## Summary

```rux
interface Display {
    func ToString() -> String;
}
```

## Description

`Display` defines a common interface for converting values into a `String`.

Types implementing `Display` provide a `ToString` method that returns a string representation of the value.

This interface is commonly used by formatting, logging, and output functions that need a textual representation of arbitrary types.

## Methods

### ToString

```rux
ToString() -> String
```

Returns a string representation of the current value.

## Example

```rux
struct Person {
    name: String;
}

extend Person : Display {
    func ToString(self) -> String {
        return self.name;
    }
}
```
