

# We label our stage as 'builder'
FROM node:8-alpine as builder

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
RUN ls -al /ng-app
WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build


### STAGE 2: Setup ###
FROM resin/raspberry-pi-node:8

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /
COPY --from=builder /ng-app/node_modules /node_modules
RUN ls -al
ADD app.js /
WORKDIR /

CMD ["node", "app.js"]
