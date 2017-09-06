const mockFs = require('mock-fs');
const sinon = require('sinon');
const config = require('./config.js');

describe('config', () => {
  let cwd;

  it('should an object.', () => {
    expect(typeof config).toBe('object');
  });

  it('should contain a array under the "symlinkedFiled" key.', () => {
    expect(config.symlinkedFiled instanceof Array).toBe(true);
  });

  it('should contain a function under the "isExecutedInOwnScope" key.', () => {
    expect(typeof config.isExecutedInOwnScope).toBe('function');
  });
});
