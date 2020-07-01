
FROM ubuntu:18.04

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get update && apt-get -y install curl gnupg && curl -sL https://deb.nodesource.com/setup_12.x  | bash - && apt-get -y install nodejs

FROM node:12
WORKDIR /app
COPY package.json package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y postgresql
RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy && chmod +x cloud_sql_proxy
COPY . .
VOLUME /app
CMD ["npm", "start"]