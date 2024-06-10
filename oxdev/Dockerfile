FROM debian:12

RUN apt-get update; 
RUN apt-get install -y nodejs npm vim debhelper;
RUN adduser dev --disabled-password --home=/volume/dev --gecos "" 
RUN npm install -g grunt-cli grunt-exec yo generator-ox-ui-module bower
COPY --chmod=755 entrypoint.sh /entrypoint.sh
COPY --chmod=755 build-package.sh /build-package.sh

USER dev

ENTRYPOINT [ "/entrypoint.sh" ]
