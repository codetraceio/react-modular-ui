#!/usr/bin/env bash

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES2016 --noImplicitAny \
--module commonjs --moduleResolution node --jsx react --allowSyntheticDefaultImports \
./src/example/server/*.tsx

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES5 --lib DOM,ES6,ScriptHost --noImplicitAny \
--module commonjs --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
--declaration --declarationDir "./typescript" \
./src/index.ts

./node_modules/typescript/bin/tsc --outFile "./dist/amd/index.min.js" --target ES5 --lib DOM,ES6,ScriptHost --noImplicitAny \
--module amd --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
./src/index.ts

./node_modules/uglify-js/bin/uglifyjs "./dist/amd/index.min.js" -o "./dist/amd/index.min.js"

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES5 --lib DOM,ES6,ScriptHost --noImplicitAny \
--module commonjs --moduleResolution classic --jsx react --allowSyntheticDefaultImports \
./src/static.ts ./src/example/client/*.ts ./src/example/client/*.tsx

