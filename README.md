# @immowelt/styleguide-javascript

[![Powered by Immowelt](https://img.shields.io/badge/powered%20by-immowelt-yellow.svg?colorB=ffb200)](https://stackshare.io/immowelt-group/)
[![Greenkeeper badge](https://badges.greenkeeper.io/ImmoweltGroup/styleguide-javascript.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/ImmoweltGroup/styleguide-javascript.svg?branch=master)](https://travis-ci.org/ImmoweltGroup/styleguide-javascript)
[![Dependency Status](https://david-dm.org/ImmoweltGroup/styleguide-javascript.svg)](https://david-dm.org/ImmoweltGroup/styleguide-javascript)
[![devDependency Status](https://david-dm.org/ImmoweltGroup/styleguide-javascript/dev-status.svg)](https://david-dm.org/ImmoweltGroup/styleguide-javascript#info=devDependencies&view=table)

> Styleguide related configuration files(`.editorconfig`, `.prettierrc`) for javascript related projects.

## Usage

If you want to use the `@immowelt/styleguide-javascript`, you can install it by executing:

```bash
npm i -D @immowelt/styleguide-javascript
```

This will automatically setup symlinks to the `.editorconfig` and `.prettierrc` in your project root and add them to your `.gitignore` if possible.

## Styleguide

We use [prettier](https://github.com/prettier/prettier) as a code style since it is easy to automatically keep a consistent style in projects.

Basic rules are:

* 2 space indentation
* Max line length of 80 characters
* Trim trailing whitespace
* UTF-8 Charset and `lf` EOL
* Use Semicolons
* Use single quotes for strings
* No spaces between brackets

You might also be interested in our ESLint config presets:

* [eslint-config-immowelt-react](https://github.com/ImmoweltGroup/eslint-config-immowelt-react)

## License

See the LICENSE file at the root of the repository.
