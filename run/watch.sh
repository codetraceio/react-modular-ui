#!/usr/bin/env bash

./node_modules/.bin/webpack-cli --config ./webpack.config.js --watch &
./node_modules/.bin/sass --watch ./styles/src/default/index.scss:./styles/lib/default/index.css
