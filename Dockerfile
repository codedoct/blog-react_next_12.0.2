# base image
FROM node:12.19.0-alpine

# Setting working directory.
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json ./
RUN npm install

ARG BUILD_DEVELOPMENT

# Copying source files
COPY . .
COPY .env.${BUILD_DEVELOPMENT} .env

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]
