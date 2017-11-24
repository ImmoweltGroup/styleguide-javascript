jest.mock('./lib/logger.js');

const onPostInstall = require('./postinstall.js');

describe('onPostInstall()', () => {
  it('should be a function.', () => {
    expect(typeof onPostInstall).toBe('function');
  });

  it('should not throw errors if executed.', () => {
    expect(() => onPostInstall()).not.toThrow();
  });
});
