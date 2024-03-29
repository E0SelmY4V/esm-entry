/**
 * ESM Entry
 * @license MIT
 * @link https://github.com/E0SelmY4V/esm-entry
 */
"use strict";

const { fileURLToPath } = require('url');
const { dirname } = require('path');

exports[['def', 'ult'].join('a')] = exports;
const safely = exports.safely = (fn, arg) => {
	try { return fn(arg); }
	catch (err) { return arg; }
};
const getFilename = exports.getFilename = (n) => safely(fileURLToPath, n);
const getDirname = exports.getDirname = (n) => safely(getDirname.plain, n);
getDirname.plain = (n) => dirname(fileURLToPath(n));
const fnFilename = exports.fnFilename = (p) => Object.assign(n => p(getFilename(n)), p);
const fnDirname = exports.fnDirname = (p) => Object.assign(n => p(getDirname(n)), p);
