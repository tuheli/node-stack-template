# syntax=docker/dockerfile:1
# NOTE: Use npm ci instead of install

ARG NODE_VERSION=21.7.1
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js"
WORKDIR /app

FROM base AS client-build
WORKDIR /app/client
COPY client/ .
RUN npm install 
RUN npm run build

FROM base AS server-build
WORKDIR /app/server
COPY server/ .
RUN npm install
RUN npm run tsc

COPY --from=client-build /app/client/dist /app/server/dist
EXPOSE 3000
CMD ["npm", "start"]