'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        timeNow: (new Date()).getTime(),
        shell: {
            multiple: {
                command: [
                    'git add . && git commit -m "new_mods_<%= timeNow %>" && git push origin master',
                    'npm run build',
                    'cd ./build',
                    'ftp -n <<EOF open 192.168.1.134 2121 user ksweb ksweb mdelete * EOF',
                    'ftp -n <<EOF open 192.168.1.134 2121 user ksweb ksweb mput * ls EOF',
                    'cd ..',
                ].join('&&')
            }
        }
    });
    grunt.loadNpmTasks('grunt-shell');
};
