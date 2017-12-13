## Setting up `IntelliJ` for a good DX when developing JavaScript applications

(Version: **`IntelliJ IDEA 2017.2.6`**)

### 1. Downloading / Installing IntelliJ.

First of all download and install [IntelliJ](https://www.jetbrains.com/idea/download/) itself.

### 2. Install plugins

Basically the most important plugins were installed by default. So nothing to do here.

### 3. Enable/Configure plugins

It is possible to configure plugins globally for every project or for each project locally. But remember when using local configurations that you have to do the following steps each time you are opening a new project.

* Open "File" > "Other Settings" > "Default Settings..." **Or** "Menu" > "Preferences..." (local)

> **All these plugins (e.g. `flow`, `eslint`, ...) should be automatically be detected and configured through IntelliJ when installed.**

In some cases you have to manually select the binary or enable them through the intelliJ help tooltips.

#### 3.1 JavaScript version

* Open "Languages & Frameworks" > "JavaScript"
* Change "JavaScript language version" to either "ECMAScript2016" | "React JSX" | **"flow" (recommend)**

The JavaScript versions are inheriting.

#### 3.2 Enable flow

* Open "Languages & Frameworks" > "JavaScript"
* Check and/or select the "Flow executable". (`{project_path}/node_modules/.bin/flow`)

#### 3.3 Enable eslint

* Open "Languages & Frameworks" > "JavaScript" > "Code Quality Tools"
* Check and/or select the "Node interpreter". (e.g. `~/.nvm/versions/node/v8.9.1/bin/node`)
* Check and/or select the "ESLint package". (`{project_path}/node_modules/eslint`)
