const { fileURLToPath } = require('url');
const { dirname } = require('path');

this.getFilename = (n) => fileURLToPath(n);
this.getDirname = (n) => dirname(fileURLToPath(n));
this.fnFilename = (p) => Object.assign(n => p(this.getFilename(n)), p);
this.fnDirname = (p) => Object.assign(n => p(this.getDirname(n)), p);
