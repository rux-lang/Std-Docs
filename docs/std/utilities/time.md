# Time

Time-related utilities for sleeping, measuring elapsed time, and retrieving system time.

**Module:** `Std::Time`

## Summary

```rux
struct SystemTime

SleepMs(ms: uint32)
SleepSeconds(seconds: uint32)
SleepMinutes(minutes: uint32)

TickMs() -> uint64

LocalTime() -> SystemTime
UtcTime() -> SystemTime
```

## Description

The `Std::Time` module provides basic timing functionality:

- Sleeping for a specified duration
- Retrieving monotonic tick counts
- Accessing local and UTC system time
- Inspecting date and time components

The implementation is platform-specific where required.

---

# Structures

## SystemTime

Represents a calendar date and time.

```rux
struct SystemTime {
    year: uint16;
    month: uint16;
    dayOfWeek: uint16;
    day: uint16;
    hour: uint16;
    minute: uint16;
    second: uint16;
    milliseconds: uint16;
}
```

| Field | Description |
|---------|-------------|
| `year` | Year component. |
| `month` | Month (1-12). |
| `dayOfWeek` | Day of week. |
| `day` | Day of month. |
| `hour` | Hour (0-23). |
| `minute` | Minute (0-59). |
| `second` | Second (0-59). |
| `milliseconds` | Millisecond component. |

---

# Sleeping

## SleepMs

```rux
SleepMs(ms: uint32)
```

Suspends execution for approximately the specified number of milliseconds.

### Example

```rux
SleepMs(500);
```

Pauses execution for roughly half a second.

---

## SleepSeconds

```rux
SleepSeconds(seconds: uint32)
```

Suspends execution for approximately the specified number of seconds.

### Example

```rux
SleepSeconds(2);
```

---

## SleepMinutes

```rux
SleepMinutes(minutes: uint32)
```

Suspends execution for approximately the specified number of minutes.

### Example

```rux
SleepMinutes(1);
```

---

# Timing

## TickMs

```rux
TickMs() -> uint64
```

Returns a monotonic millisecond tick count.

This value is intended for measuring elapsed time and should not be interpreted as a calendar date or wall-clock timestamp.

### Example

```rux
let start = TickMs();

SleepMs(250);

let elapsed = TickMs() - start;
```

### Notes

- Monotonic clocks are not affected by system clock adjustments.
- Useful for benchmarking and measuring durations.
- The exact implementation is platform-specific.

---

# Date and Time

## LocalTime

```rux
LocalTime() -> SystemTime
```

Returns the current local system time.

### Example

```rux
let time = LocalTime();
```

### Notes

- On Windows, local time is retrieved from the operating system.
- On Linux, the current implementation returns the same value as `UtcTime()`.

---

## UtcTime

```rux
UtcTime() -> SystemTime
```

Returns the current Coordinated Universal Time (UTC).

### Example

```rux
let time = UtcTime();
```

---

# Example

```rux
import Std::Time;

func Main() {

    let start = TickMs();

    SleepSeconds(1);

    let elapsed = TickMs() - start;

    let utc = UtcTime();

    Print(Format(
        "Elapsed: {} ms\nUTC: {}-{}-{} {}:{}:{}",
        elapsed,
        utc.year,
        utc.month,
        utc.day,
        utc.hour,
        utc.minute,
        utc.second
    ));
}
```

---

# Platform Notes

## Windows

- `SleepMs()` uses the Windows sleep API.
- `TickMs()` uses a monotonic tick counter.
- `LocalTime()` returns the system's local time.
- `UtcTime()` returns UTC from the operating system.

## Linux

- `SleepMs()` uses `nanosleep`.
- `TickMs()` uses `clock_gettime(CLOCK_MONOTONIC)`.
- `UtcTime()` is computed from `CLOCK_REALTIME`.
- `LocalTime()` currently returns UTC.

---

# Day Of Week

The meaning of `dayOfWeek` is platform-dependent.

Applications should avoid assuming a specific mapping unless documented by the target platform.

Common mappings include:

| Value | Day       |
|-------|-----------|
| 0     | Sunday    |
| 1     | Monday    |
| 2     | Tuesday   |
| 3     | Wednesday |
| 4     | Thursday  |
| 5     | Friday    |
| 6     | Saturday  |

The exact mapping should not be relied upon without platform verification.
