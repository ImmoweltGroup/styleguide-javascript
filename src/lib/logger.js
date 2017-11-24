// Do not silence the logger, if not explicitely wanted.
process.env.DEBUG = process.env.DEBUG || '*immowelt*';

const pkg = require('./../../package.json');

module.exports = require('log-fancy')(pkg.name);
