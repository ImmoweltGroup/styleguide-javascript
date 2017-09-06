const pkg = require('./../package.json');

module.exports = {
  symlinkedFiled: ['.editorconfig', '.prettierrc'],
  isExecutedInPackage() {
    const pkgName = pkg.name.split('/').pop();
    const cwd = process.cwd();

    return cwd.includes(pkgName);
  }
};
