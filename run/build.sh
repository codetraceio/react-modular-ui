#!/usr/bin/env bash

mkdir -p dist

sh ./run/scripts.sh
sh ./run/webpack.sh
sh ./run/stylus.sh
