FROM node:21.7.1-alpine AS node
FROM gitea/act_runner:0.2.6 AS gitea

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

LABEL author="Björn 'Idrinth' Büttner"

ARG IDRINTH_API_BENCH_VERSION=2.7.3

RUN npm install -g --omit=dev "@idrinth/api-bench@${IDRINTH_API_BENCH_VERSION}"
RUN rm /usr/local/lib/node_modules/@idrinth/api-bench/**/*.ts
