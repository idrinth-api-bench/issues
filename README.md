# @idrinth/api-bench

[![Coverage Status](https://coveralls.io/repos/github/Idrinth/api-bench/badge.svg?branch=master)](https://coveralls.io/github/Idrinth/api-bench?branch=master) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/3171affc728048da8df4fe36b6d4771e)](https://www.codacy.com/manual/Idrinth/api-bench?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Idrinth/api-bench&amp;utm_campaign=Badge_Grade)

## Contents

- [Contents](#contents)
- [Why a Benchmark Runner](#why-a-benchmark-runner)
- [Regarding existing libraries](#regarding-existing-libraries)
- [Usage & Examples](#usage--examples)
  - [Binaries](#binaries)
  - [Programmatically](#programmatically)
  - [Results](#results)
    - [CSV](#csv)
    - [HTML](#html)
    - [CLI](#cli)
    - [JSON](#json)
    - [Custom](#custom-results)
  - [Autowiring Route Parameters](#autowiring-route-parameters)
  - [Middlewares](#middlewares)
    - [Provided Middlewares](#provided-middlewares)
    - [Custom Middleware](#custom-middleware)
  - [Storage](#storage)
    - [Custom Storage](#custom-storage)
  - [Logging](#logging)
    - [Logging levels used](#logging-levels-used)
    - [Custom Logger](#custom-logger)
  - [License](#license)
  - [Planned](#planned)
  - [Support](#support)

## Why a Benchmark Runner

Given, that the amount of APIs increase by moving to microservices, we need a way to determine if changes to a service's response times are related to code changes. For this purpose a defined load with repeatable request seems the most useful.

## Regarding existing libraries

Other tools like [matteofigus/api-benchmark](https://github.com/matteofigus/api-benchmark), [bvanderlaan/api-bench-runner](https://github.com/bvanderlaan/api-bench-runner) or [jeffbski/bench-rest](https://github.com/jeffbski/bench-rest) are all untouched for quite a while and don't provide type definitions for typescript. This makes them less desirable when working with bigger projects where the better static codecheck is a huge boost in development speed.
Additionally, this tool separates the validation thread from the thread processing the actual requests to further minimize the effect of complicated validations or huge response bodies on the data gathering.

## Usage & Examples

### Binaries

- `iabr` (or `run-benchmark`) runs the current working directory's project if the routes folder is properly setup
  - Argument 1: threads (default 1)
  - Argument 2: repetitions (default 1)
  - Argument 3: language code (default en)
- `iabmp` (or `make-benchmark-project`) creates a new benchmarking project in a subdirectory of the current working directory
  - Argument 1: project name (default: benchmark)
- `iabgfoa` (or `generate-benchmark-from-open-api`) generates test skeletons from an open-api-documentation for a project in the current worrking directory
  - Argument 1: path to the open-api-document

### Programmatically

Basically require main/include main and supply the executor method with required parameters. Tasks defined in `src/routes`-subfolders `before`, `before_task`, `before_each`, `main`, `after_each`, `after_task` and `after` will be used to automatically fill the Job processed by the executor. Automatic filling only happens when there are no tasks provided to the function.

### Results

By default, multiple all possible result formats are provided. The files are created in the application root, but that can be overwritten programmatically.

#### CSV

This provides a file, that can easily opened by excel or handled programmatically.

![Result](readme/csv-result.jpg)

#### HTML

This provides a simple html file, that could be sent by email for example.

![Result](readme/html-result.jpg)

#### CLI

This provides a small table in the command line, that shows most of the data.

![Result](readme/cli-result.jpg)

#### JSON

This provides a file easily handled via other software. By default, it is not formatted for readability.

![Result](readme/json-result.jpg)

### Custom Results

You can provide a custom reporter instance as part of your configuration in programmatically accessing the framework. It will be called with the complete result after all result modifiers have modified the result.

```ts
interface Reporter {
  (results: FinishedRun, rootDir: string): void;
}
```

The interface can be imported from `@idrinth/api-bench`.

### Autowiring Route Parameters

Parameters of contained functions will be filled with environment variable values of the respective name (`aBc` -> `A_BC`). Types will be automatically applied if there is either a default value to get the type from or a comment like `/* boolean */ parameter` added in front of the parameter.

Comment types will always win over default value types. If those two don't match, you might get weird results.

Sadly, a few things can't be done:

- Do not use constants for their default values, they can't be properly analysed and will throw an Error.
- Do not use arrays or objects as default values, they can't be autowired.
- Destructuring is not supported
- Default value types NOT of the same type as the parameter

```js
module.exports = (apiRootUrl, apiEMail, apiPassword,) => ({
  id: 'login',
  main: {
    method: 'post',
    body: {
      email: apiEMail,
      password: apiPassword,
    },
    autohandle: 'json',
    url: apiRootUrl + '/api/login',
  },
  pre: [
    '^user-agent',
    '^encoding'
  ],
  post: [
    '^status-2xx',
    '^access-token',
  ],
});

```

### Middlewares

Middlewares use an absolute file path to be loaded. The following characters will be used to expand short forms:

-   `^abc` -> `/path/to/this/library/src/middlewares/abc.js`
-   `$@some/lib/abc` -> `@some/lib/src/middlewares/abc.js`
-   `#abc` -> `/path/to/root/src/middlewares/abc.js`

#### Provided Middlewares

- json and form encode
- access token handling
- csrf-header handling
- status 2xx check
- status 403 check
- status 404 check
- user-agent
- cookies

#### Custom Middleware

For custom middleware implement the following interface. Prepare is called before sending a request, process after a request. If an error is thrown in process, any further validations are skipped.

```ts
interface Middleware {
  process(response: Result): void;
  prepare(request: Request): Request;
}
```

### Storage

Storage classes store each finished set of the run. By default, nothing is stored, but a mysql storage is provided for those wanting it.

#### Custom Storage

To provide a custom storage, implement the interface below. The method will be called once per task.

```ts
interface Storage
{
  store(data: FinishedSet, now: Date): void;
}
```

### Logging

Any logger that either implements the interface or has a wrapper is an option. Wrappers for pino and winston are available.

#### Logging levels used

Most log entries are debug level, with the major steps being written to info. Trace is currently not used but may be used for detailed argument printing at some point.

#### Custom Logger

You can implement the logger interface below and provide any logger you want to next to the already provided ones.

```ts
interface Logger {
  trace(msg: string, data: Record<string, unknown>): void;
  trace(msg: string): void;
  debug(msg: string, data: Record<string, unknown>): void;
  debug(msg: string): void;
  info(msg: string, data: Record<string, unknown>): void;
  info(msg: string): void;
  warn(msg: string, data: Record<string, unknown>): void;
  warn(msg: string): void;
  error(msg: string, data: Record<string, unknown>): void;
  error(msg: string): void;
  fatal(msg: string, data: Record<string, unknown>): void;
  fatal(msg: string): void;
}
```

For ease of use a wrapper is provided as well, that only requires a log method to be implemented.

## License

As usual with my projects this is MIT-licensed.

## Planned

- more unit tests (yeah, it's one of those projects)
- soap support
- graphql support

## Support

Additionally, to support requests via issue, you can reach me via discord at [Idrinth's Discord](https://discord.gg/xHSF8CGPTh). Commercial support and training is provided via [Björn Büttner](https://bjoern-buettner.me).
