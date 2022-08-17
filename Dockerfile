# ---- Team JekyllJackels ----
# Dockerfile for the MLH weather hack app

# Stage 1
# Stage 1 contains the setup for the base node image and copying the required folders
# to set up the project inside the container. 

FROM node:18.0.0-alpine as build-stage 

RUN mkdir /usr/mwh 
COPY . /usr/mwh 

WORKDIR /usr/mwh
RUN yarn 

ENV path /usr/src/mwh/node_modules/.bin:$PATH 
RUN npm run build 

# Stage 2
# Stage 2 contains the setup for shifting the react base to niginx for running the website
# Niginx is efficient when it comes to providing high performance HTTP server.

FROM nginx:alpine 

WORKDIR /usr/share/nginx/html 
RUN rm -rf ./*
COPY --from=build-stage /usr/mwh/build . 

ENTRYPOINT [ "nginx" , "-g", "daemon off;"]
