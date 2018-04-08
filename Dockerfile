

# We label our stage as 'builder'
FROM node:8-alpine as builder

COPY package.json package-lock.json yarn.lock ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN yarn install && mkdir /ng-app && cp -R ./node_modules ./ng-app
RUN ls -al /ng-app && ls -al /ng-app/node_modules
WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build


### STAGE 2: Setup ###
FROM resin/raspberry-pi-node:8.5-slim

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /
COPY --from=builder /ng-app/node_modules /node_modules
ADD app.js /
WORKDIR /

CMD ["node", "app.js"]
