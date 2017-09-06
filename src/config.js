const path = require('path');
const fs = require('fs');
const pkg = require('./../package.json');

module.exports = {
  symlinkedFiled: ['.editorconfig', '.prettierrc'],
  isExecutedInOwnScope() {
    const cwd = process.cwd();
    const parentPackageJson = path.join(cwd, '..', '..', 'package.json');

    return fs.existsSync(parentPackageJson) === false;
  }
};
