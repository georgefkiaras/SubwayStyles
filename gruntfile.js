module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
           development: {
               options: {
                   compress: true,
                   yuicompress: true,
                   optimization: 2
               },
               files: {
                   "css/Subway.css": "css/Subway.less" // target : src
               }
           }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ["less"]);
};
