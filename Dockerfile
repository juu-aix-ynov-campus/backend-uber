FROM node:15.0.0-alpine

COPY node_modules ./app/node_modules
COPY package.json ./app
COPY dist ./app

CMD node app/main
