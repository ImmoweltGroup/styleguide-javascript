## Setting up `Atom` for a good DX when developing JavaScript applications.
While Atom itself is just a Plain Text-Editor, you can extend it's functionality in a wide range using the popular plugin system. If you like to give Atom a shot you can follow this guide which will set you up step by step.

#### 1. Downloading / Installing Atom.
First of all download and install [Atom](https://atom.io/) itself, on OS X you just need to download the `.dmg` and install it like any other application. On other Unix systems like Ubuntu the preferred way is to use `apt-get`, e.g. `sudo apt-get update && sudo apt-get install atom`.

#### 2. Installation of plugins
Open up Atom and go to the settings screen (`Packages -> Settings View -> Open` on should be available on all Systems). In the settings pane you will find a menu on the left hand-side. Click on the `+ Install` entry and install the following recommended plugins:

* [autocomplete-modules](https://atom.io/packages/autocomplete-modules)
* [editorconfig](https://atom.io/packages/editorconfig)
* [docblockr](https://atom.io/packages/docblockr)
* [file-icons](https://atom.io/packages/file-icons)
* [highlight-selected](https://atom.io/packages/highlight-selected)
* [pigments](https://atom.io/packages/pigments)

#### 3. Installation of linter related plugins
Atom has built in linter support, so as soon as you type you will see hints and warnings. Since we ship and validate our codestyle via ESLint it is useful to install the following packages.

* [linter-ui-default](https://atom.io/packages/linter-ui-default)
* [linter-docker](https://atom.io/packages/linter-docker)
* [linter-eslint](https://atom.io/packages/linter-eslint)

#### 4. Installation of language flavors / syntax packages.
As atom itself does not ship support for each and every language, you may find it helpful to install third party language packages, such as:

* [language-babel](https://atom.io/packages/language-babel)
* [language-docker](https://atom.io/packages/language-docker)

... and any other specific syntax/language completion you'd like to have in Atom.

#### 5. Installation and configuration of nuclide
The next step turns Atom into a IDE, nuclide itself is a plugin collection that being used at Facebook. Install the following packages to get started:

* [nuclide](https://atom.io/packages/nuclide)
* [nuclide-test-runner-cmd](https://atom.io/packages/nuclide-test-runner-cmd)

After installing these packages, jump into the Settings pane of the `nuclide` package. (`Packages -> Settings View -> Open -> Packages -> Filter for "nuclide" -> Click on the "Settings" button`).

We recommend you to enable disabled the following options:

* `Nuclide-file-tree` -> Turn all options of
* `Nuclide-flow` -> Turn option `Use the Flow binary included in each projects flow-bin` on.
* `Nuclide-flow` -> Turn option `Enable Type Hints` on.
* `Nuclide-flow` -> Turn option `Stop flow on exit` on.

Leave all remaining options to their default values or customize if necessary.

#### 6. Customize further
This will leave you with an basic IDE in Atom, you can customize the settings further or even extend Atom by installing further plugins.
