FROM node:21.7.1-alpine AS node

LABEL author="Björn 'Idrinth' Büttner"

ARG IDRINTH_API_BENCH_VERSION=2.7.2

RUN npm install -g --omit=dev "@idrinth/api-bench@${IDRINTH_API_BENCH_VERSION}"
RUN rm /usr/local/lib/node_modules/@idrinth/api-bench/**/*.ts

RUN mkdir /project
VOLUME /project
WORKDIR /project

ENTRYPOINT ["iabr"]
