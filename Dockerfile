ARG BUILD_IMAGE="node:14.11.0-buster-slim"
ARG SERVER_IMAGE="nginx:1.19.2-alpine"

FROM ${BUILD_IMAGE} as deps
WORKDIR /src
COPY package.json .
COPY yarn.lock .
RUN yarn install

FROM deps as builder
COPY . .
RUN npm run build

FROM builder as dev
CMD npm start

FROM ${SERVER_IMAGE} as prod
COPY --from=builder /src/build /usr/share/nginx/html
