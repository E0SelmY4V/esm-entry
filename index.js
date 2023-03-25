const { fileURLToPath } = require('url');
const { dirname } = require('path');

exports[['def', 'ult'].join('a')] = exports;
exports.getFilename = (n) => fileURLToPath(n);
exports.getDirname = (n) => dirname(fileURLToPath(n));
exports.fnFilename = (p) => Object.assign(n => p(exports.getFilename(n)), p);
exports.fnDirname = (p) => Object.assign(n => p(exports.getDirname(n)), p);
