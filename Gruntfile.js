'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        timeNow: "date '%X'",
        shell: {
            multiple: {
                command: [
                    'git add . && git commit -m "new_mods_<%= timeNow %>" && git push origin master',
                    'npm run build',
                    'cd ./build',
                    'ftp -n <<EOF open 192.168.1.134 2121 user ksweb ksweb rm * EOF',
                    'ftp -n <<EOF open 192.168.1.134 2121 user ksweb ksweb mput * ls EOF',
                    'cd ..',
                ].join('&&')
            }
        }
    });
     
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('build', function(){
        console.log("Running build on temninal");


    });
    grunt.registerTask('copy_tablet', function(){
        console.log("Copiando en la Tablet");
    });
    grunt.registerTask('delete_tablet', function(){
        console.log("Borrando en la Tablet");
        grunt.file.delete( "./build" );
    });
};
