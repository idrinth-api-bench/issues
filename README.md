# @idrinth/api-bench

[![Coverage Status](https://coveralls.io/repos/github/Idrinth/api-bench/badge.svg?branch=master)](https://coveralls.io/github/Idrinth/api-bench?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3171affc728048da8df4fe36b6d4771e)](https://app.codacy.com/gh/Idrinth/api-bench/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![npm version](https://badge.fury.io/js/@idrinth%2Fapi-bench.svg)](https://badge.fury.io/js/@idrinth%2Fapi-bench)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Idrinth_api-bench&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Idrinth_api-bench)

This is the repository for the API test framework, it's documentation website and other related tooling.

## Project parts

- [Framework README](/framework/README.md)
- [Documentation Website README](/documentation-website/README.md)
- [Examples](/examples)
- [History Website README](/history-website/README.md)
- [History Microservice README](/history-microservice/README.md)
- [Dockerfiles](/containers)

## Documentation

You can find the documentation on the
[Documentation Website](https://idrinth-api-ben.ch).

## Slack

[Join](https://join.slack.com/t/idrinth-api-bench/shared_invite/zt-2f4zmw2sz-c3etHzCFq3LtZpkR15xXMA)
our slack if you need help, want to connect or have questions.

## CI Images

We have ready to be used CI Images:

- [Gitlab Runner](https://hub.docker.com/r/idrinth/api-bench-gitlab-runner)
- [Gitea Action](https://hub.docker.com/r/idrinth/api-bench-gitea-action)
- [Pure Alpine](https://hub.docker.com/r/idrinth/api-bench)

## Monitoring

We provide a monitoring solution out of the box.

- [Microservice](https://hub.docker.com/r/idrinth/api-bench-history-microservice)
- [Website](https://hub.docker.com/r/idrinth/api-bench-history-website)

## Setup

To get your project ready for development you need to run the following
commands in order:

- `git clone https://github.com/idrinth/api-bench`
- `cd api-bench`
- `npm run setup`

Further information about contributing is available in the contribution
guidelines [on the website](https://idrinth-api-ben.ch/contributing/) and
[in the markdown file](/CONTRIBUTING.md).

## Support

Commercial support and training is provided via
[Björn Büttner](https://bjoern-buettner.me).

## Privacy and Compliance

The `@idrinth/api-bench` framework does not collect any kind of information
about it's users or the apis being tested. All data is local to the device you
run it on or the database server you configure it to dump data in.
