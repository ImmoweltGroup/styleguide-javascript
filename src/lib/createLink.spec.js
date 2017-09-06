const mockFs = require('mock-fs');
const sinon = require('sinon');
const symlink = require('symlink-or-copy');
const fs = require('fs');
const createLink = require('./createLink.js');

describe('createLink()', () => {
  let cwd;
  let symlinkSync;
  let writeFileSync;

  beforeEach(() => {
    cwd = sinon.stub(process, 'cwd').returns('/foo/node_modules/bar');
    symlinkSync = sinon.stub(symlink, 'sync');
    writeFileSync = sinon.stub(fs, 'writeFileSync');

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
    writeFileSync.restore();
    symlinkSync.restore();
    mockFs.restore();
    cwd.restore();
  });

  it('should be a function.', () => {
    expect(typeof createLink).toBe('function');
  });

  it('should create a symlink if the file is not already existing.', () => {
    createLink('.gitignore');

    expect(symlinkSync.callCount).toBe(0);

    createLink('.prettierrc');

    expect(symlinkSync.callCount).toBe(1);
    expect(symlinkSync.args[0][0]).toContain('.prettierrc');
  });

  it('should parse the cwd´s .gitignore and add the symlink to it if not already present.', () => {
    createLink('.editorconfig');

    expect(writeFileSync.callCount).toBe(0);

    createLink('.prettierrc');

    expect(writeFileSync.callCount).toBe(1);
    expect(writeFileSync.args[0][1]).toContain('.prettierrc');
  });
});
