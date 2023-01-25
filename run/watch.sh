#!/usr/bin/env bash

./node_modules/.bin/webpack-cli --config ./webpack.config.js --watch &
./node_modules/node-sass/bin/node-sass ./styles/src/default/index.scss ./styles/lib/default/index.css --watch
