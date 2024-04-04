FROM node:21.7.2-alpine AS node

ARG BUILD_VERSION
ARG BUILD_TIME
ARG BUILD_HASH

LABEL author="Björn 'Idrinth' Büttner"
LABEL maintainer="webmaster@idrinth-api-ben.ch"
LABEL org.label-schema.name="idrinth/api-bench/build"
LABEL org.label-schema.description="An image building the @idrinth/api-bench packages."
LABEL org.label-schema.url="https://idrinth-api-ben.ch"
LABEL org.label-schema.vcs-url="https://github.com/idrinth/api-bench"
LABEL org.label-schema.version=$BUILD_VERSION
LABEL org.label-schema.build-date=$BUILD_TIME
LABEL org.label-schema.vcs-ref=$BUILD_HASH
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.vendor="Björn 'Idrinth' Büttner"
LABEL org.opencontainers.image.created=$BUILD_TIME
LABEL org.opencontainers.image.authors="webmaster@idrinth-api-ben.ch"
LABEL org.opencontainers.image.url="https://idrinth-api-ben.ch"
LABEL org.opencontainers.image.documentation="https://idrinth-api-ben.ch"
LABEL org.opencontainers.image.source="https://github.com/idrinth/api-bench"
LABEL org.opencontainers.image.version=$BUILD_VERSION
LABEL org.opencontainers.image.revision=$BUILD_HASH
LABEL org.opencontainers.image.vendor="Björn 'Idrinth' Büttner"
LABEL org.opencontainers.image.licenses="MIT"
LABEL org.opencontainers.image.title="idrinth/api-bench/build"
LABEL org.opencontainers.image.description="An image building the @idrinth/api-bench packages."

ENV IDRINTH_API_BENCH_VERSION=$BUILD_VERSION
ENV IDRINTH_API_BENCH_BUILT=$BUILD_TIME

RUN apk add --no-cache "git=2.43.0-r0" \
    && mkdir /api-bench \
    && git clone https://github.com/idrinth/api-bench /api-bench
WORKDIR /api-bench
RUN git fetch --tags \
    && git checkout ${BUILD_VERSION}

WORKDIR /api-bench/framework
RUN npm ci \
    && npm run tsc \
    && npm prune --production \
    && mkdir -p /usr/local/lib/node_modules/@idrinth/api-bench \
    && cp --recursive /api-bench/framework/* /usr/local/lib/node_modules/@idrinth/api-bench/ \
    && (rm /usr/local/lib/node_modules/@idrinth/api-bench/**/*.ts || true) \
    && (rm /usr/local/lib/node_modules/@idrinth/api-bench/README.md || true) \
    && (rm /usr/local/lib/node_modules/@idrinth/api-bench/index.ts || true) \
    && (rm /usr/local/lib/node_modules/@idrinth/api-bench/tsconfig.json || true) \
    && (rm /usr/local/lib/node_modules/@idrinth/api-bench/LICENSE || true) \
    && (rm -r /usr/local/lib/node_modules/@idrinth/api-bench/typings || true) \
    && (rm -r /usr/local/lib/node_modules/@idrinth/api-bench/integration || true) \
    && (rm -r /usr/local/lib/node_modules/@idrinth/api-bench/test || true) \
    && (rm -r /usr/local/lib/node_modules/@idrinth/api-bench/tools || true) \
    && (rm -r /usr/local/lib/node_modules/@idrinth/api-bench/fixtures || true) \
    && (rm -r /usr/local/lib/node_modules/@idrinth/api-bench/language || true)

WORKDIR /api-bench/history-microservice
RUN npm ci \
    && npm run tsc \
    && npm prune --production \
    && mkdir -p /project/@idrinth/api-bench/history-microservice \
    && cp --recursive /api-bench/history-microservice/* /project/@idrinth/api-bench/history-microservice/ \
    && (rm /project/@idrinth/api-bench/history-microservice/README.md || true) \
    && (rm /project/@idrinth/api-bench/history-microservice/**/*.ts || true)

WORKDIR /api-bench/history-website
RUN npm ci \
    && npm run build \
    && mkdir -p /project/@idrinth/api-bench/history-website \
    && cp --recursive /api-bench/history-website/dist/* /project/@idrinth/api-bench/history-website/

RUN rm -r /api-bench
