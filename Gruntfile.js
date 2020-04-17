'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            multiple: {
                command: [
                    ' ./commit.sh',
                    'npm run build',
                    ' ./delete.sh ',
                    ' ./copy.sh '
                ].join('&&')
            }
        }
    });
    grunt.loadNpmTasks('grunt-shell');
};
