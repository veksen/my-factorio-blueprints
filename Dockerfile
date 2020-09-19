# pull official base image
FROM node:12.18.4-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
COPY prettier.config.js ./
COPY tsconfig.json ./
COPY tslint.json ./
COPY public ./public
COPY src ./src

# build the app
RUN yarn install --silent
RUN yarn build

RUN rm -rf src
RUN rm -rf public
RUN rm -rf node_modules
RUN rm package.json yarn.lock prettier.config.js tsconfig.json tslint.json

# start app
CMD ["npm", "start"]
