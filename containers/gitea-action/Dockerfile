ARG NODE_VERSION=21.7.1
ARG ALPINE_VERSION=3.19
ARG GITEA_ACTION_VERSION=0.2.6
ARG IDRINTH_API_BENCH_VERSION=2.7.0

FROM node:${NODE_VERSION}-alpine AS node
FROM gitea/act_runner:${GITEA_ACTION_VERSION} AS gitea

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

LABEL authors="Björn 'Idrinth' Büttner"

RUN npm install -g --omit=dev "@idrinth/api-bench@${IDRINTH_API_BENCH_VERSION}"
RUN rm /usr/local/lib/node_modules/@idrinth/api-bench/**/*.ts
