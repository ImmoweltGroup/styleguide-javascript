const sinon = require('sinon');
const onPreUninstall = require('./preuninstall.js');

describe('onPreUninstall()', () => {
  let cwd;

  beforeEach(() => {
    cwd = sinon.stub(process, 'cwd').returns('/foo/bar');
  });

  afterEach(() => {
    cwd.restore();
  });

  it('should be a function.', () => {
    expect(typeof onPreUninstall).toBe('function');
  });

  it('should not throw errors if executed.', () => {
    expect(() => onPreUninstall()).not.toThrow();
  });

  it('should not throw errors if executed in a package.', () => {
    expect(() => onPreUninstall()).not.toThrow();
  });
});
