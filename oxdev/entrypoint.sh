#!/bin/bash

cd /volume/dev/src
make apply-version
npm install
grunt dev
