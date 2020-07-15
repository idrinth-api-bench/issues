[![Build Status](https://travis-ci.com/Idrinth/api-bench.svg?branch=master)](https://travis-ci.com/Idrinth/api-bench) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/3171affc728048da8df4fe36b6d4771e)](https://www.codacy.com/manual/Idrinth/api-bench?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Idrinth/api-bench&amp;utm_campaign=Badge_Grade)

# Why a Benchmark Runner

Given, that the amount of APIs increase by moving to microservices, we need a way to determine if changes to a service's response times are related to code changes. For this purpose a defined load with repeatable request seems the most useful.

## Why not use an existing library?

Other tools like [matteofigus/api-benchmark](https://github.com/matteofigus/api-benchmark), [bvanderlaan/api-bench-runner](https://github.com/bvanderlaan/api-bench-runner) or [jeffbski/bench-rest](https://github.com/jeffbski/bench-rest) are all untouched for quite a while and don't provide type definitions for typescript. This makes them less desirable when working with bigger projects where the better static codecheck is an huge boost in developement speed.
Additionally this tool separates the validation thread from the thread processing the actual requests to further minimize the effect of complicated validations or huge response bodies on the data gathering.

## How to use this?

Basicly require main/include main and supply the executor method with required parameters. There is an example avaible in /examples.

### Middlewares

Middlewares use an absolute file path to be loaded. the following characters will be used to expand short forms:

- `^abc` -> `/path/to/this/library/src/middlewares/abc`
- `$@some/lib/abc` -> `@some/lib/src/middlewares/abc`
- `#abc` -> `/path/to/root/src/middlewares/abc`

## What loggers can I use?

Any logger that either implements the [Interface](src/logger/logger.ts) or has a wrapper. So far a wrapper for pino is avaible.

### What levels is this logging on?

Most log entries are debug level, with the major steps being written to info. Trace is currently not used but may be used for detailed argument printing at some point.

## License

As usual with my projects this is MIT-licensed.

## Planned TODOs

- an access token middleware based on common patterns
- a less painful addition of middlewares to tasks
- unit tests (yeah, it's one of those projects)
- soap support
- graphql support
