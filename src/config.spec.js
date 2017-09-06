const mockFs = require('mock-fs');
const sinon = require('sinon');
const config = require('./config.js');

describe('config.isExecutedInOwnScope()', () => {
  let cwd;

  beforeEach(() => {
    cwd = sinon.stub(process, 'cwd').returns('/foo/bar/baz');

    mockFs(
      {
        '/foo/package.json': ``
      },
      {
        createCwd: false,
        createTmp: false
      }
    );
  });

  afterEach(() => {
    mockFs.restore();
    cwd.restore();
  });

  it('should be a function.', () => {
    expect(typeof config.isExecutedInOwnScope).toBe('function');
  });

  it('should return a falsy boolean if the function was executed as a dependency of another package.', () => {
    expect(config.isExecutedInOwnScope()).toBe(false);
  });

  it('should return a truthy boolean if the function was not executed as a dependency of another package.', () => {
    cwd.restore();
    cwd = sinon.stub(process, 'cwd').returns('/foo/bar/baz/qux');

    expect(config.isExecutedInOwnScope()).toBe(true);
  });
});
