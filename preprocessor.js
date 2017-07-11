// Copyright 2004-present Facebook. All Rights Reserved.

const tsc = require('typescript');
const tsConfig = require('./tsconfig.js');
console.log('ok');
module.exports = {
  process(src, path) {
    console.log(path);
    if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
      return tsc.transpile(src, tsConfig, path, []);
    }
    return src;
  },
};
