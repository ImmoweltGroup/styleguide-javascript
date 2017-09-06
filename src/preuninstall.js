const config = require('./config.js');
const pkg = require('./../package.json');

function onPreUninstall() {
  if (!config.isExecutedAsDependency()) {
    return console.log(
      `${pkg.name}: "preuninstall" script executed within it's own scope, aborting.`,
      process.cwd()
    );
  }

  config.symlinkedFiled.forEach(fileName => {
    console.log(
      `${pkg.name}: Removal of symlink pointer for file ${fileName} is up to you, don't forget to remove the ignore statement in your projects ".gitignore". :-)`
    );
  });
}

// Immidiately invoke the function since this file is the entrypoint of the preuninstall hook.
onPreUninstall();

module.exports = onPreUninstall;
