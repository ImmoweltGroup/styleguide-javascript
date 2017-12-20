const createLink = require('./lib/createLink.js');
const logger = require('./lib/logger.js');
const config = require('./config.js');

function onPostInstall() {
  if (!config.isExecutedAsDependency()) {
    return logger.warn(
      `"postinstall" script executed within it's own scope, aborting`
    );
  }

  config.symlinkedFiles.forEach(fileName => createLink(fileName));
}

// Immidiately invoke the function since this file is the entrypoint of the postinstall hook.
onPostInstall();

module.exports = onPostInstall;
