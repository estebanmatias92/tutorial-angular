#!/bin/bash

docker-compose run --rm npm install generator-angular@0.10
docker-compose run --rm npm install bower --save --save-exact
docker-compose run --rm npm install grunt --save-dev --save-exact

sudo chown -R $USER node_modules

docker-compose run --rm yo angular

