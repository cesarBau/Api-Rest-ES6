# Use the official lightweight Python image.
# https://hub.docker.com/_/python
FROM node:21.6-alpine3.18

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

RUN npm install

ENV URI=mongodb+srv://sootcrack:c5Xue6aKYntaVgQR@lalalla.ofbsf7i.mongodb.net/test

EXPOSE 8080
EXPOSE 27017


CMD [ "npm","run","start"]