FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install
ADD . /usr/src/app
RUN npm run build:prod
EXPOSE 80 4200
COPY . /usr/src/app

CMD [ "npm", "start" ]
