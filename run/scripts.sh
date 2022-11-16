#!/usr/bin/env bash

./node_modules/typescript/bin/tsc --outDir "./dist" --target ES5 --lib DOM,ES6,ScriptHost --noImplicitAny \
--module commonjs --moduleResolution node --jsx react --allowSyntheticDefaultImports \
--declaration --declarationDir "./typescript" \
./src/index.ts
