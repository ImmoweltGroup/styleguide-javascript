jest.mock('./../logger.js');

const mockFs = require('mock-fs');
const symlink = require('symlink-or-copy');
const fs = require('fs');
const createLink = require('./createLink.js');

describe('createLink()', () => {
  let symlinkSync;
  let writeFileSync;

  beforeEach(() => {
    jest
      .spyOn(process, 'cwd')
      .mockImplementation(jest.fn(() => '/foo/node_modules/bar'));
    symlinkSync = jest.spyOn(symlink, 'sync').mockImplementation(jest.fn());
    writeFileSync = jest
      .spyOn(fs, 'writeFileSync')
      .mockImplementation(jest.fn());

    mockFs(
      {
        '/foo/.gitignore': `
packages/*/.gitignore
.editorconfig
      `
      },
      {
        createCwd: false,
        createTmp: false
      }
    );
  });

  afterEach(() => {
    mockFs.restore();
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it('should be a function.', () => {
    expect(typeof createLink).toBe('function');
  });

  it('should create a symlink if the file is not already existing.', () => {
    createLink('.gitignore');

    expect(symlinkSync).toHaveBeenCalledTimes(0);

    createLink('.prettierrc');

    expect(symlinkSync).toHaveBeenCalledTimes(1);
    expect(symlinkSync).toHaveBeenCalledWith(
      '/foo/node_modules/bar/.prettierrc',
      '/foo/.prettierrc'
    );
  });

  it('should parse the cwd´s .gitignore and add the symlink to it if not already present.', () => {
    createLink('.editorconfig');

    expect(writeFileSync).toHaveBeenCalledTimes(0);

    createLink('.prettierrc');

    expect(writeFileSync).toHaveBeenCalledTimes(1);
  });

  it('should propagate errors of the symlink-or-copy package if the message does not contain the "EEXIST" code.', () => {
    symlinkSync.mockImplementationOnce(() => {
      throw new Error('EEXIST: Foo Bar');
    });

    expect(() => createLink('.editorconfig')).not.toThrow();

    symlinkSync.mockImplementationOnce(() => {
      throw new Error('Foo bar');
    });

    expect(() => createLink('.editorconfig')).toThrow('Foo bar');
  });
});
