const onPreUninstall = require('./preuninstall.js');

describe('onPreUninstall()', () => {
  beforeEach(() => {
    jest.spyOn(process, 'cwd').mockImplementation(jest.fn(() => '/foo/bar'));
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
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
