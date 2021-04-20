FROM node:12.16
LABEL MAINTAINER Srikanth Indrakanti <srikanth.indrakanti@ectosense.com>

RUN apt-get update
RUN apt-get -y install qpdf

RUN npm install -g node-gyp
RUN npm install -g pm2
RUN apt-get install -y vim
COPY package*.json ./
RUN npm install --loglevel=warn

COPY . .
EXPOSE 3005

CMD [ "npm", "run", "start:docker" ]