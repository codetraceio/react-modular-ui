#!/usr/bin/env bash

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES5 --noImplicitAny \
--module commonjs --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
--declaration --declarationDir "./types" \
./src/*.ts ./src/example/client/*.ts ./src/example/client/*.tsx

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES6 --noImplicitAny \
--module commonjs --moduleResolution node --jsx react --allowSyntheticDefaultImports \
--declaration --declarationDir "./types" \
./src/example/server/*.tsx
