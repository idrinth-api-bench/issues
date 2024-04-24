# @idrinth/api-bench

[![Coverage Status](https://coveralls.io/repos/github/Idrinth/api-bench/badge.svg?branch=the-one)](https://coveralls.io/github/Idrinth/api-bench?branch=the-one)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3171affc728048da8df4fe36b6d4771e)](https://app.codacy.com/gh/Idrinth/api-bench/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Idrinth_api-bench&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Idrinth_api-bench)
[![Code Factor](https://www.codefactor.io/repository/github/idrinth/api-bench/badge/the-one)](https://www.codefactor.io/repository/github/idrinth/api-bench/overview/the-one)

## Contents

- [@idrinth/api-bench](#idrinthapi-bench)
  - [Contents](#contents)
  - [What does this project do?](#what-does-this-project-do)
    - [Code Generation](#code-generation)
    - [Why use a Benchmark Runner](#why-use-a-benchmark-runner)
    - [Regarding existing libraries](#regarding-existing-libraries)
  - [Usage \& Examples](#usage--examples)
  - [CI Images](#ci-images)
  - [Monitoring](#monitoring)
  - [License](#license)
  - [Socials](#socials)
  - [Support](#support)
  - [Privacy and Compliance](#privacy-and-compliance)

## What does this project do?

This project provides a framework for testing restful APIs and websites for
changes in response times. This helps to detect performance changes in code
in a quick and simple manner.

### Code Generation

Code generation has been extracted into `@idrinth/api-bench-cli`, it provided
with the framework or can be run on its own.

### Why use a Benchmark Runner

Given, that the amount of APIs increase by moving to microservices, we need a
way to determine if changes to a service's response times are related to code
changes. For this purpose a defined load with repeatable request seems the
most useful.

### Regarding existing libraries

Other tools like
[matteofigus/api-benchmark](https://github.com/matteofigus/api-benchmark),
[bvanderlaan/api-bench-runner](https://github.com/bvanderlaan/api-bench-runner)
or [jeffbski/bench-rest](https://github.com/jeffbski/bench-rest) are all
untouched for quite a while and don't provide type definitions for typescript.
This makes them less desirable when working with bigger projects where the
better static codecheck is a huge boost in development speed.

Additionally, this tool separates the validation thread from the thread
processing the actual requests to further minimise the effect of complicated
validations or huge response bodies on the data gathering.

## Usage & Examples

Please have a look at the [website](https://idrinth-api-ben.ch) for more
information.

## CI Images

We have ready to be used CI Images:

- [Gitlab Runner](https://hub.docker.com/r/idrinth/api-bench-gitlab-runner)
- [Gitea Action](https://hub.docker.com/r/idrinth/api-bench-gitea-action)
- [Pure Alpine](https://hub.docker.com/r/idrinth/api-bench)

## Monitoring

We provide a monitoring solution out of the box.

- [Microservice](https://hub.docker.com/r/idrinth/api-bench-history-microservice)
- [Website](https://hub.docker.com/r/idrinth/api-bench-history-website)

## License

As usual with my projects this is MIT-licensed.

## Socials

Additionally, to support requests via GitHub issue, you can reach us via

[![GitHub URL](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Idrinth/api-bench)&nbsp;&nbsp;&nbsp;&nbsp;[![LinkedIn URL](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/groups/9588634/)&nbsp;&nbsp;&nbsp;&nbsp;[![Slack URL](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)](https://idrinth-api-bench.slack.com/join/shared_invite/zt-2f4zmw2sz-c3etHzCFq3LtZpkR15xXMA#/shared-invite/email)

## Support

Commercial support and training is provided via
[Björn Büttner](https://bjoern-buettner.me).

## Privacy and Compliance

The `@idrinth/api-bench` framework does not collect any kind of information
about its users or the APIs being tested. All data is local to the device
you run it on or the database server you configure it to dump data in.
