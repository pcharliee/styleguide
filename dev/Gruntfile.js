var path = require('path');
var configFilePath = path.resolve('../', 'grunt_config.js');
var config = require(configFilePath);

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig(config);
  
  grunt.registerTask('compile:js', [
    'concat:js',
    'exec:babelSrc',
    'exec:webpack',
    'uglify'
  ]);

  grunt.registerTask('compile:css', [
    'concat:css',
    'cssmin'
  ]);

  grunt.registerTask('default', [ 'compile:js', 'compile:css' ]);
}
