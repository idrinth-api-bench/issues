FROM node:21.7.1-alpine AS node
FROM gitlab/gitlab-runner:alpine3.19-v16.10.0 AS gitlab

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

LABEL author="Björn 'Idrinth' Büttner"

ARG IDRINTH_API_BENCH_VERSION

RUN npm install -g --omit=dev "@idrinth/api-bench@${IDRINTH_API_BENCH_VERSION}"
RUN rm /usr/local/lib/node_modules/@idrinth/api-bench/**/*.ts
