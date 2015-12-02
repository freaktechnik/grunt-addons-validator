/*
 * grunt-addons-validator
 * https://github.com/freaktechnik/grunt-addons-validator
 *
 * Copyright (c) 2015 Martin Giger
 * Licensed under the MPL-2.0 license.
 */

'use strict';

var addonValidator = require("addons-validator");
var async = require("async");

module.exports = function(grunt) {
    grunt.registerMultiTask('validate_addon', 'Check an extension for validity', function() {
        var done = this.async(), count = 0;
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({});

        // Iterate over all specified file groups.
        async.each(this.filesSrc, function(filepath, callback) {
            if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Source file "' + filepath + '" not found.');
                callback("A file was not found");
            }
            else {
                count++;
                // Read file source.
                var validator = addonValidator.createInstance({
                  _: [filepath]
                }).run().then(function() {
                    if(validator.output['error'].length > 0) {
                        callback("Validation failed");
                    }
                    else {
                        callback();
                    }
                });
            }
        }, function(error) {
            if(error) {
                done(false);
            }
            else {
                grunt.log.ok("All "+count+" add-ons have been validated");
                done(true);
            }
        });
    });
};
