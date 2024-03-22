# Contributing

Any and all contributions are encouraged. As a contributor,
here are the guidelines we would like you to follow:

- [Structure](#structure)
- [Issues](#issues)
- [Code](#code)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Documentation](#documentation)

## Structure

The project is a mono-repo grouped into multiple subprojects, for example `website`, `framework`, `history-microservice` and `history-website`.
You can find more detailed instructions for the specific part in the corresponding folder's readme.

## Issues

Any idea and bug report is considered a contribution. Not only do they help improving the code base, they help other people to get more use out of this framework. Please try to stick to the format of predefined issue types to make it easier to filter and handle for anyone interested in the topic.

## Code

The style guidelines are provided via eslint. Please try to optimise code for readability, since code will be read way more often than it will be changed.

While adding functionality, keep in mind to break existing interfaces, entry points and functionality only if absolutely necessary.

### Contribution workflow

- fork the repository
- create a feature branch (issue-xxx-does-something) from master
- create a draft pull request
- mention fixes #xxx in the description (use the appropriate pull request template)
- make your changes to the branch
- check if actions are all green
- mark as ready to review
- get changes reviewed
- if review is positive get changes merged, otherwise fix and send back to review

### Tests

Testing new code is expected and adding tests or improving tests for old code is appreciated. The goal is to find most issues by either static analysis or unit and integration tests.

#### Manual Tests

For manual testing you can run `npm run coai` in the source folder to automatically check out and install all required files for testing.

```bash
git clone https://github.com/idrinth/api-bench
cd api-bench
npm run coai
```

### Naming conventions

- camelCase for variables and functions
- UPPER_SNAKE_CASE for constants
- PascalCase for interfaces and classes
- kebab-case for file names

### Requirements

- One of the last two node versions is required.
- OS: Linux / Windows *(Other OS were not tested)*

### Setup

Run the following commands to create the full project:

```sh
git clone https://github.com/idrinth/api-bench
cd api-bench
npm run setup
```

## Commit Message Guidelines

**This specification is inspired by Angular commit messages guidelines.*

These are the rules for how Git commit messages for api-bench should be formatted.
This format leads to easier to read commit history.

Each commit message consists of a **header**, a **body**, and a **footer**.

```md
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and should conform to the
[Commit Message Header](#commit-message-header) format.

The `body` is mandatory for all commits except for those of type "docs"
or in cases when it's clear from the header summary. They should conform
to the [Commit Message Body](#commit-message-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-message-footer)
format describes what the footer is used for and the structure it must have.

### Commit Message Header

Headers must adhere to the following format:

```md
<type>(<scope>): <short summary>

Example:
build(website): bump follow-redirects from 1.15.4 to 1.15.6
```

#### Type

The list of supported types:

- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `docs`: Documentation changes
- `feature`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests

#### Scope

The scope should be the name of the affected part of the project.
The list of supported scopes:

- `framework`
- `website`
- `history-microservice`
- `history-website`

#### Summary

The summary field should provide a succinct description of the change.

- use the imperative, present tense
- don't capitalise the first letter
- no dot (.) at the end

```md
// Bad:
Fixes unit tests failing.

// Good:
fix unit tests failing
```

### Commit Message Body

Just as in the summary, use the imperative, present tense.

The commit message body should explain *why* you are making the change.
You can include a comparison of the previous behaviour with the new
behaviour in order to illustrate the impact of the change.

### Commit Message Footer

The footer can contain information about breaking changes and deprecation
and is also the place to reference GitHub issues and other PR's that this
commit closes or is related to. In case of breaking changes and deprecation
the section should start with the phrase "BREAKING CHANGE: " or "DEPRECATED: "
respectively followed by a description. For example:

```md
BREAKING CHANGE: users must now provide a valid JWT token to access protected routes.

Closes #123
```

Here's a complete example of a correct commit message:

```md
fix(framework): resolve issue with string injection from env

Fix a bug where given a function route definition that has a string-typed
or untyped parameter, the value would never be injected from the environment.

Closes #294
```

### Revert commits

If the commit reverts a previous commit, it should begin with `revert:`,
followed by the header of the reverted commit.

The content of the commit message body should contain:

- ID of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

## Documentation

Documentation is an underrated part of every software. Adding any kind of clarification, example or improvement is highly appreciated and encouraged. The ones writing the documentation are the unsung heroes of open and closed source software.

### Examples

For examples please keep in mind, that we don't want to overload any API. Don't use high load tasks, don't use APIs that are not for public use. It is expected that examples will be run and they must not damage anyone, including third parties.
