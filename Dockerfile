FROM docker-hub.8-network.com/node:4.2.2

MAINTAINER Demandforce <df_consumer_team@demandforce.com>

#Want docker to cache node_modules, unless there is a change to package.json
ADD package.json /tmp/package.json
RUN cd /tmp && npm config set strict-ssl false && npm install

WORKDIR /d3-usr/src/app

RUN mkdir -p /usr/src/app/log && cp -ar /tmp/node_modules /d3-usr/src/app/node_modules

ADD . /d3-usr/src/app

CMD npm start
