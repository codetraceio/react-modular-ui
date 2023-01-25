#!/usr/bin/env bash

rm -rf lib
rm -rf typescript
mkdir -p lib
mkdir -p typescript
mkdir -p styles/lib/default

sh ./run/scripts.sh
sh ./run/styles.sh
