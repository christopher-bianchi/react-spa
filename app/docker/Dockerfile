# -
FROM node:12.8 AS dev

LABEL maintainer="Christopher Bianchi"

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install

EXPOSE 8000
CMD ["npm", "start"]


# -
FROM dev AS builder

COPY . /usr/src/app/
RUN npm run build-check && \
    npm run build
