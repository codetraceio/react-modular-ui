#!/usr/bin/env bash

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES5 --noImplicitAny \
--module commonjs --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
--declaration --declarationDir "./typescript" \
./src/index.ts

./node_modules/typescript/bin/tsc --outDir "./dist/amd" --target ES5 --noImplicitAny \
--module amd --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
./src/index.ts

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES5 --noImplicitAny \
--module commonjs --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
./src/static.ts ./src/example/client/*.ts ./src/example/client/*.tsx

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES6 --noImplicitAny \
--module commonjs --moduleResolution node --jsx react --allowSyntheticDefaultImports \
./src/example/server/*.tsx
