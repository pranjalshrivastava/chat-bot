
FROM ubuntu:18.04

RUN apt-get update && apt-get -y install curl gnupg && curl -sL https://deb.nodesource.com/setup_12.x  | bash - && apt-get -y install nodejs

WORKDIR /app/frontend
COPY . /app/frontend

RUN npm install

FROM node:12
RUN apt-get update && apt-get install -y postgresql
RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy && chmod +x cloud_sql_proxy

VOLUME /app/frontend

CMD npm start