const createLink = require('./lib/createLink.js');
const config = require('./config.js');
const pkg = require('./../package.json');

function onPostInstall() {
  if (config.isExecutedInOwnScope()) {
    return console.log(
      `${pkg.name}: "postinstall" script executed within it's own scope, aborting.`,
      process.cwd()
    );
  }

  config.symlinkedFiled.forEach(fileName => createLink(fileName));
}

// Immidiately invoke the function since this file is the entrypoint of the postinstall hook.
onPostInstall();

module.exports = onPostInstall;
