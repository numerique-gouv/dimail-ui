#!/bin/bash

cd ${HOME}/src
npm install
grunt dpkg-buildpackage --include-dependencies

