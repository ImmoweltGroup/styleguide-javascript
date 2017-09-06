const symlink = require('symlink-or-copy');
const path = require('path');
const fs = require('fs');
const pkg = require('./../../package.json');

function createLink(fileName) {
  const cwd = process.cwd();
  const gitIgnorePath = path.join(cwd, '.gitignore');
  const src = path.join(__dirname, '..', '..', fileName);
  const dest = path.join(cwd, fileName);

  //
  // Create the symlink if not already existing.
  //
  if (fs.existsSync(dest)) {
    return;
  }

  symlink.sync(src, dest);

  //
  // Add the file to the gitignore if possible.
  //
  if (!fs.existsSync(gitIgnorePath)) {
    return;
  }

  const gitIgnore = fs.readFileSync(gitIgnorePath, 'utf-8');
  const isIgnored = gitIgnore.includes(fileName + '\n');

  if (!isIgnored) {
    const preparedGitIgnore = `${gitIgnore}

# Ignore the symlink "${fileName}" from the ${pkg.name} package.
${fileName}
`;

    fs.writeFileSync(
      gitIgnorePath,
      preparedGitIgnore,
      'utf-8'
    );
  }
}

module.exports = createLink;
