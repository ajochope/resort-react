'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        timeNow: (new Date(Date.now())).toLocaleTimeString(),
        shell: {
            multiple: {
                command: [
                    'git add . && git commit -m "new_mods_<%= timeNow %>" && git push origin master',
                    'npm run build',
                    ' ./delete.sh ',
                    ' ./copy.sh '
                ].join('&&')
            }
        }
    });
    grunt.loadNpmTasks('grunt-shell');
};
