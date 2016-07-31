# Brendan Fortuner Personal Blog

Bootstrapped with awesome https://github.com/mgechev/angular2-seed project

# Setup

```bash
# setup node virtual environment
pip install nodeenv
nodeenv blog_env (run this one directory above repo)
blog_env/bin/activate
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
npm run docs

# dev build
npm run build.dev
# prod build
npm run build.prod
```

## Using the experimental hot loader support

If you want to try the experimental [hot loading](http://blog.mgechev.com/2015/10/26/angular2-hot-loader-hot-loading-tooling/) support use:

```
npm start -- --hot-loader true
```

Note that the hot loader is still in experimental phase of development and there are some missing features. If you experience any issues with it report them at [here](https://github.com/mgechev/angular2-hot-loader/issues).

_Does not rely on any global dependencies._

# Table of Content

- [Introduction](#introduction)
- [How to start](#how-to-start)
  * [Using the experimental hot loader support](#using-the-experimental-hot-loader-support)
- [Table of Content](#table-of-content)
- [Directory Structure](#directory-structure)
- [Configuration](#configuration)
- [How to extend?](#how-to-extend-)
  * [Adding custom libraries](#adding-custom-libraries)
  * [Adding custom gulp task](#adding-custom-gulp-task)
- [Running test](#running-test)
- [Contributing](#contributing)
- [Examples](#examples)
- [Contributors](#contributors)
- [Change Log](#change-log)
- [License](#license)

# Directory Structure

```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── app
│   ├── about
│   │   └── components
│   │       ├── about.e2e.ts
│   │       ├── about.html
│   │       ├── about.ts
│   │       └── about_spec.ts
│   ├── app
│   │   └── components
│   │       ├── app.css
│   │       ├── app.e2e.ts
│   │       ├── app.html
│   │       ├── app.ts
│   │       └── app_spec.ts
│   ├── assets
│   │   ├── img
│   │   │   └── smile.png
│   │   └── main.css
│   ├── home
│   │   └── components
│   │       ├── home.css
│   │       ├── home.html
│   │       ├── home.ts
│   │       └── home_spec.ts
│   ├── shared
│   │   └── services
│   │       ├── name_list.ts
│   │       └── name_list_spec.ts
│   ├── hot_loader_main.ts
│   ├── main.ts
│   └── index.html
├── dist
├── test
├── tools
│   ├── tasks
│   ├── typings
│   ├── utils
│   │   ├── code_change_tools.ts
│   │   ├── server.ts
│   │   ├── tasks_tools.ts
│   │   ├── template_injectables.ts
│   │   └── template_locals.ts
│   ├── config.ts
│   └── utils.ts
├── appveyor.yml
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── test-main.js
├── tsconfig.json
├── tsd.json
└── tslint.json
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# How to extend?

## Adding custom libraries

If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.ts
```
Add reference to the installed library in `NPM_DEPENDENCIES`:

```ts
export const NPM_DEPENDENCIES = [
  { src: 'systemjs/dist/system-polyfills.js', dest: LIB_DEST },


  { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true, dest: CSS_DEST }
  // ...
  { src: 'my-library/dist/bundle.js', inject: true, dest: LIB_DEST }
];

```
- `src` - relative to `node_modules`
- `inject` - indicates whether the library should be injected (if not you have to include it manually in `index.html`)
- `dest` - your library will be copied to this location. Used for the production build.

**Do not forget to add a reference to the type definition inside the files where you use your custom library.**

## Adding custom gulp task

In this example we are going to add SASS support to the seed's dev build:

1. Install `gulp-sass` as dependency:

  ```bash
  npm install gulp-sass --save-dev
  ```

2. Add type definitions:

  ```bash
  # Note: tsd MUST be installed as global
  tsd install gulp-sass --save
  ```

3. Add SASS task at `./tools/tasks/build.sass.dev.ts`:

  ```ts
  import {join} from 'path';
  import {APP_SRC, APP_DEST} from '../config';

  export = function buildSassDev(gulp, plugins, option) {
    return function () {
      return gulp.src(join(APP_SRC, '**', '*.scss'))
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(gulp.dest(APP_DEST));
    };
  }
  ```

4. Add `build.sass.dev` to your dev pipeline:

  ```ts
  // gulpfile.ts
  ...
  // --------------
  // Build dev.
  gulp.task('build.dev', done =>
    runSequence('clean.dist',
        'tslint',
        'build.sass.dev',
        'build.assets.dev',
        'build.js.dev',
        'build.index',
        done));
  ...

  ```

# Running test

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window

# e2e (aka. end-to-end, integration) - In three different shell windows
npm start
# npm run webdriver-update <- You may need to run this the first time
npm run webdriver-start
npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e-live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)
