# grunt-angular-template-inline-js

> A grunt task runner for angular-template-inline-js

This grunt plugin may be used to inline angular templates which will simplify testing and reduce HTTP requests. This
plugin will replace occurrences of `templateUrl: 'file.html'` in javascript code with `template: 'file.html contents'`.

This allows directives and other angular code to have the HTML definition cleanly split out during development, while
also enjoying the convenience of having the template inlined during tests and when running in production.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install angular-template-inline-js --save-dev
npm install grunt-angular-template-inline-js --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-template-inline-js');
```

## The "angular_template_inline_js" task

### Overview
In your project's Gruntfile, add a section named `angular_template_inline_js` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  angular_template_inline_js: {
    options: {
      // Task-specific options go here.
      basePath: '',
      key: ''
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.basePath
Type: `String`

The base path to use when searching for templates. If not specified, uses the current file's directory.

#### options.key
Type: `String`
Default value: `templateUrl`

The "key" to replace within the javascript code. In most cases, the default is fine, but you can change the key
if you only want to inline certain templates.

### Usage Examples

#### Default Options

This example will replace all occurrences of `templateUrl: 'filePath.html'` with `template: 'contents of template'` within the app folder,
and write the result to the build folder.

```js
grunt.initConfig({
  angular_template_inline_js: {
    options: {
      basePath: __dirname + '/app'
    },
    files: [{
      cwd: 'app',
      expand: true,
      src: [ '/app/**/*.js' ],
      dest: 'build'
    }],
  },
});
```

#### Custom Options

This example sets a custom key, which will replace all occurrences of `inlineTemplate: 'filePath.html'` with `template: 'contents of template`.

```js
grunt.initConfig({
  angular_template_inline_js: {
    options: {
      basePath: __dirname + '/app',
      key: 'inlineTemplate'
    },
    files: [{
      cwd: 'app',
      expand: true,
      src: [ '/app/**/*.js' ],
      dest: 'build'
    }],
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

0.1.0: Initial release