#!/bin/bash

mkdir -p /volume/dev/
chown dev:dev /volume/dev/
cd /volume/dev/src
npm install
grunt dev
