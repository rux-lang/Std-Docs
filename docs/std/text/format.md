# Format

Formats values into a string using replacement fields.

**Module:** `Std`

## Summary

```rux
Format(fmt: char8[], args: Display...) -> String
```

## Description

`Format` creates a new string by replacing placeholder fields in a format string with the string representation of supplied arguments.

Arguments must implement the `Display` interface.

Each occurrence of `{}` is replaced by the next argument in the argument list.

## Parameters

| Parameter | Description                                              |
|-----------|----------------------------------------------------------|
| `fmt`     | Format string containing zero or more `{}` placeholders. |
| `args`    | Values used to replace placeholders.                     |

## Return Value

Returns a newly allocated `String` containing the formatted result.

---

## Placeholders

The following placeholder is supported:

```text
{}
```

Each placeholder consumes one argument.

#### Example

```rux
let text = Format("Hello, {}!", name);
```

Result:

```text
Hello, Alex!
```

---

## Examples

### Single Argument

```rux
let name = String::From("Alex");

let text = Format("Hello, {}!", name);
```

Result:

```text
Hello, Alex!
```

---

### Multiple Arguments

```rux
let text = Format(
    "{} scored {} points",
    playerName,
    score
);
```

Result:

```text
Alex scored 42 points
```

---

### No Placeholders

```rux
let text = Format("Hello World");
```

Result:

```text
Hello World
```

---

### Using Display

Any type implementing `Display` can be formatted.

```rux
struct Person {
    name: String;
}

extend Person : Display {
    func ToString(self) -> String {
        return self.name;
    }
}

let person = Person {
    name: String::From("Alex")
};

let text = Format("{}", person);
```

Result:

```text
Alex
```

---

## Notes

- Arguments are formatted by calling `ToString()`.
- Placeholders are processed from left to right.
- Extra arguments are ignored.
- Missing arguments produce no output for the corresponding placeholder.
- A new string is always returned.

---

## See Also

- [Display](display.md)
- [String](string.md)
- [StringBuilder](stringbuilder.md)
