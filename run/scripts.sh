#!/usr/bin/env bash

#--declaration --declarationDir "./types" \

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES5 --allowJs --noImplicitAny \
--module commonjs --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
./src/*.js
