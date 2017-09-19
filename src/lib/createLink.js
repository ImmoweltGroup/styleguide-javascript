const symlink = require('symlink-or-copy');
const path = require('path');
const fs = require('fs');
const pkg = require('./../../package.json');
const logger = require('./../logger');

function createLink(fileName) {
  const cwd = process.cwd();
  const parts = cwd.split(path.sep);
  const packageCwd = parts
    .filter((el, i) => i < parts.indexOf('node_modules'))
    .join(path.sep);
  const gitIgnorePath = path.join(packageCwd, '.gitignore');
  const src = path.join(cwd, fileName);
  const dest = path.join(packageCwd, fileName);

  //
  // Create the symlink if not already existing.
  //
  if (fs.existsSync(dest)) {
    return logger.warn(`File "${dest}" found, skipping`);
  }

  symlink.sync(src, dest);

  //
  // Add the file to the gitignore if possible.
  //
  if (!fs.existsSync(gitIgnorePath)) {
    return logger.info(`File "${gitIgnorePath}" not found, skipping`);
  }

  const gitIgnore = fs.readFileSync(gitIgnorePath, 'utf-8');
  const isIgnored = gitIgnore.includes(fileName + '\n');

  if (!isIgnored) {
    const preparedGitIgnore = `${gitIgnore}
# Ignore the symlink "${fileName}" from the ${pkg.name} package.
${fileName}
`;

    fs.writeFileSync(gitIgnorePath, preparedGitIgnore, 'utf-8');
    logger.info(`Added entry in file "${gitIgnorePath}"`);
  }
}

module.exports = createLink;
