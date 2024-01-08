# Contributing

Any and all contributions are encouraged.

## Issues

Any idea and bug report is considered a contribution. Not only do they help improving the code base, they help other people to get more use out of this framework. Please try to stick to the format of predefined issue types to make it easier to filter and handle for anyone interested in the topic.

## Code

The style guidelines are provided via eslint. Please try to optimise code for readability, since code will be read way more often than it will be changed.

While adding functionality, keep in mind to break existing interfaces, entry points and functionality only if absolutely necessary.

### Tests

Testing new code is expected and adding tests or improving tests for old code is appreciated. The goal is to find most issues by either static analysis or unit and integration tests.

### Naming conventions

- CamelCase for all variables and classes.
- snake-case for constants.
- kebab-case for file names.

### Requirements

- Last two node versions are required. *(Currently: Node 20.10.0 LTS and Node 21.5.0)*
- OS: Linux / Windows *(Other OS were not tested)*

### Setup

Run the following commands to create the full project:

```sh
git clone https://github.com/idrinth/api-bench
cd api-bench
npm install
cd website
npm install
```

## Documentation

Documentation is an underrated part of every software. Adding any kind of clarification, example or improvement is highly appreciated and encouraged. The ones writing the documentation are the unsung heroes of open and closed source software.

### Examples

For examples please keep in mind, that we don't want to overload any api. Don't use high load tasks, don't use apis that are not for public use. It is expected that examples will be run and they must not damage anyone, including third parties.
