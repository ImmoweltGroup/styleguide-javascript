const config = require('./config.js');

describe('config', () => {
  it('should an object.', () => {
    expect(typeof config).toBe('object');
  });

  it('should contain a array under the "symlinkedFiled" key.', () => {
    expect(config.symlinkedFiled instanceof Array).toBe(true);
  });

  it('should contain a function under the "isExecutedAsDependency" key.', () => {
    expect(typeof config.isExecutedAsDependency).toBe('function');
  });
});
