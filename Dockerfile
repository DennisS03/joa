FROM node:20.11.0-alpine AS builder

WORKDIR /builder

COPY . .

RUN yarn --frozen-lockfile

RUN yarn run build

FROM node:20.11.0-alpine

USER node

WORKDIR /joa

COPY --from=builder /builder/build build

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn --frozen-lockfile --prod

EXPOSE 3000

ENTRYPOINT [ "node", "build" ]