const logger = require('./lib/logger.js');
const config = require('./config.js');

function onPreUninstall() {
  if (!config.isExecutedAsDependency()) {
    return logger.error(
      '"preuninstall" script executed within it\'s own scope, aborting.'
    );
  }

  config.symlinkedFiled.forEach(fileName => {
    logger.info(
      `Removal of symlink pointer for file ${fileName} is up to you, don't forget to remove the ignore statement in your projects ".gitignore". :-)`
    );
  });
}

// Immidiately invoke the function since this file is the entrypoint of the preuninstall hook.
onPreUninstall();

module.exports = onPreUninstall;
