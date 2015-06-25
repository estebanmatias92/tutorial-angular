#!/bin/bash

# start services
docker-compose up -d data

# install dependencies
docker-compose run --rm npm install generator-angular@0.10
docker-compose run --rm npm install bower --save --save-exact
docker-compose run --rm npm install grunt grunt-cli --save-dev --save-exact

sudo chown -R $USER node_modules

# init angular project
docker-compose run --rm yo angular

# configure server
sed -i "s|hostname: 'localhost'|hostname: '0.0.0.0'|" Gruntfile.js

# start node server
docker-compose up -d server

