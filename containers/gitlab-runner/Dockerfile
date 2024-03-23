LABEL authors="Björn 'Idrinth' Büttner"

ARG ALPINE_VERSION=3.19
ARG NODE_VERSION=21.7.1
ARG IDRINTH_API_BENCH_VERSION=2.6.1
ARG GITLAB_RUNNER_VERSION=v16.4.0

FROM node:${NODE_VERSION}-alpine AS node

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

FROM gitlab/gitlab-runner:alpine${ALPINE_VERSION}-${GITLAB_RUNNER_VERSION}

RUN apt-get update \
   && apt-get install -y --no-install-recommends jq procps curl unzip groff libgcrypt20 tar gzip less openssh-client \
   && apt-get clean \
   && rm -rf /var/lib/apt/lists/*

RUN npm install -g @idrinth/api-bench@${IDRINTH_API_BENCH_VERSION}
