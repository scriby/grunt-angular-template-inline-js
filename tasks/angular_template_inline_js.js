/*
 * grunt-angular-template-inline-js
 * https://github.com/scriby/grunt-angular-template-inline-js
 *
 * Copyright (c) 2014 scriby
 * Licensed under the MIT license.
 */
'use strict';

var path = require('path');
var compiler = require('angular-template-inline-js');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('angular_template_inline_js', 'A grunt task runner for angular-template-inline-js', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      key: 'templateUrl'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return { path: filepath, contents: grunt.file.read(filepath) };
      }).forEach(function(fileInfo) {
        var compiled = compiler.compile(fileInfo.contents, {
          basePath: options.basePath || path.dirname(fileInfo.path),
          key: options.key
        });

        grunt.file.write(f.dest, compiled);

        if(compiled !== fileInfo.contents) {
          grunt.log.writeln('File "' + f.dest + '" written.');
        }
      });
    });
  });

};
