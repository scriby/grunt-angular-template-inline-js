'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var SIMPLE_RESULT = "{ template: \'<!--template path: ./simple.html-->\nsimple contents\n<!--end template-->\' }";

exports.angular_template_inline_js = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  simple: function(test) {
    test.expect(1);

    test.equal(grunt.file.read(__dirname + '/../tmp/fixtures/simple.js'), SIMPLE_RESULT);

    test.done();
  },
  multi_file: function(test) {
    test.expect(2);

    test.equal(grunt.file.read(__dirname + '/../tmp/fixtures/simple-2.js'), SIMPLE_RESULT);
    test.equal(grunt.file.read(__dirname + '/../tmp/fixtures/simple-3.js'), SIMPLE_RESULT);

    test.done();
  },
  key: function(test) {
    test.expect(1);

    test.equal(grunt.file.read(__dirname + '/../tmp/fixtures/key.js'), SIMPLE_RESULT);

    test.done();
  }
};
