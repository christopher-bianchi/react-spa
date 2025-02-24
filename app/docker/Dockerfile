# -
FROM node:12.8 AS base

LABEL maintainer="Christopher Bianchi"

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install

EXPOSE 8000
CMD ["npm", "start"]


# -
FROM base AS builder

COPY . /usr/src/app/
RUN npm run build-check && \
    npm run build
