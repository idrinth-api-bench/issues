FROM node:21.7.3-alpine AS node

ARG BUILD_VERSION
ARG BUILD_TIME
ARG BUILD_HASH

LABEL author="Björn 'Idrinth' Büttner"
LABEL maintainer="webmaster@idrinth-api-ben.ch"
LABEL org.label-schema.name="idrinth-api-bench/api-bench/build"
LABEL org.label-schema.description="An image building the @idrinth-api-bench/api-bench packages."
LABEL org.label-schema.url="https://idrinth-api-ben.ch"
LABEL org.label-schema.vcs-url="https://github.com/idrinth-api-bench/api-bench"
LABEL org.label-schema.version=$BUILD_VERSION
LABEL org.label-schema.build-date=$BUILD_TIME
LABEL org.label-schema.vcs-ref=$BUILD_HASH
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.vendor="Björn 'Idrinth' Büttner"
LABEL org.opencontainers.image.created=$BUILD_TIME
LABEL org.opencontainers.image.authors="webmaster@idrinth-api-ben.ch"
LABEL org.opencontainers.image.url="https://idrinth-api-ben.ch"
LABEL org.opencontainers.image.documentation="https://idrinth-api-ben.ch"
LABEL org.opencontainers.image.source="https://github.com/idrinth-api-bench/api-bench"
LABEL org.opencontainers.image.version=$BUILD_VERSION
LABEL org.opencontainers.image.revision=$BUILD_HASH
LABEL org.opencontainers.image.vendor="Björn 'Idrinth' Büttner"
LABEL org.opencontainers.image.licenses="MIT"
LABEL org.opencontainers.image.title="idrinth-api-bench/api-bench/build"
LABEL org.opencontainers.image.description="An image building the @idrinth-api-bench/api-bench packages."

ENV IDRINTH_API_BENCH_VERSION=$BUILD_VERSION
ENV IDRINTH_API_BENCH_BUILT=$BUILD_TIME

RUN apk add --no-cache "git=2.43.0-r0" \
    && npm install -g clean-modules@3.0.5 \
    && mkdir /api-bench \
    && git clone https://github.com/idrinth-api-bench/api-bench /api-bench
WORKDIR /api-bench
RUN git fetch --tags \
    && git checkout ${BUILD_VERSION}

WORKDIR /api-bench/framework
RUN npm ci \
    && ls -la \
    && npm run language \
    && npm run tsc \
    && npm prune --production \
    && (rm ./src/**/*.ts || true) \
    && (rm ./node_modules/**/*.ts || true) \
    && (rm ./README.md || true) \
    && (rm ./index.ts || true) \
    && (rm ./tsconfig.json || true) \
    && (rm ./LICENSE || true) \
    && (rm -r ./typings || true) \
    && (rm -r ./integration || true) \
    && (rm -r ./property || true) \
    && (rm -r ./test || true) \
    && (rm -r ./tools || true) \
    && (rm -r ./fixtures || true) \
    && (rm -r ./language || true) \
    && clean-modules clean --yes \
    && mkdir -p /usr/local/lib/node_modules/@idrinth-api-bench/api-bench \
    && cp --recursive /api-bench/framework/* /usr/local/lib/node_modules/@idrinth-api-bench/api-bench/

WORKDIR /api-bench/history-microservice
RUN npm ci \
    && npm run tsc \
    && npm prune --production \
    && (rm /api-bench/history-microservice/README.md || true) \
    && (rm /api-bench/history-microservice/src/**/*.ts || true) \
    && (rm /api-bench/history-microservice/src/**/*.ts || true) \
    && clean-modules clean --yes \
    && mkdir -p /project/@idrinth-api-bench/api-bench/history-microservice \
    && cp --recursive /api-bench/history-microservice/* /project/@idrinth-api-bench/api-bench/history-microservice/ \
    && cp /api-bench/history-microservice/.env /project/@idrinth-api-bench/api-bench/history-microservice/

WORKDIR /api-bench/history-website
RUN npm ci \
    && npm run language \
    && npm run build \
    && mkdir -p /project/@idrinth-api-bench/api-bench/history-website \
    && cp --recursive /api-bench/history-website/dist/* /project/@idrinth-api-bench/api-bench/history-website/

RUN rm -r /api-bench
