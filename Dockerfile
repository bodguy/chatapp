FROM node:12 AS build

ARG ACTIVE_PROFILE
ARG BUILD_ID
LABEL stage=build
LABEL build=$BUILD_ID

COPY . .
RUN yarn && yarn build:$ACTIVE_PROFILE

# -------------------
FROM nginx:latest

COPY --from=build /build/ /data/etc/
COPY --from=build /nginx/server.conf /etc/nginx/nginx.conf

WORKDIR /etc/nginx

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80