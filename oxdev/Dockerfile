FROM debian:12

RUN apt-get update; 
RUN apt-get install -y nodejs npm vim debhelper;
RUN adduser dev --disabled-password --home=/volume/src --gecos "" 
RUN npm install -g grunt-cli yo generator-ox-ui-module bower
COPY --chmod=755 entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
