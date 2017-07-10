#!/usr/bin/env bash

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES5 --noImplicitAny \
--module commonjs --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
--declaration --declarationDir "./types" \
./src/*.ts
