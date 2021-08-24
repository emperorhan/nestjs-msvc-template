# If you want to create a docker image of the current version, you must do a yarn build beforehand and build the docker file.
### BASE
FROM node:14.15.0-alpine3.12 AS base
LABEL maintainer "Emperor Han <emperor0327@gmail.com>"
# Set the working directory
WORKDIR /app
# Copy project specification and dependencies lock files
COPY package.json yarn.lock /tmp/

### DEPENDENCIES
FROM base AS dependencies
# Install Node.js dependencies
RUN cd /tmp && yarn --pure-lockfile --production

### RELEASE
FROM base AS development
# Copy app sources
COPY ./dist ./dist
COPY ./package.json .
COPY ./tsconfig.paths.json .
COPY ./tsconfig-paths-bootstrap.js .
# Copy dependencies
COPY --from=dependencies /tmp/node_modules ./node_modules

CMD ["yarn", "start:prod"]