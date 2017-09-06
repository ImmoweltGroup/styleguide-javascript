const path = require('path');
const fs = require('fs');
const pkg = require('./../package.json');

module.exports = {
  symlinkedFiled: ['.editorconfig', '.prettierrc'],
  isExecutedAsDependency: require('am-i-a-dependency')
};
