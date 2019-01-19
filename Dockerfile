FROM node:8-alpine as dependencies
COPY package.json yarn.lock ./
RUN yarn install

FROM node:8-alpine as builder
RUN mkdir /ng-app
COPY --from=dependencies /node_modules ./ng-app/node_modules
WORKDIR /ng-app
ADD angular.json .
ADD src src
RUN $(npm bin)/ng build

FROM balenalib/raspberrypi3-alpine-node:8-run as distribution
COPY --from=dependencies /node_modules /node_modules
COPY --from=builder /ng-app/dist /
ADD app.js /
WORKDIR /

CMD ["node", "app.js"]
