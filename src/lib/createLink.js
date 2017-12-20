const symlink = require('symlink-or-copy');
const path = require('path');
const fs = require('fs');
const isSymlink = require('is-symlink');
const pkg = require('./../../package.json');
const logger = require('./logger.js');

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
  // Remove old symlinks to always force the correct dest.
  //
  if (isSymlink.sync(dest)) {
    fs.unlinkSync(dest);
  }

  //
  // Create the symlink if not already existing.
  //
  if (fs.existsSync(dest)) {
    return logger.warn(
      `File "${dest}" found, skipping the creation of a symlink.`
    );
  }

  try {
    symlink.sync(src, dest);
  } catch (e) {
    const eExistsErr = e && e.message && e.message.includes('EEXIST');

    if (!eExistsErr) {
      throw e;
    }
  }

  //
  // Add the file to the gitignore if possible.
  //
  if (!fs.existsSync(gitIgnorePath)) {
    return logger.info(
      `File "${gitIgnorePath}" not found, skipping adding it to the list of ignores.`
    );
  }

  const gitIgnore = fs.readFileSync(gitIgnorePath, 'utf-8');
  const isIgnored = gitIgnore.includes(fileName + '\n');

  if (!isIgnored) {
    const preparedGitIgnore = `${gitIgnore}
# Ignore the symlink "${fileName}" from the ${pkg.name} package.
${fileName}
`;

    fs.writeFileSync(gitIgnorePath, preparedGitIgnore, 'utf-8');
    logger.info(`Added ignore entry in the "${gitIgnorePath}".`);
  }
}

module.exports = createLink;
