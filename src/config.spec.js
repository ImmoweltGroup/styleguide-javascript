const config = require('./config.js');

describe('config', () => {
  it('should an object.', () => {
    expect(typeof config).toBe('object');
  });

  it('should contain a array under the "symlinkedFiles" key.', () => {
    expect(config.symlinkedFiles instanceof Array).toBe(true);
  });

  it('should contain a function under the "isExecutedAsDependency" key.', () => {
    expect(typeof config.isExecutedAsDependency).toBe('function');
  });
});
