# Contributing

Any and all contributions are encouraged. As a contributor,
here are the guidelines we would like you to follow:

- [Structure](#structure)
- [Issues](#issues)
- [Code](#code)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Documentation](#documentation)

## Structure

The project is a mono-repo grouped into multiple subprojects, for example
`documentation-website`, `framework`, `history-microservice`, `cli`,
`mindmap`, `history-website`. You can find more detailed instructions for
the specific part in the corresponding folder's readme.

## Issues

Any idea and bug report is considered a contribution. Not only do they help
improving the code base, they help other people to get more use out of this
framework. Please try to stick to the format of predefined issue types to
make it easier to filter and handle for anyone interested in the topic.

## Code

The style guidelines are provided via eslint. Please try to optimise code for readability, since code will be read way more often than it will be changed.

While adding functionality, keep in mind to break existing interfaces, entry points and functionality only if absolutely necessary.

### Picking the right issue

Issues that are good for relatively new coders are marked as
`Good first issue`, issues marked as `help wanted` require a bit more
knowledge about the project.

Within an issue, you find the project information on the right-hand side,
opening them up will reveal further estimates about size, difficulty,
priority and main affected project part.

![Project](/documentation-website/src/assets/api-bench-project.png)

### Contribution workflow

- fork the repository
- mention in the issue, that you are working on it (it will be assigned for a few weeks then)
- create a feature branch (issue-xxx-does-something) from `the-one`
- create a draft pull request
- mention fixes #xxx in the description (use the appropriate pull request template)
- make your changes to the branch
- check if actions are all green
- mark as ready to review
- get changes reviewed
- if review is positive get changes merged, otherwise fix and send back to review

### Mindmap

Contributing to the mindmap is encouraged. The mindmap is built from
data.yml in /mindmap and follows the following schema:

````json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "https://mindmap.idrinth-api-ben.ch",
  "$ref": "#/definitions/node",
  "definitions": {
    "node": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "description": "the displayed text of the node"
        },
        "description": {
          "type": "string",
          "description": "longer form description, that  is displayed when hovering over the node"
        },
        "url": {
          "type": "string",
          "description": "a url to link to with this node"
        },
        "children": {
          "description": "child nodes, that are connected to the parent",
          "type": "array",
          "items": {
            "$ref": "#/definitions/node"
          },
          "minItems": 1
        }
      },
      "required": [
        "text"
      ],
      "additionalProperties": false
    }
  }
}
````

In order to display nodes, they must have a text property. They may also have; a URL, description, and child nodes.

### Tests

Testing new code is expected and adding tests or improving tests for old code is appreciated. The goal is to find most issues by either static analysis or unit and integration tests.

#### Manual Tests

For manual testing you can run `npm run coai` in the source folder to automatically check out and install all required files for testing.

```bash
git clone https://github.com/idrinth/api-bench
cd api-bench
npm run coai
```

#### Running Tests Locally

To see a list of available CI tasks and their corresponding commands to run them
locally, you can run `npm run local` in the source folder. This is particularly
useful for testing specific CI tasks before committing your changes.

### Naming conventions

- camelCase for variables and functions
- UPPER_SNAKE_CASE for constants
- PascalCase for interfaces and classes
- kebab-case for file names

### Requirements

- One of the last two node versions is required.
- Supported Operating Systems: Linux, Windows, and macOS.

### Setup

Run the following commands to create the full project:

```sh
git clone https://github.com/idrinth/api-bench
cd api-bench
npm run setup
```

#### Language

If you'd like to test translations, there's an auto-rebuild in the project root:

```bash
npm run language
```

Languages can be found in their respective project folder.
\
Example:
\
`/documentation-website/language/EXAMPLE.yml`

### Commit Message Guidelines

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

#### Commit Message Header

Headers must adhere to the following format:

```md
<type>(<scope>): <short summary>

Example:
build(website): bump follow-redirects from 1.15.4 to 1.15.6
```

##### Type

The list of supported types:

- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `docs`: Documentation changes
- `feature`: A new feature
- `bug`: A bug fix
- `refactor`: A code change that neither fixes a bug nor adds a feature

##### Scope

The scope should be the name of the affected part of the project.
The list of supported scopes:

- `framework`
- `documentation-website`
- `history-microservice`
- `history-website`
- `dockerfiles`
- `examples`

##### Summary

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

##### Commit Message Body

Just as in the summary, use the imperative, present tense.

The commit message body should explain *why* you are making the change.
You can include a comparison of the previous behaviour with the new
behaviour in order to illustrate the impact of the change.

##### Commit Message Footer

The footer can contain information about breaking changes and deprecation
and is also the place to reference GitHub issues and other Pull Requests that this
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

#### Revert commits

If the commit reverts a previous commit, it should begin with `revert:`,
followed by the header of the reverted commit.

The content of the commit message body should contain:

- ID of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

### Pull Requests

Please open your pull requests in draft mode.
When ready to review remove the draft.
Do not force-push, it just creates additional work.

## Documentation

Documentation is an underrated part of every software. Adding any kind of clarification, example or improvement is highly appreciated and encouraged. The ones writing the documentation are the unsung heroes of open and closed source software.

### Examples

For examples, please keep in mind, that we don't want to overload any API.
Don't use high load tasks, don't use APIs that are not for public use.
Examples are expected to run without damaging anyone, including third parties.
