"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  require("load-grunt-config")(grunt);
  grunt.loadTasks("tasks");

};

grunt.initConfig({
    angular_architecture_graph: {
            diagram: {
                files: {
                    "PATH/TO/OUTPUT/FILES": [
                        "/Users/lynnlangit/Documents/git/timey/*.js"
                        ],
                    "architecture": [
                        "<%= projectConfig.app %>/<%= projectConfig.project %>/**/*.js"
                    ]
                }
            }
        }
});

grunt.loadNpmTasks('grunt-angular-architecture-graph');

