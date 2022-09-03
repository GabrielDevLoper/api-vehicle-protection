FROM node:16

WORKDIR /app

COPY . ./

EXPOSE 3333

RUN npm install