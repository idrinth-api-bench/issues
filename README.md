# @idrinth/api-bench

[![Coverage Status](https://coveralls.io/repos/github/Idrinth/api-bench/badge.svg?branch=the-one)](https://coveralls.io/github/Idrinth/api-bench?branch=the-one)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Idrinth_api-bench&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Idrinth_api-bench)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3171affc728048da8df4fe36b6d4771e)](https://app.codacy.com/gh/Idrinth/api-bench/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Code Factor](https://www.codefactor.io/repository/github/idrinth/api-bench/badge/the-one)](https://www.codefactor.io/repository/github/idrinth/api-bench/overview/the-one)

| Tool |Version|
|-|-|
|Framework|[![npm version](https://badge.fury.io/js/@idrinth%2Fapi-bench.svg)](https://badge.fury.io/js/@idrinth%2Fapi-bench)|
|CLI|[![npm version](https://badge.fury.io/js/@idrinth%2Fapi-bench-cli.svg)](https://badge.fury.io/js/@idrinth%2Fapi-bench)|

This is the repository for the API test framework, its CLI, it's
documentation website and other related tooling.

## Project parts

### [Framework](/framework/README.md)

The framework is the core of the project. It is built without a framework
in Typescript and runs on Node.js.

### [CLI](/cli/README.md)

This command line tool is free of frameworks and runs on Node.js. It
serves as a tool to generate code for use with the framework.

### [Documentation Website](/documentation-website/README.md)

The documentation website is a React application written in Typescript.
It serves as the central web presence and documentation for all
involved projects.

### [Examples](/examples)

These are examples based on @idrinth/api-bench (the framework). Try
them out to see how it works and what the framework provides.

### [History Microservice](/history-microservice/README.md)

The history microservice is a Fastify application, that serves as
the central point of access to historical benchmark run data.

### [History Website](/history-website/README.md)

The history website is a svelte application, that serves as
the central point of access to historical benchmark run data.

### [Dockerfiles](/containers)

The dockerfiles provide runners/actions for continuous integration as well
as the history website and microservice.

### [Mindmap](/mindmap/README.md)

The brainstorming solution we use. It is based around markmap, a markdown to
mindmap generator but consists of a lot of custom logic.

## Documentation

You can find the documentation on the
[Documentation Website](https://idrinth-api-ben.ch).
Additionally, we host the mindmap that assists the decision-making at the
[Mindmap Website](https://mindmap.idrinth-api-ben.ch).

## CI Images

We have ready-to-be-used CI Images:

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

## Socials

Please follow my socials to be updated on the project:

[![idrinth Profile URL](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/~idrinth)&nbsp;&nbsp;&nbsp;&nbsp;[![LinkedIn URL](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/groups/9588634/)&nbsp;&nbsp;&nbsp;&nbsp;[![Slack URL](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)](https://idrinth-api-bench.slack.com/join/shared_invite/zt-2f4zmw2sz-c3etHzCFq3LtZpkR15xXMA#/shared-invite/email)

## Support

Commercial support and training is provided via
[Björn Büttner](https://bjoern-buettner.me).

## Privacy and Compliance

The `@idrinth/api-bench` framework and its CLI do not collect any kind of
information about its users or the APIs being tested. All data is local to
the device you run it on or the database server you configure it to dump data
in.
