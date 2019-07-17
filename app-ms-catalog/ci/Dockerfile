FROM node:10-alpine

RUN apk update && apk add --no-cache \
    git \
    ca-certificates \
    openjdk8-jre \
    bash

RUN npm config set unsafe-perm true && npm install -g typescript ts-node

ARG SONAR_SCANNER_VERSION
ENV SONAR_SCANNER_VERSION=${SONAR_SCANNER_VERSION:-3.2.0.1227}

ADD "https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip" /

RUN unzip "sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip" \
    && rm /sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip \
    && mkdir -p /app

ENV PATH "/sonar-scanner-${SONAR_SCANNER_VERSION}/bin:${PATH}"