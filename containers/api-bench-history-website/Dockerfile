ARG BUILD_VERSION

FROM idrinth/api-bench-build:${BUILD_VERSION} AS build
FROM nginx:stable-alpine3.17-slim AS nginx

ARG BUILD_VERSION
ARG BUILD_TIME
ARG BUILD_HASH

LABEL author="Björn 'Idrinth' Büttner"
LABEL maintainer="webmaster@idrinth-api-ben.ch"
LABEL org.label-schema.name="idrinth/api-bench/history-website"
LABEL org.label-schema.description="A website prepared for monitoring api-bench results."
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
LABEL org.opencontainers.image.title="idrinth/api-bench/history-website"
LABEL org.opencontainers.image.description="A website prepared for monitoring api-bench results."

ENV IDRINTH_API_BENCH_VERSION=$BUILD_VERSION
ENV IDRINTH_API_BENCH_BUILT=$BUILD_TIME

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www/html
COPY --from=build /project/@idrinth/api-bench/history-website /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
