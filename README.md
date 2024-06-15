# Error logger

## Description

An implementation a logging system in a NestJS application that allows switching between different logging implementations based on an environment variable.

## Installation

Yarn is the package manager for this project.

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# My Thought Process

---

When analyzing the problem statement, I identified that this scenario would be best solved using a combination of the Adapter Design Pattern and the Factory Design Pattern. Here's why:

### Adapter Design Pattern

- Allows the creation of concrete classes (`FileLogger` & `ConsoleLogger`) that implement a common interface (`ILogger`).
- Ensures that both loggers adhere to the same contract, making it easier to switch implementations.

### Factory Design Pattern

- Used to determine which instance of the implementation to return based on the environment variable value provided.
- This pattern encapsulates the instantiation logic, providing a flexible and extensible way to select the logger implementation.

## Implementation Details

### ILogger Interface

- Defines the contract for logging methods (`log`, `error`, `warn`).

### ConsoleLogger and FileLogger

- **ConsoleLogger**: Logs messages to the console.
- **FileLogger**: Logs messages to a file, ensuring each log is written on a new line.

### LoggingModule

- Created as a dynamic module to provide the appropriate logger based on the environment variable `LOGGER_TYPE`.
- Uses `ConfigService` to retrieve the `LOGGER_TYPE` value and decide which logger implementation to provide.

## Steps Taken

### Interface Definition

- Created the `ILogger` interface to define the logging methods.

### Logger Implementations

- Implemented `ConsoleLogger` and `FileLogger` classes.

### Logging Module

- Implemented the `LoggingModule` with a static method `forRoot` that returns a `DynamicModule`.
- The `provide` field creates an injection token used to uniquely identify the provider for this logging module.

### Testing

- Added unit tests for `ConsoleLogger` and `FileLogger` to verify they log messages correctly.
- Added unit tests for `LoggingModule` to ensure it provides the correct logger implementation based on the configuration.
- Used `jest` to mock `ConfigService` dynamically within each test case, ensuring proper test isolation and accurate test results.

## Thank you.
